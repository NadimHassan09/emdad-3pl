import { useState, useEffect, useMemo } from 'react';
import { Navigate, NavLink, Outlet, Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import './App.css';
import {
  LayoutDashboard,
  Users,
  Warehouse,
  FileCheck,
  Package,
  Menu,
  X,
  ChevronDown,
  ClipboardList,
  Shield,
  Edit,
  Power,
  MoreHorizontal,
  Database,
  Plus,
  Trash2,
  QrCode,
  ChevronRight,
  PackageSearch,
  ExternalLink,
  CheckCircle2,
  Circle,
  XCircle,
  Clock,
  AlertCircle,
  MapPin,
  Eye,
  Boxes,
  FileText,
  TrendingUp,
  TrendingDown,
  FileEdit,
  CheckCircle,
  XCircle as XCircleIcon,
  Eye as EyeIcon,
  Play,
  FileBarChart,
  Download,
  FileDown,
  DollarSign,
  Euro,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { apiFetch } from '@/lib/api';
import { CsvButton } from '@/components/CsvButton';
import { LocationBarcodeDialog } from '@/components/LocationBarcodeDialog';
import { fetchOverview, type OverviewResponse } from '@/lib/dashboard';
import {
  fetchTaskWorkOrders,
  createTaskWorkOrder,
  assignTaskWorkOrder,
  startTaskWorkOrder,
  completeTaskWorkOrder,
  TASK_TYPE_LABELS,
  TASK_STATUS_LABELS,
  TASK_PRIORITY_LABELS,
} from '@/lib/task-work-orders';
import {
  fetchClients,
  fetchProducts,
  fetchWarehouses as fetchWarehousesMasterData,
  fetchLocationsTree,
  fetchLocationsFlat,
  fetchUomList,
  createClient,
  onboardClient,
  updateClient,
  createProduct,
  updateProduct,
  createWarehouse,
  updateWarehouse,
  createLocation,
  updateLocation,
  deleteLocation,
  generateLocationCode,
  createUom,
  updateUom,
  deleteUom,
  fetchClientAccounts,
  createClientAccount,
  updateClientAccount,
  setClientAccountActive,
  fetchClientRoleCatalog,
  fetchClientRolesWithPermissions as fetchClientRolesWithPermissionsMasterData,
  createClientRole as createClientRoleMasterData,
  UOM_DIMENSIONS,
  UOM_DIMENSION_LABELS,
  LOCATION_TYPES,
  LOCATION_TYPE_LABELS,
  type UomDimension,
  type UomApi,
  type LocationTypeValue,
  type LocationFlatApi,
  type ClientUi,
  type ProductUi,
  type WarehouseUi,
  type LocationUi,
  type ClientAccountApi,
  type ClientRoleCatalogPanel,
  type ClientRoleInfo,
} from '@/lib/master-data';
import {
  fetchUsers,
  fetchUserRoles,
  fetchWarehouses,
  updateUser,
  createRole,
  PERMISSION_OPTIONS,
  type UserRoleInfo,
  type WarehouseResponse,
} from '@/lib/identity-access';
import {
  fetchInboundOrders,
  fetchInboundOrder,
  createInboundOrder,
  addInboundOrderItem,
  updateInboundOrder,
  receiveInboundOrderItem,
  INBOUND_STATUS_TO_API,
  type InboundOrderUi,
} from '@/lib/inbound-orders';
import {
  fetchOutboundOrders,
  fetchOutboundOrder,
  createOutboundOrder,
  addOutboundOrderItem,
  updateOutboundOrder,
  OUTBOUND_STATUS_TO_API,
  type OutboundOrderUi,
} from '@/lib/outbound-orders';
import { LoginPage } from '@/components/LoginPage';
import { ApprovalDetailsView } from '@/components/approvals/ApprovalDetailsView';
import {
  approvalTypeLabel,
  mapApiApproval,
  type Approval,
  type ApprovalFilterType,
} from '@/components/approvals/approval-model';
import { isAuthenticated, logout, getCurrentUser } from '@/lib/auth';
import type { UserInfo } from '@/lib/auth';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
} from 'recharts';

// Sales statistics data
export const salesData = [
  { month: 'أغسطس', sales: 45000, orders: 120 },
  { month: 'سبتمبر', sales: 52000, orders: 145 },
  { month: 'أكتوبر', sales: 48000, orders: 132 },
  { month: 'نوفمبر', sales: 61000, orders: 168 },
  { month: 'ديسمبر', sales: 55000, orders: 152 },
  { month: 'يناير', sales: 67000, orders: 185 },
];

// Inventory statistics data
export const inventoryData = [
  { month: 'أغسطس', total: 8500, used: 5200, available: 3300 },
  { month: 'سبتمبر', total: 9200, used: 5800, available: 3400 },
  { month: 'أكتوبر', total: 8800, used: 5400, available: 3400 },
  { month: 'نوفمبر', total: 10500, used: 6800, available: 3700 },
  { month: 'ديسمبر', total: 9800, used: 6200, available: 3600 },
  { month: 'يناير', total: 11200, used: 7500, available: 3700 },
];

// Activity log data
export const activityLogData = [
  {
    timestamp: '2026-02-02 10:15',
    user: 'ahmed.mohamed@example.com',
    action: 'إنشاء',
    resourceType: 'طلب وارد',
    resourceId: 'INB-00041'
  },
  {
    timestamp: '2026-02-02 09:40',
    user: 'mohamed.ali@example.com',
    action: 'تعديل',
    resourceType: 'تعديل',
    resourceId: 'ADJ-00009'
  },
  {
    timestamp: '2026-02-02 08:30',
    user: 'fatima.ahmed@example.com',
    action: 'إنشاء',
    resourceType: 'مهمة',
    resourceId: 'TASK-00123'
  },
  {
    timestamp: '2026-02-01 16:45',
    user: 'khalid.saeed@example.com',
    action: 'تحديث',
    resourceType: 'طلب وارد',
    resourceId: 'INB-00040'
  },
  {
    timestamp: '2026-02-01 14:20',
    user: 'sara.hassan@example.com',
    action: 'إنشاء',
    resourceType: 'تعديل',
    resourceId: 'ADJ-00008'
  },
];

// Work Management: task type for UI (display + backend filter)
type Task = {
  id: string;
  taskType: string;
  taskTypeRaw: string;
  reference: string;
  clientName: string;
  warehouse: string;
  status: string;
  statusRaw: string;
  assignedAt: string;
  priority: string;
  notes?: string;
};

// Warehouses data (now loaded dynamically from backend where needed)
const warehouses: { id: string; name: string }[] = [];

// Roles data
export const roles = [
  'مدير النظام',
  'مدير المخزون',
  'مدير المبيعات',
  'محاسب',
  'موظف',
  'مشرف',
];

// Clients data (now loaded dynamically from backend where needed)
const clients: { id: string; name: string }[] = [];

// Account data type (identity-access; roleId for API updates)
type Account = {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  role: string;
  roleId: string | null;
  warehouse: string;
  warehouseId: string | null;
  client: string;
  status: 'نشط' | 'غير نشط';
  password?: string;
};

// Note: initialAccountsData has been replaced by live data fetched from /users.

// Sidebar navigation items and route paths (each admin page has a URL)
type AdminPage =
  | 'overview'
  | 'work-management'
  | 'identity-access'
  | 'master-data'
  | 'orders'
  | 'inventory'
  | 'inventory-ledger'
  | 'adjustments'
  | 'approvals-center';

const PAGE_TO_PATH: Record<string, string> = {
  overview: '/overview',
  'work-management': '/work-management',
  'identity-access': '/identity-access',
  'master-data': '/master-data',
  orders: '/orders',
  inventory: '/inventory',
  adjustments: '/adjustments',
  'approvals-center': '/approvals',
};

const sidebarItems = [
  { icon: LayoutDashboard, label: 'نظرة عامة', page: 'overview' },
  { icon: ClipboardList, label: 'إدارة العمل', page: 'work-management' },
  { icon: Shield, label: 'الهوية والوصول', page: 'identity-access' },
  { icon: Database, label: 'البيانات الأساسية', page: 'master-data' },
  { icon: PackageSearch, label: 'الطلبات', page: 'orders' },
  { icon: Boxes, label: 'المخزون', page: 'inventory' },
  { icon: FileEdit, label: 'التعديلات', page: 'adjustments' },
  { icon: FileCheck, label: 'مركز الموافقات', page: 'approvals-center' },
];

function WorkManagementPage() {
  const [taskType, setTaskType] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [dueFrom, setDueFrom] = useState('');
  const [dueTo, setDueTo] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [taskNotes, setTaskNotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchTaskWorkOrders({
          ...(taskType && { taskType }),
          ...(status && { status }),
          ...(dueFrom && { dueFrom }),
          ...(dueTo && { dueTo }),
        });
        if (!active) return;
        const mapped: Task[] = data.map((t) => ({
          id: t.id,
          taskTypeRaw: t.taskType || '',
          taskType: TASK_TYPE_LABELS[t.taskType as string] || t.taskType || 'مهمة',
          reference: t.id,
          clientName: t.client?.name || '',
          warehouse: t.warehouse?.name || '',
          statusRaw: t.status || '',
          status: TASK_STATUS_LABELS[t.status as string] || t.status || 'جديد',
          assignedAt: t.createdAt
            ? new Date(t.createdAt).toLocaleString('ar-SA')
            : '',
          priority: TASK_PRIORITY_LABELS[t.priority as string] || t.priority || 'متوسط',
          notes: '',
        }));
        setTasks(mapped);
      } catch (e) {
        console.error('Failed to load task work orders', e);
        if (active) {
          setError('تعذر تحميل مهام العمل. يرجى المحاولة مرة أخرى.');
        }
      } finally {
        if (active) setLoading(false);
      }
    }
    void load();
    return () => {
      active = false;
    };
  }, [taskType, status, dueFrom, dueTo]);

  const filteredTasks = tasks;

  const handleRowClick = (task: Task) => {
    setSelectedTask(task);
    setTaskNotes(task.notes || '');
    setIsDialogOpen(true);
  };

  const handleSaveNotes = () => {
    if (selectedTask) {
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTask.id ? { ...task, notes: taskNotes } : task
      );
      setTasks(updatedTasks);
      setSelectedTask({ ...selectedTask, notes: taskNotes });
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedTask(null);
    setTaskNotes('');
  };

  const getStatusBadgeVariant = (status: string) => {
    if (status === 'مكتمل') return 'default';
    if (status === 'قيد التنفيذ') return 'secondary';
    return 'outline';
  };

  const getPriorityBadgeVariant = (priority: string) => {
    if (priority === 'عاجل') return 'destructive';
    if (priority === 'عالي') return 'default';
    return 'secondary';
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          {error}
        </div>
      )}
      {/* Filters Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">الفلاتر</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Task Type - values are API enums for server-side filter */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                نوع المهمة
              </label>
              <Select value={taskType || 'all'} onValueChange={(v) => setTaskType(v === 'all' ? '' : v)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="اختر نوع المهمة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  {Object.entries(TASK_TYPE_LABELS).map(([value, label]) => (
                    <SelectItem key={value} value={value}>{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Status - values are API enums for server-side filter */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                الحالة
              </label>
              <Select value={status || 'all'} onValueChange={(v) => setStatus(v === 'all' ? '' : v)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="اختر الحالة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="PENDING">{TASK_STATUS_LABELS.PENDING}</SelectItem>
                  <SelectItem value="ASSIGNED">{TASK_STATUS_LABELS.ASSIGNED}</SelectItem>
                  <SelectItem value="IN_PROGRESS">{TASK_STATUS_LABELS.IN_PROGRESS}</SelectItem>
                  <SelectItem value="COMPLETED">{TASK_STATUS_LABELS.COMPLETED}</SelectItem>
                  <SelectItem value="CANCELLED">{TASK_STATUS_LABELS.CANCELLED}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Due From */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                الاستحقاق من
              </label>
              <Input
                type="date"
                value={dueFrom}
                onChange={(e) => setDueFrom(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Due To */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                الاستحقاق إلى
              </label>
              <Input
                type="date"
                value={dueTo}
                onChange={(e) => setDueTo(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tasks Table */}
      <Card>
        <CardContent className="p-0">
          {filteredTasks.length > 0 && (
            <div className="p-4 border-b flex justify-end">
              <CsvButton
                columns={[
                  { key: 'taskType', label: 'نوع المهمة' },
                  { key: 'reference', label: 'المرجع' },
                  { key: 'clientName', label: 'اسم العميل' },
                  { key: 'warehouse', label: 'المستودع' },
                  { key: 'status', label: 'الحالة' },
                  { key: 'assignedAt', label: 'تم التعيين في' },
                  { key: 'priority', label: 'الأولوية' },
                ]}
                data={filteredTasks}
                getRow={(t) => [t.taskType, t.reference, t.clientName, t.warehouse, t.status, t.assignedAt, t.priority]}
                filename="tasks"
                disabled={loading}
              />
            </div>
          )}
          {loading ? (
            <div className="py-8 text-center text-sm text-gray-500">
              جارِ تحميل مهام العمل...
            </div>
          ) : filteredTasks.length === 0 ? (
            <div className="py-8 text-center text-sm text-gray-500">
              لا توجد مهام مطابقة للفلاتر الحالية.
            </div>
          ) : (
          <Table className="data-table">
            <TableHeader>
              <TableRow>
                <TableHead className="text-right font-semibold">نوع المهمة</TableHead>
                <TableHead className="text-right font-semibold">المرجع</TableHead>
                <TableHead className="text-right font-semibold">اسم العميل</TableHead>
                <TableHead className="text-right font-semibold">المستودع</TableHead>
                <TableHead className="text-right font-semibold">الحالة</TableHead>
                <TableHead className="text-right font-semibold">تم التعيين في</TableHead>
                <TableHead className="text-right font-semibold">الأولوية</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTasks.map((task) => (
                <TableRow
                  key={task.id}
                  onClick={() => handleRowClick(task)}
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="text-right">{task.taskType}</TableCell>
                  <TableCell className="text-right font-mono text-sm">{task.reference}</TableCell>
                  <TableCell className="text-right">{task.clientName}</TableCell>
                  <TableCell className="text-right">{task.warehouse}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant={getStatusBadgeVariant(task.status)}>
                      {task.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono text-sm">{task.assignedAt}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant={getPriorityBadgeVariant(task.priority)}>
                      {task.priority}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          )}
        </CardContent>
      </Card>

      {/* Task Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">تفاصيل المهمة</DialogTitle>
            <DialogDescription>
              عرض وتعديل تفاصيل المهمة والملاحظات
            </DialogDescription>
          </DialogHeader>

          {selectedTask && (
            <div className="space-y-6 py-4">
              {/* Task Details */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">نوع المهمة</label>
                  <p className="text-base font-semibold text-gray-900 mt-1">
                    {selectedTask.taskType}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">المرجع</label>
                  <p className="text-base font-mono text-gray-900 mt-1">
                    {selectedTask.reference}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">اسم العميل</label>
                  <p className="text-base text-gray-900 mt-1">
                    {selectedTask.clientName}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">المستودع</label>
                  <p className="text-base text-gray-900 mt-1">
                    {selectedTask.warehouse}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">الحالة</label>
                  <div className="mt-1">
                    <Badge variant={getStatusBadgeVariant(selectedTask.status)}>
                      {selectedTask.status}
                    </Badge>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">الأولوية</label>
                  <div className="mt-1">
                    <Badge variant={getPriorityBadgeVariant(selectedTask.priority)}>
                      {selectedTask.priority}
                    </Badge>
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="text-sm font-medium text-gray-500">تم التعيين في</label>
                  <p className="text-base font-mono text-gray-900 mt-1">
                    {selectedTask.assignedAt}
                  </p>
                </div>
              </div>

              {/* Notes Section */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  الملاحظات
                </label>
                <Textarea
                  value={taskNotes}
                  onChange={(e) => setTaskNotes(e.target.value)}
                  placeholder="أضف ملاحظات حول هذه المهمة..."
                  className="min-h-32"
                  rows={6}
                />
                {selectedTask.notes && (
                  <p className="text-xs text-gray-500 mt-1">
                    آخر تحديث: {new Date().toLocaleDateString('ar-SA')}
                  </p>
                )}
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={handleCloseDialog}
            >
              إلغاء
            </Button>
            <Button
              onClick={() => {
                handleSaveNotes();
                handleCloseDialog();
              }}
            >
              حفظ الملاحظات
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function IdentityAndAccessPage() {
  const [roleFilter, setRoleFilter] = useState('');
  const [warehouseFilter, setWarehouseFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [roles, setRoles] = useState<UserRoleInfo[]>([]);
  const [warehouses, setWarehouses] = useState<WarehouseResponse[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [isEditUserDialogOpen, setIsEditUserDialogOpen] = useState(false);
  const [editFormData, setEditFormData] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    roleId?: string | null;
    warehouseId?: string | null;
    isActive?: boolean;
    password?: string;
  }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [isAddRoleDialogOpen, setIsAddRoleDialogOpen] = useState(false);
  const [addRoleName, setAddRoleName] = useState('');
  const [addRolePermissions, setAddRolePermissions] = useState<string[]>([]);
  const [addRoleSaving, setAddRoleSaving] = useState(false);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const [usersData, rolesData, warehousesData] = await Promise.all([
          fetchUsers(),
          fetchUserRoles(),
          fetchWarehouses(),
        ]);
        if (!active) return;
        setRoles(rolesData);
        setWarehouses(warehousesData);
        const mapped: Account[] = usersData.map((u) => ({
          id: u.id,
          firstName: u.firstName || '',
          lastName: u.lastName || '',
          name: `${u.firstName || ''} ${u.lastName || ''}`.trim() || '-',
          email: u.email,
          role: u.internalRole?.roleName || 'موظف',
          roleId: u.internalRole?.id ?? null,
          warehouse: u.warehouse?.name ?? '-',
          warehouseId: u.warehouse?.id ?? null,
          client: '-',
          status: u.isActive ? 'نشط' : 'غير نشط',
        }));
        setAccounts(mapped);
      } catch (e) {
        console.error('Failed to load identity-access data', e);
        if (active) {
          setError('تعذر تحميل المستخدمين. يرجى المحاولة مرة أخرى.');
        }
      } finally {
        if (active) setLoading(false);
      }
    }
    void load();
    return () => {
      active = false;
    };
  }, []);

  const filteredAccounts = accounts.filter((account) => {
    if (roleFilter && roleFilter !== 'all' && account.role !== roleFilter) return false;
    if (warehouseFilter && warehouseFilter !== 'all' && account.warehouse !== warehouseFilter) return false;
    if (statusFilter && statusFilter !== 'all' && account.status !== statusFilter) return false;
    return true;
  });

  const handleEditUserFromRow = (account: Account, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedAccount(account);
    setEditFormData({
      firstName: account.firstName,
      lastName: account.lastName,
      email: account.email,
      roleId: account.roleId ?? '',
      warehouseId: account.warehouseId ?? '',
      isActive: account.status === 'نشط',
      password: '',
    });
    setIsEditUserDialogOpen(true);
  };

  const handleSaveEdit = async () => {
    if (!selectedAccount) return;
    try {
      setSaving(true);
      const payload: Parameters<typeof updateUser>[1] = {
        firstName: editFormData.firstName?.trim(),
        lastName: editFormData.lastName?.trim(),
        email: editFormData.email?.trim(),
        internalRoleId: (editFormData.roleId && editFormData.roleId.trim()) ? editFormData.roleId : null,
        warehouseId: (editFormData.warehouseId && editFormData.warehouseId.trim()) ? editFormData.warehouseId : null,
        isActive: editFormData.isActive,
      };
      if (editFormData.password && editFormData.password.length > 0) {
        payload.password = editFormData.password;
      }
      await updateUser(selectedAccount.id, payload);
      const updatedAccounts = accounts.map((account) =>
        account.id === selectedAccount.id
          ? {
              ...account,
              firstName: editFormData.firstName || account.firstName,
              lastName: editFormData.lastName || account.lastName,
              name: `${editFormData.firstName || ''} ${editFormData.lastName || ''}`.trim() || account.name,
              email: editFormData.email || account.email,
              role: roles.find((r) => r.id === editFormData.roleId)?.roleName || account.role,
              roleId: (editFormData.roleId && editFormData.roleId.trim()) ? editFormData.roleId : null,
              warehouse: warehouses.find((w) => w.id === editFormData.warehouseId)?.name ?? account.warehouse,
              warehouseId: (editFormData.warehouseId && editFormData.warehouseId.trim()) ? editFormData.warehouseId : null,
              status: (editFormData.isActive ? 'نشط' : 'غير نشط') as 'نشط' | 'غير نشط',
            } as Account
          : account
      );
      setAccounts(updatedAccounts);
      setIsEditUserDialogOpen(false);
      setSelectedAccount(null);
      setEditFormData({});
    } catch (e) {
      console.error('Failed to update user', e);
      setError(e instanceof Error ? e.message : 'تعذر حفظ التعديلات.');
    } finally {
      setSaving(false);
    }
  };

  const handleToggleStatus = async (account: Account) => {
    const newActive = account.status !== 'نشط';
    try {
      await updateUser(account.id, { isActive: newActive });
      setAccounts((prev) =>
        prev.map((a) =>
          a.id === account.id
            ? { ...a, status: (newActive ? 'نشط' : 'غير نشط') as 'نشط' | 'غير نشط' }
            : a
        )
      );
    } catch (e) {
      console.error('Failed to toggle user status', e);
      setError(e instanceof Error ? e.message : 'تعذر تغيير الحالة.');
    }
  };

  const openAddRoleDialog = () => {
    setAddRoleName('');
    setAddRolePermissions([]);
    setError(null);
    setIsAddRoleDialogOpen(true);
  };

  const toggleAddRolePermission = (value: string) => {
    setAddRolePermissions((prev) =>
      prev.includes(value) ? prev.filter((p) => p !== value) : [...prev, value]
    );
  };

  const handleAddRoleSubmit = async () => {
    const name = addRoleName.trim();
    if (!name) {
      setError('اسم الدور مطلوب');
      return;
    }
    try {
      setAddRoleSaving(true);
      setError(null);
      await createRole({ roleName: name, permissions: addRolePermissions });
      const rolesData = await fetchUserRoles();
      setRoles(rolesData);
      setIsAddRoleDialogOpen(false);
      setAddRoleName('');
      setAddRolePermissions([]);
    } catch (e) {
      console.error('Failed to create role', e);
      setError(e instanceof Error ? e.message : 'تعذر إنشاء الدور.');
    } finally {
      setAddRoleSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          {error}
        </div>
      )}
      {/* Roles: Add button */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-lg font-semibold">الأدوار والصلاحيات</CardTitle>
          <Button type="button" onClick={openAddRoleDialog}>
            <Plus className="w-4 h-4 ml-2" />
            إضافة دور وصلاحياته
          </Button>
        </CardHeader>
      </Card>
      {/* Filters Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">الفلاتر</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Role Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                الدور
              </label>
              <Select value={roleFilter || 'all'} onValueChange={(value) => setRoleFilter(value === 'all' ? '' : value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="اختر الدور" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  {roles.map((r) => (
                    <SelectItem key={r.id} value={r.roleName}>
                      {r.roleName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Warehouse Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                المستودع
              </label>
              <Select value={warehouseFilter || 'all'} onValueChange={(value) => setWarehouseFilter(value === 'all' ? '' : value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="اختر المستودع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  {warehouses.map((wh) => (
                    <SelectItem key={wh.id} value={wh.name}>
                      {wh.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                الحالة
              </label>
              <Select value={statusFilter || 'all'} onValueChange={(value) => setStatusFilter(value === 'all' ? '' : value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="اختر الحالة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="نشط">نشط</SelectItem>
                  <SelectItem value="غير نشط">غير نشط</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accounts Table */}
      <Card>
        <CardContent className="p-0">
          {filteredAccounts.length > 0 && (
            <div className="p-4 border-b flex justify-end">
              <CsvButton
                columns={[
                  { key: 'name', label: 'الاسم' },
                  { key: 'email', label: 'البريد الإلكتروني' },
                  { key: 'role', label: 'الدور' },
                  { key: 'warehouse', label: 'المستودع' },
                  { key: 'status', label: 'الحالة' },
                ]}
                data={filteredAccounts}
                getRow={(a) => [a.name, a.email, a.role, a.warehouse, a.status]}
                filename="accounts"
                disabled={loading}
              />
            </div>
          )}
          {loading ? (
            <div className="py-8 text-center text-sm text-gray-500">
              جارِ تحميل المستخدمين...
            </div>
          ) : filteredAccounts.length === 0 ? (
            <div className="py-8 text-center text-sm text-gray-500">
              لا توجد حسابات مطابقة للفلاتر الحالية.
            </div>
          ) : (
          <Table className="data-table">
            <TableHeader>
              <TableRow>
                <TableHead className="text-right font-semibold">الاسم</TableHead>
                <TableHead className="text-right font-semibold">البريد الإلكتروني</TableHead>
                <TableHead className="text-right font-semibold">الدور</TableHead>
                <TableHead className="text-right font-semibold">المستودع</TableHead>
                <TableHead className="text-right font-semibold">الحالة</TableHead>
                <TableHead className="text-right font-semibold w-[100px]">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAccounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell className="text-right">{account.name}</TableCell>
                  <TableCell className="text-right">{account.email}</TableCell>
                  <TableCell className="text-right">{account.role}</TableCell>
                  <TableCell className="text-right">{account.warehouse}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={account.status === 'نشط' ? 'default' : 'secondary'}
                    >
                      {account.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="h-8"
                      onClick={(e) => handleEditUserFromRow(account, e)}
                    >
                      <Edit className="w-4 h-4 ml-1" />
                      تعديل
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          )}
        </CardContent>
      </Card>

      {/* Edit User Dialog - only when Edit button is clicked */}
      <Dialog
        open={isEditUserDialogOpen}
        onOpenChange={(open) => {
          setIsEditUserDialogOpen(open);
          if (!open) {
            setSelectedAccount(null);
            setEditFormData({});
          }
        }}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedAccount && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">تعديل الحساب</DialogTitle>
                <DialogDescription>
                  تعديل معلومات الحساب والأدوار
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">الاسم الأول</label>
                  <Input
                    value={editFormData.firstName ?? ''}
                    onChange={(e) => setEditFormData({ ...editFormData, firstName: e.target.value })}
                    placeholder="الاسم الأول"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">اسم العائلة</label>
                  <Input
                    value={editFormData.lastName ?? ''}
                    onChange={(e) => setEditFormData({ ...editFormData, lastName: e.target.value })}
                    placeholder="اسم العائلة"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                  <Input
                    type="email"
                    value={editFormData.email ?? ''}
                    onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                    placeholder="أدخل البريد الإلكتروني"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">الدور</label>
                  <select
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    value={editFormData.roleId ?? ''}
                    onChange={(e) => setEditFormData({ ...editFormData, roleId: e.target.value || null })}
                  >
                    <option value="">بدون دور</option>
                    {roles.map((r) => (
                      <option key={r.id} value={r.id}>{r.roleName}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">المستودع</label>
                  <select
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    value={editFormData.warehouseId ?? ''}
                    onChange={(e) => setEditFormData({ ...editFormData, warehouseId: e.target.value || null })}
                  >
                    <option value="">بدون مستودع</option>
                    {warehouses.map((wh) => (
                      <option key={wh.id} value={wh.id}>{wh.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="edit-account-active"
                    checked={editFormData.isActive !== false}
                    onChange={(e) => setEditFormData({ ...editFormData, isActive: e.target.checked })}
                    className="rounded border-gray-300"
                  />
                  <label htmlFor="edit-account-active" className="text-sm font-medium text-gray-700">
                    الحساب نشط
                  </label>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">كلمة المرور</label>
                  <Input
                    type="password"
                    value={editFormData.password ?? ''}
                    onChange={(e) => setEditFormData({ ...editFormData, password: e.target.value })}
                    placeholder="اتركه فارغاً إذا لم تريد تغييره"
                  />
                  <p className="text-xs text-gray-500">اتركه فارغاً إذا لم تريد تغيير كلمة المرور</p>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsEditUserDialogOpen(false)}>
                  إلغاء
                </Button>
                <Button type="button" onClick={handleSaveEdit} disabled={saving}>
                  {saving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Add Role & Permissions Dialog */}
      <Dialog open={isAddRoleDialogOpen} onOpenChange={setIsAddRoleDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">إضافة دور وصلاحياته</DialogTitle>
            <DialogDescription>
              أدخل اسم الدور واختر الصلاحيات المناسبة له
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">اسم الدور</label>
              <Input
                value={addRoleName}
                onChange={(e) => setAddRoleName(e.target.value)}
                placeholder="مثال: مدير المستودع"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">الصلاحيات</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto rounded border p-3 bg-gray-50">
                {PERMISSION_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-2 cursor-pointer text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={addRolePermissions.includes(opt.value)}
                      onChange={() => toggleAddRolePermission(opt.value)}
                      className="rounded border-gray-300"
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsAddRoleDialogOpen(false)}
            >
              إلغاء
            </Button>
            <Button onClick={handleAddRoleSubmit} disabled={addRoleSaving}>
              {addRoleSaving ? 'جاري الحفظ...' : 'إضافة الدور'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Master Data Types
type MasterDataType = 'clients' | 'products' | 'warehouses' | 'locations' | 'uom';

type UOMConversion = {
  id: string;
  alternateUOM: string;
  conversionFactor: number;
  active: boolean;
};

function MasterDataPage() {
  const [activeDataType, setActiveDataType] = useState<MasterDataType>('clients');

  // Clients state
  const [clients, setClients] = useState<ClientUi[]>([]);
  const [clientsLoading, setClientsLoading] = useState(false);
  const [clientStatusFilter, setClientStatusFilter] = useState('');
  const [clientCodeFilter, setClientCodeFilter] = useState('');
  const [clientNameFilter, setClientNameFilter] = useState('');
  const [isCreateClientOpen, setIsCreateClientOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<ClientUi | null>(null);
  const [isEditClientOpen, setIsEditClientOpen] = useState(false);
  const [clientFormData, setClientFormData] = useState<Partial<ClientUi> & { address?: string; password?: string }>({});
  const [clientAccountsOpen, setClientAccountsOpen] = useState(false);
  const [clientAccountsClient, setClientAccountsClient] = useState<ClientUi | null>(null);
  const [clientAccounts, setClientAccounts] = useState<ClientAccountApi[]>([]);
  const [clientAccountsLoading, setClientAccountsLoading] = useState(false);
  const [clientRoles, setClientRoles] = useState<ClientRoleInfo[]>([]);
  const [clientRoleCatalog, setClientRoleCatalog] = useState<ClientRoleCatalogPanel[]>([]);
  const [clientRolesDialogOpen, setClientRolesDialogOpen] = useState(false);
  const [clientRoleNameInput, setClientRoleNameInput] = useState('');
  const [clientRolePermissionsInput, setClientRolePermissionsInput] = useState<string[]>([]);
  const [accountFormOpen, setAccountFormOpen] = useState(false);
  const [editingAccountId, setEditingAccountId] = useState<string | null>(null);
  const [accountFormData, setAccountFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    clientRoleId: '',
  });
  const [addAccountsAfterCreate, setAddAccountsAfterCreate] = useState(false);
  const [newClientAccounts, setNewClientAccounts] = useState<
    Array<{ firstName: string; lastName: string; email: string; clientRoleId: string }>
  >([]);

  // Products state
  const [products, setProducts] = useState<ProductUi[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productClientFilter, setProductClientFilter] = useState('');
  const [productStatusFilter, setProductStatusFilter] = useState('');
  const [isCreateProductOpen, setIsCreateProductOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductUi | null>(null);
  const [isEditProductOpen, setIsEditProductOpen] = useState(false);
  const [productFormData, setProductFormData] = useState<Partial<ProductUi> & { barcode?: string; baseUOM?: string; weight?: number; volume?: number; handlingRequirements?: string; expiryTracking?: boolean; rotationPolicy?: 'FIFO' | 'FEFO' }>({});
  const [uomConversions, setUomConversions] = useState<UOMConversion[]>([]);
  const [uomList, setUomList] = useState<{ id: string; code: string; name: string }[]>([]);

  // UOM management state
  const [uoms, setUoms] = useState<UomApi[]>([]);
  const [uomsLoading, setUomsLoading] = useState(false);
  const [uomSearchFilter, setUomSearchFilter] = useState('');
  const [uomDimensionFilter, setUomDimensionFilter] = useState('');
  const [isCreateUomOpen, setIsCreateUomOpen] = useState(false);
  const [isEditUomOpen, setIsEditUomOpen] = useState(false);
  const [selectedUom, setSelectedUom] = useState<UomApi | null>(null);
  const [isDeleteUomOpen, setIsDeleteUomOpen] = useState(false);
  const [deleteUomTarget, setDeleteUomTarget] = useState<UomApi | null>(null);
  const [deleteUomSubmitting, setDeleteUomSubmitting] = useState(false);
  const [uomFormData, setUomFormData] = useState<{
    code: string;
    name: string;
    dimension: UomDimension;
    baseConversion: string;
    isActive: boolean;
  }>({ code: '', name: '', dimension: 'COUNT', baseConversion: '1', isActive: true });
  const [uomFormError, setUomFormError] = useState<string | null>(null);
  const [uomFormSubmitting, setUomFormSubmitting] = useState(false);

  // Warehouses state
  const [warehouses, setWarehouses] = useState<WarehouseUi[]>([]);
  const [warehousesLoading, setWarehousesLoading] = useState(false);
  const [warehouseNameFilter, setWarehouseNameFilter] = useState('');
  const [isCreateWarehouseOpen, setIsCreateWarehouseOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState<WarehouseUi | null>(null);
  const [isEditWarehouseOpen, setIsEditWarehouseOpen] = useState(false);
  const [warehouseFormData, setWarehouseFormData] = useState<Partial<WarehouseUi>>({});

  // Locations state (tree – kept for renderLocationTree helper used elsewhere)
  const [locationTree, setLocationTree] = useState<LocationUi[]>([]);
  const [locationsLoading, setLocationsLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationUi | null>(null);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  // Locations CRUD state (flat list)
  const [locationsFlat, setLocationsFlat] = useState<LocationFlatApi[]>([]);
  const [locationsFlatLoading, setLocationsFlatLoading] = useState(false);
  const [locationWarehouseFilter, setLocationWarehouseFilter] = useState('');
  const [locationTypeFilter, setLocationTypeFilter] = useState('');
  const [locationSearchFilter, setLocationSearchFilter] = useState('');
  const [isCreateLocationOpen, setIsCreateLocationOpen] = useState(false);
  const [isEditLocationOpen, setIsEditLocationOpen] = useState(false);
  const [isDeleteLocationOpen, setIsDeleteLocationOpen] = useState(false);
  const [selectedLocationForEdit, setSelectedLocationForEdit] = useState<LocationFlatApi | null>(null);
  const [deleteLocationTarget, setDeleteLocationTarget] = useState<LocationFlatApi | null>(null);
  const [deleteLocationSubmitting, setDeleteLocationSubmitting] = useState(false);
  const [locationFormData, setLocationFormData] = useState<{
    warehouseId: string;
    locationType: LocationTypeValue;
    parentLocationId: string;
    isActive: boolean;
  }>({ warehouseId: '', locationType: 'ZONE', parentLocationId: '', isActive: true });
  const [locationFormError, setLocationFormError] = useState<string | null>(null);
  const [locationFormSubmitting, setLocationFormSubmitting] = useState(false);
  const [barcodeLoc, setBarcodeLoc] = useState<LocationFlatApi | null>(null);

  // Fetch master data when tab or relevant filters change
  useEffect(() => {
    if (activeDataType === 'clients') {
      setClientsLoading(true);
      Promise.all([fetchClients(), fetchClientRolesWithPermissionsMasterData(), fetchClientRoleCatalog()])
        .then(([clientList, roleList, roleCatalog]) => {
          setClients(clientList);
          setClientRoles(roleList);
          setClientRoleCatalog(roleCatalog);
        })
        .catch(() => setClients([]))
        .finally(() => setClientsLoading(false));
    }
  }, [activeDataType]);

  useEffect(() => {
    if (activeDataType === 'products') {
      setProductsLoading(true);
      Promise.all([fetchProducts(), fetchClients(), fetchUomList()])
        .then(([prods, clts, uom]) => {
          setProducts(prods);
          setClients(clts);
          setUomList(uom.map((u) => ({ id: u.id, code: u.code, name: u.name })));
        })
        .catch(() => setProducts([]))
        .finally(() => setProductsLoading(false));
    }
  }, [activeDataType]);

  useEffect(() => {
    if (activeDataType === 'warehouses') {
      setWarehousesLoading(true);
      fetchWarehousesMasterData()
        .then(setWarehouses)
        .catch(() => setWarehouses([]))
        .finally(() => setWarehousesLoading(false));
    }
  }, [activeDataType]);

  useEffect(() => {
    if (activeDataType === 'locations') {
      setLocationsLoading(true);
      fetchLocationsTree()
        .then((tree) => {
          setLocationTree(tree);
          setExpandedNodes((prev) => (prev.size ? prev : new Set(tree.length ? [tree[0].id] : [])));
        })
        .catch(() => setLocationTree([]))
        .finally(() => setLocationsLoading(false));
      // Also load flat list and warehouses for CRUD
      setLocationsFlatLoading(true);
      fetchLocationsFlat()
        .then(setLocationsFlat)
        .catch(() => setLocationsFlat([]))
        .finally(() => setLocationsFlatLoading(false));
      fetchWarehousesMasterData()
        .then(setWarehouses)
        .catch(() => {});
    }
  }, [activeDataType]);

  const reloadLocations = () => {
    setLocationsFlatLoading(true);
    fetchLocationsFlat()
      .then(setLocationsFlat)
      .catch(() => setLocationsFlat([]))
      .finally(() => setLocationsFlatLoading(false));
  };

  useEffect(() => {
    if (activeDataType === 'uom') {
      setUomsLoading(true);
      fetchUomList()
        .then(setUoms)
        .catch(() => setUoms([]))
        .finally(() => setUomsLoading(false));
    }
  }, [activeDataType]);

  const reloadUoms = () => {
    setUomsLoading(true);
    fetchUomList()
      .then(setUoms)
      .catch(() => setUoms([]))
      .finally(() => setUomsLoading(false));
  };

  // Filter functions
  const filteredClients = clients.filter((client) => {
    if (clientStatusFilter && clientStatusFilter !== 'all' && client.status !== clientStatusFilter) return false;
    if (clientCodeFilter && !client.code.toLowerCase().includes(clientCodeFilter.toLowerCase())) return false;
    if (clientNameFilter && !client.name.toLowerCase().includes(clientNameFilter.toLowerCase())) return false;
    return true;
  });

  const filteredProducts = products.filter((product) => {
    if (productClientFilter && productClientFilter !== 'all' && product.clientId !== productClientFilter) return false;
    if (productStatusFilter && productStatusFilter !== 'all' && product.status !== productStatusFilter) return false;
    return true;
  });

  const filteredWarehouses = warehouses.filter((warehouse) => {
    if (warehouseNameFilter && !warehouse.name.toLowerCase().includes(warehouseNameFilter.toLowerCase())) return false;
    return true;
  });

  const filteredLocations = locationsFlat.filter((l) => {
    if (locationWarehouseFilter && l.warehouseId !== locationWarehouseFilter) return false;
    if (locationTypeFilter && l.locationType !== locationTypeFilter) return false;
    const q = locationSearchFilter.toLowerCase();
    if (q && !l.code.toLowerCase().includes(q) && !l.warehouseName.toLowerCase().includes(q)) return false;
    return true;
  });

  const filteredUoms = uoms.filter((u) => {
    if (uomDimensionFilter && uomDimensionFilter !== 'all' && u.dimension !== uomDimensionFilter) return false;
    const q = uomSearchFilter.toLowerCase();
    if (q && !u.code.toLowerCase().includes(q) && !u.name.toLowerCase().includes(q)) return false;
    return true;
  });


  const toggleNode = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const parseRolePermissions = (permissionsJson?: { permissions?: string[] } | string[]) => {
    if (Array.isArray(permissionsJson)) return permissionsJson;
    if (permissionsJson && Array.isArray(permissionsJson.permissions)) return permissionsJson.permissions;
    return [];
  };

  const addDraftClientAccount = () => {
    setNewClientAccounts((prev) => [
      ...prev,
      { firstName: '', lastName: '', email: '', clientRoleId: clientRoles[0]?.id ?? '' },
    ]);
  };

  const renderLocationTree = (nodes: (LocationUi & { children?: LocationUi[] })[], level = 0) => {
    return (
      <div className="space-y-1">
        {nodes.map((node) => {
          const children = node.children ?? [];
          return (
            <div key={node.id}>
              <div
                className={`flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer ${
                  selectedLocation?.id === node.id ? 'bg-blue-50' : ''
                }`}
                style={{ paddingRight: `${level * 1.5}rem` }}
                onClick={() => setSelectedLocation(node)}
              >
                {children.length > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleNode(node.id);
                    }}
                    className="p-1"
                  >
                    {expandedNodes.has(node.id) ? (
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                )}
                <span className="text-sm">{node.name} ({node.code})</span>
              </div>
              {children.length > 0 && expandedNodes.has(node.id) && (
                <div className="mr-4">
                  {renderLocationTree(children, level + 1)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Data Type Buttons */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeDataType === 'clients' ? 'default' : 'outline'}
              onClick={() => setActiveDataType('clients')}
              size="sm"
            >
              العملاء
            </Button>
            <Button
              variant={activeDataType === 'products' ? 'default' : 'outline'}
              onClick={() => setActiveDataType('products')}
              size="sm"
            >
              المنتجات
            </Button>
            <Button
              variant={activeDataType === 'warehouses' ? 'default' : 'outline'}
              onClick={() => setActiveDataType('warehouses')}
              size="sm"
            >
              المخازن
            </Button>
            <Button
              variant={activeDataType === 'locations' ? 'default' : 'outline'}
              onClick={() => setActiveDataType('locations')}
              size="sm"
            >
              المواقع
            </Button>
            <Button
              variant={activeDataType === 'uom' ? 'default' : 'outline'}
              onClick={() => setActiveDataType('uom')}
              size="sm"
            >
              وحدة القياس
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Clients Section */}
      {activeDataType === 'clients' && (
        <>
          {/* Filters */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>الفلاتر</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" onClick={() => setClientRolesDialogOpen(true)}>
                    إدارة أدوار العملاء
                  </Button>
                  <Button onClick={() => setIsCreateClientOpen(true)}>
                    <Plus className="w-4 h-4 ml-2" />
                    إنشاء عميل
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">الحالة</label>
                  <Select value={clientStatusFilter || 'all'} onValueChange={(v) => setClientStatusFilter(v === 'all' ? '' : v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الحالة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">الكل</SelectItem>
                      <SelectItem value="نشط">نشط</SelectItem>
                      <SelectItem value="غير نشط">غير نشط</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">رمز العميل</label>
                  <Input
                    value={clientCodeFilter}
                    onChange={(e) => setClientCodeFilter(e.target.value)}
                    placeholder="ابحث برمز العميل"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">اسم العميل</label>
                  <Input
                    value={clientNameFilter}
                    onChange={(e) => setClientNameFilter(e.target.value)}
                    placeholder="ابحث باسم العميل"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Clients Table */}
          <Card>
            <CardContent className="p-0">
              {clientsLoading ? (
                <div className="p-8 text-center text-gray-500">جاري التحميل...</div>
              ) : (
              <>
              {filteredClients.length > 0 && (
                <div className="p-4 border-b flex justify-end">
                  <CsvButton
                    columns={[
                      { key: 'name', label: 'اسم العميل' },
                      { key: 'code', label: 'رمز العميل' },
                      { key: 'contactEmail', label: 'البريد الإلكتروني' },
                      { key: 'contactPhone', label: 'الهاتف' },
                      { key: 'status', label: 'الحالة' },
                      { key: 'createdAt', label: 'تاريخ الإنشاء' },
                    ]}
                    data={filteredClients}
                    getRow={(c) => [c.name, c.code, c.contactEmail, c.contactPhone, c.status, c.createdAt]}
                    filename="clients"
                  />
                </div>
              )}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">اسم العميل</TableHead>
                    <TableHead className="text-right">رمز العميل</TableHead>
                    <TableHead className="text-right">البريد الإلكتروني</TableHead>
                    <TableHead className="text-right">الهاتف</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">تاريخ الإنشاء</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredClients.map((client) => (
                    <TableRow
                      key={client.id}
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => {
                        setClientAccountsClient(client);
                        setClientAccountsOpen(true);
                        setClientAccounts([]);
                        setClientAccountsLoading(true);
                        fetchClientAccounts(client.id)
                          .then(setClientAccounts)
                          .catch(() => setClientAccounts([]))
                          .finally(() => setClientAccountsLoading(false));
                      }}
                    >
                      <TableCell>{client.name}</TableCell>
                      <TableCell className="font-mono">{client.code}</TableCell>
                      <TableCell>{client.contactEmail}</TableCell>
                      <TableCell>{client.contactPhone}</TableCell>
                      <TableCell>
                        <Badge variant={client.status === 'نشط' ? 'default' : 'secondary'}>
                          {client.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{client.createdAt}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={(e) => {
                                e.stopPropagation();
                                setClientAccountsClient(client);
                                setClientAccountsOpen(true);
                                setClientAccounts([]);
                                setClientAccountsLoading(true);
                                fetchClientAccounts(client.id)
                                  .then(setClientAccounts)
                                  .catch(() => setClientAccounts([]))
                                  .finally(() => setClientAccountsLoading(false));
                              }}
                            >
                              <Users className="w-4 h-4 ml-2" />
                              الحسابات
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedClient(client);
                                setClientFormData(client);
                                setIsEditClientOpen(true);
                              }}
                            >
                              <Edit className="w-4 h-4 ml-2" />
                              تعديل
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              </>
              )}
            </CardContent>
          </Card>

          {/* Create/Edit Client Dialog */}
          <Dialog open={isCreateClientOpen || isEditClientOpen} onOpenChange={(open) => {
            if (!open) {
              setIsCreateClientOpen(false);
              setIsEditClientOpen(false);
              setSelectedClient(null);
              setClientFormData({});
              setAddAccountsAfterCreate(false);
              setNewClientAccounts([]);
            }
          }}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{isCreateClientOpen ? 'إنشاء عميل جديد' : 'تعديل العميل'}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">اسم العميل</label>
                    <Input
                      value={clientFormData.name || ''}
                      onChange={(e) => setClientFormData({ ...clientFormData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">رمز العميل</label>
                    <Input
                      value={clientFormData.code || ''}
                      onChange={(e) => setClientFormData({ ...clientFormData, code: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">البريد الإلكتروني</label>
                    <Input
                      type="email"
                      value={clientFormData.contactEmail || ''}
                      onChange={(e) => setClientFormData({ ...clientFormData, contactEmail: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">الهاتف</label>
                    <Input
                      value={clientFormData.contactPhone || ''}
                      onChange={(e) => setClientFormData({ ...clientFormData, contactPhone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <label className="text-sm font-medium">العنوان</label>
                    <Textarea
                      value={clientFormData.address || ''}
                      onChange={(e) => setClientFormData({ ...clientFormData, address: e.target.value })}
                    />
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Checkbox
                      checked={clientFormData.status === 'نشط'}
                      onCheckedChange={(checked) =>
                        setClientFormData({ ...clientFormData, status: checked ? 'نشط' : 'غير نشط' })
                      }
                    />
                    <label className="text-sm font-medium">نشط</label>
                  </div>
                  {isCreateClientOpen && (
                    <div className="col-span-2 border rounded-lg p-3 space-y-3">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          checked={addAccountsAfterCreate}
                          onCheckedChange={(checked) =>
                            setAddAccountsAfterCreate(Boolean(checked))
                          }
                        />
                        <label className="text-sm font-medium">
                          إضافة حسابات مباشرة بعد إنشاء الشركة
                        </label>
                      </div>
                      {addAccountsAfterCreate && (
                        <div className="space-y-3">
                          {newClientAccounts.map((acc, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-2">
                              <Input
                                placeholder="الاسم الأول"
                                value={acc.firstName}
                                onChange={(e) =>
                                  setNewClientAccounts((prev) =>
                                    prev.map((row, i) =>
                                      i === index ? { ...row, firstName: e.target.value } : row,
                                    ),
                                  )
                                }
                              />
                              <Input
                                placeholder="الاسم الأخير"
                                value={acc.lastName}
                                onChange={(e) =>
                                  setNewClientAccounts((prev) =>
                                    prev.map((row, i) =>
                                      i === index ? { ...row, lastName: e.target.value } : row,
                                    ),
                                  )
                                }
                              />
                              <Input
                                placeholder="البريد الإلكتروني"
                                type="email"
                                value={acc.email}
                                onChange={(e) =>
                                  setNewClientAccounts((prev) =>
                                    prev.map((row, i) =>
                                      i === index ? { ...row, email: e.target.value } : row,
                                    ),
                                  )
                                }
                              />
                              <Select
                                value={acc.clientRoleId || undefined}
                                onValueChange={(v) =>
                                  setNewClientAccounts((prev) =>
                                    prev.map((row, i) =>
                                      i === index ? { ...row, clientRoleId: v } : row,
                                    ),
                                  )
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="الدور" />
                                </SelectTrigger>
                                <SelectContent>
                                  {clientRoles.map((role) => (
                                    <SelectItem key={role.id} value={role.id}>
                                      {role.roleName}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          ))}
                          <Button type="button" variant="outline" onClick={addDraftClientAccount}>
                            <Plus className="w-4 h-4 ml-2" />
                            إضافة حساب
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => {
                  setIsCreateClientOpen(false);
                  setIsEditClientOpen(false);
                  setSelectedClient(null);
                  setClientFormData({});
                  setAddAccountsAfterCreate(false);
                  setNewClientAccounts([]);
                }}>
                  إلغاء
                </Button>
                <Button onClick={async () => {
                  try {
                    if (isCreateClientOpen) {
                      if (addAccountsAfterCreate && newClientAccounts.length > 0) {
                        const onboarded = await onboardClient({
                          code: clientFormData.code!,
                          name: clientFormData.name!,
                          contactEmail: clientFormData.contactEmail,
                          contactPhone: clientFormData.contactPhone,
                          addressLine1: clientFormData.address,
                          status: clientFormData.status,
                          isActive: clientFormData.status === 'نشط',
                          accounts: newClientAccounts.filter(
                            (acc) =>
                              acc.firstName.trim() &&
                              acc.lastName.trim() &&
                              acc.email.trim() &&
                              acc.clientRoleId,
                          ),
                        });
                        if (onboarded.accounts.length > 0) {
                          const credentials = onboarded.accounts
                            .map(
                              (acc) =>
                                `${acc.firstName} ${acc.lastName} (${acc.email}) -> ${acc.temporaryPassword}`,
                            )
                            .join('\n');
                          window.alert(`تم إنشاء الحسابات المؤقتة:\n${credentials}`);
                        }
                      } else {
                        await createClient({
                          code: clientFormData.code!,
                          name: clientFormData.name!,
                          contactEmail: clientFormData.contactEmail,
                          contactPhone: clientFormData.contactPhone,
                          addressLine1: clientFormData.address,
                          status: clientFormData.status,
                          isActive: clientFormData.status === 'نشط',
                        });
                      }
                    } else if (selectedClient) {
                      await updateClient(selectedClient.id, {
                        code: clientFormData.code,
                        name: clientFormData.name,
                        contactEmail: clientFormData.contactEmail,
                        contactPhone: clientFormData.contactPhone,
                        addressLine1: clientFormData.address,
                        status: clientFormData.status,
                        isActive: clientFormData.status === 'نشط',
                      });
                    }
                    const list = await fetchClients();
                    setClients(list);
                    setIsCreateClientOpen(false);
                    setIsEditClientOpen(false);
                    setSelectedClient(null);
                    setClientFormData({});
                    setAddAccountsAfterCreate(false);
                    setNewClientAccounts([]);
                  } catch {
                    // leave dialog open on error
                  }
                }}>
                  حفظ
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Client Accounts Dialog */}
          <Dialog open={clientAccountsOpen} onOpenChange={(open) => {
            if (!open) {
              setClientAccountsOpen(false);
              setClientAccountsClient(null);
              setClientAccounts([]);
              setAccountFormOpen(false);
              setEditingAccountId(null);
            }
          }}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  حسابات العميل: {clientAccountsClient?.name}
                  {clientAccountsClient && (
                    <span className="mr-2 text-sm font-normal text-gray-500 font-mono">({clientAccountsClient.code})</span>
                  )}
                </DialogTitle>
                <DialogDescription>
                  قائمة بجميع الحسابات المرتبطة بهذا العميل وأدوارهم
                </DialogDescription>
                <div className="flex items-center justify-between pt-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEditingAccountId(null);
                      setAccountFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        clientRoleId: clientRoles[0]?.id ?? '',
                      });
                      setAccountFormOpen(true);
                    }}
                  >
                    <Plus className="w-4 h-4 ml-2" />
                    إضافة حساب
                  </Button>
                </div>
              </DialogHeader>
              {accountFormOpen && (
                <div className="border rounded-lg p-3 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input
                      placeholder="الاسم الأول"
                      value={accountFormData.firstName}
                      onChange={(e) =>
                        setAccountFormData((prev) => ({ ...prev, firstName: e.target.value }))
                      }
                    />
                    <Input
                      placeholder="الاسم الأخير"
                      value={accountFormData.lastName}
                      onChange={(e) =>
                        setAccountFormData((prev) => ({ ...prev, lastName: e.target.value }))
                      }
                    />
                    <Input
                      placeholder="البريد الإلكتروني"
                      type="email"
                      value={accountFormData.email}
                      onChange={(e) =>
                        setAccountFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                    />
                    <Select
                      value={accountFormData.clientRoleId || undefined}
                      onValueChange={(v) =>
                        setAccountFormData((prev) => ({ ...prev, clientRoleId: v }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="الدور" />
                      </SelectTrigger>
                      <SelectContent>
                        {clientRoles.map((role) => (
                          <SelectItem key={role.id} value={role.id}>
                            {role.roleName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      onClick={async () => {
                        if (!clientAccountsClient) return;
                        if (editingAccountId) {
                          await updateClientAccount(clientAccountsClient.id, editingAccountId, {
                            firstName: accountFormData.firstName,
                            lastName: accountFormData.lastName,
                            email: accountFormData.email,
                            clientRoleId: accountFormData.clientRoleId,
                          });
                        } else {
                          const created = await createClientAccount(clientAccountsClient.id, {
                            firstName: accountFormData.firstName,
                            lastName: accountFormData.lastName,
                            email: accountFormData.email,
                            clientRoleId: accountFormData.clientRoleId,
                          });
                          window.alert(
                            `تم إنشاء الحساب. كلمة المرور المؤقتة: ${created.temporaryPassword}`,
                          );
                        }
                        setAccountFormOpen(false);
                        setEditingAccountId(null);
                        setClientAccountsLoading(true);
                        fetchClientAccounts(clientAccountsClient.id)
                          .then(setClientAccounts)
                          .catch(() => setClientAccounts([]))
                          .finally(() => setClientAccountsLoading(false));
                      }}
                    >
                      حفظ الحساب
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setAccountFormOpen(false);
                        setEditingAccountId(null);
                      }}
                    >
                      إلغاء
                    </Button>
                  </div>
                </div>
              )}
              {clientAccountsLoading ? (
                <div className="py-10 text-center text-gray-500">جاري التحميل...</div>
              ) : clientAccounts.length === 0 ? (
                <div className="py-10 text-center text-gray-500">لا توجد حسابات لهذا العميل</div>
              ) : (
                <>
                  <div className="flex justify-end mb-2">
                    <CsvButton
                      columns={[
                        { key: 'firstName', label: 'الاسم الأول' },
                        { key: 'lastName', label: 'الاسم الأخير' },
                        { key: 'email', label: 'البريد الإلكتروني' },
                        { key: 'roleName', label: 'الدور' },
                        { key: 'isActive', label: 'الحالة' },
                        { key: 'createdAt', label: 'تاريخ الإنشاء' },
                      ]}
                      data={clientAccounts}
                      getRow={(a) => [
                        a.firstName,
                        a.lastName,
                        a.email,
                        a.roleName,
                        a.isActive ? 'نشط' : 'غير نشط',
                        new Date(a.createdAt).toISOString().split('T')[0],
                      ]}
                      filename={`حسابات-${clientAccountsClient?.code ?? 'client'}`}
                    />
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-right">الاسم</TableHead>
                        <TableHead className="text-right">البريد الإلكتروني</TableHead>
                        <TableHead className="text-right">الدور</TableHead>
                        <TableHead className="text-right">الحالة</TableHead>
                        <TableHead className="text-right">تاريخ الإنشاء</TableHead>
                        <TableHead className="text-right">إجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {clientAccounts.map((acc) => (
                        <TableRow key={acc.id}>
                          <TableCell>{acc.firstName} {acc.lastName}</TableCell>
                          <TableCell>{acc.email}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{acc.roleName}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={acc.isActive ? 'default' : 'secondary'}>
                              {acc.isActive ? 'نشط' : 'غير نشط'}
                            </Badge>
                          </TableCell>
                          <TableCell>{new Date(acc.createdAt).toISOString().split('T')[0]}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setEditingAccountId(acc.id);
                                  setAccountFormData({
                                    firstName: acc.firstName,
                                    lastName: acc.lastName,
                                    email: acc.email,
                                    clientRoleId: acc.clientRoleId,
                                  });
                                  setAccountFormOpen(true);
                                }}
                              >
                                تعديل
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={async () => {
                                  if (!clientAccountsClient) return;
                                  await setClientAccountActive(
                                    clientAccountsClient.id,
                                    acc.id,
                                    !acc.isActive,
                                  );
                                  setClientAccountsLoading(true);
                                  fetchClientAccounts(clientAccountsClient.id)
                                    .then(setClientAccounts)
                                    .catch(() => setClientAccounts([]))
                                    .finally(() => setClientAccountsLoading(false));
                                }}
                              >
                                {acc.isActive ? 'تعطيل' : 'تفعيل'}
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              )}
            </DialogContent>
          </Dialog>

          <Dialog open={clientRolesDialogOpen} onOpenChange={setClientRolesDialogOpen}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>إدارة أدوار العميل</DialogTitle>
                <DialogDescription>
                  إنشاء أدوار تعتمد على كتالوج ثابت للواجهات والميزات
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="border rounded-lg p-3 space-y-3">
                  <Input
                    placeholder="اسم الدور"
                    value={clientRoleNameInput}
                    onChange={(e) => setClientRoleNameInput(e.target.value)}
                  />
                  <div className="space-y-2">
                    {clientRoleCatalog.map((panel) => (
                      <div key={panel.key} className="border rounded p-2">
                        <div className="text-sm font-semibold">{panel.label}</div>
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                          {panel.features.flatMap((feature) =>
                            feature.permissions.map((permission) => (
                              <label
                                key={`${feature.key}-${permission}`}
                                className="flex items-center gap-2 text-sm"
                              >
                                <Checkbox
                                  checked={clientRolePermissionsInput.includes(permission)}
                                  onCheckedChange={(checked) =>
                                    setClientRolePermissionsInput((prev) =>
                                      checked
                                        ? Array.from(new Set([...prev, permission]))
                                        : prev.filter((p) => p !== permission),
                                    )
                                  }
                                />
                                <span>{feature.label} - {permission}</span>
                              </label>
                            )),
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={async () => {
                      const role = await createClientRoleMasterData({
                        roleName: clientRoleNameInput,
                        permissions: clientRolePermissionsInput,
                      });
                      setClientRoles((prev) => [...prev, role]);
                      setClientRoleNameInput('');
                      setClientRolePermissionsInput([]);
                    }}
                  >
                    إضافة دور
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-right">الدور</TableHead>
                      <TableHead className="text-right">الصلاحيات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clientRoles.map((role) => (
                      <TableRow key={role.id}>
                        <TableCell>{role.roleName}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {parseRolePermissions(role.permissionsJson).map((permission) => (
                              <Badge key={permission} variant="outline">
                                {permission}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </DialogContent>
          </Dialog>
        </>
      )}

      {/* Products Section - Similar structure but simplified for now */}
      {activeDataType === 'products' && (
        <>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>الفلاتر</CardTitle>
                <Button onClick={() => setIsCreateProductOpen(true)}>
                  <Plus className="w-4 h-4 ml-2" />
                  إنشاء منتج
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">العميل</label>
                  <Select value={productClientFilter || 'all'} onValueChange={(v) => setProductClientFilter(v === 'all' ? '' : v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر العميل" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">الكل</SelectItem>
                      {clients.map((c) => (
                        <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">الحالة</label>
                  <Select value={productStatusFilter || 'all'} onValueChange={(v) => setProductStatusFilter(v === 'all' ? '' : v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الحالة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">الكل</SelectItem>
                      <SelectItem value="نشط">نشط</SelectItem>
                      <SelectItem value="غير نشط">غير نشط</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              {productsLoading ? (
                <div className="p-8 text-center text-gray-500">جاري التحميل...</div>
              ) : (
              <>
              {filteredProducts.length > 0 && (
                <div className="p-4 border-b flex justify-end">
                  <CsvButton
                    columns={[
                      { key: 'name', label: 'اسم المنتج' },
                      { key: 'sku', label: 'SKU' },
                      { key: 'clientName', label: 'اسم العميل' },
                      { key: 'status', label: 'الحالة' },
                    ]}
                    data={filteredProducts}
                    getRow={(p) => [p.name, p.sku, p.clientName, p.status]}
                    filename="products"
                  />
                </div>
              )}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">اسم المنتج</TableHead>
                    <TableHead className="text-right">SKU</TableHead>
                    <TableHead className="text-right">اسم العميل</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell className="font-mono">{product.sku}</TableCell>
                      <TableCell>{product.clientName}</TableCell>
                      <TableCell>
                        <Badge variant={product.status === 'نشط' ? 'default' : 'secondary'}>
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => {
                              setSelectedProduct(product);
                              setProductFormData(product);
                              setIsEditProductOpen(true);
                            }}>
                              <Edit className="w-4 h-4 ml-2" />
                              تعديل
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              variant="destructive"
                              onClick={async () => {
                                try {
                                  await updateProduct(product.id, { isActive: false });
                                  const list = await fetchProducts();
                                  setProducts(list);
                                } catch {
                                  // keep state on error
                                }
                              }}
                            >
                              <Trash2 className="w-4 h-4 ml-2" />
                              إلغاء التفعيل
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              </>
              )}
            </CardContent>
          </Card>

          {/* Create/Edit Product Dialog */}
          <Dialog open={isCreateProductOpen || isEditProductOpen} onOpenChange={(open) => {
            if (!open) {
              setIsCreateProductOpen(false);
              setIsEditProductOpen(false);
              setSelectedProduct(null);
              setProductFormData({});
              setUomConversions([]);
            }
          }}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{isCreateProductOpen ? 'إنشاء منتج جديد' : 'تعديل المنتج'}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">العميل</label>
                    <Select
                      value={productFormData.clientId || ''}
                      onValueChange={(v) => setProductFormData({ ...productFormData, clientId: v })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="اختر العميل" />
                      </SelectTrigger>
                      <SelectContent>
                        {clients.map((c) => (
                          <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">اسم المنتج</label>
                    <Input
                      value={productFormData.name || ''}
                      onChange={(e) => setProductFormData({ ...productFormData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">SKU</label>
                    <Input
                      value={productFormData.sku || ''}
                      onChange={(e) => setProductFormData({ ...productFormData, sku: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">وحدة القياس الأساسية</label>
                    <Select
                      value={productFormData.defaultUomId || ''}
                      onValueChange={(v) => setProductFormData({ ...productFormData, defaultUomId: v })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="اختر وحدة القياس" />
                      </SelectTrigger>
                      <SelectContent>
                        {uomList.map((u) => (
                          <SelectItem key={u.id} value={u.id}>{u.name} ({u.code})</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">الوزن</label>
                    <Input
                      type="number"
                      value={productFormData.weight || ''}
                      onChange={(e) => setProductFormData({ ...productFormData, weight: parseFloat(e.target.value) || undefined })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">الحجم</label>
                    <Input
                      type="number"
                      value={productFormData.volume || ''}
                      onChange={(e) => setProductFormData({ ...productFormData, volume: parseFloat(e.target.value) || undefined })}
                    />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <label className="text-sm font-medium">متطلبات المعالجة</label>
                    <Textarea
                      value={productFormData.handlingRequirements || ''}
                      onChange={(e) => setProductFormData({ ...productFormData, handlingRequirements: e.target.value })}
                    />
                  </div>
                </div>

                {/* UOM Conversions Table */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">وحدات القياس والتحويلات</label>
                    <div className="flex items-center gap-2">
                      <CsvButton
                        columns={[
                          { key: 'alternateUOM', label: 'وحدة القياس البديلة' },
                          { key: 'conversionFactor', label: 'عامل التحويل' },
                          { key: 'active', label: 'نشط' },
                        ]}
                        data={uomConversions}
                        getRow={(c) => [c.alternateUOM, c.conversionFactor, c.active ? 'نعم' : 'لا']}
                        filename="تحويلات-وحدات-القياس"
                      />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setUomConversions([...uomConversions, {
                          id: Date.now().toString(),
                          alternateUOM: '',
                          conversionFactor: 1,
                          active: true,
                        }]);
                      }}
                    >
                      <Plus className="w-4 h-4 ml-2" />
                      إضافة تحويل
                    </Button>
                    </div>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>وحدة القياس البديلة</TableHead>
                        <TableHead>عامل التحويل</TableHead>
                        <TableHead>نشط</TableHead>
                        <TableHead>الإجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {uomConversions.map((conv) => (
                        <TableRow key={conv.id}>
                          <TableCell>
                            <Input
                              value={conv.alternateUOM}
                              onChange={(e) => {
                                setUomConversions(uomConversions.map(c =>
                                  c.id === conv.id ? { ...c, alternateUOM: e.target.value } : c
                                ));
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              type="number"
                              value={conv.conversionFactor}
                              onChange={(e) => {
                                setUomConversions(uomConversions.map(c =>
                                  c.id === conv.id ? { ...c, conversionFactor: parseFloat(e.target.value) || 1 } : c
                                ));
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <Checkbox
                              checked={conv.active}
                              onCheckedChange={(checked) => {
                                setUomConversions(uomConversions.map(c =>
                                  c.id === conv.id ? { ...c, active: checked === true } : c
                                ));
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setUomConversions(uomConversions.filter(c => c.id !== conv.id))}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Expiry and Rotation */}
                <div className="space-y-4 border-t pt-4">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={productFormData.expiryTracking || false}
                      onCheckedChange={(checked) =>
                        setProductFormData({ ...productFormData, expiryTracking: checked === true })
                      }
                    />
                    <label className="text-sm font-medium">تتبع انتهاء الصلاحية</label>
                  </div>
                  {productFormData.expiryTracking && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium">سياسة التناوب</label>
                      <Select
                        value={productFormData.rotationPolicy || 'FIFO'}
                        onValueChange={(v) => setProductFormData({ ...productFormData, rotationPolicy: v as 'FIFO' | 'FEFO' })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="FIFO">FIFO - أول وارد أول صادر</SelectItem>
                          <SelectItem value="FEFO">FEFO - أول منتهي أول صادر</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => {
                  setIsCreateProductOpen(false);
                  setIsEditProductOpen(false);
                  setProductFormData({});
                  setUomConversions([]);
                }}>
                  إلغاء
                </Button>
                <Button onClick={async () => {
                  try {
                    if (isCreateProductOpen) {
                      if (!productFormData.clientId || !productFormData.sku || !productFormData.name || !productFormData.defaultUomId) return;
                      await createProduct({
                        clientId: productFormData.clientId,
                        sku: productFormData.sku,
                        name: productFormData.name,
                        defaultUomId: productFormData.defaultUomId,
                        isActive: productFormData.status !== 'غير نشط',
                      });
                    } else if (selectedProduct) {
                      await updateProduct(selectedProduct.id, {
                        sku: productFormData.sku,
                        name: productFormData.name,
                        defaultUomId: productFormData.defaultUomId,
                        isActive: productFormData.status === 'نشط',
                      });
                    }
                    const list = await fetchProducts();
                    setProducts(list);
                    setIsCreateProductOpen(false);
                    setIsEditProductOpen(false);
                    setSelectedProduct(null);
                    setProductFormData({});
                    setUomConversions([]);
                  } catch {
                    // leave dialog open on error
                  }
                }}>
                  حفظ
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      )}

      {/* Warehouses Section */}
      {activeDataType === 'warehouses' && (
        <>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>الفلاتر</CardTitle>
                <Button onClick={() => setIsCreateWarehouseOpen(true)}>
                  <Plus className="w-4 h-4 ml-2" />
                  إنشاء مستودع
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <label className="text-sm font-medium">اسم المستودع</label>
                <Input
                  value={warehouseNameFilter}
                  onChange={(e) => setWarehouseNameFilter(e.target.value)}
                  placeholder="ابحث باسم المستودع"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              {warehousesLoading ? (
                <div className="p-8 text-center text-gray-500">جاري التحميل...</div>
              ) : (
              <>
              {filteredWarehouses.length > 0 && (
                <div className="p-4 border-b flex justify-end">
                  <CsvButton
                    columns={[
                      { key: 'name', label: 'اسم المستودع' },
                      { key: 'code', label: 'رمز المستودع' },
                      { key: 'status', label: 'الحالة' },
                      { key: 'address', label: 'العنوان' },
                      { key: 'adjustmentApproverRequired', label: 'موافقة معدل مطلوبة' },
                    ]}
                    data={filteredWarehouses}
                    getRow={(w) => [w.name, w.code, w.status, w.address, w.adjustmentApproverRequired ? 'نعم' : 'لا']}
                    filename="warehouses"
                  />
                </div>
              )}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">اسم المستودع</TableHead>
                    <TableHead className="text-right">رمز المستودع</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">العنوان</TableHead>
                    <TableHead className="text-right">موافقة معدل مطلوبة</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredWarehouses.map((warehouse) => (
                    <TableRow key={warehouse.id}>
                      <TableCell>{warehouse.name}</TableCell>
                      <TableCell className="font-mono">{warehouse.code}</TableCell>
                      <TableCell>
                        <Badge variant={warehouse.status === 'نشط' ? 'default' : 'secondary'}>
                          {warehouse.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{warehouse.address}</TableCell>
                      <TableCell>{warehouse.adjustmentApproverRequired ? 'نعم' : 'لا'}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => {
                              setSelectedWarehouse(warehouse);
                              setWarehouseFormData(warehouse);
                              setIsEditWarehouseOpen(true);
                            }}>
                              <Edit className="w-4 h-4 ml-2" />
                              تعديل
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              </>
              )}
            </CardContent>
          </Card>

          {/* Create/Edit Warehouse Dialog */}
          <Dialog open={isCreateWarehouseOpen || isEditWarehouseOpen} onOpenChange={(open) => {
            if (!open) {
              setIsCreateWarehouseOpen(false);
              setIsEditWarehouseOpen(false);
              setSelectedWarehouse(null);
              setWarehouseFormData({});
            }
          }}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{isCreateWarehouseOpen ? 'إنشاء مستودع جديد' : 'تعديل المستودع'}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">اسم المستودع</label>
                    <Input
                      value={warehouseFormData.name || ''}
                      onChange={(e) => setWarehouseFormData({ ...warehouseFormData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">رمز المستودع</label>
                    <Input
                      value={warehouseFormData.code || ''}
                      onChange={(e) => setWarehouseFormData({ ...warehouseFormData, code: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <label className="text-sm font-medium">العنوان</label>
                    <Textarea
                      value={warehouseFormData.address || ''}
                      onChange={(e) => setWarehouseFormData({ ...warehouseFormData, address: e.target.value })}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={warehouseFormData.status === 'نشط'}
                      onCheckedChange={(checked) =>
                        setWarehouseFormData({ ...warehouseFormData, status: checked ? 'نشط' : 'غير نشط' })
                      }
                    />
                    <label className="text-sm font-medium">نشط</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={warehouseFormData.adjustmentApproverRequired || false}
                      onCheckedChange={(checked) =>
                        setWarehouseFormData({ ...warehouseFormData, adjustmentApproverRequired: checked === true })
                      }
                    />
                    <label className="text-sm font-medium">موافقة معدل مطلوبة</label>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => {
                  setIsCreateWarehouseOpen(false);
                  setIsEditWarehouseOpen(false);
                  setWarehouseFormData({});
                }}>
                  إلغاء
                </Button>
                <Button onClick={async () => {
                  try {
                    if (isCreateWarehouseOpen) {
                      if (!warehouseFormData.code || !warehouseFormData.name) return;
                      await createWarehouse({
                        code: warehouseFormData.code,
                        name: warehouseFormData.name,
                        isActive: warehouseFormData.status !== 'غير نشط',
                      });
                    } else if (selectedWarehouse) {
                      await updateWarehouse(selectedWarehouse.id, {
                        code: warehouseFormData.code,
                        name: warehouseFormData.name,
                        isActive: warehouseFormData.status === 'نشط',
                      });
                    }
                    const list = await fetchWarehousesMasterData();
                    setWarehouses(list);
                    setIsCreateWarehouseOpen(false);
                    setIsEditWarehouseOpen(false);
                    setSelectedWarehouse(null);
                    setWarehouseFormData({});
                  } catch {
                    // leave dialog open on error
                  }
                }}>
                  حفظ
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      )}

      {/* Locations Section */}
      {activeDataType === 'locations' && (
        <>
          {/* Filters + Add */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>الفلاتر</CardTitle>
                <Button
                  onClick={() => {
                    setLocationFormData({ warehouseId: warehouses[0]?.id ?? '', locationType: 'ZONE', parentLocationId: '', isActive: true });
                    setLocationFormError(null);
                    setIsCreateLocationOpen(true);
                  }}
                >
                  <Plus className="w-4 h-4 ml-2" />
                  إضافة موقع
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">المستودع</label>
                  <Select value={locationWarehouseFilter || 'all'} onValueChange={(v) => setLocationWarehouseFilter(v === 'all' ? '' : v)}>
                    <SelectTrigger><SelectValue placeholder="الكل" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">الكل</SelectItem>
                      {warehouses.map((w) => (
                        <SelectItem key={w.id} value={w.id}>{w.name} ({w.code})</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">النوع</label>
                  <Select value={locationTypeFilter || 'all'} onValueChange={(v) => setLocationTypeFilter(v === 'all' ? '' : v)}>
                    <SelectTrigger><SelectValue placeholder="الكل" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">الكل</SelectItem>
                      {LOCATION_TYPES.map((t) => (
                        <SelectItem key={t} value={t}>{LOCATION_TYPE_LABELS[t]}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">بحث (كود)</label>
                  <Input
                    value={locationSearchFilter}
                    onChange={(e) => setLocationSearchFilter(e.target.value)}
                    placeholder="ابحث بالكود..."
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Locations Table */}
          <Card>
            <CardContent className="p-0">
              {locationsFlatLoading ? (
                <div className="p-8 text-center text-gray-500">جاري التحميل...</div>
              ) : (
                <>
                  {filteredLocations.length > 0 && (
                    <div className="p-4 border-b flex justify-end">
                      <CsvButton
                        columns={[
                          { key: 'code', label: 'الكود' },
                          { key: 'barcode', label: 'الباركود' },
                          { key: 'locationType', label: 'النوع' },
                          { key: 'parentCode', label: 'الموقع الأب' },
                          { key: 'warehouseName', label: 'المستودع' },
                          { key: 'isActive', label: 'الحالة' },
                        ]}
                        data={filteredLocations}
                        getRow={(l) => [
                          l.code,
                          l.barcode,
                          LOCATION_TYPE_LABELS[l.locationType as LocationTypeValue] ?? l.locationType,
                          l.parentCode ?? '-',
                          l.warehouseName,
                          l.isActive ? 'نشط' : 'غير نشط',
                        ]}
                        filename="مواقع-المستودع"
                      />
                    </div>
                  )}
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-right">الكود</TableHead>
                        <TableHead className="text-right">الباركود</TableHead>
                        <TableHead className="text-right">النوع</TableHead>
                        <TableHead className="text-right">الموقع الأب</TableHead>
                        <TableHead className="text-right">المستودع</TableHead>
                        <TableHead className="text-right">الحالة</TableHead>
                        <TableHead className="text-right">الإجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredLocations.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-10 text-gray-500">
                            لا توجد مواقع
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredLocations.map((loc) => (
                          <TableRow key={loc.id}>
                            <TableCell className="font-mono font-semibold">{loc.code}</TableCell>
                            <TableCell>
                              <button
                                type="button"
                                onClick={() => setBarcodeLoc(loc)}
                                className="flex items-center gap-1.5 font-mono text-xs text-gray-600 hover:text-[#176C33] group transition-colors"
                                title="عرض الباركود"
                              >
                                <QrCode className="w-3.5 h-3.5 shrink-0 group-hover:text-[#176C33]" />
                                <span className="underline decoration-dashed underline-offset-2">{loc.barcode}</span>
                              </button>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">
                                {LOCATION_TYPE_LABELS[loc.locationType as LocationTypeValue] ?? loc.locationType}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-mono text-sm text-gray-600">{loc.parentCode ?? '—'}</TableCell>
                            <TableCell className="text-sm">{loc.warehouseName}</TableCell>
                            <TableCell>
                              <Badge variant={loc.isActive ? 'default' : 'secondary'}>
                                {loc.isActive ? 'نشط' : 'غير نشط'}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                  onClick={() => {
                                    setSelectedLocationForEdit(loc);
                                    setLocationFormData({
                                      warehouseId: loc.warehouseId,
                                      locationType: (loc.locationType as LocationTypeValue) ?? 'ZONE',
                                      parentLocationId: loc.parentLocationId ?? '',
                                      isActive: loc.isActive,
                                    });
                                    setLocationFormError(null);
                                    setIsEditLocationOpen(true);
                                  }}
                                >
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                                  onClick={() => {
                                    setDeleteLocationTarget(loc);
                                    setIsDeleteLocationOpen(true);
                                  }}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </>
              )}
            </CardContent>
          </Card>

          {/* Create Location Dialog */}
          <Dialog open={isCreateLocationOpen} onOpenChange={(open) => { if (!open) setIsCreateLocationOpen(false); }}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>إضافة موقع جديد</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-2">
                {locationFormError && (
                  <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3">{locationFormError}</div>
                )}
                    <div className="space-y-2">
                  <label className="text-sm font-medium">المستودع *</label>
                  <Select
                    value={locationFormData.warehouseId}
                    onValueChange={(v) => setLocationFormData({ ...locationFormData, warehouseId: v, parentLocationId: '' })}
                  >
                    <SelectTrigger><SelectValue placeholder="اختر المستودع" /></SelectTrigger>
                    <SelectContent>
                      {warehouses.map((w) => (
                        <SelectItem key={w.id} value={w.id}>{w.name} ({w.code})</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                    </div>
                    <div className="space-y-2">
                  <label className="text-sm font-medium">النوع *</label>
                  <Select
                    value={locationFormData.locationType}
                    onValueChange={(v) => setLocationFormData({ ...locationFormData, locationType: v as LocationTypeValue })}
                  >
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {LOCATION_TYPES.map((t) => (
                        <SelectItem key={t} value={t}>{LOCATION_TYPE_LABELS[t]}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                    </div>
                    <div className="space-y-2">
                  <label className="text-sm font-medium">الموقع الأب (اختياري)</label>
                  <Select
                    value={locationFormData.parentLocationId || 'none'}
                    onValueChange={(v) => setLocationFormData({ ...locationFormData, parentLocationId: v === 'none' ? '' : v })}
                  >
                    <SelectTrigger><SelectValue placeholder="لا يوجد أب" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">لا يوجد أب</SelectItem>
                      {locationsFlat
                        .filter((l) => l.warehouseId === locationFormData.warehouseId)
                        .map((l) => (
                          <SelectItem key={l.id} value={l.id}>
                            {l.code} — {LOCATION_TYPE_LABELS[l.locationType as LocationTypeValue] ?? l.locationType}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                    </div>
                <div className="p-3 bg-blue-50 rounded border border-blue-100 text-xs text-blue-700 space-y-1">
                  <div className="font-medium">يُنشأ تلقائياً:</div>
                  <div>• <span className="font-mono">الكود</span> — مثال: WH1-ZN-A3B7F</div>
                  <div>• <span className="font-mono">الباركود</span> — مطابق للكود (قابل للطباعة والمسح)</div>
                    </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={locationFormData.isActive}
                    onCheckedChange={(c) => setLocationFormData({ ...locationFormData, isActive: !!c })}
                  />
                  <label className="text-sm font-medium">نشط</label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateLocationOpen(false)} disabled={locationFormSubmitting}>إلغاء</Button>
                <Button
                  disabled={locationFormSubmitting}
                  onClick={async () => {
                    if (!locationFormData.warehouseId) {
                      setLocationFormError('يجب اختيار المستودع.');
                      return;
                    }
                    try {
                      setLocationFormSubmitting(true);
                      setLocationFormError(null);
                      const warehouseCode = warehouses.find((w) => w.id === locationFormData.warehouseId)?.code ?? 'WH';
                      const code = generateLocationCode(warehouseCode, locationFormData.locationType);
                      await createLocation(locationFormData.warehouseId, {
                        code,
                        locationType: locationFormData.locationType,
                        parentLocationId: locationFormData.parentLocationId || undefined,
                        isActive: locationFormData.isActive,
                      });
                      setIsCreateLocationOpen(false);
                      reloadLocations();
                    } catch {
                      setLocationFormError('تعذر إنشاء الموقع. تأكد من البيانات.');
                    } finally {
                      setLocationFormSubmitting(false);
                    }
                  }}
                >
                  {locationFormSubmitting ? 'جاري الحفظ...' : 'حفظ'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Edit Location Dialog */}
          <Dialog open={isEditLocationOpen} onOpenChange={(open) => { if (!open) { setIsEditLocationOpen(false); setSelectedLocationForEdit(null); } }}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>
                  تعديل الموقع
                  {selectedLocationForEdit && (
                    <span className="mr-2 text-sm font-mono font-normal text-gray-500">({selectedLocationForEdit.code})</span>
                  )}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-2">
                {locationFormError && (
                  <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3">{locationFormError}</div>
                )}
                {/* Code & Barcode read-only display */}
                {selectedLocationForEdit && (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-500">الكود (تلقائي)</label>
                      <div className="font-mono text-sm bg-gray-50 border rounded px-3 py-2">{selectedLocationForEdit.code}</div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-500">الباركود (تلقائي)</label>
                      <div className="font-mono text-sm bg-gray-50 border rounded px-3 py-2 flex items-center gap-1">
                        <QrCode className="w-3 h-3 shrink-0 text-gray-400" />
                        {selectedLocationForEdit.barcode}
                      </div>
                    </div>
                  </div>
                )}
                    <div className="space-y-2">
                  <label className="text-sm font-medium">النوع *</label>
                  <Select
                    value={locationFormData.locationType}
                    onValueChange={(v) => setLocationFormData({ ...locationFormData, locationType: v as LocationTypeValue })}
                  >
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {LOCATION_TYPES.map((t) => (
                        <SelectItem key={t} value={t}>{LOCATION_TYPE_LABELS[t]}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                    </div>
                    <div className="space-y-2">
                  <label className="text-sm font-medium">الموقع الأب (اختياري)</label>
                  <Select
                    value={locationFormData.parentLocationId || 'none'}
                    onValueChange={(v) => setLocationFormData({ ...locationFormData, parentLocationId: v === 'none' ? '' : v })}
                  >
                    <SelectTrigger><SelectValue placeholder="لا يوجد أب" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">لا يوجد أب</SelectItem>
                      {locationsFlat
                        .filter((l) => l.warehouseId === locationFormData.warehouseId && l.id !== selectedLocationForEdit?.id)
                        .map((l) => (
                          <SelectItem key={l.id} value={l.id}>
                            {l.code} — {LOCATION_TYPE_LABELS[l.locationType as LocationTypeValue] ?? l.locationType}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={locationFormData.isActive}
                    onCheckedChange={(c) => setLocationFormData({ ...locationFormData, isActive: !!c })}
                  />
                      <label className="text-sm font-medium">نشط</label>
                    </div>
                  </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => { setIsEditLocationOpen(false); setSelectedLocationForEdit(null); }} disabled={locationFormSubmitting}>إلغاء</Button>
                <Button
                  disabled={locationFormSubmitting}
                  onClick={async () => {
                    if (!selectedLocationForEdit) return;
                    try {
                      setLocationFormSubmitting(true);
                      setLocationFormError(null);
                      await updateLocation(selectedLocationForEdit.warehouseId, selectedLocationForEdit.id, {
                        locationType: locationFormData.locationType,
                        parentLocationId: locationFormData.parentLocationId || null,
                        isActive: locationFormData.isActive,
                      });
                      setIsEditLocationOpen(false);
                      setSelectedLocationForEdit(null);
                      reloadLocations();
                    } catch {
                      setLocationFormError('تعذر تحديث الموقع.');
                    } finally {
                      setLocationFormSubmitting(false);
                    }
                  }}
                >
                  {locationFormSubmitting ? 'جاري الحفظ...' : 'حفظ'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Barcode Popup */}
          <LocationBarcodeDialog
            open={barcodeLoc !== null}
            onClose={() => setBarcodeLoc(null)}
            locationCode={barcodeLoc?.barcode ?? ''}
            warehouseName={barcodeLoc?.warehouseName}
            locationType={LOCATION_TYPE_LABELS[barcodeLoc?.locationType as LocationTypeValue] ?? barcodeLoc?.locationType}
          />

          {/* Delete Location Confirmation Dialog */}
          <Dialog open={isDeleteLocationOpen} onOpenChange={(open) => { if (!open) { setIsDeleteLocationOpen(false); setDeleteLocationTarget(null); } }}>
            <DialogContent className="max-w-sm">
              <DialogHeader>
                <DialogTitle>تأكيد الحذف</DialogTitle>
              </DialogHeader>
              <p className="text-sm text-gray-600 py-2">
                هل أنت متأكد من حذف الموقع <span className="font-mono font-semibold">{deleteLocationTarget?.code}</span>؟
                لا يمكن حذف موقع يحتوي على مواقع فرعية أو مخزون.
              </p>
              <DialogFooter>
                <Button variant="outline" onClick={() => { setIsDeleteLocationOpen(false); setDeleteLocationTarget(null); }} disabled={deleteLocationSubmitting}>
                  إلغاء
                </Button>
                <Button
                  variant="destructive"
                  disabled={deleteLocationSubmitting}
                  onClick={async () => {
                    if (!deleteLocationTarget) return;
                    try {
                      setDeleteLocationSubmitting(true);
                      await deleteLocation(deleteLocationTarget.warehouseId, deleteLocationTarget.id);
                      setIsDeleteLocationOpen(false);
                      setDeleteLocationTarget(null);
                      reloadLocations();
                    } catch {
                      setIsDeleteLocationOpen(false);
                      setDeleteLocationTarget(null);
                    } finally {
                      setDeleteLocationSubmitting(false);
                    }
                  }}
                >
                  {deleteLocationSubmitting ? 'جاري الحذف...' : 'حذف'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      )}

      {/* UOM Section */}
      {activeDataType === 'uom' && (
        <>
          {/* Filters */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>الفلاتر</CardTitle>
                <Button
                  onClick={() => {
                    setUomFormData({ code: '', name: '', dimension: 'COUNT', baseConversion: '1', isActive: true });
                    setUomFormError(null);
                    setIsCreateUomOpen(true);
                  }}
                >
                  <Plus className="w-4 h-4 ml-2" />
                  إضافة وحدة قياس
                    </Button>
                  </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">بحث (كود / اسم)</label>
                  <Input
                    value={uomSearchFilter}
                    onChange={(e) => setUomSearchFilter(e.target.value)}
                    placeholder="ابحث بالكود أو الاسم"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">البُعد</label>
                  <Select value={uomDimensionFilter || 'all'} onValueChange={(v) => setUomDimensionFilter(v === 'all' ? '' : v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="الكل" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">الكل</SelectItem>
                      {UOM_DIMENSIONS.map((d) => (
                        <SelectItem key={d} value={d}>{UOM_DIMENSION_LABELS[d]}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* UOM Table */}
          <Card>
            <CardContent className="p-0">
              {uomsLoading ? (
                <div className="p-8 text-center text-gray-500">جاري التحميل...</div>
              ) : (
                <>
                  {filteredUoms.length > 0 && (
                    <div className="p-4 border-b flex justify-end">
                      <CsvButton
                        columns={[
                          { key: 'code', label: 'الكود' },
                          { key: 'name', label: 'الاسم' },
                          { key: 'dimension', label: 'البُعد' },
                          { key: 'baseConversion', label: 'معامل التحويل' },
                          { key: 'isActive', label: 'الحالة' },
                        ]}
                        data={filteredUoms}
                        getRow={(u) => [
                          u.code,
                          u.name,
                          UOM_DIMENSION_LABELS[u.dimension as keyof typeof UOM_DIMENSION_LABELS] ?? u.dimension,
                          u.baseConversion ?? 1,
                          u.isActive ? 'نشط' : 'غير نشط',
                        ]}
                        filename="وحدات-القياس"
                      />
                    </div>
                  )}
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-right">الكود</TableHead>
                        <TableHead className="text-right">الاسم</TableHead>
                        <TableHead className="text-right">البُعد</TableHead>
                        <TableHead className="text-right">معامل التحويل</TableHead>
                        <TableHead className="text-right">الحالة</TableHead>
                        <TableHead className="text-right">الإجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUoms.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-10 text-gray-500">
                            لا توجد وحدات قياس
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredUoms.map((uom) => (
                          <TableRow key={uom.id}>
                            <TableCell className="font-mono">{uom.code}</TableCell>
                            <TableCell>{uom.name}</TableCell>
                            <TableCell>
                              <Badge variant="outline">
                                {UOM_DIMENSION_LABELS[uom.dimension as keyof typeof UOM_DIMENSION_LABELS] ?? uom.dimension}
                              </Badge>
                            </TableCell>
                            <TableCell>{uom.baseConversion ?? 1}</TableCell>
                            <TableCell>
                              <Badge variant={uom.isActive ? 'default' : 'secondary'}>
                                {uom.isActive ? 'نشط' : 'غير نشط'}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                  onClick={() => {
                                    setSelectedUom(uom);
                                    setUomFormData({
                                      code: uom.code,
                                      name: uom.name,
                                      dimension: (uom.dimension as UomDimension) ?? 'COUNT',
                                      baseConversion: String(uom.baseConversion ?? 1),
                                      isActive: uom.isActive,
                                    });
                                    setUomFormError(null);
                                    setIsEditUomOpen(true);
                                  }}
                                >
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                                  onClick={() => {
                                    setDeleteUomTarget(uom);
                                    setIsDeleteUomOpen(true);
                                  }}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </>
              )}
            </CardContent>
          </Card>

          {/* Create UOM Dialog */}
          <Dialog open={isCreateUomOpen} onOpenChange={(open) => { if (!open) setIsCreateUomOpen(false); }}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>إضافة وحدة قياس جديدة</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-2">
                {uomFormError && (
                  <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3">
                    {uomFormError}
        </div>
      )}
                <div className="space-y-2">
                  <label className="text-sm font-medium">الكود *</label>
                  <Input
                    value={uomFormData.code}
                    onChange={(e) => setUomFormData({ ...uomFormData, code: e.target.value })}
                    placeholder="مثال: KG"
                    maxLength={20}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">الاسم *</label>
                  <Input
                    value={uomFormData.name}
                    onChange={(e) => setUomFormData({ ...uomFormData, name: e.target.value })}
                    placeholder="مثال: كيلوجرام"
                    maxLength={100}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">البُعد *</label>
                  <Select value={uomFormData.dimension} onValueChange={(v) => setUomFormData({ ...uomFormData, dimension: v as UomDimension })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {UOM_DIMENSIONS.map((d) => (
                        <SelectItem key={d} value={d}>{UOM_DIMENSION_LABELS[d]}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">معامل التحويل</label>
                  <Input
                    type="number"
                    step="0.0001"
                    min="0"
                    value={uomFormData.baseConversion}
                    onChange={(e) => setUomFormData({ ...uomFormData, baseConversion: e.target.value })}
                    placeholder="1"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={uomFormData.isActive}
                    onCheckedChange={(c) => setUomFormData({ ...uomFormData, isActive: !!c })}
                  />
                  <label className="text-sm font-medium">نشط</label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateUomOpen(false)} disabled={uomFormSubmitting}>
                  إلغاء
                </Button>
                <Button
                  disabled={uomFormSubmitting}
                  onClick={async () => {
                    if (!uomFormData.code.trim() || !uomFormData.name.trim()) {
                      setUomFormError('الكود والاسم مطلوبان.');
                      return;
                    }
                    const conv = parseFloat(uomFormData.baseConversion);
                    if (Number.isNaN(conv) || conv <= 0) {
                      setUomFormError('معامل التحويل يجب أن يكون أكبر من صفر.');
                      return;
                    }
                    try {
                      setUomFormSubmitting(true);
                      setUomFormError(null);
                      await createUom({
                        code: uomFormData.code.trim(),
                        name: uomFormData.name.trim(),
                        dimension: uomFormData.dimension,
                        baseConversion: conv,
                        isActive: uomFormData.isActive,
                      });
                      setIsCreateUomOpen(false);
                      reloadUoms();
                    } catch {
                      setUomFormError('تعذر إضافة وحدة القياس. تأكد من عدم تكرار الكود.');
                    } finally {
                      setUomFormSubmitting(false);
                    }
                  }}
                >
                  {uomFormSubmitting ? 'جاري الحفظ...' : 'حفظ'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Edit UOM Dialog */}
          <Dialog open={isEditUomOpen} onOpenChange={(open) => { if (!open) { setIsEditUomOpen(false); setSelectedUom(null); } }}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>تعديل وحدة القياس</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-2">
                {uomFormError && (
                  <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3">
                    {uomFormError}
                  </div>
                )}
                <div className="space-y-2">
                  <label className="text-sm font-medium">الكود *</label>
                  <Input
                    value={uomFormData.code}
                    onChange={(e) => setUomFormData({ ...uomFormData, code: e.target.value })}
                    maxLength={20}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">الاسم *</label>
                  <Input
                    value={uomFormData.name}
                    onChange={(e) => setUomFormData({ ...uomFormData, name: e.target.value })}
                    maxLength={100}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">البُعد *</label>
                  <Select value={uomFormData.dimension} onValueChange={(v) => setUomFormData({ ...uomFormData, dimension: v as UomDimension })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {UOM_DIMENSIONS.map((d) => (
                        <SelectItem key={d} value={d}>{UOM_DIMENSION_LABELS[d]}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">معامل التحويل</label>
                  <Input
                    type="number"
                    step="0.0001"
                    min="0"
                    value={uomFormData.baseConversion}
                    onChange={(e) => setUomFormData({ ...uomFormData, baseConversion: e.target.value })}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={uomFormData.isActive}
                    onCheckedChange={(c) => setUomFormData({ ...uomFormData, isActive: !!c })}
                  />
                  <label className="text-sm font-medium">نشط</label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => { setIsEditUomOpen(false); setSelectedUom(null); }} disabled={uomFormSubmitting}>
                  إلغاء
                </Button>
                <Button
                  disabled={uomFormSubmitting}
                  onClick={async () => {
                    if (!selectedUom) return;
                    if (!uomFormData.code.trim() || !uomFormData.name.trim()) {
                      setUomFormError('الكود والاسم مطلوبان.');
                      return;
                    }
                    const conv = parseFloat(uomFormData.baseConversion);
                    if (Number.isNaN(conv) || conv <= 0) {
                      setUomFormError('معامل التحويل يجب أن يكون أكبر من صفر.');
                      return;
                    }
                    try {
                      setUomFormSubmitting(true);
                      setUomFormError(null);
                      await updateUom(selectedUom.id, {
                        code: uomFormData.code.trim(),
                        name: uomFormData.name.trim(),
                        dimension: uomFormData.dimension,
                        baseConversion: conv,
                        isActive: uomFormData.isActive,
                      });
                      setIsEditUomOpen(false);
                      setSelectedUom(null);
                      reloadUoms();
                    } catch {
                      setUomFormError('تعذر تحديث وحدة القياس.');
                    } finally {
                      setUomFormSubmitting(false);
                    }
                  }}
                >
                  {uomFormSubmitting ? 'جاري الحفظ...' : 'حفظ'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Delete UOM Confirmation Dialog */}
          <Dialog open={isDeleteUomOpen} onOpenChange={(open) => { if (!open) { setIsDeleteUomOpen(false); setDeleteUomTarget(null); } }}>
            <DialogContent className="max-w-sm">
              <DialogHeader>
                <DialogTitle>تأكيد الحذف</DialogTitle>
              </DialogHeader>
              <p className="text-sm text-gray-600 py-2">
                هل أنت متأكد من حذف وحدة القياس &quot;{deleteUomTarget?.name}&quot; ({deleteUomTarget?.code})؟
                لا يمكن التراجع عن هذا الإجراء.
              </p>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => { setIsDeleteUomOpen(false); setDeleteUomTarget(null); }}
                  disabled={deleteUomSubmitting}
                >
                  إلغاء
                </Button>
                <Button
                  variant="destructive"
                  disabled={deleteUomSubmitting}
                  onClick={async () => {
                    if (!deleteUomTarget) return;
                    try {
                      setDeleteUomSubmitting(true);
                      await deleteUom(deleteUomTarget.id);
                      setIsDeleteUomOpen(false);
                      setDeleteUomTarget(null);
                      reloadUoms();
                    } catch {
                      setIsDeleteUomOpen(false);
                      setDeleteUomTarget(null);
                    } finally {
                      setDeleteUomSubmitting(false);
                    }
                  }}
                >
                  {deleteUomSubmitting ? 'جاري الحذف...' : 'حذف'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}

// Inbound Order (use InboundOrderUi from lib; local types for workspace-only fields)
type OrderStage = 'استلام' | 'فحص' | 'وضع بعيد' | 'مكتمل';
type StageStatus = 'pending' | 'in-progress' | 'completed';

type Worker = {
  id: string;
  name: string;
  duties: OrderStage[];
  currentTasks: number;
};

// Sample Workers Data
const workers: Worker[] = [
  { id: '1', name: 'أحمد محمد', duties: ['استلام', 'فحص'], currentTasks: 3 },
  { id: '2', name: 'فاطمة علي', duties: ['استلام'], currentTasks: 2 },
  { id: '3', name: 'خالد سعيد', duties: ['وضع بعيد'], currentTasks: 4 },
  { id: '4', name: 'سارة حسن', duties: ['فحص', 'وضع بعيد'], currentTasks: 1 },
  { id: '5', name: 'محمد علي', duties: ['استلام', 'فحص', 'وضع بعيد'], currentTasks: 5 },
];

function InboundOrdersPage({ onOpenOrder }: { onOpenOrder: (orderId: string) => void }) {
  const [warehouseFilter, setWarehouseFilter] = useState('');
  const [clientFilter, setClientFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [expectedDateFrom, setExpectedDateFrom] = useState('');
  const [expectedDateTo, setExpectedDateTo] = useState('');
  const [orders, setOrders] = useState<InboundOrderUi[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [clients, setClients] = useState<ClientUi[]>([]);
  const [warehouses, setWarehouses] = useState<WarehouseUi[]>([]);
  const [products, setProducts] = useState<ProductUi[]>([]);
  const [uomList, setUomList] = useState<{ id: string; code: string; name: string }[]>([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [createFormData, setCreateFormData] = useState({
    clientId: '',
    warehouseId: '',
    expectedDate: '',
    notes: '',
    orderItems: [] as Array<{ id: string; productId: string; quantity: number }>,
  });

  useEffect(() => {
    setLoading(true);
    setError(null);
    const filter: Parameters<typeof fetchInboundOrders>[0] = {};
    if (clientFilter && clientFilter !== 'all') filter.clientId = clientFilter;
    if (warehouseFilter && warehouseFilter !== 'all') filter.warehouseId = warehouseFilter;
    if (statusFilter && statusFilter !== 'all') filter.status = INBOUND_STATUS_TO_API[statusFilter];
    if (expectedDateFrom) filter.expectedDateFrom = expectedDateFrom;
    if (expectedDateTo) filter.expectedDateTo = expectedDateTo;
    fetchInboundOrders(filter)
      .then(setOrders)
      .catch((e) => {
        setError(e instanceof Error ? e.message : 'فشل تحميل الطلبات');
        setOrders([]);
      })
      .finally(() => setLoading(false));
  }, [clientFilter, warehouseFilter, statusFilter, expectedDateFrom, expectedDateTo]);

  useEffect(() => {
    Promise.all([
      fetchClients(),
      fetchWarehousesMasterData(),
      fetchProducts(),
      fetchUomList(),
    ])
      .then(([c, w, p, u]) => {
        setClients(c);
        setWarehouses(w);
        setProducts(p);
        setUomList(u.map((x) => ({ id: x.id, code: x.code, name: x.name })));
      })
      .catch(() => {});
  }, []);

  // PENDING orders belong to the approvals queue only; exclude them from this page
  const filteredOrders = orders.filter((o) => o.status !== 'بانتظار الموافقة');

  /** Products belonging to the selected client only (for create order form). */
  const productsForSelectedClient = createFormData.clientId
    ? products.filter((p) => p.clientId === createFormData.clientId)
    : [];

  /** When client changes, clear product selection from items that no longer belong to the new client. */
  const clearProductSelectionIfWrongClient = (nextClientId: string) => {
    if (!nextClientId) return;
    const allowedIds = new Set(products.filter((p) => p.clientId === nextClientId).map((p) => p.id));
    const hasInvalid = createFormData.orderItems.some((item) => item.productId && !allowedIds.has(item.productId));
    if (hasInvalid) {
      setCreateFormData((prev) => ({
        ...prev,
        orderItems: prev.orderItems.map((it) => ({ ...it, productId: '', quantity: 0 })),
      }));
    }
  };

  const addOrderItem = () => {
    setCreateFormData({
      ...createFormData,
      orderItems: [...createFormData.orderItems, { id: Date.now().toString(), productId: '', quantity: 0 }],
    });
  };

  const removeOrderItem = (id: string) => {
    setCreateFormData({
      ...createFormData,
      orderItems: createFormData.orderItems.filter(item => item.id !== id),
    });
  };

  const updateOrderItem = (id: string, field: 'productId' | 'quantity', value: string | number) => {
    setCreateFormData({
      ...createFormData,
      orderItems: createFormData.orderItems.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    });
  };

  const handleCreateOrder = async () => {
    if (!createFormData.clientId || !createFormData.warehouseId) return;
    setError(null);
    try {
      const created = await createInboundOrder({
        clientId: createFormData.clientId,
        warehouseId: createFormData.warehouseId,
        expectedDate: createFormData.expectedDate || undefined,
      });
      for (const item of createFormData.orderItems) {
        const qty = Number(item.quantity);
        if (!item.productId || qty <= 0) continue;
        const product = productsForSelectedClient.find((p) => p.id === item.productId) ?? products.find((p) => p.id === item.productId);
        if (!product?.defaultUomId) continue;
        await addInboundOrderItem(created.id, {
          productId: item.productId,
          uomId: product.defaultUomId,
          qtyOrdered: qty,
        });
      }
      const list = await fetchInboundOrders({
        clientId: clientFilter !== 'all' ? clientFilter : undefined,
        warehouseId: warehouseFilter !== 'all' ? warehouseFilter : undefined,
        status: statusFilter !== 'all' ? INBOUND_STATUS_TO_API[statusFilter] : undefined,
        expectedDateFrom: expectedDateFrom || undefined,
        expectedDateTo: expectedDateTo || undefined,
      });
      setOrders(list);
      setIsCreateDialogOpen(false);
      setCreateFormData({ clientId: '', warehouseId: '', expectedDate: '', notes: '', orderItems: [] });
    } catch (e) {
      setError(e instanceof Error ? e.message : 'فشل إنشاء الطلب');
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>الفلاتر</CardTitle>
            <Button onClick={() => setIsCreateDialogOpen(true)}>
              <Plus className="w-4 h-4 ml-2" />
              إنشاء طلب وارد
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">المستودع</label>
              <Select value={warehouseFilter || 'all'} onValueChange={(v) => setWarehouseFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر المستودع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  {warehouses.map((w) => (
                    <SelectItem key={w.id} value={w.id}>{w.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">العميل</label>
              <Select value={clientFilter || 'all'} onValueChange={(v) => setClientFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر العميل" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  {clients.map((c) => (
                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">الحالة</label>
              <Select value={statusFilter || 'all'} onValueChange={(v) => setStatusFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الحالة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="جديد">جديد</SelectItem>
                  <SelectItem value="قيد المعالجة">قيد المعالجة</SelectItem>
                  <SelectItem value="قيد الاستلام">قيد الاستلام</SelectItem>
                  <SelectItem value="مكتمل">مكتمل</SelectItem>
                  <SelectItem value="ملغي">ملغي</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">تاريخ متوقع من</label>
              <Input
                type="date"
                value={expectedDateFrom}
                onChange={(e) => setExpectedDateFrom(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">تاريخ متوقع إلى</label>
              <Input
                type="date"
                value={expectedDateTo}
                onChange={(e) => setExpectedDateTo(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardContent className="p-0">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md m-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          {filteredOrders.length > 0 && !loading && (
            <div className="p-4 border-b flex justify-end">
              <CsvButton
                columns={[
                  { key: 'orderId', label: 'رقم الطلب' },
                  { key: 'client', label: 'العميل' },
                  { key: 'warehouse', label: 'المستودع' },
                  { key: 'status', label: 'الحالة' },
                  { key: 'shipmentStatus', label: 'حالة الشحن' },
                  { key: 'expectedDate', label: 'التاريخ المتوقع' },
                  { key: 'assignedTo', label: 'تم التعيين لـ' },
                  { key: 'createdAt', label: 'تاريخ الإنشاء' },
                ]}
                data={filteredOrders}
                getRow={(o) => [o.orderId, o.client, o.warehouse, o.status, o.shipmentStatus, o.expectedDate, o.assignedTo, o.createdAt]}
                filename="طلبات-الوارد"
              />
            </div>
          )}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">رقم الطلب</TableHead>
                <TableHead className="text-right">العميل</TableHead>
                <TableHead className="text-right">المستودع</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">حالة الشحن</TableHead>
                <TableHead className="text-right">التاريخ المتوقع</TableHead>
                <TableHead className="text-right">تم التعيين لـ</TableHead>
                <TableHead className="text-right">تاريخ الإنشاء</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={9} className="py-8 text-center text-sm text-gray-500">
                    جارِ تحميل طلبات الوارد...
                  </TableCell>
                </TableRow>
              ) : filteredOrders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="py-8 text-center text-sm text-gray-500">
                    لا توجد طلبات وارد مطابقة للفلاتر الحالية.
                  </TableCell>
                </TableRow>
              ) : (
                filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono">{order.orderId}</TableCell>
                  <TableCell>{order.client}</TableCell>
                  <TableCell>{order.warehouse}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === 'مكتمل' ? 'default' : order.status === 'ملغي' ? 'destructive' : 'secondary'}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={order.shipmentStatus === 'مكتمل' ? 'default' : 'outline'}>
                      {order.shipmentStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.expectedDate}</TableCell>
                  <TableCell>{order.assignedTo}</TableCell>
                  <TableCell className="font-mono text-sm">{order.createdAt}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onOpenOrder(order.id)}
                    >
                      <ExternalLink className="w-4 h-4 ml-2" />
                      فتح
                    </Button>
                  </TableCell>
                </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create Inbound Order Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>إنشاء طلب وارد جديد</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">العميل</label>
                <Select
                  value={createFormData.clientId}
                  onValueChange={(v) => {
                    clearProductSelectionIfWrongClient(v);
                    setCreateFormData({ ...createFormData, clientId: v });
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر العميل" />
                  </SelectTrigger>
                  <SelectContent>
                    {clients.map((c) => (
                      <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">المستودع</label>
                <Select value={createFormData.warehouseId} onValueChange={(v) => setCreateFormData({ ...createFormData, warehouseId: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المستودع" />
                  </SelectTrigger>
                  <SelectContent>
                    {warehouses.map((w) => (
                      <SelectItem key={w.id} value={w.id}>{w.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">تاريخ الشحن المتوقع</label>
                <Input
                  type="date"
                  value={createFormData.expectedDate}
                  onChange={(e) => setCreateFormData({ ...createFormData, expectedDate: e.target.value })}
                />
              </div>
              <div className="space-y-2 col-span-2">
                <label className="text-sm font-medium">الملاحظات <span className="text-gray-400 text-xs">(اختياري)</span></label>
                <Textarea
                  value={createFormData.notes}
                  onChange={(e) => setCreateFormData({ ...createFormData, notes: e.target.value })}
                  placeholder="أدخل أي ملاحظات إضافية"
                  rows={4}
                />
              </div>
            </div>

            {/* Order Items */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">بنود الطلب</label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addOrderItem}
                  disabled={!createFormData.clientId}
                >
                  <Plus className="w-4 h-4 ml-2" />
                  إضافة بند
                </Button>
              </div>
              {!createFormData.clientId && (
                <p className="text-sm text-amber-600">اختر العميل أولاً لعرض منتجاته وإضافة البنود.</p>
              )}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>المنتج</TableHead>
                    <TableHead>الكمية المطلوبة</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {createFormData.orderItems.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center text-gray-500 py-4">
                        لا توجد بنود. اختر العميل ثم اضغط على "إضافة بند" لإضافة منتج.
                      </TableCell>
                    </TableRow>
                  ) : (
                    createFormData.orderItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Select
                            value={item.productId}
                            onValueChange={(v) => updateOrderItem(item.id, 'productId', v)}
                            disabled={!createFormData.clientId}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder={createFormData.clientId ? "اختر المنتج" : "اختر العميل أولاً"} />
                            </SelectTrigger>
                            <SelectContent>
                              {productsForSelectedClient.map((p) => (
                                <SelectItem key={p.id} value={p.id}>{p.name} ({p.sku})</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity || ''}
                            onChange={(e) => updateOrderItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                            placeholder="الكمية"
                          />
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" onClick={() => removeOrderItem(item.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              إلغاء
            </Button>
            <Button onClick={handleCreateOrder}>
              إرسال الطلب
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const STAGE_TO_TASK_TYPE: Record<OrderStage, string> = {
  'استلام': 'RECEIVING',
  'فحص': 'RECEIVING',
  'وضع بعيد': 'PUTAWAY',
  'مكتمل': 'RECEIVING',
};

const OUTBOUND_STAGE_TO_TASK_TYPE: Record<OutboundOrderStage, string> = {
  'انتقاء': 'PICKING',
  'تعبئة': 'PACKING',
  'شحن': 'SHIPPING',
  'مكتمل': 'SHIPPING',
};

function InboundOrderWorkspacePage({ orderId, onBack }: { orderId: string; onBack: () => void }) {
  const [order, setOrder] = useState<InboundOrderUi | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
  const [selectedStage, setSelectedStage] = useState<OrderStage | null>(null);
  const [selectedWorker, setSelectedWorker] = useState('');
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
  const [employees, setEmployees] = useState<{ id: string; firstName: string; lastName: string; email: string }[]>([]);
  const [stageTaskIds, setStageTaskIds] = useState<Record<string, string>>({});
  const [taskActionLoading, setTaskActionLoading] = useState(false);
  const [isApprovalsDialogOpen, setIsApprovalsDialogOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchInboundOrder(orderId)
      .then((o) => {
        setOrder(o);
        if (o?.id) {
          fetchTaskWorkOrders({ referenceId: o.id })
            .then((tasks) => {
              const byStage: Record<string, string> = {};
              const stagesOrder: OrderStage[] = ['استلام', 'فحص', 'وضع بعيد', 'مكتمل'];
              let recvIdx = 0;
              tasks.forEach((t) => {
                if (t.taskType === 'RECEIVING' && recvIdx < 2) {
                  byStage[stagesOrder[recvIdx]] = t.id;
                  recvIdx++;
                } else if (t.taskType === 'PUTAWAY') {
                  byStage['وضع بعيد'] = t.id;
                }
              });
              setStageTaskIds(byStage);
              if (o.stages && tasks.length > 0) {
                const taskById = Object.fromEntries(tasks.map((t) => [t.id, t]));
                const workerName = (t: (typeof tasks)[0]) =>
                  t.assignedUser
                    ? [t.assignedUser.firstName, t.assignedUser.lastName].filter(Boolean).join(' ') || t.assignedUser.email
                    : undefined;
                const newStages = o.stages.map((s) => {
                  const taskId = byStage[s.stage];
                  const task = taskId ? taskById[taskId] : undefined;
                  if (!task) return { ...s, status: 'pending' as const }; // لا مهمة بعد → تظهر "تعيين موظف"
                  const status =
                    task.status === 'COMPLETED'
                      ? ('completed' as const)
                      : task.status === 'IN_PROGRESS' || task.status === 'ASSIGNED'
                        ? ('in-progress' as const)
                        : ('pending' as const);
                  return { ...s, status, assignedWorker: workerName(task) ?? s.assignedWorker };
                });
                setOrder((prev) => (prev ? { ...prev, stages: newStages } : prev));
              }
            })
            .catch(() => {});
        }
      })
      .finally(() => setLoading(false));
  }, [orderId]);

  useEffect(() => {
    fetchUsers().then((users) => {
      setEmployees(users.map((u) => ({ id: u.id, firstName: u.firstName || '', lastName: u.lastName || '', email: u.email })));
    }).catch(() => setEmployees([]));
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">جاري تحميل الطلب...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">الطلب غير موجود</p>
        <Button onClick={onBack} className="mt-4">العودة</Button>
      </div>
    );
  }

  const currentOrder = order;

  const handleAssign = (stage: OrderStage) => {
    setSelectedStage(stage);
    setSelectedEmployeeId('');
    setSelectedWorker('');
    setIsAssignDialogOpen(true);
  };

  const handleAutoAssign = () => {
    if (!selectedStage || employees.length === 0) return;
    setSelectedEmployeeId(employees[0].id);
    setSelectedWorker(employees[0].id);
  };

  const handleStartTask = async () => {
    if (!selectedStage || !order || !order.clientId || !order.warehouseId) return;
    const userId = selectedEmployeeId || selectedWorker;
    if (!userId) return;
    setTaskActionLoading(true);
    try {
      const taskType = STAGE_TO_TASK_TYPE[selectedStage];
      const created = await createTaskWorkOrder({
        clientId: order.clientId,
        warehouseId: order.warehouseId,
        taskType,
        referenceType: 'InboundOrder',
        referenceId: orderId,
      });
      await assignTaskWorkOrder(created.id, userId);
      await startTaskWorkOrder(created.id);
      const emp = employees.find((e) => e.id === userId);
      const name = emp ? `${emp.firstName} ${emp.lastName}`.trim() || emp.email : '-';
      setStageTaskIds((prev) => ({ ...prev, [selectedStage]: created.id }));
      if (order.stages) {
        setOrder({
          ...order,
          stages: order.stages.map((s) =>
            s.stage === selectedStage ? { ...s, assignedWorker: name, status: 'in-progress' } : s
          ),
          assignedTo: order.assignedTo === '-' ? name : order.assignedTo,
        });
      }
      setIsAssignDialogOpen(false);
      setSelectedStage(null);
      setSelectedEmployeeId('');
      setSelectedWorker('');
    } catch (e) {
      console.error('Start task failed', e);
    } finally {
      setTaskActionLoading(false);
    }
  };

  const handleEndTask = async (stage: OrderStage) => {
    const taskId = stageTaskIds[stage];
    if (!taskId || !order?.stages) return;
    setTaskActionLoading(true);
    try {
      await completeTaskWorkOrder(taskId);
      // عند إنهاء مرحلة الاستلام: تسجيل الكميات المستلمة وإضافتها للمخزون
      if (stage === 'استلام' && order.items?.length) {
        for (const item of order.items) {
          if (item.quantityRemaining > 0) {
            try {
              await receiveInboundOrderItem(orderId, {
                itemId: item.id,
                batches: [{ batchCode: `RECV-${item.id.slice(0, 8)}`, qtyReceived: item.quantityRemaining }],
              });
            } catch (err) {
              console.error('Receive item failed', item.id, err);
            }
          }
        }
      }
      const stageIndex = order.stages.findIndex((s) => s.stage === stage);
      const nextStage = order.stages[stageIndex + 1];
      const newStages = order.stages.map((s) =>
        s.stage === stage ? { ...s, status: 'completed' as StageStatus } : s
      );
      const isLastStage = stage === 'وضع بعيد' || nextStage?.stage === 'مكتمل' || !nextStage;
      if (nextStage && isLastStage) {
        const nextIdx = stageIndex + 1;
        if (newStages[nextIdx]) newStages[nextIdx] = { ...newStages[nextIdx], status: 'completed' as StageStatus };
      }
      // لا نضع المرحلة التالية in-progress هنا حتى يظهر زر "تعيين موظف" للمرحلة التالية (مثل الفحص)
      setOrder({ ...order, stages: newStages });
      setStageTaskIds((prev) => {
        const next = { ...prev };
        delete next[stage];
        return next;
      });
      await updateInboundOrder(orderId, {
        status: isLastStage ? 'COMPLETED' : 'IN_PROGRESS',
        currentStage: isLastStage ? 'مكتمل' : nextStage?.stage ?? stage,
      });
      const refreshed = await fetchInboundOrder(orderId);
      if (refreshed) setOrder(refreshed);
    } catch (e) {
      console.error('End task failed', e);
    } finally {
      setTaskActionLoading(false);
    }
  };

  const handleCancelOrder = async () => {
    if (!confirm('هل أنت متأكد من إلغاء هذا الطلب؟')) return;
    try {
      const updated = await updateInboundOrder(orderId, { status: 'CANCELLED' });
      setOrder(updated);
    } catch {
      // keep state on error
    }
  };

  const getStageIcon = (status: StageStatus) => {
    if (status === 'completed') return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    if (status === 'in-progress') return <Clock className="w-5 h-5 text-blue-600" />;
    return <Circle className="w-5 h-5 text-gray-400" />;
  };

  const getStageStatusColor = (status: StageStatus) => {
    if (status === 'completed') return 'bg-green-500';
    if (status === 'in-progress') return 'bg-blue-500';
    return 'bg-gray-300';
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="outline" onClick={onBack}>
        <ChevronRight className="w-4 h-4 ml-2" />
        العودة
      </Button>

      {/* Order Details Section */}
      <Card>
        <CardHeader>
          <CardTitle>تفاصيل الطلب</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-500">رقم الطلب</label>
              <p className="text-base font-semibold mt-1">{currentOrder.orderId}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">اسم العميل</label>
              <p className="text-base mt-1">{currentOrder.client}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">اسم المستودع</label>
              <p className="text-base mt-1">{currentOrder.warehouse}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">الحالة</label>
              <div className="mt-1">
                <Badge variant={currentOrder.status === 'مكتمل' ? 'default' : currentOrder.status === 'ملغي' ? 'destructive' : 'secondary'}>
                  {currentOrder.status}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">حالة الشحن</label>
              <div className="mt-1">
                <Badge variant={currentOrder.shipmentStatus === 'مكتمل' ? 'default' : 'outline'}>
                  {currentOrder.shipmentStatus}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">التاريخ المتوقع</label>
              <p className="text-base mt-1">{currentOrder.expectedDate}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">تم التعيين لـ</label>
              <p className="text-base mt-1">{currentOrder.assignedTo}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity Timeline Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>خط زمني للنشاط</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setIsApprovalsDialogOpen(true)}>
                <FileCheck className="w-4 h-4 ml-2" />
                عرض الموافقات
              </Button>
              <Button variant="destructive" size="sm" onClick={handleCancelOrder}>
                <XCircle className="w-4 h-4 ml-2" />
                إلغاء الطلب
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between py-4">
            {currentOrder.stages.map((stage, index) => (
              <div key={stage.stage} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStageStatusColor(stage.status)}`}>
                    {getStageIcon(stage.status)}
                  </div>
                  <p className="text-sm font-medium mt-2">{stage.stage}</p>
                  {stage.assignedWorker && (
                    <p className="text-xs text-gray-500 mt-1">{stage.assignedWorker}</p>
                  )}
                  {stage.status === 'pending' && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => handleAssign(stage.stage)}
                    >
                      تعيين موظف
                    </Button>
                  )}
                  {stage.status === 'in-progress' && stageTaskIds[stage.stage] && (
                    <Button
                      variant="default"
                      size="sm"
                      className="mt-2"
                      disabled={taskActionLoading}
                      onClick={() => handleEndTask(stage.stage)}
                    >
                      {taskActionLoading ? 'جاري...' : 'إنهاء المهمة'}
                    </Button>
                  )}
                </div>
                {index < currentOrder.stages.length - 1 && (
                  <div className={`h-1 flex-1 mx-2 ${stage.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Items Section */}
      <Card>
        <CardHeader>
          <CardTitle>البنود</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">اسم المنتج</TableHead>
                <TableHead className="text-right">SKU المنتج</TableHead>
                <TableHead className="text-right">الكمية المستلمة</TableHead>
                <TableHead className="text-right">الكمية المتبقية</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentOrder.items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell className="font-mono">{item.productSKU}</TableCell>
                  <TableCell>
                    <Badge variant="default">{item.quantityReceived}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={item.quantityRemaining === 0 ? 'default' : 'secondary'}>
                      {item.quantityRemaining}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pick employee & Start task Dialog */}
      <Dialog open={isAssignDialogOpen} onOpenChange={setIsAssignDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تعيين موظف وبدء المهمة: {selectedStage}</DialogTitle>
            <DialogDescription>
              اختر الموظف ثم اضغط بدء المهمة. ستظهر المهمة في إدارة العمل.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">الموظف</label>
              <select
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
                value={selectedEmployeeId || selectedWorker}
                onChange={(e) => {
                  const v = e.target.value;
                  setSelectedEmployeeId(v);
                  setSelectedWorker(v);
                }}
              >
                <option value="">اختر الموظف</option>
                {employees.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.firstName} {emp.lastName} ({emp.email})
                  </option>
                ))}
              </select>
            </div>
            {employees.length > 0 && (
              <Button type="button" variant="outline" onClick={handleAutoAssign} className="w-full">
                <PackageSearch className="w-4 h-4 ml-2" />
                تعيين تلقائي
              </Button>
            )}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsAssignDialogOpen(false)}>
              إلغاء
            </Button>
            <Button
              type="button"
              onClick={handleStartTask}
              disabled={taskActionLoading || !(selectedEmployeeId || selectedWorker)}
            >
              {taskActionLoading ? 'جاري بدء المهمة...' : 'بدء المهمة'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Approvals Dialog */}
      <Dialog open={isApprovalsDialogOpen} onOpenChange={setIsApprovalsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>الموافقات المطلوبة</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {currentOrder.approvals && currentOrder.approvals.length > 0 ? (
              currentOrder.approvals.map((approval) => (
                <div key={approval.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{approval.type}</p>
                    <p className="text-sm text-gray-500">{approval.requestedAt}</p>
                  </div>
                  <Badge variant={approval.status === 'approved' ? 'default' : approval.status === 'rejected' ? 'destructive' : 'secondary'}>
                    {approval.status === 'approved' ? 'موافق عليه' : approval.status === 'rejected' ? 'مرفوض' : 'قيد الانتظار'}
                  </Badge>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">لا توجد موافقات مطلوبة</p>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsApprovalsDialogOpen(false)}>
              إغلاق
            </Button>
            {currentOrder.approvals?.some(a => a.status === 'pending') && (
              <Button>
                طلب الموافقات
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Outbound Order Types
type OutboundOrderStatus = 'جديد' | 'قيد المعالجة' | 'قيد الشحن' | 'مكتمل' | 'ملغي';
type OutboundShipmentStatus = 'لم يبدأ' | 'قيد الشحن' | 'شُحن' | 'مكتمل';
type OutboundOrderStage = 'انتقاء' | 'تعبئة' | 'شحن' | 'مكتمل';
type OutboundStageStatus = 'pending' | 'in-progress' | 'completed';

type OutboundOrderItem = {
  id: string;
  productId?: string;
  productName: string;
  productSKU: string;
  quantityOrdered: number;
  quantityShipped: number;
  quantityRemaining: number;
  availableQuantity: number;
  hasShortage: boolean;
};

type AllocationItem = {
  id: string;
  productSKU: string;
  batchCode: string;
  expiredDate: string;
  rotationIndicator: 'FIFO' | 'FEFO';
  location: string;
  locationPath: string; // Full path for tree map
};

type OutboundOrder = {
  id: string;
  orderId: string;
  client: string;
  warehouse: string;
  status: OutboundOrderStatus;
  shipmentStatus: OutboundShipmentStatus;
  expectedShipDate: string;
  shortageFlag: boolean;
  createdAt: string;
  items: OutboundOrderItem[];
  allocations: AllocationItem[];
  stages: Array<{
    stage: OutboundOrderStage;
    status: OutboundStageStatus;
    assignedWorker?: string;
    completedAt?: string;
  }>;
  approvals?: Array<{
    id: string;
    type: string;
    status: 'pending' | 'approved' | 'rejected';
    requestedAt: string;
  }>;
};

// Sample Outbound Orders Data
const initialOutboundOrders: OutboundOrder[] = [
  {
    id: '1',
    orderId: 'OUT-00018',
    client: 'شركة التقنية المتقدمة',
    warehouse: 'المستودع الرئيسي - الرياض',
    status: 'قيد المعالجة',
    shipmentStatus: 'قيد الشحن',
    expectedShipDate: '2026-02-04',
    shortageFlag: false,
    createdAt: '2026-02-02 10:15',
    items: [
      {
        id: '1',
        productName: 'منتج أ',
        productSKU: 'PROD-001',
        quantityOrdered: 100,
        quantityShipped: 50,
        quantityRemaining: 50,
        availableQuantity: 150,
        hasShortage: false,
      },
      {
        id: '2',
        productName: 'منتج ب',
        productSKU: 'PROD-002',
        quantityOrdered: 200,
        quantityShipped: 0,
        quantityRemaining: 200,
        availableQuantity: 150,
        hasShortage: true,
      },
    ],
    allocations: [
      {
        id: '1',
        productSKU: 'PROD-001',
        batchCode: 'BATCH-001',
        expiredDate: '2026-12-31',
        rotationIndicator: 'FIFO',
        location: 'LOC-002',
        locationPath: 'المستودع الرئيسي > المنطقة أ > الرف 1',
      },
      {
        id: '2',
        productSKU: 'PROD-002',
        batchCode: 'BATCH-002',
        expiredDate: '2026-11-30',
        rotationIndicator: 'FEFO',
        location: 'LOC-003',
        locationPath: 'المستودع الرئيسي > المنطقة ب > الرف 2',
      },
    ],
    stages: [
      { stage: 'انتقاء', status: 'completed', assignedWorker: 'أحمد محمد', completedAt: '2026-02-02 11:00' },
      { stage: 'تعبئة', status: 'in-progress', assignedWorker: 'فاطمة علي' },
      { stage: 'شحن', status: 'pending' },
      { stage: 'مكتمل', status: 'pending' },
    ],
    approvals: [
      { id: '1', type: 'موافقة الشحن', status: 'pending', requestedAt: '2026-02-02 11:15' },
    ],
  },
  {
    id: '2',
    orderId: 'OUT-00019',
    client: 'مؤسسة التجارة الإلكترونية',
    warehouse: 'مستودع جدة',
    status: 'جديد',
    shipmentStatus: 'لم يبدأ',
    expectedShipDate: '2026-02-10',
    shortageFlag: false,
    createdAt: '2026-02-02 09:30',
    items: [
      {
        id: '3',
        productName: 'منتج ج',
        productSKU: 'PROD-003',
        quantityOrdered: 150,
        quantityShipped: 0,
        quantityRemaining: 150,
        availableQuantity: 200,
        hasShortage: false,
      },
    ],
    allocations: [],
    stages: [
      { stage: 'انتقاء', status: 'pending' },
      { stage: 'تعبئة', status: 'pending' },
      { stage: 'شحن', status: 'pending' },
      { stage: 'مكتمل', status: 'pending' },
    ],
  },
];

function OutboundOrdersPage({ onOpenOrder }: { onOpenOrder: (orderId: string) => void }) {
  const [warehouseFilter, setWarehouseFilter] = useState('');
  const [clientFilter, setClientFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [expectedShipDateFrom, setExpectedShipDateFrom] = useState('');
  const [expectedShipDateTo, setExpectedShipDateTo] = useState('');
  const [orders, setOrders] = useState<OutboundOrderUi[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [clients, setClients] = useState<ClientUi[]>([]);
  const [warehouses, setWarehouses] = useState<WarehouseUi[]>([]);
  const [products, setProducts] = useState<ProductUi[]>([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [createFormData, setCreateFormData] = useState({
    clientId: '',
    warehouseId: '',
    expectedDate: '',
    notes: '',
    orderItems: [] as Array<{ id: string; productId: string; quantity: number }>,
  });

  useEffect(() => {
    setLoading(true);
    setError(null);
    const filter: Parameters<typeof fetchOutboundOrders>[0] = {};
    if (clientFilter && clientFilter !== 'all') filter.clientId = clientFilter;
    if (warehouseFilter && warehouseFilter !== 'all') filter.warehouseId = warehouseFilter;
    if (statusFilter && statusFilter !== 'all') filter.status = OUTBOUND_STATUS_TO_API[statusFilter];
    if (expectedShipDateFrom) filter.expectedShipDateFrom = expectedShipDateFrom;
    if (expectedShipDateTo) filter.expectedShipDateTo = expectedShipDateTo;
    fetchOutboundOrders(filter)
      .then(setOrders)
      .catch((e) => {
        if (e?.status === 401) return;
        setError(e instanceof Error ? e.message : 'تعذر تحميل طلبات الصادر. يرجى المحاولة مرة أخرى.');
        setOrders([]);
      })
      .finally(() => setLoading(false));
  }, [clientFilter, warehouseFilter, statusFilter, expectedShipDateFrom, expectedShipDateTo]);

  useEffect(() => {
    Promise.all([fetchClients(), fetchWarehousesMasterData(), fetchProducts()])
      .then(([c, w, p]) => {
        setClients(c);
        setWarehouses(w);
        setProducts(p);
      })
      .catch(() => {});
  }, []);

  const productsForSelectedClient = createFormData.clientId
    ? products.filter((p) => p.clientId === createFormData.clientId)
    : [];

  // PENDING orders belong to the approvals queue only; exclude them from this page
  const filteredOrders = orders.filter((o) => o.status !== 'بانتظار الموافقة');

  const addOrderItem = () => {
    setCreateFormData({
      ...createFormData,
      orderItems: [...createFormData.orderItems, { id: Date.now().toString(), productId: '', quantity: 0 }],
    });
  };

  const removeOrderItem = (id: string) => {
    setCreateFormData({
      ...createFormData,
      orderItems: createFormData.orderItems.filter(item => item.id !== id),
    });
  };

  const updateOrderItem = (id: string, field: 'productId' | 'quantity', value: string | number) => {
    setCreateFormData({
      ...createFormData,
      orderItems: createFormData.orderItems.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    });
  };

  const handleCreateOrder = async () => {
    if (!createFormData.clientId || !createFormData.warehouseId) return;
    setError(null);
    try {
      // تحقق من توافر الكمية لكل بند قبل إنشاء الطلب
      for (const item of createFormData.orderItems) {
        const qty = Number(item.quantity);
        if (!item.productId || qty <= 0) continue;
        const params = new URLSearchParams();
        params.set('clientId', createFormData.clientId);
        params.set('warehouseId', createFormData.warehouseId);
        params.set('productId', item.productId);
        const stockRows = await apiFetch<any[]>(
          `/inventory/current-stock?${params.toString()}`,
        );
        const available = (Array.isArray(stockRows) ? stockRows : []).reduce(
          (sum, row) =>
            sum +
            (typeof row.quantity === 'number'
              ? row.quantity
              : Number(row.quantity ?? 0)),
          0,
        );
        if (available <= 0 || available < qty) {
          throw new Error(
            'لا يمكن إنشاء طلب صادر لبند كميته المتاحة في المخزون غير كافية.',
          );
        }
      }

      const created = await createOutboundOrder({
        clientId: createFormData.clientId,
        warehouseId: createFormData.warehouseId,
        expectedShipDate: createFormData.expectedDate || undefined,
      });
      for (const item of createFormData.orderItems) {
        const qty = Number(item.quantity);
        if (!item.productId || qty <= 0) continue;
        const product = productsForSelectedClient.find((p) => p.id === item.productId) ?? products.find((p) => p.id === item.productId);
        if (!product?.defaultUomId) continue;
        await addOutboundOrderItem(created.id, {
          productId: item.productId,
          uomId: product.defaultUomId,
          qtyOrdered: qty,
        });
      }
      const list = await fetchOutboundOrders({
        clientId: clientFilter !== 'all' ? clientFilter : undefined,
        warehouseId: warehouseFilter !== 'all' ? warehouseFilter : undefined,
        status: statusFilter !== 'all' ? OUTBOUND_STATUS_TO_API[statusFilter] : undefined,
        expectedShipDateFrom: expectedShipDateFrom || undefined,
        expectedShipDateTo: expectedShipDateTo || undefined,
      });
      setOrders(list);
      setIsCreateDialogOpen(false);
      setCreateFormData({ clientId: '', warehouseId: '', expectedDate: '', notes: '', orderItems: [] });
    } catch (e) {
      setError(e instanceof Error ? e.message : 'فشل إنشاء الطلب');
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>الفلاتر</CardTitle>
            <Button onClick={() => setIsCreateDialogOpen(true)}>
              <Plus className="w-4 h-4 ml-2" />
              إنشاء طلب صادر
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">المستودع</label>
              <Select value={warehouseFilter || 'all'} onValueChange={(v) => setWarehouseFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر المستودع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  {warehouses.map((w) => (
                    <SelectItem key={w.id} value={w.id}>{w.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">العميل</label>
              <Select value={clientFilter || 'all'} onValueChange={(v) => setClientFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر العميل" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  {clients.map((c) => (
                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">الحالة</label>
              <Select value={statusFilter || 'all'} onValueChange={(v) => setStatusFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الحالة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="جديد">جديد</SelectItem>
                  <SelectItem value="قيد المعالجة">قيد المعالجة</SelectItem>
                  <SelectItem value="قيد الشحن">قيد الشحن</SelectItem>
                  <SelectItem value="مكتمل">مكتمل</SelectItem>
                  <SelectItem value="ملغي">ملغي</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">تاريخ الشحن المتوقع من</label>
              <Input
                type="date"
                value={expectedShipDateFrom}
                onChange={(e) => setExpectedShipDateFrom(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">تاريخ الشحن المتوقع إلى</label>
              <Input
                type="date"
                value={expectedShipDateTo}
                onChange={(e) => setExpectedShipDateTo(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardContent className="p-0">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md m-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          {filteredOrders.length > 0 && !loading && (
            <div className="p-4 border-b flex justify-end">
              <CsvButton
                columns={[
                  { key: 'orderId', label: 'رقم الطلب' },
                  { key: 'client', label: 'العميل' },
                  { key: 'warehouse', label: 'المستودع' },
                  { key: 'status', label: 'الحالة' },
                  { key: 'shipmentStatus', label: 'حالة الشحن' },
                  { key: 'expectedShipDate', label: 'تاريخ الشحن المتوقع' },
                  { key: 'shortageFlag', label: 'مؤشر النقص' },
                  { key: 'createdAt', label: 'تاريخ الإنشاء' },
                ]}
                data={filteredOrders}
                getRow={(o) => [o.orderId, o.client, o.warehouse, o.status, o.shipmentStatus, o.expectedShipDate, o.shortageFlag ? 'نعم' : 'لا', o.createdAt]}
                filename="طلبات-الصادر"
              />
            </div>
          )}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">رقم الطلب</TableHead>
                <TableHead className="text-right">العميل</TableHead>
                <TableHead className="text-right">المستودع</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">حالة الشحن</TableHead>
                <TableHead className="text-right">تاريخ الشحن المتوقع</TableHead>
                <TableHead className="text-right">مؤشر النقص</TableHead>
                <TableHead className="text-right">تاريخ الإنشاء</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={9} className="py-8 text-center text-sm text-gray-500">
                    جارِ تحميل طلبات الصادر...
                  </TableCell>
                </TableRow>
              ) : filteredOrders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="py-8 text-center text-sm text-gray-500">
                    لا توجد طلبات صادر مطابقة للفلاتر الحالية.
                  </TableCell>
                </TableRow>
              ) : (
                filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono">{order.orderId}</TableCell>
                  <TableCell>{order.client}</TableCell>
                  <TableCell>{order.warehouse}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === 'مكتمل' ? 'default' : order.status === 'ملغي' ? 'destructive' : 'secondary'}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={order.shipmentStatus === 'مكتمل' ? 'default' : 'outline'}>
                      {order.shipmentStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.expectedShipDate}</TableCell>
                  <TableCell>
                    {order.shortageFlag ? (
                      <Badge variant="destructive">
                        <AlertCircle className="w-3 h-3 ml-1" />
                        نقص
                      </Badge>
                    ) : (
                      <Badge variant="outline">-</Badge>
                    )}
                  </TableCell>
                  <TableCell className="font-mono text-sm">{order.createdAt}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onOpenOrder(order.id)}
                    >
                      <ExternalLink className="w-4 h-4 ml-2" />
                      فتح
                    </Button>
                  </TableCell>
                </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create Outbound Order Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>إنشاء طلب صادر جديد</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">العميل</label>
                <Select
                  value={createFormData.clientId}
                  onValueChange={(v) => {
                    setCreateFormData((prev) => {
                      const next = { ...prev, clientId: v };
                      const allowedIds = new Set(products.filter((p) => p.clientId === v).map((p) => p.id));
                      if (prev.orderItems.some((it) => it.productId && !allowedIds.has(it.productId)))
                        next.orderItems = prev.orderItems.map((it) => ({ ...it, productId: '', quantity: 0 }));
                      return next;
                    });
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر العميل" />
                  </SelectTrigger>
                  <SelectContent>
                    {clients.map((c) => (
                      <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">المستودع</label>
                <Select value={createFormData.warehouseId} onValueChange={(v) => setCreateFormData({ ...createFormData, warehouseId: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المستودع" />
                  </SelectTrigger>
                  <SelectContent>
                    {warehouses.map((w) => (
                      <SelectItem key={w.id} value={w.id}>{w.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">تاريخ الشحن المتوقع</label>
                <Input
                  type="date"
                  value={createFormData.expectedDate}
                  onChange={(e) => setCreateFormData({ ...createFormData, expectedDate: e.target.value })}
                />
              </div>
              <div className="space-y-2 col-span-2">
                <label className="text-sm font-medium">الملاحظات <span className="text-gray-400 text-xs">(اختياري)</span></label>
                <Textarea
                  value={createFormData.notes}
                  onChange={(e) => setCreateFormData({ ...createFormData, notes: e.target.value })}
                  placeholder="أدخل أي ملاحظات إضافية"
                  rows={4}
                />
              </div>
            </div>

            {/* Order Items */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">بنود الطلب</label>
                <Button type="button" variant="outline" size="sm" onClick={addOrderItem} disabled={!createFormData.clientId}>
                  <Plus className="w-4 h-4 ml-2" />
                  إضافة بند
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>المنتج</TableHead>
                    <TableHead>الكمية المطلوبة</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {createFormData.orderItems.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center text-gray-500 py-4">
                        {createFormData.clientId ? 'لا توجد بنود. اضغط على "إضافة بند" لإضافة منتج.' : 'اختر العميل أولاً ثم أضف البنود.'}
                      </TableCell>
                    </TableRow>
                  ) : (
                    createFormData.orderItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Select
                            value={item.productId}
                            onValueChange={(v) => updateOrderItem(item.id, 'productId', v)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="اختر المنتج" />
                            </SelectTrigger>
                            <SelectContent>
                              {productsForSelectedClient.map((p) => (
                                <SelectItem key={p.id} value={p.id}>{p.name} ({p.sku})</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity || ''}
                            onChange={(e) => updateOrderItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                            placeholder="الكمية"
                          />
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" onClick={() => removeOrderItem(item.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              إلغاء
            </Button>
            <Button onClick={handleCreateOrder} disabled={!createFormData.clientId || !createFormData.warehouseId}>
              إرسال الطلب
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function OutboundOrderWorkspacePage({ orderId, onBack }: { orderId: string; onBack: () => void }) {
  const [order, setOrder] = useState<OutboundOrderUi | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
  const [selectedStage, setSelectedStage] = useState<OutboundOrderStage | null>(null);
  const [selectedWorker, setSelectedWorker] = useState('');
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
  const [employees, setEmployees] = useState<{ id: string; firstName: string; lastName: string; email: string }[]>([]);
  const [stageTaskIds, setStageTaskIds] = useState<Record<string, string>>({});
  const [taskActionLoading, setTaskActionLoading] = useState(false);
  const [isApprovalsDialogOpen, setIsApprovalsDialogOpen] = useState(false);
  const [isLocationDialogOpen, setIsLocationDialogOpen] = useState(false);
  const [selectedLocationPath, setSelectedLocationPath] = useState('');

  useEffect(() => {
    let active = true;
    fetchOutboundOrder(orderId)
      .then((o) => {
        if (!active) return;
        setOrder(o);
        // بعد تحميل الطلب: جلب الكمية المتاحة لكل منتج من /inventory/current-stock
        if (o && o.clientId && o.warehouseId && o.items?.length) {
          const distinctProductIds = Array.from(
            new Set(o.items.map((it) => it.productId).filter(Boolean) as string[]),
          );
          Promise.all(
            distinctProductIds.map(async (pid) => {
              const params = new URLSearchParams();
              params.set('clientId', o.clientId!);
              params.set('warehouseId', o.warehouseId!);
              params.set('productId', pid);
              try {
                const rows = await apiFetch<any[]>(
                  `/inventory/current-stock?${params.toString()}`,
                );
                const total = (Array.isArray(rows) ? rows : []).reduce(
                  (sum, row) =>
                    sum +
                    (typeof row.quantity === 'number'
                      ? row.quantity
                      : Number(row.quantity ?? 0)),
                  0,
                );
                return { productId: pid, available: total };
              } catch {
                return { productId: pid, available: 0 };
              }
            }),
          ).then((availabilities) => {
            if (!active) return;
            const map = new Map<string, number>();
            availabilities.forEach((a) => map.set(a.productId, a.available));
            setOrder((prev) =>
              prev
                ? {
                    ...prev,
                    items: prev.items.map((it) => {
                      const available = it.productId
                        ? map.get(it.productId) ?? 0
                        : 0;
                      return {
                        ...it,
                        availableQuantity: available,
                        hasShortage: it.quantityOrdered > available,
                      };
                    }),
                  }
                : prev,
            );
          });
        }
        if (o?.id) {
          fetchTaskWorkOrders({ referenceId: o.id })
            .then((tasks) => {
              if (!active) return;
              const byStage: Record<string, string> = {};
              tasks.forEach((t) => {
                if (t.taskType === 'PICKING') byStage['انتقاء'] = t.id;
                else if (t.taskType === 'PACKING') byStage['تعبئة'] = t.id;
                else if (t.taskType === 'SHIPPING') byStage['شحن'] = t.id;
              });
              setStageTaskIds(byStage);
              if (o.stages && tasks.length > 0) {
                const taskById = Object.fromEntries(tasks.map((t) => [t.id, t]));
                const workerName = (t: (typeof tasks)[0]) =>
                  t.assignedUser
                    ? [t.assignedUser.firstName, t.assignedUser.lastName].filter(Boolean).join(' ') || t.assignedUser.email
                    : undefined;
                const newStages = o.stages.map((s) => {
                  const taskId = byStage[s.stage];
                  const task = taskId ? taskById[taskId] : undefined;
                  if (!task) return { ...s, status: 'pending' as const };
                  const status =
                    task.status === 'COMPLETED'
                      ? ('completed' as const)
                      : task.status === 'IN_PROGRESS' || task.status === 'ASSIGNED'
                        ? ('in-progress' as const)
                        : ('pending' as const);
                  return { ...s, status, assignedWorker: workerName(task) ?? s.assignedWorker };
                });
                setOrder((prev) => (prev ? { ...prev, stages: newStages } : prev));
              }
            })
            .catch(() => {});
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [orderId]);

  useEffect(() => {
    fetchUsers()
      .then((users) => {
        setEmployees(
          users.map((u) => ({
            id: u.id,
            firstName: u.firstName || '',
            lastName: u.lastName || '',
            email: u.email,
          })),
        );
      })
      .catch(() => setEmployees([]));
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">جارِ تحميل الطلب...</p>
      </div>
    );
  }
  if (!order) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">الطلب غير موجود</p>
        <Button onClick={onBack} className="mt-4">العودة</Button>
      </div>
    );
  }

  const currentOrder = order;

  const handleAssign = (stage: OutboundOrderStage) => {
    setSelectedStage(stage);
    setSelectedEmployeeId('');
    setSelectedWorker('');
    setIsAssignDialogOpen(true);
  };

  const handleAutoAssign = () => {
    if (!selectedStage || employees.length === 0) return;
    setSelectedEmployeeId(employees[0].id);
    setSelectedWorker(employees[0].id);
  };

  const handleStartTask = async () => {
    if (!selectedStage || !order || !order.clientId || !order.warehouseId) return;
    const userId = selectedEmployeeId || selectedWorker;
    if (!userId) return;
    setTaskActionLoading(true);
    try {
      // عند بدء مرحلة الانتقاء: إنشاء حجز وتخصيص الكميات المطلوبة لهذا الطلب (إن لم يكن هناك حجز سابق)
      if (selectedStage === 'انتقاء') {
        try {
          const itemsWithProduct = order.items.filter(
            (it) => it.productId && it.quantityRemaining > 0,
          );
          if (itemsWithProduct.length > 0) {
            await apiFetch(`/outbound-orders/${orderId}/reservations`, {
              method: 'POST',
              body: JSON.stringify({
                outboundOrderId: orderId,
                allocations: itemsWithProduct.map((it) => ({
                  outboundOrderItemId: it.id,
                  productId: it.productId,
                  reservedQty: it.quantityRemaining,
                })),
              }),
            });
          }
        } catch (e) {
          console.error('Create reservation for outbound order failed', e);
        }
      }

      const taskType = OUTBOUND_STAGE_TO_TASK_TYPE[selectedStage];
      const created = await createTaskWorkOrder({
        clientId: order.clientId,
        warehouseId: order.warehouseId,
        taskType,
        referenceType: 'OutboundOrder',
        referenceId: orderId,
      });
      await assignTaskWorkOrder(created.id, userId);
      await startTaskWorkOrder(created.id);
      const emp = employees.find((e) => e.id === userId);
      const name = emp ? `${emp.firstName} ${emp.lastName}`.trim() || emp.email : '-';
      setStageTaskIds((prev) => ({ ...prev, [selectedStage]: created.id }));
      if (order.stages) {
        setOrder({
          ...order,
          stages: order.stages.map((s) =>
            s.stage === selectedStage ? { ...s, assignedWorker: name, status: 'in-progress' as OutboundStageStatus } : s,
          ),
        });
      }
      setIsAssignDialogOpen(false);
      setSelectedStage(null);
      setSelectedEmployeeId('');
      setSelectedWorker('');
    } catch (e) {
      console.error('Start outbound task failed', e);
    } finally {
      setTaskActionLoading(false);
    }
  };

  const handleEndTask = async (stage: OutboundOrderStage) => {
    const taskId = stageTaskIds[stage];
    if (!taskId || !order?.stages) return;
    setTaskActionLoading(true);
    try {
      await completeTaskWorkOrder(taskId);
      // عند إنهاء مرحلة التعبئة: شحن كل الكميات الـ picked وخصمها من المخزون
      if (stage === 'تعبئة') {
        try {
          await apiFetch(`/outbound-orders/${orderId}/ship-all`, {
            method: 'POST',
          });
        } catch (err) {
          console.error('Auto ship (ship-all) failed', err);
        }
      }
      const stageIndex = order.stages.findIndex((s) => s.stage === stage);
      const nextStage = order.stages[stageIndex + 1];
      const newStages = order.stages.map((s) =>
        s.stage === stage ? { ...s, status: 'completed' as OutboundStageStatus } : s,
      );
      const isLastStage = stage === 'شحن' || nextStage?.stage === 'مكتمل' || !nextStage;
      if (nextStage && isLastStage) {
        const nextIdx = stageIndex + 1;
        if (newStages[nextIdx]) {
          newStages[nextIdx] = { ...newStages[nextIdx], status: 'completed' as OutboundStageStatus };
        }
      }
      setOrder({ ...order, stages: newStages });
      setStageTaskIds((prev) => {
        const next = { ...prev };
        delete next[stage];
        return next;
      });
      await updateOutboundOrder(orderId, {
        status: isLastStage ? 'COMPLETED' : 'IN_PROGRESS',
        currentStage: isLastStage ? 'مكتمل' : nextStage?.stage ?? stage,
      });
      const refreshed = await fetchOutboundOrder(orderId);
      if (refreshed) setOrder(refreshed);
    } catch (e) {
      console.error('End outbound task failed', e);
    } finally {
      setTaskActionLoading(false);
    }
  };

  const handleCancelOrder = async () => {
    if (!confirm('هل أنت متأكد من إلغاء هذا الطلب؟')) return;
    try {
      const updated = await updateOutboundOrder(orderId, { status: 'CANCELLED' });
      setOrder(updated);
    } catch {
      // keep current state on error
    }
  };

  const handleShowLocation = (locationPath: string) => {
    setSelectedLocationPath(locationPath);
    setIsLocationDialogOpen(true);
  };

  const getStageIcon = (status: OutboundStageStatus) => {
    if (status === 'completed') return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    if (status === 'in-progress') return <Clock className="w-5 h-5 text-blue-600" />;
    return <Circle className="w-5 h-5 text-gray-400" />;
  };

  const getStageStatusColor = (status: OutboundStageStatus) => {
    if (status === 'completed') return 'bg-green-500';
    if (status === 'in-progress') return 'bg-blue-500';
    return 'bg-gray-300';
  };

  const renderLocationTree = (path: string) => {
    const parts = path.split(' > ');
    return (
      <div className="space-y-2">
        {parts.map((part, index) => (
          <div key={index} className="flex items-center gap-2" style={{ paddingRight: `${index * 1.5}rem` }}>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{part}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="outline" onClick={onBack}>
        <ChevronRight className="w-4 h-4 ml-2" />
        العودة
      </Button>

      {/* Order Details Section */}
      <Card>
        <CardHeader>
          <CardTitle>تفاصيل الطلب</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-500">رقم الطلب</label>
              <p className="text-base font-semibold mt-1">{currentOrder.orderId}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">اسم العميل</label>
              <p className="text-base mt-1">{currentOrder.client}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">اسم المستودع</label>
              <p className="text-base mt-1">{currentOrder.warehouse}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">الحالة</label>
              <div className="mt-1">
                <Badge variant={currentOrder.status === 'مكتمل' ? 'default' : currentOrder.status === 'ملغي' ? 'destructive' : 'secondary'}>
                  {currentOrder.status}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">حالة الشحن</label>
              <div className="mt-1">
                <Badge variant={currentOrder.shipmentStatus === 'مكتمل' ? 'default' : 'outline'}>
                  {currentOrder.shipmentStatus}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">التاريخ المتوقع</label>
              <p className="text-base mt-1">{currentOrder.expectedShipDate}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Items Section */}
      <Card>
        <CardHeader>
          <CardTitle>البنود</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">اسم المنتج</TableHead>
                <TableHead className="text-right">الكمية المطلوبة</TableHead>
                <TableHead className="text-right">الكمية المشحونة</TableHead>
                <TableHead className="text-right">المتبقي</TableHead>
                <TableHead className="text-right">الكمية المتاحة</TableHead>
                <TableHead className="text-right">مؤشر النقص</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentOrder.items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell className="font-mono">{item.quantityOrdered}</TableCell>
                  <TableCell>
                    <Badge variant="default">{item.quantityShipped}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={item.quantityRemaining === 0 ? 'default' : 'secondary'}>
                      {item.quantityRemaining}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.availableQuantity}</TableCell>
                  <TableCell>
                    {item.hasShortage ? (
                      <Badge variant="destructive">
                        <AlertCircle className="w-3 h-3 ml-1" />
                        نقص
                      </Badge>
                    ) : (
                      <Badge variant="outline">-</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Allocation Section */}
      <Card>
        <CardHeader>
          <CardTitle>التخصيص</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">SKU المنتج</TableHead>
                <TableHead className="text-right">رمز الدفعة</TableHead>
                <TableHead className="text-right">تاريخ انتهاء الصلاحية</TableHead>
                <TableHead className="text-right">مؤشر التناوب</TableHead>
                <TableHead className="text-right">الموقع</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentOrder.allocations.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-gray-500 py-4">
                    لا توجد تخصيصات بعد
                  </TableCell>
                </TableRow>
              ) : (
                currentOrder.allocations.map((allocation) => (
                  <TableRow key={allocation.id}>
                    <TableCell className="font-mono">{allocation.productSKU}</TableCell>
                    <TableCell className="font-mono">{allocation.batchCode}</TableCell>
                    <TableCell>{allocation.expiredDate}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{allocation.rotationIndicator}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShowLocation(allocation.locationPath)}
                      >
                        <Eye className="w-4 h-4 ml-2" />
                        عرض الموقع
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Activity Timeline Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>خط زمني للنشاط</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => handleAssign('انتقاء')}>
                <ClipboardList className="w-4 h-4 ml-2" />
                فتح انتقاء
              </Button>
              <Button variant="outline" size="sm" onClick={() => setIsApprovalsDialogOpen(true)}>
                <FileCheck className="w-4 h-4 ml-2" />
                عرض الموافقات
              </Button>
              <Button variant="destructive" size="sm" onClick={handleCancelOrder}>
                <XCircle className="w-4 h-4 ml-2" />
                إلغاء الطلب
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between py-4">
            {currentOrder.stages.map((stage, index) => (
              <div key={stage.stage} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStageStatusColor(stage.status)}`}>
                    {getStageIcon(stage.status)}
                  </div>
                  <p className="text-sm font-medium mt-2">{stage.stage}</p>
                  {stage.assignedWorker && (
                    <p className="text-xs text-gray-500 mt-1">{stage.assignedWorker}</p>
                  )}
                  {stage.status === 'pending' && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => handleAssign(stage.stage)}
                    >
                      تعيين موظف
                    </Button>
                  )}
                  {stage.status === 'in-progress' && stageTaskIds[stage.stage] && (
                    <Button
                      variant="default"
                      size="sm"
                      className="mt-2"
                      disabled={taskActionLoading}
                      onClick={() => handleEndTask(stage.stage)}
                    >
                      {taskActionLoading ? 'جاري...' : 'إنهاء المهمة'}
                    </Button>
                  )}
                </div>
                {index < currentOrder.stages.length - 1 && (
                  <div className={`h-1 flex-1 mx-2 ${stage.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Assign & Start Task Dialog */}
      <Dialog open={isAssignDialogOpen} onOpenChange={setIsAssignDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تعيين موظف وبدء المهمة: {selectedStage}</DialogTitle>
            <DialogDescription>
              اختر الموظف ثم اضغط بدء المهمة. ستظهر المهمة في إدارة العمل.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">الموظف</label>
              <select
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
                value={selectedEmployeeId || selectedWorker}
                onChange={(e) => {
                  const v = e.target.value;
                  setSelectedEmployeeId(v);
                  setSelectedWorker(v);
                }}
              >
                <option value="">اختر الموظف</option>
                {employees.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.firstName} {emp.lastName} ({emp.email})
                  </option>
                ))}
              </select>
            </div>
            {employees.length > 0 && (
              <Button type="button" variant="outline" onClick={handleAutoAssign} className="w-full">
                <PackageSearch className="w-4 h-4 ml-2" />
                تعيين تلقائي
              </Button>
            )}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsAssignDialogOpen(false)}>
              إلغاء
            </Button>
            <Button
              type="button"
              onClick={handleStartTask}
              disabled={taskActionLoading || !(selectedEmployeeId || selectedWorker)}
            >
              {taskActionLoading ? 'جاري بدء المهمة...' : 'بدء المهمة'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Approvals Dialog */}
      <Dialog open={isApprovalsDialogOpen} onOpenChange={setIsApprovalsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>الموافقات المطلوبة</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {currentOrder.approvals && currentOrder.approvals.length > 0 ? (
              currentOrder.approvals.map((approval) => (
                <div key={approval.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{approval.type}</p>
                    <p className="text-sm text-gray-500">{approval.requestedAt}</p>
                  </div>
                  <Badge variant={approval.status === 'approved' ? 'default' : approval.status === 'rejected' ? 'destructive' : 'secondary'}>
                    {approval.status === 'approved' ? 'موافق عليه' : approval.status === 'rejected' ? 'مرفوض' : 'قيد الانتظار'}
                  </Badge>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">لا توجد موافقات مطلوبة</p>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsApprovalsDialogOpen(false)}>
              إغلاق
            </Button>
            {currentOrder.approvals?.some(a => a.status === 'pending') && (
              <Button>
                طلب الموافقات
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Location Tree Map Dialog */}
      <Dialog open={isLocationDialogOpen} onOpenChange={setIsLocationDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>خريطة الموقع</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            {selectedLocationPath && (
              <div className="space-y-2">
                <div className="p-4 bg-gray-50 rounded-lg">
                  {renderLocationTree(selectedLocationPath)}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  هذا هو المسار الكامل للموقع الذي يجب على العامل الذهاب إليه لانتقاء المنتج
                </p>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsLocationDialogOpen(false)}>
              إغلاق
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Inventory Types
type InventoryItem = {
  id: string; // internal current_stock row id
  productId: string;
  warehouse: string;
  client: string;
  sku: string;
  batchCode: string;
  expiredDate: string;
  location: string;
  quantity: number;
  minThreshold: number;
  lowStockFlag: boolean;
  lastMovementAt: string;
};

type InventoryMovementType = 'استلام' | 'شحن' | 'تعديل' | 'نقل' | 'إرجاع' | 'تلف';

type InventoryLedgerEntry = {
  id: string;
  timestamp: string;
  movementType: InventoryMovementType;
  sku: string;
  batch: string;
  location: string;
  quantityChange: number;
  quantityBefore: number;
  quantityAfter: number;
  user: string;
  referenceType: string;
  referenceId: string;
  notes?: string;
};

// Note: inventory data now comes from the backend `/inventory/current-stock` endpoint.

// Sample Ledger Data
// @ts-ignore - Used as fallback data
const initialLedgerData: InventoryLedgerEntry[] = [
  {
    id: '1',
    timestamp: '2026-02-02 10:15',
    movementType: 'استلام',
    sku: 'PROD-001',
    batch: 'BATCH-001',
    location: 'LOC-002',
    quantityChange: 50,
    quantityBefore: 100,
    quantityAfter: 150,
    user: 'أحمد محمد',
    referenceType: 'طلب وارد',
    referenceId: 'INB-00041',
    notes: 'استلام منتجات جديدة',
  },
  {
    id: '2',
    timestamp: '2026-02-01 14:20',
    movementType: 'شحن',
    sku: 'PROD-002',
    batch: 'BATCH-002',
    location: 'LOC-003',
    quantityChange: -20,
    quantityBefore: 50,
    quantityAfter: 30,
    user: 'فاطمة علي',
    referenceType: 'طلب صادر',
    referenceId: 'OUT-00018',
    notes: 'شحن للعميل',
  },
  {
    id: '3',
    timestamp: '2026-02-02 08:30',
    movementType: 'تعديل',
    sku: 'PROD-003',
    batch: 'BATCH-003',
    location: 'LOC-001',
    quantityChange: 10,
    quantityBefore: 190,
    quantityAfter: 200,
    user: 'خالد سعيد',
    referenceType: 'تعديل',
    referenceId: 'ADJ-00009',
    notes: 'تعديل المخزون',
  },
];

function InventoryPage({ onViewLedger }: { onViewLedger: (productId: string) => void }) {
  const [warehouseFilter, setWarehouseFilter] = useState('');
  const [clientFilter, setClientFilter] = useState('');
  const [skuFilter, setSkuFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [expiredFrom, setExpiredFrom] = useState('');
  const [expiredTo, setExpiredTo] = useState('');
  const [lowStockOnly, setLowStockOnly] = useState(false);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterWarehouses, setFilterWarehouses] = useState<{ id: string; name: string }[]>([]);
  const [filterClients, setFilterClients] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const [stock, clientsList, warehousesList] = await Promise.all([
          apiFetch<any[]>('/inventory/current-stock'),
          fetchClients(),
          fetchWarehousesMasterData(),
        ]);
        if (!active) return;
        setFilterClients(clientsList.map((c) => ({ id: c.id, name: c.name })));
        setFilterWarehouses(warehousesList.map((w) => ({ id: w.id, name: w.name })));
        const mapped: InventoryItem[] = stock.map((row) => ({
          id: row.id,
          productId: row.product?.id || '',
          warehouse: row.warehouse?.name || row.warehouse?.code || '',
          client: row.client?.name || row.client?.code || '',
          sku: row.product?.sku || '',
          batchCode: row.batch?.batchCode || '-',
          expiredDate: row.batch?.expiryDate || '',
          location: row.location?.code || '',
          quantity:
            typeof row.quantity === 'string'
              ? Number(row.quantity)
              : Number(row.quantity ?? 0),
          minThreshold: 0,
          lowStockFlag: false,
          lastMovementAt: row.updatedAt
            ? new Date(row.updatedAt).toISOString().slice(0, 16).replace('T', ' ')
            : '',
        }));
        setInventory(mapped);
      } catch (e) {
        console.error('Failed to load current stock', e);
        if (active) {
          setError('تعذر تحميل المخزون الحالي. يرجى المحاولة مرة أخرى.');
        }
      } finally {
        if (active) setLoading(false);
      }
    }
    void load();
    return () => {
      active = false;
    };
  }, []);

  const filteredInventory = inventory.filter((item) => {
    if (warehouseFilter && warehouseFilter !== 'all' && item.warehouse !== warehouseFilter) return false;
    if (clientFilter && clientFilter !== 'all' && item.client !== clientFilter) return false;
    if (skuFilter && !item.sku.toLowerCase().includes(skuFilter.toLowerCase())) return false;
    if (locationFilter && !item.location.toLowerCase().includes(locationFilter.toLowerCase())) return false;
    if (expiredFrom && item.expiredDate < expiredFrom) return false;
    if (expiredTo && item.expiredDate > expiredTo) return false;
    if (lowStockOnly && !item.lowStockFlag) return false;
    return true;
  });

  const handleRowClick = (item: InventoryItem) => {
    setSelectedItem(item);
    setIsDetailsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          {error}
        </div>
      )}
      {/* Filters Section */}
      <Card>
        <CardHeader>
          <CardTitle>الفلاتر</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">المستودع</label>
              <Select value={warehouseFilter || 'all'} onValueChange={(v) => setWarehouseFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر المستودع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  {filterWarehouses.map((w) => (
                    <SelectItem key={w.id} value={w.name}>{w.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">العميل</label>
              <Select value={clientFilter || 'all'} onValueChange={(v) => setClientFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر العميل" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  {filterClients.map((c) => (
                    <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">SKU</label>
              <Input
                value={skuFilter}
                onChange={(e) => setSkuFilter(e.target.value)}
                placeholder="ابحث بـ SKU"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">الموقع</label>
              <Input
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                placeholder="ابحث بالموقع"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">انتهاء الصلاحية من</label>
              <Input
                type="date"
                value={expiredFrom}
                onChange={(e) => setExpiredFrom(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">انتهاء الصلاحية إلى</label>
              <Input
                type="date"
                value={expiredTo}
                onChange={(e) => setExpiredTo(e.target.value)}
              />
            </div>
            <div className="space-y-2 flex items-end">
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={lowStockOnly}
                  onCheckedChange={(checked) => setLowStockOnly(checked === true)}
                />
                <label className="text-sm font-medium">نقص المخزون فقط</label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inventory Table */}
      <Card>
        <CardContent className="p-0">
          {filteredInventory.length > 0 && !loading && (
            <div className="p-4 border-b flex justify-end">
              <CsvButton
                columns={[
                  { key: 'warehouse', label: 'المستودع' },
                  { key: 'client', label: 'العميل' },
                  { key: 'sku', label: 'SKU' },
                  { key: 'batchCode', label: 'رمز الدفعة' },
                  { key: 'expiredDate', label: 'تاريخ انتهاء الصلاحية' },
                  { key: 'location', label: 'الموقع' },
                  { key: 'quantity', label: 'الكمية' },
                  { key: 'minThreshold', label: 'الحد الأدنى' },
                  { key: 'lowStockFlag', label: 'مؤشر النقص' },
                  { key: 'lastMovementAt', label: 'آخر حركة في' },
                ]}
                data={filteredInventory}
                getRow={(i) => [i.warehouse, i.client, i.sku, i.batchCode ?? '', i.expiredDate ?? '', i.location ?? '', i.quantity, i.minThreshold ?? '', i.lowStockFlag ? 'نعم' : 'لا', i.lastMovementAt ?? '']}
                filename="المخزون"
              />
            </div>
          )}
          {loading ? (
            <div className="py-8 text-center text-sm text-gray-500">
              جارِ تحميل بيانات المخزون...
            </div>
          ) : filteredInventory.length === 0 ? (
            <div className="py-8 text-center text-sm text-gray-500">
              لا توجد عناصر مخزون مطابقة للفلاتر الحالية.
            </div>
          ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">المستودع</TableHead>
                <TableHead className="text-right">العميل</TableHead>
                <TableHead className="text-right">SKU</TableHead>
                <TableHead className="text-right">رمز الدفعة</TableHead>
                <TableHead className="text-right">تاريخ انتهاء الصلاحية</TableHead>
                <TableHead className="text-right">الموقع</TableHead>
                <TableHead className="text-right">الكمية</TableHead>
                <TableHead className="text-right">الحد الأدنى</TableHead>
                <TableHead className="text-right">مؤشر النقص</TableHead>
                <TableHead className="text-right">آخر حركة في</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map((item) => (
                <TableRow
                  key={item.id}
                  onClick={() => handleRowClick(item)}
                  className="cursor-pointer hover:bg-gray-50"
                >
                  <TableCell>{item.warehouse}</TableCell>
                  <TableCell>{item.client}</TableCell>
                  <TableCell className="font-mono">{item.sku}</TableCell>
                  <TableCell className="font-mono">{item.batchCode}</TableCell>
                  <TableCell>{item.expiredDate}</TableCell>
                  <TableCell className="font-mono">{item.location}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.minThreshold}</TableCell>
                  <TableCell>
                    {item.lowStockFlag ? (
                      <Badge variant="destructive">
                        <AlertCircle className="w-3 h-3 ml-1" />
                        نقص
                      </Badge>
                    ) : (
                      <Badge variant="outline">-</Badge>
                    )}
                  </TableCell>
                  <TableCell className="font-mono text-sm">{item.lastMovementAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          )}
        </CardContent>
      </Card>

      {/* Item Details Dialog */}
      <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>تفاصيل المخزون</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">المستودع</label>
                  <p className="text-base mt-1">{selectedItem.warehouse}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">العميل</label>
                  <p className="text-base mt-1">{selectedItem.client}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">SKU</label>
                  <p className="text-base font-mono mt-1">{selectedItem.sku}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">رمز الدفعة</label>
                  <p className="text-base font-mono mt-1">{selectedItem.batchCode}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">تاريخ انتهاء الصلاحية</label>
                  <p className="text-base mt-1">{selectedItem.expiredDate}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">الموقع</label>
                  <p className="text-base font-mono mt-1">{selectedItem.location}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">الكمية</label>
                  <p className="text-base font-semibold mt-1">{selectedItem.quantity}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">الحد الأدنى</label>
                  <p className="text-base mt-1">{selectedItem.minThreshold}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">مؤشر النقص</label>
                  <div className="mt-1">
                    {selectedItem.lowStockFlag ? (
                      <Badge variant="destructive">
                        <AlertCircle className="w-3 h-3 ml-1" />
                        نقص
                      </Badge>
                    ) : (
                      <Badge variant="outline">طبيعي</Badge>
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">آخر حركة في</label>
                  <p className="text-base font-mono text-sm mt-1">{selectedItem.lastMovementAt}</p>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDetailsDialogOpen(false)}>
              إغلاق
            </Button>
            {selectedItem && (
              <Button onClick={() => {
                setIsDetailsDialogOpen(false);
              onViewLedger(selectedItem.productId || '');
              }}>
                <FileText className="w-4 h-4 ml-2" />
                عرض السجل
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function InventoryLedgerPage({ itemId, onBack }: { itemId: string; onBack: () => void }) {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [movementTypeFilter, setMovementTypeFilter] = useState('');
  const [warehouseFilter, setWarehouseFilter] = useState('');
  const [clientFilter, setClientFilter] = useState('');
  const [skuFilter, setSkuFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [batchFilter, setBatchFilter] = useState('');
  const [referenceTypeFilter, setReferenceTypeFilter] = useState('');
  const [referenceIdFilter, setReferenceIdFilter] = useState('');
  const [ledgerEntries, setLedgerEntries] = useState<InventoryLedgerEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedEntry, setSelectedEntry] = useState<InventoryLedgerEntry | null>(null);
  const [isEntryDialogOpen, setIsEntryDialogOpen] = useState(false);
  const [isLocationDialogOpen, setIsLocationDialogOpen] = useState(false);
  const [selectedLocationPath, setSelectedLocationPath] = useState('');
  const [filterWarehouses, setFilterWarehouses] = useState<{ id: string; name: string }[]>([]);
  const [filterClients, setFilterClients] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    let active = true;
    const movementTypeMap: Record<string, string> = {
      استلام: 'RECEIPT',
      شحن: 'SHIPMENT',
      تعديل: 'ADJUSTMENT',
      نقل: 'TRANSFER',
      إرجاع: 'RETURN',
      تلف: 'DAMAGE',
    };
    const movementTypeLabel: Record<string, InventoryMovementType> = {
      RECEIPT: 'استلام',
      SHIPMENT: 'شحن',
      ADJUSTMENT: 'تعديل',
      TRANSFER: 'نقل',
      RETURN: 'إرجاع',
      DAMAGE: 'تلف',
    };
    const toNumber = (v: unknown): number => {
      if (typeof v === 'number') return v;
      if (v && typeof v === 'object' && 'toNumber' in v) {
        return (v as { toNumber: () => number }).toNumber();
      }
      return Number(v) || 0;
    };
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const params = new URLSearchParams();
        if (dateFrom) params.set('dateFrom', dateFrom);
        if (dateTo) params.set('dateTo', dateTo);
        if (movementTypeFilter && movementTypeFilter !== 'all') {
          const mt = movementTypeMap[movementTypeFilter];
          if (mt) params.set('movementType', mt);
        }
        if (itemId) {
          params.set('productId', itemId);
        }
        const qs = params.toString();
        const [rows, clientsList, warehousesList] = await Promise.all([
          apiFetch<any[]>(`/inventory/ledger${qs ? `?${qs}` : ''}`),
          fetchClients(),
          fetchWarehousesMasterData(),
        ]);
        if (!active) return;
        setFilterClients(clientsList.map((c) => ({ id: c.id, name: c.name })));
        setFilterWarehouses(warehousesList.map((w) => ({ id: w.id, name: w.name })));
        const mapped: InventoryLedgerEntry[] = rows.map((row) => ({
          id: row.id,
          timestamp: row.createdAt
            ? new Date(row.createdAt).toISOString().slice(0, 16).replace('T', ' ')
            : '',
          movementType: movementTypeLabel[row.movementType] || (row.movementType as InventoryMovementType),
          sku: row.product?.sku || '',
          batch: row.batch?.batchCode || '-',
          location: row.location?.code || '',
          quantityChange: toNumber(row.qtyChange),
          quantityBefore: toNumber(row.qtyBefore),
          quantityAfter: toNumber(row.qtyAfter),
          user: '-',
          referenceType: row.referenceType || '',
          referenceId: row.referenceId || '',
          notes: '',
        }));
        setLedgerEntries(mapped);
      } catch (e) {
        console.error('Failed to load inventory ledger', e);
        if (active) {
          setError('تعذر تحميل سجل المخزون. يرجى المحاولة مرة أخرى.');
        }
      } finally {
        if (active) setLoading(false);
      }
    }
    void load();
    return () => {
      active = false;
    };
  }, [itemId, dateFrom, dateTo, movementTypeFilter]);

  const filteredEntries = ledgerEntries.filter((entry) => {
    if (dateFrom && entry.timestamp < dateFrom) return false;
    if (dateTo && entry.timestamp > dateTo) return false;
    if (movementTypeFilter && movementTypeFilter !== 'all' && entry.movementType !== movementTypeFilter) return false;
    if (warehouseFilter && warehouseFilter !== 'all') return false; // Would filter by warehouse if we had that data
    if (clientFilter && clientFilter !== 'all') return false; // Would filter by client if we had that data
    if (skuFilter && !entry.sku.toLowerCase().includes(skuFilter.toLowerCase())) return false;
    if (locationFilter && !entry.location.toLowerCase().includes(locationFilter.toLowerCase())) return false;
    if (batchFilter && !entry.batch.toLowerCase().includes(batchFilter.toLowerCase())) return false;
    if (referenceTypeFilter && !entry.referenceType.toLowerCase().includes(referenceTypeFilter.toLowerCase())) return false;
    if (referenceIdFilter && !entry.referenceId.toLowerCase().includes(referenceIdFilter.toLowerCase())) return false;
    return true;
  });

  const handleRowClick = (entry: InventoryLedgerEntry) => {
    setSelectedEntry(entry);
    setIsEntryDialogOpen(true);
  };

  const handleLocationClick = (location: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // Generate location path based on location code
    const locationPath = `المستودع الرئيسي > المنطقة أ > ${location}`;
    setSelectedLocationPath(locationPath);
    setIsLocationDialogOpen(true);
  };

  const renderLocationTree = (path: string) => {
    const parts = path.split(' > ');
    return (
      <div className="space-y-2">
        {parts.map((part, index) => (
          <div key={index} className="flex items-center gap-2" style={{ paddingRight: `${index * 1.5}rem` }}>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{part}</span>
          </div>
        ))}
      </div>
    );
  };

  const getMovementTypeIcon = (type: InventoryMovementType) => {
    if (type === 'استلام' || type === 'إرجاع') return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (type === 'شحن' || type === 'تلف') return <TrendingDown className="w-4 h-4 text-red-600" />;
    return <PackageSearch className="w-4 h-4 text-blue-600" />;
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="outline" onClick={onBack}>
        <ChevronRight className="w-4 h-4 ml-2" />
        العودة
      </Button>

      {/* Filters Section */}
      <Card>
        <CardHeader>
          <CardTitle>الفلاتر</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">التاريخ من</label>
              <Input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">التاريخ إلى</label>
              <Input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">نوع الحركة</label>
              <Select value={movementTypeFilter || 'all'} onValueChange={(v) => setMovementTypeFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع الحركة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="استلام">استلام</SelectItem>
                  <SelectItem value="شحن">شحن</SelectItem>
                  <SelectItem value="تعديل">تعديل</SelectItem>
                  <SelectItem value="نقل">نقل</SelectItem>
                  <SelectItem value="إرجاع">إرجاع</SelectItem>
                  <SelectItem value="تلف">تلف</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">المستودع</label>
              <Select value={warehouseFilter || 'all'} onValueChange={(v) => setWarehouseFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر المستودع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  {filterWarehouseOptions.map((w) => (
                    <SelectItem key={w.id} value={w.id}>{w.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">العميل</label>
              <Select value={clientFilter || 'all'} onValueChange={(v) => setClientFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر العميل" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  {filterClientOptions.map((c) => (
                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">SKU</label>
              <Input
                value={skuFilter}
                onChange={(e) => setSkuFilter(e.target.value)}
                placeholder="ابحث بـ SKU"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">الموقع</label>
              <Input
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                placeholder="ابحث بالموقع"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">الدفعة</label>
              <Input
                value={batchFilter}
                onChange={(e) => setBatchFilter(e.target.value)}
                placeholder="ابحث بالدفعة"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">نوع المرجع</label>
              <Input
                value={referenceTypeFilter}
                onChange={(e) => setReferenceTypeFilter(e.target.value)}
                placeholder="ابحث بنوع المرجع"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">رقم المرجع</label>
              <Input
                value={referenceIdFilter}
                onChange={(e) => setReferenceIdFilter(e.target.value)}
                placeholder="ابحث برقم المرجع"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ledger Table */}
      <Card>
        <CardContent className="p-0">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md m-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          {filteredEntries.length > 0 && !loading && (
            <div className="p-4 border-b flex justify-end">
              <CsvButton
                columns={[
                  { key: 'timestamp', label: 'الوقت' },
                  { key: 'movementType', label: 'نوع الحركة' },
                  { key: 'sku', label: 'SKU' },
                  { key: 'batch', label: 'الدفعة' },
                  { key: 'location', label: 'الموقع' },
                  { key: 'quantityChange', label: 'تغيير الكمية' },
                  { key: 'quantityBefore', label: 'الكمية قبل' },
                  { key: 'quantityAfter', label: 'الكمية بعد' },
                  { key: 'user', label: 'المستخدم' },
                  { key: 'referenceType', label: 'نوع المرجع' },
                  { key: 'referenceId', label: 'رقم المرجع' },
                ]}
                data={filteredEntries}
                getRow={(e) => [e.timestamp, e.movementType, e.sku, e.batch ?? '', e.location ?? '', e.quantityChange, e.quantityBefore, e.quantityAfter, e.user ?? '', e.referenceType ?? '', e.referenceId ?? '']}
                filename="سجل-المخزون"
              />
            </div>
          )}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">الوقت</TableHead>
                <TableHead className="text-right">نوع الحركة</TableHead>
                <TableHead className="text-right">SKU</TableHead>
                <TableHead className="text-right">الدفعة</TableHead>
                <TableHead className="text-right">الموقع</TableHead>
                <TableHead className="text-right">تغيير الكمية</TableHead>
                <TableHead className="text-right">الكمية قبل</TableHead>
                <TableHead className="text-right">الكمية بعد</TableHead>
                <TableHead className="text-right">المستخدم</TableHead>
                <TableHead className="text-right">نوع المرجع</TableHead>
                <TableHead className="text-right">رقم المرجع</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={11} className="py-8 text-center text-sm text-gray-500">
                    جارِ تحميل سجل المخزون...
                  </TableCell>
                </TableRow>
              ) : filteredEntries.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={11} className="py-8 text-center text-sm text-gray-500">
                    لا توجد حركات مطابقة للفلاتر الحالية.
                  </TableCell>
                </TableRow>
              ) : (
                filteredEntries.map((entry) => (
                <TableRow
                  key={entry.id}
                  onClick={() => handleRowClick(entry)}
                  className="cursor-pointer hover:bg-gray-50"
                >
                  <TableCell className="font-mono text-sm">{entry.timestamp}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getMovementTypeIcon(entry.movementType)}
                      <span>{entry.movementType}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono">{entry.sku}</TableCell>
                  <TableCell className="font-mono">{entry.batch}</TableCell>
                  <TableCell>
                    <Button
                      variant="link"
                      size="sm"
                      className="h-auto p-0"
                      onClick={(e) => handleLocationClick(entry.location, e)}
                    >
                      <MapPin className="w-3 h-3 ml-1" />
                      {entry.location}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Badge variant={entry.quantityChange > 0 ? 'default' : 'destructive'}>
                      {entry.quantityChange > 0 ? '+' : ''}{entry.quantityChange}
                    </Badge>
                  </TableCell>
                  <TableCell>{entry.quantityBefore}</TableCell>
                  <TableCell>{entry.quantityAfter}</TableCell>
                  <TableCell>{entry.user}</TableCell>
                  <TableCell>{entry.referenceType}</TableCell>
                  <TableCell className="font-mono">{entry.referenceId}</TableCell>
                </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Entry Details Dialog */}
      <Dialog open={isEntryDialogOpen} onOpenChange={setIsEntryDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>تفاصيل الحركة</DialogTitle>
          </DialogHeader>
          {selectedEntry && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">الوقت</label>
                  <p className="text-base font-mono mt-1">{selectedEntry.timestamp}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">نوع الحركة</label>
                  <div className="flex items-center gap-2 mt-1">
                    {getMovementTypeIcon(selectedEntry.movementType)}
                    <span>{selectedEntry.movementType}</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">SKU</label>
                  <p className="text-base font-mono mt-1">{selectedEntry.sku}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">رمز الدفعة</label>
                  <p className="text-base font-mono mt-1">{selectedEntry.batch}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">الموقع</label>
                  <div className="mt-1">
                    <Button
                      variant="link"
                      size="sm"
                      className="h-auto p-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        const locationPath = `المستودع الرئيسي > المنطقة أ > ${selectedEntry.location}`;
                        setSelectedLocationPath(locationPath);
                        setIsLocationDialogOpen(true);
                      }}
                    >
                      <MapPin className="w-3 h-3 ml-1" />
                      {selectedEntry.location}
                    </Button>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">تغيير الكمية</label>
                  <div className="mt-1">
                    <Badge variant={selectedEntry.quantityChange > 0 ? 'default' : 'destructive'}>
                      {selectedEntry.quantityChange > 0 ? '+' : ''}{selectedEntry.quantityChange}
                    </Badge>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">الكمية قبل</label>
                  <p className="text-base mt-1">{selectedEntry.quantityBefore}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">الكمية بعد</label>
                  <p className="text-base mt-1">{selectedEntry.quantityAfter}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">المستخدم</label>
                  <p className="text-base mt-1">{selectedEntry.user}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">نوع المرجع</label>
                  <p className="text-base mt-1">{selectedEntry.referenceType}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">رقم المرجع</label>
                  <p className="text-base font-mono mt-1">{selectedEntry.referenceId}</p>
                </div>
                {selectedEntry.notes && (
                  <div className="col-span-2">
                    <label className="text-sm font-medium text-gray-500">الملاحظات</label>
                    <p className="text-base mt-1">{selectedEntry.notes}</p>
                  </div>
                )}
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEntryDialogOpen(false)}>
              إغلاق
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Location Tree Dialog */}
      <Dialog open={isLocationDialogOpen} onOpenChange={setIsLocationDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>خريطة الموقع</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            {selectedLocationPath && (
              <div className="space-y-2">
                <div className="p-4 bg-gray-50 rounded-lg">
                  {renderLocationTree(selectedLocationPath)}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  هذا هو المسار الكامل للموقع
                </p>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsLocationDialogOpen(false)}>
              إغلاق
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Adjustment Types
type AdjustmentStatus = 'قيد الانتظار' | 'موافق عليه' | 'مرفوض';
type AdjustmentReason = 'تلف' | 'فقدان' | 'عد' | 'تعديل' | 'أخرى';

type Adjustment = {
  id: string;
  requestedAt: string; // formatted for display
  requestedAtRaw?: string; // ISO/raw datetime for filtering
  clientId?: string;
  warehouseId?: string;
  client: string;
  warehouse: string;
  sku: string;
  batch?: string;
  location: string;
  quantityChange: number;
  reason: AdjustmentReason;
  status: AdjustmentStatus;
  requestedBy: string;
  declineNote?: string;
};

// UI status -> backend enum
const ADJUSTMENT_STATUS_TO_API: Record<AdjustmentStatus, string> = {
  'قيد الانتظار': 'PENDING',
  'موافق عليه': 'APPROVED',
  'مرفوض': 'REJECTED',
};

// Sample Adjustment Data
const initialAdjustmentsData: Adjustment[] = [
  {
    id: '1',
    requestedAt: '2026-02-02 10:15',
    client: 'شركة التقنية المتقدمة',
    warehouse: 'المستودع الرئيسي - الرياض',
    sku: 'PROD-001',
    batch: 'BATCH-001',
    location: 'LOC-002',
    quantityChange: -5,
    reason: 'تلف',
    status: 'قيد الانتظار',
    requestedBy: 'أحمد محمد',
  },
  {
    id: '2',
    requestedAt: '2026-02-01 14:20',
    client: 'مؤسسة التجارة الإلكترونية',
    warehouse: 'مستودع جدة',
    sku: 'PROD-002',
    location: 'LOC-003',
    quantityChange: 10,
    reason: 'عد',
    status: 'قيد الانتظار',
    requestedBy: 'فاطمة علي',
  },
  {
    id: '3',
    requestedAt: '2026-02-02 08:30',
    client: 'شركة التوزيع الحديثة',
    warehouse: 'المستودع الرئيسي - الرياض',
    sku: 'PROD-003',
    batch: 'BATCH-003',
    location: 'LOC-001',
    quantityChange: -2,
    reason: 'فقدان',
    status: 'موافق عليه',
    requestedBy: 'خالد سعيد',
  },
];

function AdjustmentsPage() {
  const [warehouseFilter, setWarehouseFilter] = useState('');
  const [clientFilter, setClientFilter] = useState('');
  const [skuFilter, setSkuFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [adjustments, setAdjustments] = useState<Adjustment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isDeclineDialogOpen, setIsDeclineDialogOpen] = useState(false);
  const [selectedAdjustment, setSelectedAdjustment] = useState<Adjustment | null>(null);
  const [declineNote, setDeclineNote] = useState('');
  const [createFormData, setCreateFormData] = useState<{
    clientId: string;
    warehouseId: string;
    productId: string;
    quantityChange: number;
    reason: AdjustmentReason | '';
  }>({
    clientId: '',
    warehouseId: '',
    productId: '',
    quantityChange: 0,
    reason: '' as AdjustmentReason | '',
  });
  const [clientsOptions, setClientsOptions] = useState<ClientUi[]>([]);
  const [warehousesOptions, setWarehousesOptions] = useState<WarehouseUi[]>([]);
  const [productsOptions, setProductsOptions] = useState<ProductUi[]>([]);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const params = new URLSearchParams();
        if (clientFilter && clientFilter !== 'all') params.set('clientId', clientFilter);
        if (warehouseFilter && warehouseFilter !== 'all') params.set('warehouseId', warehouseFilter);
        if (statusFilter && statusFilter !== 'all') {
          const apiStatus = ADJUSTMENT_STATUS_TO_API[statusFilter as AdjustmentStatus];
          if (apiStatus) params.set('status', apiStatus);
        }
        const qs = params.toString();
        const data = await apiFetch<any[]>(`/adjustments${qs ? `?${qs}` : ''}`);
        if (!active) return;
        const mapped: Adjustment[] = data.map((adj) => {
          const iso = adj.createdAt ? new Date(adj.createdAt).toISOString() : '';
          return {
            id: adj.id,
            requestedAt: adj.createdAt
              ? new Date(adj.createdAt).toLocaleString('ar-SA')
              : '',
            requestedAtRaw: iso,
            clientId: adj.clientId ?? adj.client?.id,
            warehouseId: adj.warehouseId ?? adj.warehouse?.id,
            client: adj.client?.name || '',
            warehouse: adj.warehouse?.name || '',
            sku: adj.product?.sku || '',
            batch: adj.batch?.batchCode || '',
            location: adj.location?.code || '',
            quantityChange:
              typeof adj.qtyChange === 'number'
                ? adj.qtyChange
                : Number(adj.qtyChange || 0),
            reason: (adj.reason || 'أخرى') as AdjustmentReason,
            status:
              (adj.status === 'APPROVED'
                ? 'موافق عليه'
                : adj.status === 'REJECTED'
                ? 'مرفوض'
                : 'قيد الانتظار') as AdjustmentStatus,
            requestedBy:
              adj.createdByActor?.user?.email ||
              adj.createdByActor?.clientAccount?.email ||
              '-',
          };
        });
        setAdjustments(mapped);
      } catch (e: any) {
        console.error('Failed to load adjustments', e);
        if (active) {
          setError('تعذر تحميل التعديلات. يرجى المحاولة مرة أخرى.');
          setAdjustments([]);
        }
      } finally {
        if (active) setLoading(false);
      }
    }
    void load();
    return () => { active = false; };
  }, [clientFilter, warehouseFilter, statusFilter]);

  // اشتقاق خيارات العملاء/المستودعات من التعديلات نفسها (حتى لو فشل تحميل master data)
  const filterClientOptions = useMemo(
    () =>
      Array.from(
        new Map(
          adjustments
            .filter((a) => a.clientId && a.client)
            .map((a) => [a.clientId as string, { id: a.clientId as string, name: a.client }]),
        ).values(),
      ),
    [adjustments],
  );

  const filterWarehouseOptions = useMemo(
    () =>
      Array.from(
        new Map(
          adjustments
            .filter((a) => a.warehouseId && a.warehouse)
            .map((a) => [a.warehouseId as string, { id: a.warehouseId as string, name: a.warehouse }]),
        ).values(),
      ),
    [adjustments],
  );

  // تحميل قوائم العملاء / المستودعات / المنتجات لإنشاء تعديل ديناميكيًا
  useEffect(() => {
    Promise.all([fetchClients(), fetchWarehousesMasterData(), fetchProducts()])
      .then(([c, w, p]) => {
        setClientsOptions(c);
        setWarehousesOptions(w);
        setProductsOptions(p);
      })
      .catch(() => {
        setClientsOptions([]);
        setWarehousesOptions([]);
        setProductsOptions([]);
      });
  }, []);

  const filteredAdjustments = adjustments.filter((adjustment) => {
    if (warehouseFilter && warehouseFilter !== 'all' && adjustment.warehouse !== warehouseFilter) return false;
    if (clientFilter && clientFilter !== 'all' && adjustment.client !== clientFilter) return false;
    if (skuFilter && !adjustment.sku.toLowerCase().includes(skuFilter.toLowerCase())) return false;
    if (statusFilter && statusFilter !== 'all' && adjustment.status !== statusFilter) return false;
    if (dateFrom) {
      const d = adjustment.requestedAtRaw ? adjustment.requestedAtRaw.slice(0, 10) : '';
      if (!d || d < dateFrom) return false;
    }
    if (dateTo) {
      const d = adjustment.requestedAtRaw ? adjustment.requestedAtRaw.slice(0, 10) : '';
      if (!d || d > dateTo) return false;
    }
    return true;
  });

  const handleAccept = async (adjustmentId: string) => {
    try {
      setError(null);
      const updated = await apiFetch<any>(`/adjustments/${adjustmentId}/apply`, {
        method: 'POST',
      });
      const mapped: Adjustment = {
        id: updated.id,
        requestedAt: updated.createdAt ? new Date(updated.createdAt).toLocaleString('ar-SA') : '',
        requestedAtRaw: updated.createdAt ? new Date(updated.createdAt).toISOString() : '',
        client: updated.client?.name || '',
        warehouse: updated.warehouse?.name || '',
        sku: updated.product?.sku || '',
        batch: updated.batch?.batchCode || '',
        location: updated.location?.code || '',
        quantityChange:
          typeof updated.qtyChange === 'number'
            ? updated.qtyChange
            : Number(updated.qtyChange || 0),
        reason: (updated.reason || 'أخرى') as AdjustmentReason,
        status: 'موافق عليه',
        requestedBy:
          updated.createdByActor?.user?.email ||
          updated.createdByActor?.clientAccount?.email ||
          '-',
      };
      setAdjustments(adjustments.map((adj) => (adj.id === adjustmentId ? mapped : adj)));
    } catch (e: any) {
      setError(
        e instanceof Error
          ? e.message
          : 'فشل تطبيق التعديل. يرجى التأكد من الموافقات أولاً.',
      );
    }
  };

  const handleDecline = (adjustment: Adjustment) => {
    setSelectedAdjustment(adjustment);
    setDeclineNote('');
    setIsDeclineDialogOpen(true);
  };

  const handleConfirmDecline = async () => {
    if (!selectedAdjustment) return;
    try {
      setError(null);
      const updated = await apiFetch<any>(
        `/adjustments/${selectedAdjustment.id}/reject`,
        {
          method: 'POST',
          body: JSON.stringify({ reason: declineNote || undefined }),
        },
      );
      const mapped: Adjustment = {
        id: updated.id,
        requestedAt: updated.createdAt ? new Date(updated.createdAt).toLocaleString('ar-SA') : '',
        requestedAtRaw: updated.createdAt ? new Date(updated.createdAt).toISOString() : '',
        client: updated.client?.name || '',
        warehouse: updated.warehouse?.name || '',
        sku: updated.product?.sku || '',
        batch: updated.batch?.batchCode || '',
        location: updated.location?.code || '',
        quantityChange:
          typeof updated.qtyChange === 'number'
            ? updated.qtyChange
            : Number(updated.qtyChange || 0),
        reason: (updated.reason || 'أخرى') as AdjustmentReason,
        status: 'مرفوض',
        requestedBy:
          updated.createdByActor?.user?.email ||
          updated.createdByActor?.clientAccount?.email ||
          '-',
      };
      setAdjustments(adjustments.map((adj) => (adj.id === mapped.id ? mapped : adj)));
      setIsDeclineDialogOpen(false);
      setSelectedAdjustment(null);
      setDeclineNote('');
    } catch (e: any) {
      setError(
        e instanceof Error
          ? e.message
          : 'فشل رفض التعديل. يرجى المحاولة مرة أخرى.',
      );
    }
  };

  const handleCreateAdjustment = async () => {
    if (!createFormData.clientId || !createFormData.warehouseId || !createFormData.productId || !createFormData.reason) {
      setError('يرجى اختيار العميل، المستودع، المنتج، والسبب قبل إنشاء التعديل.');
      return;
    }
    try {
      setError(null);
      const created = await apiFetch<any>('/adjustments', {
        method: 'POST',
        body: JSON.stringify({
          clientId: createFormData.clientId,
          warehouseId: createFormData.warehouseId,
          productId: createFormData.productId,
          qtyChange: createFormData.quantityChange,
          reason: createFormData.reason,
        }),
      });
      const newAdjustment: Adjustment = {
        id: created.id,
        requestedAt: created.createdAt ? new Date(created.createdAt).toLocaleString('ar-SA') : '',
        client: created.client?.name || '',
        warehouse: created.warehouse?.name || '',
        sku: created.product?.sku || '',
        batch: created.batch?.batchCode || undefined,
        location: created.location?.code || '',
        quantityChange:
          typeof created.qtyChange === 'number'
            ? created.qtyChange
            : Number(created.qtyChange || 0),
        reason: (created.reason || 'أخرى') as AdjustmentReason,
        status:
          created.status === 'APPROVED'
            ? ('موافق عليه' as AdjustmentStatus)
            : created.status === 'REJECTED'
            ? ('مرفوض' as AdjustmentStatus)
            : ('قيد الانتظار' as AdjustmentStatus),
        requestedBy:
          created.createdByActor?.user?.email ||
          created.createdByActor?.clientAccount?.email ||
          '-',
      };
      setAdjustments([...adjustments, newAdjustment]);
      setIsCreateDialogOpen(false);
      setCreateFormData({
        clientId: '',
        warehouseId: '',
        productId: '',
        quantityChange: 0,
        reason: '' as AdjustmentReason | '',
      });
    } catch (e: any) {
      setError(
        e instanceof Error
          ? e.message
          : 'فشل إنشاء التعديل. يرجى المحاولة مرة أخرى.',
      );
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>الفلاتر</CardTitle>
            <Button onClick={() => setIsCreateDialogOpen(true)}>
              <Plus className="w-4 h-4 ml-2" />
              إنشاء تعديل
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">المستودع</label>
              <Select value={warehouseFilter || 'all'} onValueChange={(v) => setWarehouseFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر المستودع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  {warehouses.map((w) => (
                    <SelectItem key={w.id} value={w.name}>{w.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">العميل</label>
              <Select value={clientFilter || 'all'} onValueChange={(v) => setClientFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر العميل" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  {clients.map((c) => (
                    <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">SKU</label>
              <Input
                value={skuFilter}
                onChange={(e) => setSkuFilter(e.target.value)}
                placeholder="ابحث بـ SKU"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">الحالة</label>
              <Select value={statusFilter || 'all'} onValueChange={(v) => setStatusFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الحالة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="قيد الانتظار">قيد الانتظار</SelectItem>
                  <SelectItem value="موافق عليه">موافق عليه</SelectItem>
                  <SelectItem value="مرفوض">مرفوض</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">التاريخ من</label>
              <Input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">التاريخ إلى</label>
              <Input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Adjustments Table */}
      <Card>
        <CardContent className="p-0">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md m-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          {filteredAdjustments.length > 0 && !loading && (
            <div className="p-4 border-b flex justify-end">
              <CsvButton
                columns={[
                  { key: 'requestedAt', label: 'تم الطلب في' },
                  { key: 'client', label: 'العميل' },
                  { key: 'warehouse', label: 'المستودع' },
                  { key: 'sku', label: 'SKU' },
                  { key: 'batch', label: 'الدفعة' },
                  { key: 'location', label: 'الموقع' },
                  { key: 'quantityChange', label: 'تغيير الكمية' },
                  { key: 'reason', label: 'السبب' },
                  { key: 'status', label: 'الحالة' },
                  { key: 'requestedBy', label: 'طلب بواسطة' },
                ]}
                data={filteredAdjustments}
                getRow={(a) => [a.requestedAt, a.client, a.warehouse, a.sku, a.batch ?? '-', a.location ?? '', a.quantityChange > 0 ? '+' + a.quantityChange : a.quantityChange, a.reason ?? '', a.status, a.requestedBy ?? '']}
                filename="التعديلات"
              />
            </div>
          )}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">تم الطلب في</TableHead>
                <TableHead className="text-right">العميل</TableHead>
                <TableHead className="text-right">المستودع</TableHead>
                <TableHead className="text-right">SKU</TableHead>
                <TableHead className="text-right">الدفعة</TableHead>
                <TableHead className="text-right">الموقع</TableHead>
                <TableHead className="text-right">تغيير الكمية</TableHead>
                <TableHead className="text-right">السبب</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">طلب بواسطة</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={11} className="py-8 text-center text-sm text-gray-500">
                    جارِ تحميل التعديلات...
                  </TableCell>
                </TableRow>
              ) : filteredAdjustments.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={11} className="py-8 text-center text-sm text-gray-500">
                    لا توجد تعديلات مطابقة للفلاتر الحالية.
                  </TableCell>
                </TableRow>
              ) : (
                filteredAdjustments.map((adjustment) => (
                <TableRow key={adjustment.id}>
                  <TableCell className="font-mono text-sm">{adjustment.requestedAt}</TableCell>
                  <TableCell>{adjustment.client}</TableCell>
                  <TableCell>{adjustment.warehouse}</TableCell>
                  <TableCell className="font-mono">{adjustment.sku}</TableCell>
                  <TableCell className="font-mono">{adjustment.batch || '-'}</TableCell>
                  <TableCell className="font-mono">{adjustment.location}</TableCell>
                  <TableCell>
                    <Badge variant={adjustment.quantityChange > 0 ? 'default' : 'destructive'}>
                      {adjustment.quantityChange > 0 ? '+' : ''}{adjustment.quantityChange}
                    </Badge>
                  </TableCell>
                  <TableCell>{adjustment.reason}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        adjustment.status === 'موافق عليه'
                          ? 'default'
                          : adjustment.status === 'مرفوض'
                          ? 'destructive'
                          : 'secondary'
                      }
                    >
                      {adjustment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{adjustment.requestedBy}</TableCell>
                  <TableCell>
                    {adjustment.status === 'قيد الانتظار' && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => handleAccept(adjustment.id)}
                            className="cursor-pointer"
                          >
                            <CheckCircle className="w-4 h-4 ml-2" />
                            قبول
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDecline(adjustment)}
                            variant="destructive"
                            className="cursor-pointer"
                          >
                            <XCircleIcon className="w-4 h-4 ml-2" />
                            رفض
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </TableCell>
                </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create Adjustment Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>إنشاء تعديل</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">العميل</label>
              <Select
                value={createFormData.clientId}
                onValueChange={(v) =>
                  setCreateFormData({ ...createFormData, clientId: v })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="اختر العميل" />
                </SelectTrigger>
                <SelectContent>
                  {clientsOptions.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">المستودع</label>
              <Select
                value={createFormData.warehouseId}
                onValueChange={(v) =>
                  setCreateFormData({ ...createFormData, warehouseId: v })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="اختر المستودع" />
                </SelectTrigger>
                <SelectContent>
                  {warehousesOptions.map((w) => (
                    <SelectItem key={w.id} value={w.id}>
                      {w.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">المنتج (SKU)</label>
              <Select
                value={createFormData.productId}
                onValueChange={(v) =>
                  setCreateFormData({ ...createFormData, productId: v })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="اختر المنتج" />
                </SelectTrigger>
                <SelectContent>
                  {productsOptions.map((p) => (
                    <SelectItem key={p.id} value={p.id}>
                      {p.sku} - {p.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">تغيير الكمية</label>
                <Input
                  type="number"
                  value={createFormData.quantityChange || ''}
                  onChange={(e) =>
                    setCreateFormData({
                      ...createFormData,
                      quantityChange: parseInt(e.target.value) || 0,
                    })
                  }
                  placeholder="أدخل تغيير الكمية"
                />
              </div>
              <div className="space-y-2 col-span-2">
                <label className="text-sm font-medium">السبب</label>
                <Select
                  value={createFormData.reason}
                  onValueChange={(v) => setCreateFormData({ ...createFormData, reason: v as AdjustmentReason })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر السبب" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="تلف">تلف</SelectItem>
                    <SelectItem value="فقدان">فقدان</SelectItem>
                    <SelectItem value="عد">عد</SelectItem>
                    <SelectItem value="تعديل">تعديل</SelectItem>
                    <SelectItem value="أخرى">أخرى</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              إلغاء
            </Button>
            <Button
              onClick={handleCreateAdjustment}
              disabled={!createFormData.client || !createFormData.warehouse || !createFormData.sku || !createFormData.location || !createFormData.reason}
            >
              حفظ
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Decline Dialog */}
      <Dialog open={isDeclineDialogOpen} onOpenChange={setIsDeclineDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>رفض التعديل</DialogTitle>
            <DialogDescription>
              يرجى إدخال سبب رفض هذا التعديل
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">ملاحظات الرفض</label>
              <Textarea
                value={declineNote}
                onChange={(e) => setDeclineNote(e.target.value)}
                placeholder="أدخل سبب رفض التعديل..."
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setIsDeclineDialogOpen(false);
              setSelectedAdjustment(null);
              setDeclineNote('');
            }}>
              إلغاء
            </Button>
            <Button
              variant="destructive"
              onClick={handleConfirmDecline}
              disabled={!declineNote.trim()}
            >
              تأكيد الرفض
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Return Order Types
type ReturnStatus = 'قيد المعالجة' | 'قيد التحقيق' | 'قيد التصرف' | 'مكتمل';
type ReturnDisposition = 'إرجاع للمخزون' | 'إرسال لـ QC' | 'تلف' | 'غير محدد';

type ReturnItem = {
  id: string;
  sku: string;
  batch?: string;
  quantity: number;
  targetLocation: string;
};

type ReturnOrder = {
  id: string;
  returnId: string;
  client: string;
  warehouse: string;
  relatedOutboundOrder?: string;
  status: ReturnStatus;
  disposition: ReturnDisposition;
  dateFrom: string;
  dateTo: string;
  createdAt: string;
  createdBy: string;
  notes?: string;
  items: ReturnItem[];
  stages: Array<{
    stage: 'إنشاء' | 'تحقيق' | 'قرار التصرف' | 'إنهاء';
    status: 'pending' | 'in-progress' | 'completed';
    assignedWorker?: string;
    completedAt?: string;
  }>;
  approvals?: Array<{
    id: string;
    type: string;
    status: 'pending' | 'approved' | 'rejected';
    requestedAt: string;
  }>;
};

// Sample Return Orders Data
const initialReturnOrdersData: ReturnOrder[] = [
  {
    id: '1',
    returnId: 'RET-00001',
    client: 'شركة التقنية المتقدمة',
    warehouse: 'المستودع الرئيسي - الرياض',
    relatedOutboundOrder: 'OUT-00018',
    status: 'قيد المعالجة',
    disposition: 'غير محدد',
    dateFrom: '2026-02-01',
    dateTo: '2026-02-05',
    createdAt: '2026-02-02 10:15',
    createdBy: 'أحمد محمد',
    notes: 'إرجاع منتجات تالفة',
    items: [
      {
        id: '1',
        sku: 'PROD-001',
        batch: 'BATCH-001',
        quantity: 5,
        targetLocation: 'LOC-005',
      },
    ],
    stages: [
      { stage: 'إنشاء', status: 'completed', completedAt: '2026-02-02 10:15' },
      { stage: 'تحقيق', status: 'in-progress', assignedWorker: 'فاطمة علي' },
      { stage: 'قرار التصرف', status: 'pending' },
      { stage: 'إنهاء', status: 'pending' },
    ],
  },
  {
    id: '2',
    returnId: 'RET-00002',
    client: 'مؤسسة التجارة الإلكترونية',
    warehouse: 'مستودع جدة',
    status: 'مكتمل',
    disposition: 'إرجاع للمخزون',
    dateFrom: '2026-01-25',
    dateTo: '2026-01-30',
    createdAt: '2026-01-28 14:20',
    createdBy: 'خالد سعيد',
    items: [
      {
        id: '2',
        sku: 'PROD-002',
        quantity: 10,
        targetLocation: 'LOC-003',
      },
    ],
    stages: [
      { stage: 'إنشاء', status: 'completed', completedAt: '2026-01-28 14:20' },
      { stage: 'تحقيق', status: 'completed', completedAt: '2026-01-29 09:00' },
      { stage: 'قرار التصرف', status: 'completed', completedAt: '2026-01-29 11:30' },
      { stage: 'إنهاء', status: 'completed', completedAt: '2026-01-30 15:45' },
    ],
  },
];

function ReturnsPage({ onProcessReturn }: { onProcessReturn: (returnId: string) => void }) {
  const [warehouseFilter, setWarehouseFilter] = useState('');
  const [clientFilter, setClientFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dispositionFilter, setDispositionFilter] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [returns, setReturns] = useState<ReturnOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [createFormData, setCreateFormData] = useState({
    client: '',
    warehouse: '',
    relatedOutboundOrder: '',
    notes: '',
    items: [] as ReturnItem[],
  });

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await apiFetch<any[]>('/return-orders');
        if (!active) return;
        const mapped: ReturnOrder[] = data.map((ret) => ({
          id: ret.id,
          returnId: ret.id,
          client: ret.client?.name || '',
          warehouse: ret.warehouse?.name || '',
          relatedOutboundOrder: ret.outboundOrderId || undefined,
          status: ret.status === 'PROCESSED' ? 'مكتمل' : 'قيد المعالجة',
          disposition: (ret.disposition === 'RESTOCK' ? 'إرجاع للمخزون' : ret.disposition === 'DAMAGED' ? 'تلف' : 'غير محدد') as ReturnDisposition,
          dateFrom: ret.createdAt ? new Date(ret.createdAt).toISOString().split('T')[0] : '',
          dateTo: ret.processedAt ? new Date(ret.processedAt).toISOString().split('T')[0] : '',
          createdAt: ret.createdAt ? new Date(ret.createdAt).toLocaleString('ar-SA') : '',
          createdBy: ret.createdByActorId ? '-' : '-',
          notes: ret.notes || undefined,
          items: ret.items?.map((item: any) => ({
            id: item.id,
            sku: item.product?.sku || '',
            batch: item.batchId || '',
            quantity: item.qty || 0,
            targetLocation: item.locationId || '',
          })) || [],
          stages: [
            { stage: 'إنشاء', status: 'completed' },
            { stage: 'تحقيق', status: ret.status === 'PROCESSED' ? 'completed' : 'pending' },
            { stage: 'قرار التصرف', status: ret.status === 'PROCESSED' ? 'completed' : 'pending' },
            { stage: 'إنهاء', status: ret.status === 'PROCESSED' ? 'completed' : 'pending' },
          ],
        }));
        setReturns(mapped);
      } catch (e: any) {
        console.error('Failed to load returns', e);
        if (active) {
          setError('تعذر تحميل الإرجاعات. يرجى المحاولة مرة أخرى.');
          setReturns(initialReturnOrdersData);
        }
      } finally {
        if (active) setLoading(false);
      }
    }
    void load();
    return () => { active = false; };
  }, []);

  const filteredReturns = returns.filter((returnOrder) => {
    if (warehouseFilter && warehouseFilter !== 'all' && returnOrder.warehouse !== warehouseFilter) return false;
    if (clientFilter && clientFilter !== 'all' && returnOrder.client !== clientFilter) return false;
    if (statusFilter && statusFilter !== 'all' && returnOrder.status !== statusFilter) return false;
    if (dispositionFilter && dispositionFilter !== 'all' && returnOrder.disposition !== dispositionFilter) return false;
    if (dateFrom && returnOrder.dateFrom < dateFrom) return false;
    if (dateTo && returnOrder.dateTo > dateTo) return false;
    return true;
  });

  const addReturnItem = () => {
    setCreateFormData({
      ...createFormData,
      items: [...createFormData.items, {
        id: Date.now().toString(),
        sku: '',
        batch: '',
        quantity: 0,
        targetLocation: '',
      }],
    });
  };

  const removeReturnItem = (id: string) => {
    setCreateFormData({
      ...createFormData,
      items: createFormData.items.filter(item => item.id !== id),
    });
  };

  const updateReturnItem = (id: string, field: keyof ReturnItem, value: string | number) => {
    setCreateFormData({
      ...createFormData,
      items: createFormData.items.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    });
  };

  const handleCreateReturn = () => {
    const newReturn: ReturnOrder = {
      id: Date.now().toString(),
      returnId: `RET-${String(returns.length + 1).padStart(5, '0')}`,
      client: createFormData.client,
      warehouse: createFormData.warehouse,
      relatedOutboundOrder: createFormData.relatedOutboundOrder || undefined,
      status: 'قيد المعالجة',
      disposition: 'غير محدد',
      dateFrom: new Date().toISOString().split('T')[0],
      dateTo: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      createdAt: new Date().toISOString().split('T')[0] + ' ' + new Date().toTimeString().split(' ')[0].slice(0, 5),
      createdBy: 'أحمد محمد', // Current user
      notes: createFormData.notes || undefined,
      items: createFormData.items,
      stages: [
        { stage: 'إنشاء', status: 'completed' },
        { stage: 'تحقيق', status: 'pending' },
        { stage: 'قرار التصرف', status: 'pending' },
        { stage: 'إنهاء', status: 'pending' },
      ],
    };
    setReturns([...returns, newReturn]);
    setIsCreateDialogOpen(false);
    setCreateFormData({
      client: '',
      warehouse: '',
      relatedOutboundOrder: '',
      notes: '',
      items: [],
    });
  };

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>الفلاتر</CardTitle>
            <Button onClick={() => setIsCreateDialogOpen(true)}>
              <Plus className="w-4 h-4 ml-2" />
              إنشاء إرجاع
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">المستودع</label>
              <Select value={warehouseFilter || 'all'} onValueChange={(v) => setWarehouseFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر المستودع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  {warehouses.map((w) => (
                    <SelectItem key={w.id} value={w.name}>{w.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">العميل</label>
              <Select value={clientFilter || 'all'} onValueChange={(v) => setClientFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر العميل" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  {clients.map((c) => (
                    <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">الحالة</label>
              <Select value={statusFilter || 'all'} onValueChange={(v) => setStatusFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الحالة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="قيد المعالجة">قيد المعالجة</SelectItem>
                  <SelectItem value="قيد التحقيق">قيد التحقيق</SelectItem>
                  <SelectItem value="قيد التصرف">قيد التصرف</SelectItem>
                  <SelectItem value="مكتمل">مكتمل</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">التصرف</label>
              <Select value={dispositionFilter || 'all'} onValueChange={(v) => setDispositionFilter(v === 'all' ? '' : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر التصرف" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="إرجاع للمخزون">إرجاع للمخزون</SelectItem>
                  <SelectItem value="إرسال لـ QC">إرسال لـ QC</SelectItem>
                  <SelectItem value="تلف">تلف</SelectItem>
                  <SelectItem value="غير محدد">غير محدد</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">التاريخ من</label>
              <Input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">التاريخ إلى</label>
              <Input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Returns Table */}
      <Card>
        <CardContent className="p-0">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md m-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          {filteredReturns.length > 0 && !loading && (
            <div className="p-4 border-b flex justify-end">
              <CsvButton
                columns={[
                  { key: 'returnId', label: 'رقم الإرجاع' },
                  { key: 'client', label: 'العميل' },
                  { key: 'warehouse', label: 'المستودع' },
                  { key: 'relatedOutboundOrder', label: 'طلب صادر ذو صلة' },
                  { key: 'status', label: 'الحالة' },
                  { key: 'disposition', label: 'التصرف' },
                  { key: 'dateFrom', label: 'التاريخ من' },
                  { key: 'dateTo', label: 'التاريخ إلى' },
                  { key: 'createdAt', label: 'تاريخ الإنشاء' },
                  { key: 'createdBy', label: 'تم الإنشاء بواسطة' },
                ]}
                data={filteredReturns}
                getRow={(r) => [r.returnId, r.client, r.warehouse, r.relatedOutboundOrder ?? '-', r.status, r.disposition ?? '', r.dateFrom ?? '', r.dateTo ?? '', r.createdAt, r.createdBy ?? '']}
                filename="الإرجاعات"
              />
            </div>
          )}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">رقم الإرجاع</TableHead>
                <TableHead className="text-right">العميل</TableHead>
                <TableHead className="text-right">المستودع</TableHead>
                <TableHead className="text-right">طلب صادر ذو صلة</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">التصرف</TableHead>
                <TableHead className="text-right">التاريخ من</TableHead>
                <TableHead className="text-right">التاريخ إلى</TableHead>
                <TableHead className="text-right">تاريخ الإنشاء</TableHead>
                <TableHead className="text-right">تم الإنشاء بواسطة</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={11} className="py-8 text-center text-sm text-gray-500">
                    جارِ تحميل الإرجاعات...
                  </TableCell>
                </TableRow>
              ) : filteredReturns.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={11} className="py-8 text-center text-sm text-gray-500">
                    لا توجد إرجاعات مطابقة للفلاتر الحالية.
                  </TableCell>
                </TableRow>
              ) : (
                filteredReturns.map((returnOrder) => (
                  <TableRow key={returnOrder.id}>
                    <TableCell className="font-mono">{returnOrder.returnId}</TableCell>
                    <TableCell>{returnOrder.client}</TableCell>
                    <TableCell>{returnOrder.warehouse}</TableCell>
                    <TableCell className="font-mono">{returnOrder.relatedOutboundOrder || '-'}</TableCell>
                    <TableCell>
                      <Badge variant={returnOrder.status === 'مكتمل' ? 'default' : 'secondary'}>
                        {returnOrder.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{returnOrder.disposition}</Badge>
                    </TableCell>
                    <TableCell>{returnOrder.dateFrom}</TableCell>
                    <TableCell>{returnOrder.dateTo}</TableCell>
                    <TableCell className="font-mono text-sm">{returnOrder.createdAt}</TableCell>
                    <TableCell>{returnOrder.createdBy}</TableCell>
                    <TableCell>
                      {returnOrder.status === 'مكتمل' ? (
                        <Button variant="outline" size="sm">
                          <EyeIcon className="w-4 h-4 ml-2" />
                          عرض
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onProcessReturn(returnOrder.id)}
                        >
                          <Play className="w-4 h-4 ml-2" />
                          معالجة
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create Return Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>إنشاء إرجاع جديد</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">العميل</label>
                <Input
                  value={createFormData.client}
                  onChange={(e) => setCreateFormData({ ...createFormData, client: e.target.value })}
                  placeholder="أدخل اسم العميل"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">المستودع</label>
                <Select
                  value={createFormData.warehouse}
                  onValueChange={(v) => setCreateFormData({ ...createFormData, warehouse: v })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المستودع" />
                  </SelectTrigger>
                  <SelectContent>
                    {warehouses.map((w) => (
                      <SelectItem key={w.id} value={w.name}>{w.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">طلب صادر ذو صلة <span className="text-gray-400 text-xs">(اختياري)</span></label>
                <Input
                  value={createFormData.relatedOutboundOrder}
                  onChange={(e) => setCreateFormData({ ...createFormData, relatedOutboundOrder: e.target.value })}
                  placeholder="أدخل رقم الطلب الصادر"
                />
              </div>
              <div className="space-y-2 col-span-2">
                <label className="text-sm font-medium">الملاحظات</label>
                <Textarea
                  value={createFormData.notes}
                  onChange={(e) => setCreateFormData({ ...createFormData, notes: e.target.value })}
                  placeholder="أدخل أي ملاحظات"
                  rows={3}
                />
              </div>
            </div>

            {/* Items Table */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">البنود</label>
                <Button type="button" variant="outline" size="sm" onClick={addReturnItem}>
                  <Plus className="w-4 h-4 ml-2" />
                  إضافة بند
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>SKU</TableHead>
                    <TableHead>الدفعة <span className="text-gray-400 text-xs">(اختياري)</span></TableHead>
                    <TableHead>الكمية</TableHead>
                    <TableHead>الموقع المستهدف</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {createFormData.items.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-gray-500 py-4">
                        لا توجد بنود. اضغط على "إضافة بند" لإضافة منتج.
                      </TableCell>
                    </TableRow>
                  ) : (
                    createFormData.items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Input
                            value={item.sku}
                            onChange={(e) => updateReturnItem(item.id, 'sku', e.target.value)}
                            placeholder="أدخل SKU"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            value={item.batch || ''}
                            onChange={(e) => updateReturnItem(item.id, 'batch', e.target.value)}
                            placeholder="أدخل الدفعة"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity || ''}
                            onChange={(e) => updateReturnItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                            placeholder="الكمية"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            value={item.targetLocation}
                            onChange={(e) => updateReturnItem(item.id, 'targetLocation', e.target.value)}
                            placeholder="الموقع المستهدف"
                          />
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" onClick={() => removeReturnItem(item.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              إلغاء
            </Button>
            <Button
              onClick={handleCreateReturn}
              disabled={!createFormData.client || !createFormData.warehouse || createFormData.items.length === 0}
            >
              حفظ
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ReturnOrderWorkspacePage({ returnId, onBack }: { returnId: string; onBack: () => void }) {
  const [returns] = useState<ReturnOrder[]>(initialReturnOrdersData);
  const returnOrder = returns.find(r => r.id === returnId);
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
  const [selectedStage, setSelectedStage] = useState<'إنشاء' | 'تحقيق' | 'قرار التصرف' | 'إنهاء' | null>(null);
  const [selectedWorker, setSelectedWorker] = useState('');
  const [isApprovalsDialogOpen, setIsApprovalsDialogOpen] = useState(false);
  const [updatedReturns, setUpdatedReturns] = useState<ReturnOrder[]>(initialReturnOrdersData);

  if (!returnOrder) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">الإرجاع غير موجود</p>
        <Button onClick={onBack} className="mt-4">العودة</Button>
      </div>
    );
  }

  const currentReturn = updatedReturns.find(r => r.id === returnId) || returnOrder;

  const handleAssign = (stage: 'إنشاء' | 'تحقيق' | 'قرار التصرف' | 'إنهاء') => {
    setSelectedStage(stage);
    setSelectedWorker('');
    setIsAssignDialogOpen(true);
  };

  const handleAutoAssign = () => {
    if (!selectedStage) return;
    const availableWorkers = workers.filter(w => w.duties.includes('استلام')); // Use appropriate duty
    if (availableWorkers.length === 0) return;

    const worker = availableWorkers.reduce((prev, curr) =>
      curr.currentTasks < prev.currentTasks ? curr : prev
    );

    setSelectedWorker(worker.id);
  };

  const handleConfirmAssign = () => {
    if (!selectedStage || !selectedWorker) return;
    const worker = workers.find(w => w.id === selectedWorker);
    if (!worker) return;

    setUpdatedReturns(updatedReturns.map(r => {
      if (r.id === returnId) {
        return {
          ...r,
          stages: r.stages.map(s =>
            s.stage === selectedStage ? { ...s, assignedWorker: worker.name, status: 'in-progress' as 'pending' | 'in-progress' | 'completed' } : s
          ),
        };
      }
      return r;
    }));

    setIsAssignDialogOpen(false);
    setSelectedStage(null);
    setSelectedWorker('');
  };

  const handleCancelReturn = () => {
    if (confirm('هل أنت متأكد من إلغاء هذا الإرجاع؟')) {
      // Handle cancellation
    }
  };

  const getStageIcon = (status: 'pending' | 'in-progress' | 'completed') => {
    if (status === 'completed') return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    if (status === 'in-progress') return <Clock className="w-5 h-5 text-blue-600" />;
    return <Circle className="w-5 h-5 text-gray-400" />;
  };

  const getStageStatusColor = (status: 'pending' | 'in-progress' | 'completed') => {
    if (status === 'completed') return 'bg-green-500';
    if (status === 'in-progress') return 'bg-blue-500';
    return 'bg-gray-300';
  };

  const availableWorkersForStage = selectedStage
    ? workers.filter(w => w.duties.includes('استلام'))
    : [];

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="outline" onClick={onBack}>
        <ChevronRight className="w-4 h-4 ml-2" />
        العودة
      </Button>

      {/* Return Order Details Section */}
      <Card>
        <CardHeader>
          <CardTitle>تفاصيل الإرجاع</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-500">رقم الإرجاع</label>
              <p className="text-base font-semibold mt-1">{currentReturn.returnId}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">اسم العميل</label>
              <p className="text-base mt-1">{currentReturn.client}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">اسم المستودع</label>
              <p className="text-base mt-1">{currentReturn.warehouse}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">طلب صادر ذو صلة</label>
              <p className="text-base font-mono mt-1">{currentReturn.relatedOutboundOrder || '-'}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">الحالة</label>
              <div className="mt-1">
                <Badge variant={currentReturn.status === 'مكتمل' ? 'default' : 'secondary'}>
                  {currentReturn.status}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">التصرف</label>
              <div className="mt-1">
                <Badge variant="outline">{currentReturn.disposition}</Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">التاريخ من</label>
              <p className="text-base mt-1">{currentReturn.dateFrom}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">التاريخ إلى</label>
              <p className="text-base mt-1">{currentReturn.dateTo}</p>
            </div>
          </div>
          {currentReturn.notes && (
            <div className="mt-4">
              <label className="text-sm font-medium text-gray-500">الملاحظات</label>
              <p className="text-base mt-1">{currentReturn.notes}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Items Section */}
      <Card>
        <CardHeader>
          <CardTitle>البنود</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">SKU</TableHead>
                <TableHead className="text-right">الدفعة</TableHead>
                <TableHead className="text-right">الكمية</TableHead>
                <TableHead className="text-right">الموقع المستهدف</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentReturn.items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-mono">{item.sku}</TableCell>
                  <TableCell className="font-mono">{item.batch || '-'}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell className="font-mono">{item.targetLocation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Activity Timeline Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>خط زمني للنشاط</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setIsApprovalsDialogOpen(true)}>
                <FileCheck className="w-4 h-4 ml-2" />
                عرض الموافقات
              </Button>
              <Button variant="destructive" size="sm" onClick={handleCancelReturn}>
                <XCircle className="w-4 h-4 ml-2" />
                إلغاء الإرجاع
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between py-4">
            {currentReturn.stages.map((stage, index) => (
              <div key={stage.stage} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStageStatusColor(stage.status)}`}>
                    {getStageIcon(stage.status)}
                  </div>
                  <p className="text-sm font-medium mt-2">{stage.stage}</p>
                  {stage.assignedWorker && (
                    <p className="text-xs text-gray-500 mt-1">{stage.assignedWorker}</p>
                  )}
                  {stage.status === 'pending' && stage.stage !== 'إنشاء' && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => handleAssign(stage.stage)}
                    >
                      تعيين
                    </Button>
                  )}
                </div>
                {index < currentReturn.stages.length - 1 && (
                  <div className={`h-1 flex-1 mx-2 ${stage.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Assign Task Dialog */}
      <Dialog open={isAssignDialogOpen} onOpenChange={setIsAssignDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تعيين مهمة: {selectedStage}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">العامل</label>
              <Select value={selectedWorker} onValueChange={setSelectedWorker}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر العامل" />
                </SelectTrigger>
                <SelectContent>
                  {availableWorkersForStage.map((worker) => (
                    <SelectItem key={worker.id} value={worker.id}>
                      {worker.name} ({worker.currentTasks} مهام حالية)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" onClick={handleAutoAssign} className="w-full">
              <PackageSearch className="w-4 h-4 ml-2" />
              تعيين تلقائي
            </Button>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAssignDialogOpen(false)}>
              إلغاء
            </Button>
            <Button onClick={handleConfirmAssign} disabled={!selectedWorker}>
              تأكيد
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Approvals Dialog */}
      <Dialog open={isApprovalsDialogOpen} onOpenChange={setIsApprovalsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>الموافقات المطلوبة</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {currentReturn.approvals && currentReturn.approvals.length > 0 ? (
              currentReturn.approvals.map((approval) => (
                <div key={approval.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{approval.type}</p>
                    <p className="text-sm text-gray-500">{approval.requestedAt}</p>
                  </div>
                  <Badge variant={approval.status === 'approved' ? 'default' : approval.status === 'rejected' ? 'destructive' : 'secondary'}>
                    {approval.status === 'approved' ? 'موافق عليه' : approval.status === 'rejected' ? 'مرفوض' : 'قيد الانتظار'}
                  </Badge>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">لا توجد موافقات مطلوبة</p>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsApprovalsDialogOpen(false)}>
              إغلاق
            </Button>
            {currentReturn.approvals?.some(a => a.status === 'pending') && (
              <Button>
                طلب الموافقات
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Report Types
type ReportType = 'inventory' | 'orders' | 'movements' | 'performance' | 'client' | 'warehouse-utilization' | 'stock-valuation' | 'aging';

type ReportCard = {
  id: ReportType;
  title: string;
  description: string;
  icon: any;
};

const reportCards: ReportCard[] = [
  {
    id: 'inventory',
    title: 'تقرير المخزون',
    description: 'عرض تفصيلي للمخزون الحالي حسب المستودع والعميل والمنتج',
    icon: Boxes,
  },
  {
    id: 'orders',
    title: 'تقرير الطلبات',
    description: 'تحليل شامل لطلبات الوارد والصادر مع إحصائيات الأداء',
    icon: PackageSearch,
  },
  {
    id: 'movements',
    title: 'تقرير الحركات',
    description: 'تتبع جميع حركات المخزون والتحويلات بين المواقع',
    icon: TrendingUp,
  },
  {
    id: 'performance',
    title: 'تقرير الأداء',
    description: 'مؤشرات الأداء الرئيسية وإحصائيات الإنتاجية',
    icon: TrendingUp,
  },
  {
    id: 'client',
    title: 'تقرير العملاء',
    description: 'تحليل أداء العملاء وحجم الطلبات والرضا',
    icon: Users,
  },
  {
    id: 'warehouse-utilization',
    title: 'تقرير استغلال المستودعات',
    description: 'تحليل استخدام المساحة والسعة في المستودعات',
    icon: Warehouse,
  },
  {
    id: 'stock-valuation',
    title: 'تقرير تقييم المخزون',
    description: 'قيمة المخزون الحالي والتكاليف المرتبطة',
    icon: FileBarChart,
  },
  {
    id: 'aging',
    title: 'تقرير تقادم المخزون',
    description: 'تحليل المخزون القديم والمنتجات القريبة من انتهاء الصلاحية',
    icon: Clock,
  },
];

export function ReportsPage({ onOpenReport }: { onOpenReport: (reportType: ReportType) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">التقارير</h1>
        <p className="text-gray-600">اختر نوع التقرير الذي تريد عرضه</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <Card key={card.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#176C33] to-[#104920] rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </div>
                <p className="text-sm text-gray-600">{card.description}</p>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
                  onClick={() => onOpenReport(card.id)}
                >
                  <ExternalLink className="w-4 h-4 ml-2" />
                  فتح التقرير
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// Base Report Page Component
function BaseReportPage({
  reportType: _reportType,
  title,
  filters,
  tableColumns,
  tableData,
  charts,
  onBack,
}: {
  reportType: ReportType;
  title: string;
  filters: React.ReactNode;
  tableColumns: string[];
  tableData: any[];
  charts: React.ReactNode;
  onBack: () => void;
}) {
  const handleGenerateReport = () => {
    // Generate report logic
    alert('تم إنشاء التقرير بنجاح');
  };

  const handleExportCSV = () => {
    // Export to CSV logic
    alert('تم تصدير التقرير إلى CSV');
  };

  const handleExportPDF = () => {
    // Export to PDF logic
    alert('تم تصدير التقرير إلى PDF');
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="outline" onClick={onBack}>
        <ChevronRight className="w-4 h-4 ml-2" />
        العودة
      </Button>

      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      </div>

      {/* Filters Section */}
      <Card>
        <CardHeader>
          <CardTitle>الفلاتر</CardTitle>
        </CardHeader>
        <CardContent>
          {filters}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button onClick={handleGenerateReport} className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white">
          <FileBarChart className="w-4 h-4 ml-2" />
          إنشاء التقرير
        </Button>
        <Button variant="outline" onClick={handleExportCSV}>
          <Download className="w-4 h-4 ml-2" />
          تصدير CSV
        </Button>
        <Button variant="outline" onClick={handleExportPDF}>
          <FileDown className="w-4 h-4 ml-2" />
          تصدير PDF
        </Button>
      </div>

      {/* Report Table */}
      <Card>
        <CardHeader>
          <CardTitle>البيانات</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                {tableColumns.map((col, index) => (
                  <TableHead key={index} className="text-right">{col}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {tableColumns.map((col, colIndex) => (
                    <TableCell key={colIndex}>{row[col] || '-'}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {charts}
      </div>
    </div>
  );
}

// Inventory Report Page
export function InventoryReportPage({ onBack }: { onBack: () => void }) {
  const [warehouseFilter, setWarehouseFilter] = useState('');
  const [clientFilter, setClientFilter] = useState('');
  const [skuFilter, setSkuFilter] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const inventoryData = [
    { 'المستودع': 'المستودع الرئيسي - الرياض', 'العميل': 'شركة التقنية المتقدمة', 'SKU': 'PROD-001', 'الكمية': 150, 'القيمة': '15,000 ر.س' },
    { 'المستودع': 'مستودع جدة', 'العميل': 'مؤسسة التجارة الإلكترونية', 'SKU': 'PROD-002', 'الكمية': 30, 'القيمة': '3,000 ر.س' },
    { 'المستودع': 'المستودع الرئيسي - الرياض', 'العميل': 'شركة التوزيع الحديثة', 'SKU': 'PROD-003', 'الكمية': 200, 'القيمة': '20,000 ر.س' },
  ];

  const inventoryByWarehouse = [
    { name: 'المستودع الرئيسي', value: 350 },
    { name: 'مستودع جدة', value: 30 },
    { name: 'مستودع الدمام', value: 120 },
  ];

  const inventoryByClient = [
    { name: 'شركة التقنية', value: 150 },
    { name: 'مؤسسة التجارة', value: 30 },
    { name: 'شركة التوزيع', value: 200 },
  ];

  const filters = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">المستودع</label>
        <Select value={warehouseFilter || 'all'} onValueChange={(v) => setWarehouseFilter(v === 'all' ? '' : v)}>
          <SelectTrigger>
            <SelectValue placeholder="اختر المستودع" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">الكل</SelectItem>
            {warehouses.map((w) => (
              <SelectItem key={w.id} value={w.name}>{w.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">العميل</label>
        <Select value={clientFilter || 'all'} onValueChange={(v) => setClientFilter(v === 'all' ? '' : v)}>
          <SelectTrigger>
            <SelectValue placeholder="اختر العميل" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">الكل</SelectItem>
            {clients.map((c) => (
              <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">SKU</label>
        <Input
          value={skuFilter}
          onChange={(e) => setSkuFilter(e.target.value)}
          placeholder="ابحث بـ SKU"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">التاريخ من</label>
        <Input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">التاريخ إلى</label>
        <Input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
      </div>
    </div>
  );

  const charts = (
    <>
      <Card>
        <CardHeader>
          <CardTitle>التوزيع حسب المستودع</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={inventoryByWarehouse}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#176C33"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>التوزيع حسب العميل</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={inventoryByClient}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#176C33" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );

  return (
    <BaseReportPage
      reportType="inventory"
      title="تقرير المخزون"
      filters={filters}
      tableColumns={['المستودع', 'العميل', 'SKU', 'الكمية', 'القيمة']}
      tableData={inventoryData}
      charts={charts}
      onBack={onBack}
    />
  );
}

// Orders Report Page
export function OrdersReportPage({ onBack }: { onBack: () => void }) {
  const [orderTypeFilter, setOrderTypeFilter] = useState('');
  const [warehouseFilter, setWarehouseFilter] = useState('');
  const [clientFilter, setClientFilter] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const ordersData = [
    { 'نوع الطلب': 'وارد', 'رقم الطلب': 'INB-00041', 'العميل': 'شركة التقنية', 'المستودع': 'المستودع الرئيسي', 'الحالة': 'مكتمل', 'التاريخ': '2026-02-02' },
    { 'نوع الطلب': 'صادر', 'رقم الطلب': 'OUT-00018', 'العميل': 'مؤسسة التجارة', 'المستودع': 'مستودع جدة', 'الحالة': 'قيد المعالجة', 'التاريخ': '2026-02-02' },
  ];

  const ordersByType = [
    { name: 'وارد', value: 45 },
    { name: 'صادر', value: 32 },
  ];

  const ordersByStatus = [
    { name: 'مكتمل', value: 50 },
    { name: 'قيد المعالجة', value: 20 },
    { name: 'جديد', value: 7 },
  ];

  const filters = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">نوع الطلب</label>
        <Select value={orderTypeFilter || 'all'} onValueChange={(v) => setOrderTypeFilter(v === 'all' ? '' : v)}>
          <SelectTrigger>
            <SelectValue placeholder="اختر نوع الطلب" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">الكل</SelectItem>
            <SelectItem value="وارد">وارد</SelectItem>
            <SelectItem value="صادر">صادر</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">المستودع</label>
        <Select value={warehouseFilter || 'all'} onValueChange={(v) => setWarehouseFilter(v === 'all' ? '' : v)}>
          <SelectTrigger>
            <SelectValue placeholder="اختر المستودع" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">الكل</SelectItem>
            {warehouses.map((w) => (
              <SelectItem key={w.id} value={w.name}>{w.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">العميل</label>
        <Select value={clientFilter || 'all'} onValueChange={(v) => setClientFilter(v === 'all' ? '' : v)}>
          <SelectTrigger>
            <SelectValue placeholder="اختر العميل" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">الكل</SelectItem>
            {clients.map((c) => (
              <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">التاريخ من</label>
        <Input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">التاريخ إلى</label>
        <Input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
      </div>
    </div>
  );

  const charts = (
    <>
      <Card>
        <CardHeader>
          <CardTitle>التوزيع حسب نوع الطلب</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ordersByType}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#176C33"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>التوزيع حسب الحالة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ordersByStatus}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#176C33" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );

  return (
    <BaseReportPage
      reportType="orders"
      title="تقرير الطلبات"
      filters={filters}
      tableColumns={['نوع الطلب', 'رقم الطلب', 'العميل', 'المستودع', 'الحالة', 'التاريخ']}
      tableData={ordersData}
      charts={charts}
      onBack={onBack}
    />
  );
}

// Billing Types
type StorageUnit = 'متر مكعب' | 'قدم مكعب' | 'باليت' | 'رف';
type Cycle = 'شهري' | 'سنوي';
type Currency = 'USD' | 'EUR' | 'SAR';
type BillingMovementType = 'وارد' | 'صادر';

type StorageIncluded = {
  id: string;
  storageUnit: StorageUnit;
  includedQuantity: number;
};

type Price = {
  id: string;
  cycle: Cycle;
  price: number;
  currency: Currency;
};

type MovementRate = {
  id: string;
  movementType: BillingMovementType;
  feePerTransaction: number;
  currency: Currency;
};

type BillingPlan = {
  id: string;
  planName: string;
  active: boolean;
  description: string;
  storageIncluded: StorageIncluded[];
  prices: Price[];
  movementRates: MovementRate[];
};

export function BillingPage() {
  const [plans, setPlans] = useState<BillingPlan[]>([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<BillingPlan | null>(null);
  const [activeTab, setActiveTab] = useState<'storage' | 'price' | 'movement'>('storage');
  const [planFormData, setPlanFormData] = useState({
    planName: '',
    description: '',
    active: true,
    storageIncluded: [] as StorageIncluded[],
    prices: [] as Price[],
    movementRates: [] as MovementRate[],
  });

  // Load billing plans from backend
  useEffect(() => {
    let active = true;
    async function loadPlans() {
      try {
        const list = await apiFetch<any[]>('/billing/plans');
        if (!active) return;
        const mapped: BillingPlan[] = (Array.isArray(list) ? list : []).map((p) => ({
          id: p.id,
          planName: p.planName,
          active: p.isActive ?? true,
          description: '',
          // backend has a single numeric storageIncluded; represent it as one row in UI
          storageIncluded: [
            {
              id: `${p.id}-storage-0`,
              storageUnit: 'متر مكعب',
              includedQuantity:
                typeof p.storageIncluded === 'number'
                  ? p.storageIncluded
                  : Number(p.storageIncluded || 0),
            },
          ],
          prices: [],
          movementRates: [],
        }));
        setPlans(mapped);
      } catch (e) {
        console.error('Failed to load billing plans', e);
      }
    }
    void loadPlans();
    return () => {
      active = false;
    };
  }, []);

  const handleEdit = (plan: BillingPlan) => {
    setSelectedPlan(plan);
    setPlanFormData({
      planName: plan.planName,
      description: plan.description,
      active: plan.active,
      storageIncluded: plan.storageIncluded,
      prices: plan.prices,
      movementRates: plan.movementRates,
    });
    setActiveTab('storage');
    setIsEditDialogOpen(true);
  };

  const handleDisable = (planId: string) => {
    setPlans(plans.map(p => p.id === planId ? { ...p, active: !p.active } : p));
  };

  const handleCreatePlan = () => {
    setPlanFormData({
      planName: '',
      description: '',
      active: true,
      storageIncluded: [],
      prices: [],
      movementRates: [],
    });
    setActiveTab('storage');
    setIsCreateDialogOpen(true);
  };

  const handleSavePlan = async () => {
    try {
      if (!planFormData.planName.trim()) {
        alert('Please enter a plan name.');
        return;
      }

      if (isCreateDialogOpen) {
        const totalIncluded = planFormData.storageIncluded.reduce(
          (sum, s) => sum + (Number(s.includedQuantity) || 0),
          0,
        );
        const created = await apiFetch<any>('/billing/plans', {
          method: 'POST',
          body: JSON.stringify({
            planName: planFormData.planName,
            storageIncluded: totalIncluded,
            billingCycle: 'MONTHLY',
            isActive: planFormData.active,
          }),
        });
        setPlans([
          ...plans,
          {
            id: created.id,
            planName: created.planName,
            active: created.isActive ?? true,
            description: '',
            storageIncluded: planFormData.storageIncluded,
            prices: [],
            movementRates: [],
          },
        ]);
      } else if (selectedPlan) {
        const totalIncluded = planFormData.storageIncluded.reduce(
          (sum, s) => sum + (Number(s.includedQuantity) || 0),
          0,
        );
        const updated = await apiFetch<any>(`/billing/plans/${selectedPlan.id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            planName: planFormData.planName,
            storageIncluded: totalIncluded,
            isActive: planFormData.active,
          }),
        });
        setPlans(
          plans.map((p) =>
            p.id === selectedPlan.id
              ? {
                  id: updated.id,
                  planName: updated.planName,
                  active: updated.isActive ?? true,
                  description: '',
                  storageIncluded: planFormData.storageIncluded,
                  prices: [],
                  movementRates: [],
                }
              : p,
          ),
        );
      }
    } catch (e) {
      console.error('Failed to save billing plan', e);
      alert(
        e instanceof Error
          ? `Failed to save billing plan: ${e.message}`
          : 'Failed to save billing plan. Please check the server error.',
      );
      return;
    } finally {
      setIsCreateDialogOpen(false);
      setIsEditDialogOpen(false);
      setSelectedPlan(null);
    }
  };

  const addStorageIncluded = () => {
    setPlanFormData({
      ...planFormData,
      storageIncluded: [...planFormData.storageIncluded, {
        id: Date.now().toString(),
        storageUnit: 'متر مكعب',
        includedQuantity: 0,
      }],
    });
  };

  const removeStorageIncluded = (id: string) => {
    setPlanFormData({
      ...planFormData,
      storageIncluded: planFormData.storageIncluded.filter(item => item.id !== id),
    });
  };

  const updateStorageIncluded = (id: string, field: keyof StorageIncluded, value: string | number) => {
    setPlanFormData({
      ...planFormData,
      storageIncluded: planFormData.storageIncluded.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    });
  };

  const addPrice = () => {
    setPlanFormData({
      ...planFormData,
      prices: [...planFormData.prices, {
        id: Date.now().toString(),
        cycle: 'شهري',
        price: 0,
        currency: 'USD',
      }],
    });
  };

  const removePrice = (id: string) => {
    setPlanFormData({
      ...planFormData,
      prices: planFormData.prices.filter(item => item.id !== id),
    });
  };

  const updatePrice = (id: string, field: keyof Price, value: string | number) => {
    setPlanFormData({
      ...planFormData,
      prices: planFormData.prices.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    });
  };

  const addMovementRate = () => {
    setPlanFormData({
      ...planFormData,
      movementRates: [...planFormData.movementRates, {
        id: Date.now().toString(),
        movementType: 'وارد',
        feePerTransaction: 0,
        currency: 'USD',
      }],
    });
  };

  const removeMovementRate = (id: string) => {
    setPlanFormData({
      ...planFormData,
      movementRates: planFormData.movementRates.filter(item => item.id !== id),
    });
  };

  const updateMovementRate = (id: string, field: keyof MovementRate, value: string | number) => {
    setPlanFormData({
      ...planFormData,
      movementRates: planFormData.movementRates.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    });
  };

  return (
    <div className="space-y-6">
      {/* Plans Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>الخطط</CardTitle>
            <Button onClick={handleCreatePlan}>
              <Plus className="w-4 h-4 ml-2" />
              إنشاء خطة
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">اسم الخطة</TableHead>
                <TableHead className="text-right">نشط</TableHead>
                <TableHead className="text-right">الوصف</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans.map((plan) => (
                <TableRow key={plan.id}>
                  <TableCell className="font-semibold">{plan.planName}</TableCell>
                  <TableCell>
                    <Badge variant={plan.active ? 'default' : 'secondary'}>
                      {plan.active ? 'نشط' : 'غير نشط'}
                    </Badge>
                  </TableCell>
                  <TableCell>{plan.description}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => handleEdit(plan)}
                          className="cursor-pointer"
                        >
                          <Edit className="w-4 h-4 ml-2" />
                          تعديل
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDisable(plan.id)}
                          variant="destructive"
                          className="cursor-pointer"
                        >
                          <Power className="w-4 h-4 ml-2" />
                          {plan.active ? 'تعطيل' : 'تفعيل'}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create/Edit Plan Dialog */}
      <Dialog open={isCreateDialogOpen || isEditDialogOpen} onOpenChange={(open) => {
        if (!open) {
          setIsCreateDialogOpen(false);
          setIsEditDialogOpen(false);
          setSelectedPlan(null);
        }
      }}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{isCreateDialogOpen ? 'إنشاء خطة جديدة' : 'تعديل الخطة'}</DialogTitle>
          </DialogHeader>

          {/* Plan Name and Description (only for create) */}
          {isCreateDialogOpen && (
            <div className="space-y-4 py-4 border-b">
              <div className="space-y-2">
                <label className="text-sm font-medium">اسم الخطة</label>
                <Input
                  value={planFormData.planName}
                  onChange={(e) => setPlanFormData({ ...planFormData, planName: e.target.value })}
                  placeholder="أدخل اسم الخطة"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">الوصف</label>
                <Textarea
                  value={planFormData.description}
                  onChange={(e) => setPlanFormData({ ...planFormData, description: e.target.value })}
                  placeholder="أدخل وصف الخطة"
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* Tabs Navigation */}
          <div className="flex gap-2 border-b py-4">
            <Button
              variant={activeTab === 'storage' ? 'default' : 'outline'}
              onClick={() => setActiveTab('storage')}
              size="sm"
            >
              المساحة المضمنة
            </Button>
            <Button
              variant={activeTab === 'price' ? 'default' : 'outline'}
              onClick={() => setActiveTab('price')}
              size="sm"
            >
              السعر
            </Button>
            <Button
              variant={activeTab === 'movement' ? 'default' : 'outline'}
              onClick={() => setActiveTab('movement')}
              size="sm"
            >
              معدل الحركة
            </Button>
          </div>

          {/* Tab Content */}
          <div className="py-4">
            {/* Storage Included Tab */}
            {activeTab === 'storage' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">المساحة المضمنة</label>
                  <Button type="button" variant="outline" size="sm" onClick={addStorageIncluded}>
                    <Plus className="w-4 h-4 ml-2" />
                    إضافة
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>وحدة التخزين</TableHead>
                      <TableHead>الكمية المضمنة</TableHead>
                      <TableHead>الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {planFormData.storageIncluded.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={3} className="text-center text-gray-500 py-4">
                          لا توجد عناصر. اضغط على "إضافة" لإضافة عنصر.
                        </TableCell>
                      </TableRow>
                    ) : (
                      planFormData.storageIncluded.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <Select
                              value={item.storageUnit}
                              onValueChange={(v) => updateStorageIncluded(item.id, 'storageUnit', v as StorageUnit)}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="متر مكعب">متر مكعب</SelectItem>
                                <SelectItem value="قدم مكعب">قدم مكعب</SelectItem>
                                <SelectItem value="باليت">باليت</SelectItem>
                                <SelectItem value="رف">رف</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell>
                            <Input
                              type="number"
                              min="0"
                              value={item.includedQuantity || ''}
                              onChange={(e) => updateStorageIncluded(item.id, 'includedQuantity', parseFloat(e.target.value) || 0)}
                              placeholder="الكمية"
                            />
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" onClick={() => removeStorageIncluded(item.id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            )}

            {/* Price Tab */}
            {activeTab === 'price' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">الأسعار</label>
                  <Button type="button" variant="outline" size="sm" onClick={addPrice}>
                    <Plus className="w-4 h-4 ml-2" />
                    إضافة
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>الدورة</TableHead>
                      <TableHead>السعر</TableHead>
                      <TableHead>العملة</TableHead>
                      <TableHead>الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {planFormData.prices.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center text-gray-500 py-4">
                          لا توجد أسعار. اضغط على "إضافة" لإضافة سعر.
                        </TableCell>
                      </TableRow>
                    ) : (
                      planFormData.prices.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <Select
                              value={item.cycle}
                              onValueChange={(v) => updatePrice(item.id, 'cycle', v as Cycle)}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="شهري">شهري</SelectItem>
                                <SelectItem value="سنوي">سنوي</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell>
                            <Input
                              type="number"
                              min="0"
                              step="0.01"
                              value={item.price || ''}
                              onChange={(e) => updatePrice(item.id, 'price', parseFloat(e.target.value) || 0)}
                              placeholder="السعر"
                            />
                          </TableCell>
                          <TableCell>
                            <Select
                              value={item.currency}
                              onValueChange={(v) => updatePrice(item.id, 'currency', v as Currency)}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="USD">
                                  <div className="flex items-center gap-2">
                                    <DollarSign className="w-4 h-4" />
                                    USD
                                  </div>
                                </SelectItem>
                                <SelectItem value="EUR">
                                  <div className="flex items-center gap-2">
                                    <Euro className="w-4 h-4" />
                                    EUR
                                  </div>
                                </SelectItem>
                                <SelectItem value="SAR">SAR</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" onClick={() => removePrice(item.id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            )}

            {/* Movement Rate Tab */}
            {activeTab === 'movement' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">معدلات الحركة</label>
                  <Button type="button" variant="outline" size="sm" onClick={addMovementRate}>
                    <Plus className="w-4 h-4 ml-2" />
                    إضافة
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>نوع الحركة</TableHead>
                      <TableHead>الرسوم لكل معاملة</TableHead>
                      <TableHead>العملة</TableHead>
                      <TableHead>الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {planFormData.movementRates.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center text-gray-500 py-4">
                          لا توجد معدلات. اضغط على "إضافة" لإضافة معدل.
                        </TableCell>
                      </TableRow>
                    ) : (
                      planFormData.movementRates.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <Select
                              value={item.movementType}
                              onValueChange={(v) => updateMovementRate(item.id, 'movementType', v as BillingMovementType)}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="وارد">وارد</SelectItem>
                                <SelectItem value="صادر">صادر</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell>
                            <Input
                              type="number"
                              min="0"
                              step="0.01"
                              value={item.feePerTransaction || ''}
                              onChange={(e) => updateMovementRate(item.id, 'feePerTransaction', parseFloat(e.target.value) || 0)}
                              placeholder="الرسوم"
                            />
                          </TableCell>
                          <TableCell>
                            <Select
                              value={item.currency}
                              onValueChange={(v) => updateMovementRate(item.id, 'currency', v as Currency)}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="USD">
                                  <div className="flex items-center gap-2">
                                    <DollarSign className="w-4 h-4" />
                                    USD
                                  </div>
                                </SelectItem>
                                <SelectItem value="EUR">
                                  <div className="flex items-center gap-2">
                                    <Euro className="w-4 h-4" />
                                    EUR
                                  </div>
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" onClick={() => removeMovementRate(item.id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setIsCreateDialogOpen(false);
              setIsEditDialogOpen(false);
              setSelectedPlan(null);
            }}>
              إلغاء
            </Button>
            <Button
              onClick={handleSavePlan}
              disabled={isCreateDialogOpen && (!planFormData.planName || !planFormData.description)}
            >
              حفظ
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Value-Added Service Types
type CostCalculationMethod = 'ثابت' | 'حسب الكمية' | 'حسب الوزن' | 'حسب الحجم' | 'حسب الوقت';

type ValueAddedService = {
  id: string;
  serviceCode: string;
  serviceName: string;
  description: string;
  unitOfMeasure: string;
  active: boolean;
  costCalculationMethod: CostCalculationMethod;
};

export function ValueAddedServicesPage() {
  const [services, setServices] = useState<ValueAddedService[]>([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ValueAddedService | null>(null);
  const [serviceFormData, setServiceFormData] = useState({
    serviceCode: '',
    serviceName: '',
    description: '',
    unitOfMeasure: '',
    active: true,
    costCalculationMethod: 'ثابت' as CostCalculationMethod,
  });

  const parseVasDescription = (raw: string | null | undefined): { description: string; unitOfMeasure: string; costCalculationMethod: CostCalculationMethod } => {
    const text = raw ?? '';
    const prefix = 'VAS_META:';
    if (text.startsWith(prefix)) {
      try {
        const obj = JSON.parse(text.slice(prefix.length));
        return {
          description: String(obj.description ?? ''),
          unitOfMeasure: String(obj.unitOfMeasure ?? ''),
          costCalculationMethod: (obj.costCalculationMethod ?? 'ثابت') as CostCalculationMethod,
        };
      } catch {
        // fall through
      }
    }
    return { description: text, unitOfMeasure: '', costCalculationMethod: 'ثابت' };
  };

  const serializeVasDescription = (description: string, unitOfMeasure: string, costCalculationMethod: CostCalculationMethod) => {
    const prefix = 'VAS_META:';
    return prefix + JSON.stringify({ description, unitOfMeasure, costCalculationMethod });
  };

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const list = await apiFetch<any[]>('/vas');
        if (!active) return;
        const mapped: ValueAddedService[] = (Array.isArray(list) ? list : []).map((v) => {
          const meta = parseVasDescription(v.description);
          return {
            id: v.id,
            serviceCode: v.code ?? '',
            serviceName: v.name ?? '',
            description: meta.description,
            unitOfMeasure: meta.unitOfMeasure,
            active: v.isActive ?? true,
            costCalculationMethod: meta.costCalculationMethod,
          };
        });
        setServices(mapped);
      } catch (e) {
        console.error('Failed to load VAS list', e);
      }
    }
    void load();
    return () => {
      active = false;
    };
  }, []);

  const handleEdit = (service: ValueAddedService) => {
    setSelectedService(service);
    setServiceFormData({
      serviceCode: service.serviceCode,
      serviceName: service.serviceName,
      description: service.description,
      unitOfMeasure: service.unitOfMeasure,
      active: service.active,
      costCalculationMethod: service.costCalculationMethod,
    });
    setIsEditDialogOpen(true);
  };

  const handleDisable = async (serviceId: string) => {
    const svc = services.find((s) => s.id === serviceId);
    if (!svc) return;
    try {
      const updated = await apiFetch<any>(`/vas/${serviceId}`, {
        method: 'PATCH',
        body: JSON.stringify({ isActive: !svc.active }),
      });
      setServices(services.map((s) => (s.id === serviceId ? { ...s, active: updated.isActive ?? !svc.active } : s)));
    } catch (e) {
      console.error('Failed to toggle VAS active', e);
    }
  };

  const handleCreateService = () => {
    setServiceFormData({
      serviceCode: '',
      serviceName: '',
      description: '',
      unitOfMeasure: '',
      active: true,
      costCalculationMethod: 'ثابت',
    });
    setIsCreateDialogOpen(true);
  };

  const handleSaveService = async () => {
    if (!serviceFormData.serviceCode.trim() || !serviceFormData.serviceName.trim()) return;
    const packedDescription = serializeVasDescription(
      serviceFormData.description,
      serviceFormData.unitOfMeasure,
      serviceFormData.costCalculationMethod,
    );
    try {
      if (isCreateDialogOpen) {
        const created = await apiFetch<any>('/vas', {
          method: 'POST',
          body: JSON.stringify({
            code: serviceFormData.serviceCode.trim(),
            name: serviceFormData.serviceName.trim(),
            description: packedDescription,
            isActive: serviceFormData.active,
          }),
        });
        const meta = parseVasDescription(created.description);
        setServices([
          ...services,
          {
            id: created.id,
            serviceCode: created.code ?? serviceFormData.serviceCode.trim(),
            serviceName: created.name ?? serviceFormData.serviceName.trim(),
            description: meta.description,
            unitOfMeasure: meta.unitOfMeasure,
            active: created.isActive ?? serviceFormData.active,
            costCalculationMethod: meta.costCalculationMethod,
          },
        ]);
      } else if (selectedService) {
        const updated = await apiFetch<any>(`/vas/${selectedService.id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            code: serviceFormData.serviceCode.trim(),
            name: serviceFormData.serviceName.trim(),
            description: packedDescription,
            isActive: serviceFormData.active,
          }),
        });
        const meta = parseVasDescription(updated.description);
        setServices(
          services.map((s) =>
            s.id === selectedService.id
              ? {
                  ...s,
                  serviceCode: updated.code ?? serviceFormData.serviceCode.trim(),
                  serviceName: updated.name ?? serviceFormData.serviceName.trim(),
                  description: meta.description,
                  unitOfMeasure: meta.unitOfMeasure,
                  active: updated.isActive ?? serviceFormData.active,
                  costCalculationMethod: meta.costCalculationMethod,
                }
              : s,
          ),
        );
      }
      setIsCreateDialogOpen(false);
      setIsEditDialogOpen(false);
      setSelectedService(null);
    } catch (e) {
      console.error('Failed to save VAS', e);
      alert('Failed to save VAS. Please check backend validation and logs.');
    }
  };

  return (
    <div className="space-y-6">
      {/* Services Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>الخدمات ذات القيمة المضافة</CardTitle>
            <Button onClick={handleCreateService}>
              <Plus className="w-4 h-4 ml-2" />
              إنشاء خدمة
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">كود الخدمة</TableHead>
                <TableHead className="text-right">اسم الخدمة</TableHead>
                <TableHead className="text-right">الوصف</TableHead>
                <TableHead className="text-right">وحدة القياس</TableHead>
                <TableHead className="text-right">نشط</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-mono">{service.serviceCode}</TableCell>
                  <TableCell className="font-semibold">{service.serviceName}</TableCell>
                  <TableCell>{service.description}</TableCell>
                  <TableCell>{service.unitOfMeasure}</TableCell>
                  <TableCell>
                    <Badge variant={service.active ? 'default' : 'secondary'}>
                      {service.active ? 'نشط' : 'غير نشط'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => handleEdit(service)}
                          className="cursor-pointer"
                        >
                          <Edit className="w-4 h-4 ml-2" />
                          تعديل
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDisable(service.id)}
                          variant="destructive"
                          className="cursor-pointer"
                        >
                          <Power className="w-4 h-4 ml-2" />
                          {service.active ? 'تعطيل' : 'تفعيل'}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create/Edit Service Dialog */}
      <Dialog open={isCreateDialogOpen || isEditDialogOpen} onOpenChange={(open) => {
        if (!open) {
          setIsCreateDialogOpen(false);
          setIsEditDialogOpen(false);
          setSelectedService(null);
        }
      }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{isCreateDialogOpen ? 'إنشاء خدمة جديدة' : 'تعديل الخدمة'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">كود الخدمة</label>
              <Input
                value={serviceFormData.serviceCode}
                onChange={(e) => setServiceFormData({ ...serviceFormData, serviceCode: e.target.value })}
                placeholder="أدخل كود الخدمة (مثال: PACKING)"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">اسم الخدمة</label>
              <Input
                value={serviceFormData.serviceName}
                onChange={(e) => setServiceFormData({ ...serviceFormData, serviceName: e.target.value })}
                placeholder="أدخل اسم الخدمة"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">الوصف</label>
              <Textarea
                value={serviceFormData.description}
                onChange={(e) => setServiceFormData({ ...serviceFormData, description: e.target.value })}
                placeholder="أدخل وصف الخدمة"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">وحدة القياس</label>
              <Input
                value={serviceFormData.unitOfMeasure}
                onChange={(e) => setServiceFormData({ ...serviceFormData, unitOfMeasure: e.target.value })}
                placeholder="أدخل وحدة القياس (مثال: قطعة، ساعة، كيلوغرام)"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">طريقة حساب التكلفة</label>
              <Select
                value={serviceFormData.costCalculationMethod}
                onValueChange={(v) => setServiceFormData({ ...serviceFormData, costCalculationMethod: v as CostCalculationMethod })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="اختر طريقة حساب التكلفة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ثابت">ثابت</SelectItem>
                  <SelectItem value="حسب الكمية">حسب الكمية</SelectItem>
                  <SelectItem value="حسب الوزن">حسب الوزن</SelectItem>
                  <SelectItem value="حسب الحجم">حسب الحجم</SelectItem>
                  <SelectItem value="حسب الوقت">حسب الوقت</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={serviceFormData.active}
                onCheckedChange={(checked) => setServiceFormData({ ...serviceFormData, active: checked === true })}
              />
              <label className="text-sm font-medium">نشط</label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setIsCreateDialogOpen(false);
              setIsEditDialogOpen(false);
              setSelectedService(null);
            }}>
              إلغاء
            </Button>
            <Button
              onClick={handleSaveService}
              disabled={!serviceFormData.serviceCode || !serviceFormData.serviceName}
            >
              حفظ
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const APPROVAL_REF_TYPES: Record<ApprovalFilterType, string> = {
  order: 'ORDER',
  adjustment: 'ADJUSTMENT',
  return: 'RETURN',
  invoice: 'INVOICE',
};

const APPROVAL_FILTERS: ApprovalFilterType[] = ['order', 'adjustment', 'return', 'invoice'];

const APPROVAL_FILTER_LABELS: Record<ApprovalFilterType, string> = {
  order: 'موافقات الطلبات',
  adjustment: 'موافقات التعديل',
  return: 'موافقات المرتجعات',
  invoice: 'موافقات الفواتير',
};

type ApprovalCache = Record<ApprovalFilterType, Approval[]>;

async function fetchApprovalsByFilter(filter: ApprovalFilterType): Promise<Approval[]> {
  const params = new URLSearchParams();
  params.set('referenceType', APPROVAL_REF_TYPES[filter]);
  const data = await apiFetch<any[]>(`/approvals?${params.toString()}`);
  return (Array.isArray(data) ? data : []).map(mapApiApproval);
}

function ApprovalDetailsRoute({
  approvalsByFilter,
  updateApprovalInCache,
  upsertApprovalToCache,
}: {
  approvalsByFilter: ApprovalCache;
  updateApprovalInCache: (approvalId: string, nextStatus: Approval['status'], notes?: string) => void;
  upsertApprovalToCache: (approval: Approval) => void;
}) {
  const { id = '' } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [approval, setApproval] = useState<Approval | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function loadDetail() {
      if (!id) {
        setError('رقم الموافقة غير صالح.');
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      const fromCache = Object.values(approvalsByFilter).flat().find((item) => item.id === id) ?? null;
      if (fromCache) {
        if (!active) return;
        setApproval(fromCache);
        setLoading(false);
        return;
      }
      try {
        for (const filter of APPROVAL_FILTERS) {
          const fetched = await fetchApprovalsByFilter(filter);
          const found = fetched.find((item) => item.id === id);
          if (found) {
            if (!active) return;
            setApproval(found);
            upsertApprovalToCache(found);
            setLoading(false);
            return;
          }
        }
        if (active) {
          setError('لم يتم العثور على الموافقة المطلوبة.');
          setApproval(null);
          setLoading(false);
        }
      } catch (e) {
        if (!active) return;
        setError(e instanceof Error ? e.message : 'تعذر تحميل تفاصيل الموافقة.');
        setApproval(null);
        setLoading(false);
      }
    }
    void loadDetail();
    return () => {
      active = false;
    };
  }, [id, approvalsByFilter, upsertApprovalToCache]);

  const handleApprove = async (comment?: string) => {
    if (!approval) return;
    const updated = await apiFetch<any>(`/approvals/${approval.id}/approve`, {
      method: 'POST',
      body: JSON.stringify({ decisionNotes: comment }),
    });
    updateApprovalInCache(approval.id, 'موافق عليه', updated?.decisionNotes || comment);
    navigate('/approvals');
  };

  const handleReject = async (comment: string) => {
    if (!approval) return;
    const updated = await apiFetch<any>(`/approvals/${approval.id}/reject`, {
      method: 'POST',
      body: JSON.stringify({ decisionNotes: comment }),
    });
    updateApprovalInCache(approval.id, 'مرفوض', updated?.decisionNotes || comment);
    navigate('/approvals');
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-sm text-gray-500">جارِ تحميل تفاصيل الموافقة...</CardContent>
      </Card>
    );
  }

  if (error || !approval) {
    return (
      <Card>
        <CardContent className="p-6 space-y-4">
          <p className="text-sm text-red-700">{error || 'تعذر عرض تفاصيل الموافقة.'}</p>
          <Button variant="outline" onClick={() => navigate('/approvals')}>العودة إلى مركز الموافقات</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Button variant="outline" onClick={() => navigate('/approvals')}>العودة إلى القائمة</Button>
      <ApprovalDetailsView
        approval={approval}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
}

function ApprovalsOverviewRoute({
  activeApprovalType,
  setActiveApprovalType,
  approvals,
  loading,
  error,
}: {
  activeApprovalType: ApprovalFilterType;
  setActiveApprovalType: (type: ApprovalFilterType) => void;
  approvals: Approval[];
  loading: boolean;
  error: string | null;
}) {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2">
            {APPROVAL_FILTERS.map((filter) => (
              <Button
                key={filter}
                variant={activeApprovalType === filter ? 'default' : 'outline'}
                onClick={() => setActiveApprovalType(filter)}
                size="sm"
              >
                {APPROVAL_FILTER_LABELS[filter]}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md m-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">نوع الموافقة</TableHead>
                <TableHead className="text-right">المرجع</TableHead>
                <TableHead className="text-right">العميل</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">السبب</TableHead>
                <TableHead className="text-right">المستودع</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} className="py-8 text-center text-sm text-gray-500">
                    جارِ تحميل الموافقات...
                  </TableCell>
                </TableRow>
              ) : approvals.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="py-8 text-center text-sm text-gray-500">
                    لا توجد موافقات مطابقة للفلاتر الحالية.
                  </TableCell>
                </TableRow>
              ) : (
                approvals.map((approval) => (
                  <TableRow key={approval.id}>
                    <TableCell>
                      <Badge variant="outline" className="text-xs whitespace-nowrap">
                        {approvalTypeLabel(approval.type)}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono">{approval.reference || '-'}</TableCell>
                    <TableCell>{approval.client || '-'}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          approval.status === 'موافق عليه'
                            ? 'default'
                            : approval.status === 'مرفوض'
                              ? 'destructive'
                              : 'secondary'
                        }
                      >
                        {approval.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{approval.reason || '-'}</TableCell>
                    <TableCell>{approval.warehouse || '-'}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/approvals/${approval.id}`)}
                      >
                        عرض التفاصيل
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function ApprovalsCenterPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentType = searchParams.get('type');
  const safeType: ApprovalFilterType = APPROVAL_FILTERS.includes(currentType as ApprovalFilterType)
    ? (currentType as ApprovalFilterType)
    : 'order';
  const [activeApprovalType, setActiveApprovalType] = useState<ApprovalFilterType>(safeType);
  const [approvalsByFilter, setApprovalsByFilter] = useState<ApprovalCache>({
    order: [],
    adjustment: [],
    return: [],
    invoice: [],
  });
  const [loadingByFilter, setLoadingByFilter] = useState<Record<ApprovalFilterType, boolean>>({
    order: false,
    adjustment: false,
    return: false,
    invoice: false,
  });
  const [errorByFilter, setErrorByFilter] = useState<Record<ApprovalFilterType, string | null>>({
    order: null,
    adjustment: null,
    return: null,
    invoice: null,
  });

  useEffect(() => {
    setSearchParams({ type: activeApprovalType }, { replace: true });
  }, [activeApprovalType, setSearchParams]);

  useEffect(() => {
    setActiveApprovalType(safeType);
  }, [safeType]);

  useEffect(() => {
    let active = true;
    async function loadCurrentType() {
      if (approvalsByFilter[activeApprovalType].length > 0) return;
      setLoadingByFilter((prev) => ({ ...prev, [activeApprovalType]: true }));
      setErrorByFilter((prev) => ({ ...prev, [activeApprovalType]: null }));
      try {
        const list = await fetchApprovalsByFilter(activeApprovalType);
        if (!active) return;
        setApprovalsByFilter((prev) => ({ ...prev, [activeApprovalType]: list }));
      } catch (e) {
        if (!active) return;
        setErrorByFilter((prev) => ({
          ...prev,
          [activeApprovalType]: e instanceof Error ? e.message : 'تعذر تحميل الموافقات.',
        }));
      } finally {
        if (active) {
          setLoadingByFilter((prev) => ({ ...prev, [activeApprovalType]: false }));
        }
      }
    }
    void loadCurrentType();
    return () => {
      active = false;
    };
  }, [activeApprovalType, approvalsByFilter]);

  const updateApprovalInCache = (approvalId: string, nextStatus: Approval['status'], notes?: string) => {
    setApprovalsByFilter((prev) => {
      const next = { ...prev };
      for (const key of APPROVAL_FILTERS) {
        next[key] = prev[key].map((item) =>
          item.id === approvalId ? { ...item, status: nextStatus, notes: notes || item.notes } : item,
        );
      }
      return next;
    });
  };

  const upsertApprovalToCache = (approval: Approval) => {
    const targetFilter: ApprovalFilterType =
      approval.type === 'adjustment'
        ? 'adjustment'
        : approval.type === 'return'
          ? 'return'
          : approval.type === 'invoice'
            ? 'invoice'
            : 'order';
    setApprovalsByFilter((prev) => {
      const existing = prev[targetFilter];
      const found = existing.some((item) => item.id === approval.id);
      return {
        ...prev,
        [targetFilter]: found
          ? existing.map((item) => (item.id === approval.id ? approval : item))
          : [approval, ...existing],
      };
    });
  };

  return (
    <Routes>
      <Route
        path="/approvals"
        element={
          <ApprovalsOverviewRoute
            activeApprovalType={activeApprovalType}
            setActiveApprovalType={setActiveApprovalType}
            approvals={approvalsByFilter[activeApprovalType]}
            loading={loadingByFilter[activeApprovalType]}
            error={errorByFilter[activeApprovalType]}
          />
        }
      />
      <Route
        path="/approvals/:id"
        element={
          <ApprovalDetailsRoute
            approvalsByFilter={approvalsByFilter}
            updateApprovalInCache={updateApprovalInCache}
            upsertApprovalToCache={upsertApprovalToCache}
          />
        }
      />
      <Route path="*" element={<Navigate to="/approvals" replace />} />
    </Routes>
  );
}

function OrdersLayout() {
  const tabs = [
    { to: '/orders/inbound-orders', label: 'طلبات الوارد' },
    { to: '/orders/outbound-orders', label: 'طلبات الصادر' },
    { to: '/orders/returns', label: 'الإرجاعات' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[#176C33] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

function InboundOrderWorkspaceRoute() {
  const { orderId = '' } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  return (
    <InboundOrderWorkspacePage
      orderId={orderId}
      onBack={() => navigate('/orders/inbound-orders')}
    />
  );
}

function OutboundOrderWorkspaceRoute() {
  const { orderId = '' } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  return (
    <OutboundOrderWorkspacePage
      orderId={orderId}
      onBack={() => navigate('/orders/outbound-orders')}
    />
  );
}

function ReturnOrderWorkspaceRoute() {
  const { returnId = '' } = useParams<{ returnId: string }>();
  const navigate = useNavigate();
  return (
    <ReturnOrderWorkspacePage
      returnId={returnId}
      onBack={() => navigate('/orders/returns')}
    />
  );
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  );
  const [activePage, setActivePage] = useState<AdminPage>('overview');
  const [selectedInventoryItemId, setSelectedInventoryItemId] = useState<string>('');
  const [overviewData, setOverviewData] = useState<OverviewResponse | null>(null);
  const [overviewLoading, setOverviewLoading] = useState(false);
  const [overviewError, setOverviewError] = useState<string | null>(null);

  // Sync URL to state so each admin page has a stable route (bookmarks, back/forward work)
  // Only run when authenticated to avoid redirecting to /overview and triggering protected API calls
  useEffect(() => {
    if (!authenticated) return;
    const pathname = location.pathname;
    if (pathname === '/login') {
      navigate('/overview', { replace: true });
      return;
    }
    // Redirect root to overview so overview has a proper route like other pages
    if (pathname === '/') {
      navigate('/overview', { replace: true });
      return;
    }
    if (pathname === '/overview') {
      setActivePage('overview');
      return;
    }
    if (pathname === '/work-management') { setActivePage('work-management'); return; }
    if (pathname === '/identity-access') { setActivePage('identity-access'); return; }
    if (pathname === '/master-data') { setActivePage('master-data'); return; }
    if (pathname === '/orders' || pathname.startsWith('/orders/')) {
      setActivePage('orders');
      return;
    }
    if (pathname === '/inbound-orders' || pathname.startsWith('/inbound-orders/')) {
      navigate(pathname.replace('/inbound-orders', '/orders/inbound-orders'), { replace: true });
      return;
    }
    if (pathname === '/outbound-orders' || pathname.startsWith('/outbound-orders/')) {
      navigate(pathname.replace('/outbound-orders', '/orders/outbound-orders'), { replace: true });
      return;
    }
    const ledgerMatch = pathname.match(/^\/inventory\/ledger(?:\/([^/]+))?$/);
    if (ledgerMatch) {
      setSelectedInventoryItemId(ledgerMatch[1] || '');
      setActivePage('inventory-ledger');
      return;
    }
    if (pathname === '/inventory') {
      setActivePage('inventory');
      setSelectedInventoryItemId('');
      return;
    }
    if (pathname === '/adjustments') { setActivePage('adjustments'); return; }
    if (pathname === '/returns' || pathname.startsWith('/returns/')) {
      navigate(pathname.replace('/returns', '/orders/returns'), { replace: true });
      return;
    }
    if (pathname === '/reports' || pathname.startsWith('/reports/')) {
      navigate('/overview', { replace: true });
      return;
    }
    if (pathname === '/billing' || pathname === '/value-added-services' || pathname === '/value-added-service') {
      navigate('/overview', { replace: true });
      return;
    }
    if (pathname === '/approvals' || pathname.startsWith('/approvals/')) { setActivePage('approvals-center'); return; }
  }, [location.pathname, authenticated]);

  // Overview: always loaded from GET /dashboard/overview when visiting /overview
  useEffect(() => {
    if (!authenticated || activePage !== 'overview') return;
    let cancelled = false;
    setOverviewLoading(true);
    setOverviewError(null);
    fetchOverview()
      .then((data) => {
        if (!cancelled) setOverviewData(data);
      })
      .catch((e) => {
        if (!cancelled)
          setOverviewError(
            e instanceof Error ? e.message : 'تعذر تحميل لوحة التحكم',
          );
      })
      .finally(() => {
        if (!cancelled) setOverviewLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [activePage, authenticated, location.pathname]);

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated()) {
        try {
          const userInfo = await getCurrentUser();
          if (userInfo) {
            setUser(userInfo);
            setAuthenticated(true);
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
      navigate('/overview', { replace: true });
    }
  };

  const handleLogout = () => {
    logout();
    setAuthenticated(false);
    setUser(null);
  };

  // Show loading state while checking authentication
  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#176C33] mx-auto mb-4"></div>
          <p className="text-gray-600">جاري التحقق من الهوية...</p>
        </div>
      </div>
    );
  }

  // Show login page if not authenticated
  if (!authenticated) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
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
        <div className="h-14 sm:h-16 flex items-center justify-between px-4 sm:px-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#176C33] to-[#104920] rounded-xl flex items-center justify-center shadow-lg shadow-[#176C33]/25">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900">لوحة التحكم</span>
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
              key={item.page}
              onClick={() => navigate(PAGE_TO_PATH[item.page] ?? '/')}
              className={`sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activePage === item.page
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
      <main
        className="flex-1 transition-all duration-300 min-w-0 mr-0 lg:mr-64"
      >
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
          </div>

          <div className="flex items-center gap-1 sm:gap-4 shrink-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-l border-gray-200 hover:opacity-80 transition-opacity">
                  <Avatar className="w-9 h-9 border-2 border-[#176C33]/20">
                    <AvatarFallback className="bg-gradient-to-br from-[#176C33] to-[#104920] text-white text-sm font-medium">
                      {user?.role ? user.role.charAt(0) : 'م'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {user?.sub || 'الحساب الحالي'}
                    </p>
                    <p className="text-xs text-gray-500">{user?.role || 'STAFF'}</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
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
          {activePage === 'overview' && (
            <div className="space-y-6">
            {overviewLoading && (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#176C33]" />
              </div>
            )}
            {overviewError && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-red-800 text-sm">
                {overviewError}
              </div>
            )}
            {!overviewLoading && overviewData && (
            <>
            {/* Summary Section - dynamic from API */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">الملخص</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="stat-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-gray-600">العملاء</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{(overviewData.summary?.clientsCount ?? 0).toLocaleString('ar-SA')}</p>
                        <p className="text-xs text-gray-500 mt-1">عدد العملاء</p>
                        {(overviewData.summary?.clientsCountChangeThisMonth ?? 0) !== 0 && (
                          <p className={`text-xs mt-1 ${(overviewData.summary?.clientsCountChangeThisMonth ?? 0) > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {(overviewData.summary?.clientsCountChangeThisMonth ?? 0) > 0 ? '+' : ''}{overviewData.summary?.clientsCountChangeThisMonth} هذا الشهر
                          </p>
                        )}
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="stat-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-gray-600">المخازن</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{(overviewData.summary?.warehousesCount ?? 0).toLocaleString('ar-SA')}</p>
                        <p className="text-xs text-gray-500 mt-1">عدد المخازن</p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Warehouse className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="stat-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-gray-600">موافقات مفتوحة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{(overviewData.summary?.openApprovalsCount ?? 0).toLocaleString('ar-SA')}</p>
                        <p className="text-xs text-gray-500 mt-1">عدد الموافقات المفتوحة</p>
                        {(overviewData.summary?.urgentApprovalsCount ?? 0) > 0 && (
                          <p className="text-xs text-red-600 mt-1">{overviewData.summary?.urgentApprovalsCount} عاجلة</p>
                        )}
                      </div>
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                        <FileCheck className="w-6 h-6 text-amber-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="stat-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-gray-600">المساحة المستخدمة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">
                          {(overviewData.summary?.capacityTotalM3 ?? 0) > 0
                            ? `${overviewData.summary?.capacityUsedPercent ?? 0}%`
                            : (overviewData.summary?.locationsTotal ?? 0) > 0
                              ? `${overviewData.summary?.locationsOccupiedPercent ?? overviewData.summary?.capacityUsedPercent ?? 0}%`
                              : '—'}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {(overviewData.summary?.capacityTotalM3 ?? 0) > 0
                            ? `${(overviewData.summary?.capacityUsedM3 ?? 0).toLocaleString('ar-SA')} م³ / ${(overviewData.summary?.capacityTotalM3 ?? 0).toLocaleString('ar-SA')} م³`
                            : (overviewData.summary?.locationsTotal ?? 0) > 0
                              ? `${(overviewData.summary?.locationsWithStock ?? 0).toLocaleString('ar-SA')} موقع بها مخزون / ${(overviewData.summary?.locationsTotal ?? 0).toLocaleString('ar-SA')} موقع`
                              : 'لا توجد بيانات سعة أو مواقع'}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(overviewData.summary?.capacityTotalM3 ?? 0) > 0
                            ? 'من إجمالي السعة المسجلة'
                            : 'إشغال المواقع'}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-indigo-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="stat-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-gray-600">المخزون</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{(overviewData.summary?.totalQuantity ?? 0).toLocaleString('ar-SA')}</p>
                        <p className="text-xs text-gray-500 mt-1">وحدات في المخزون (إجمالي الكميات)</p>
                        <p className="text-xs text-gray-500">منتجات بنشاط مخزون: {(overviewData.summary?.productsStoredCount ?? overviewData.summary?.totalProductsStored ?? 0).toLocaleString('ar-SA')}</p>
                        <p className="text-xs text-gray-500">منتجات في الكتالوج: {(overviewData.summary?.productsInUseCount ?? 0).toLocaleString('ar-SA')}</p>
                        {(overviewData.summary?.productsChangeThisWeek ?? 0) !== 0 && (
                          <p className={`text-xs mt-1 ${(overviewData.summary?.productsChangeThisWeek ?? 0) > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {(overviewData.summary?.productsChangeThisWeek ?? 0) > 0 ? '+' : ''}{overviewData.summary?.productsChangeThisWeek} هذا الأسبوع
                          </p>
                        )}
                      </div>
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                        <Package className="w-6 h-6 text-teal-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="stat-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-gray-600">طلبات واردة مفتوحة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{(overviewData.summary?.openInboundOrdersCount ?? 0).toLocaleString('ar-SA')}</p>
                        <p className="text-xs text-gray-500 mt-1">غير مكتملة أو ملغاة</p>
                      </div>
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                        <PackageSearch className="w-6 h-6 text-cyan-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="stat-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-gray-600">طلبات صادرة مفتوحة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{(overviewData.summary?.openOutboundOrdersCount ?? 0).toLocaleString('ar-SA')}</p>
                        <p className="text-xs text-gray-500 mt-1">غير مكتملة أو ملغاة</p>
                      </div>
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Boxes className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Activity from audit + recent orders */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">أحدث الأنشطة</h2>
              <Card>
                <CardContent className="p-0">
                  <Table className="data-table">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-right font-semibold">التاريخ</TableHead>
                        <TableHead className="text-right font-semibold">المستخدم</TableHead>
                        <TableHead className="text-right font-semibold">الإجراء</TableHead>
                        <TableHead className="text-right font-semibold">نوع المصدر</TableHead>
                        <TableHead className="text-right font-semibold">رقم المصدر</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {!(Array.isArray(overviewData.activityLog) && overviewData.activityLog.length) ? (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center text-gray-500 py-8">
                            لا توجد أنشطة مسجلة بعد. تظهر هنا سجلات التدقيق والطلبات الأخيرة.
                          </TableCell>
                        </TableRow>
                      ) : (
                        <>
                          {overviewData.activityLog.map((activity, index) => (
                            <TableRow key={index}>
                              <TableCell className="text-right">{activity.timestamp}</TableCell>
                              <TableCell className="text-right">{activity.user}</TableCell>
                              <TableCell className="text-right">{activity.action}</TableCell>
                              <TableCell className="text-right">{activity.resourceType}</TableCell>
                              <TableCell className="text-right">{activity.resourceId}</TableCell>
                            </TableRow>
                          ))}
                        </>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
            </>
            )}
            </div>
          )}

          {activePage === 'work-management' && <WorkManagementPage />}

          {activePage === 'identity-access' && <IdentityAndAccessPage />}

          {activePage === 'master-data' && <MasterDataPage />}

          {activePage === 'orders' && (
            <Routes>
              <Route path="/orders" element={<OrdersLayout />}>
                <Route index element={<Navigate to="inbound-orders" replace />} />
                <Route
                  path="inbound-orders"
                  element={
                    <InboundOrdersPage
                      onOpenOrder={(orderId) => navigate(`/orders/inbound-orders/${orderId}`)}
                    />
                  }
                />
                <Route path="inbound-orders/:orderId" element={<InboundOrderWorkspaceRoute />} />
                <Route
                  path="outbound-orders"
                  element={
                    <OutboundOrdersPage
                      onOpenOrder={(orderId) => navigate(`/orders/outbound-orders/${orderId}`)}
                    />
                  }
                />
                <Route path="outbound-orders/:orderId" element={<OutboundOrderWorkspaceRoute />} />
                <Route
                  path="returns"
                  element={
                    <ReturnsPage
                      onProcessReturn={(returnId) => navigate(`/orders/returns/${returnId}`)}
                    />
                  }
                />
                <Route path="returns/:returnId" element={<ReturnOrderWorkspaceRoute />} />
                <Route path="*" element={<Navigate to="inbound-orders" replace />} />
              </Route>
            </Routes>
          )}

          {activePage === 'inventory' && (
            <InventoryPage
              onViewLedger={(itemId) => navigate(itemId ? `/inventory/ledger/${itemId}` : '/inventory/ledger')}
            />
          )}

          {activePage === 'inventory-ledger' && (
            <InventoryLedgerPage
              itemId={selectedInventoryItemId}
              onBack={() => navigate('/inventory')}
            />
          )}

          {activePage === 'adjustments' && <AdjustmentsPage />}

          {activePage === 'approvals-center' && <ApprovalsCenterPage />}
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

