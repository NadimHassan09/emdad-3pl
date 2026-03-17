import { useState, useEffect } from 'react';
import './App.css';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  ArrowLeftRight,
  FileText,
  CreditCard,
  Receipt,
  Users,
  Bell,
  HelpCircle,
  Settings,
  Search,
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  MoreHorizontal,
  Download,
  Plus,
  Trash2,
  ArrowDown,
  ArrowUp,
  Activity,
  Power
} from 'lucide-react';
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
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { apiFetch } from '@/lib/api';
import type { ApiError } from '@/lib/api';
import { exportToCSV, exportToPDF, paginate } from '@/lib/export-utils';
import { Pagination } from '@/components/Pagination';
import { LoginPage } from '@/components/LoginPage';
import { isAuthenticated, logout, getCurrentUser } from '@/lib/auth';
import type { UserInfo } from '@/lib/auth';
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
  { icon: LayoutDashboard, label: 'Ù„ÙˆØ­Ø© Ø§Ù„ØªØ­ÙƒÙ…', active: true },
  { icon: Package, label: 'Ø§Ù„Ù…Ø®Ø²ÙˆÙ†', active: false },
  { icon: ShoppingCart, label: 'Ø§Ù„Ø·Ù„Ø¨Ø§Øª', active: false },
  { icon: ArrowLeftRight, label: 'Ø§Ù„Ø­Ø±ÙƒØ§Øª', active: false },
  { icon: FileText, label: 'Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ±', active: false },
  { icon: CreditCard, label: 'Ø§Ù„ÙÙˆØªØ±Ø©', active: false },
  { icon: Receipt, label: 'Ø§Ù„ÙÙˆØ§ØªÙŠØ±', active: false },
  { icon: Users, label: 'Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙˆÙ†', active: false },
];

const labelToRoute: Record<string, string> = {
  'Ù„ÙˆØ­Ø© Ø§Ù„ØªØ­ÙƒÙ…': '/dashboard',
  'Ø§Ù„Ù…Ø®Ø²ÙˆÙ†': '/inventory',
  'Ø§Ù„Ø·Ù„Ø¨Ø§Øª': '/orders',
  'Ø§Ù„Ø­Ø±ÙƒØ§Øª': '/movements',
  'Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ±': '/reports',
  'Ø§Ù„ÙÙˆØªØ±Ø©': '/billing',
  'Ø§Ù„ÙÙˆØ§ØªÙŠØ±': '/invoices',
  'Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙˆÙ†': '/users',
  'Ø§Ù„Ø¥Ø´Ø¹Ø§Ø±Ø§Øª': '/notifications',
  'Ø§Ù„Ø¯Ø¹Ù…': '/support',
  'Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª': '/settings',
};

function getActiveSidebarLabel(pathname: string): string {
  if (pathname.startsWith('/orders')) return 'Ø§Ù„Ø·Ù„Ø¨Ø§Øª';
  if (pathname.startsWith('/invoices')) return 'Ø§Ù„ÙÙˆØ§ØªÙŠØ±';
  if (pathname.startsWith('/dashboard')) return 'Ù„ÙˆØ­Ø© Ø§Ù„ØªØ­ÙƒÙ…';
  if (pathname.startsWith('/inventory')) return 'Ø§Ù„Ù…Ø®Ø²ÙˆÙ†';
  if (pathname.startsWith('/movements')) return 'Ø§Ù„Ø­Ø±ÙƒØ§Øª';
  if (pathname.startsWith('/reports')) return 'Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ±';
  if (pathname.startsWith('/billing')) return 'Ø§Ù„ÙÙˆØªØ±Ø©';
  if (pathname.startsWith('/users')) return 'Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙˆÙ†';
  if (pathname.startsWith('/notifications')) return 'Ø§Ù„Ø¥Ø´Ø¹Ø§Ø±Ø§Øª';
  if (pathname.startsWith('/support')) return 'Ø§Ù„Ø¯Ø¹Ù…';
  if (pathname.startsWith('/settings')) return 'Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª';
  return 'Ù„ÙˆØ­Ø© Ø§Ù„ØªØ­ÙƒÙ…';
}

// Stats cards data - moved to DashboardPage component

// Table data
// tableData moved to DashboardPage component

// Inventory table data now comes from live API (inventory/current-stock).
type InventoryRow = {
  productName: string;
  productCode: string;
  uom: string;
  currentQuantity: number;
  lastMovementDate: string;
  lastMovementDateRaw?: Date | null;
  notes?: string;
};

const inventoryTableData: InventoryRow[] = [];

// Incoming orders table data
type SimpleOrderRow = {
  id: string;
  orderNumber: string;
  creationDate: string;
  status: string;
  expectedDate: string;
  expectedDateRaw?: Date | null;
  itemsCount: number;
  notes?: string;
};

const warehouses = [
  { id: '1', name: 'Ø§Ù„Ù…Ø³ØªÙˆØ¯Ø¹ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ - Ø§Ù„Ø±ÙŠØ§Ø¶' },
  { id: '2', name: 'Ù…Ø³ØªÙˆØ¯Ø¹ Ø¬Ø¯Ø©' },
  { id: '3', name: 'Ù…Ø³ØªÙˆØ¯Ø¹ Ø§Ù„Ø¯Ù…Ø§Ù…' },
  { id: '4', name: 'Ù…Ø³ØªÙˆØ¯Ø¹ Ø§Ù„Ø®Ø¨Ø±' },
];


// Movements/Transactions data - moved to MovementsPage component
// @ts-ignore - kept for reference
const _movementsData = [
  {
    id: 'MOV-001',
    dateTime: '2026-02-02 10:15',
    movementType: 'ÙˆØ§Ø±Ø¯',
    productName: 'Product A',
    sku: 'SKU-1001',
    quantityChange: '+50',
    location: 'LOC-001',
    doneBy: 'Ø£Ø­Ù…Ø¯ Ù…Ø­Ù…Ø¯',
    reference: 'INB-00041',
    referenceType: 'Ø·Ù„Ø¨ ÙˆØ§Ø±Ø¯',
    warehouse: 'Ø§Ù„Ù…Ø³ØªÙˆØ¯Ø¹ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ - Ø§Ù„Ø±ÙŠØ§Ø¶',
  },
  {
    id: 'MOV-002',
    dateTime: '2026-02-02 09:40',
    movementType: 'ØµØ§Ø¯Ø±',
    productName: 'Product B',
    sku: 'SKU-2003',
    quantityChange: '-8',
    location: 'LOC-002',
    doneBy: 'Ù…Ø­Ù…Ø¯ Ø¹Ù„ÙŠ',
    reference: 'OUT-00018',
    referenceType: 'Ø·Ù„Ø¨ ØµØ§Ø¯Ø±',
    warehouse: 'Ù…Ø³ØªÙˆØ¯Ø¹ Ø¬Ø¯Ø©',
  },
  {
    id: 'MOV-003',
    dateTime: '2026-02-02 08:30',
    movementType: 'ÙˆØ§Ø±Ø¯',
    productName: 'Product C',
    sku: 'SKU-3005',
    quantityChange: '+120',
    location: 'LOC-003',
    doneBy: 'ÙØ§Ø·Ù…Ø© Ø£Ø­Ù…Ø¯',
    reference: 'INB-00040',
    referenceType: 'Ø·Ù„Ø¨ ÙˆØ§Ø±Ø¯',
    warehouse: 'Ù…Ø³ØªÙˆØ¯Ø¹ Ø§Ù„Ø¯Ù…Ø§Ù…',
  },
  {
    id: 'MOV-004',
    dateTime: '2026-02-01 16:45',
    movementType: 'ØµØ§Ø¯Ø±',
    productName: 'Product A',
    sku: 'SKU-1001',
    quantityChange: '-25',
    location: 'LOC-001',
    doneBy: 'Ø®Ø§Ù„Ø¯ Ø³Ø¹ÙŠØ¯',
    reference: 'OUT-00017',
    referenceType: 'Ø·Ù„Ø¨ ØµØ§Ø¯Ø±',
    warehouse: 'Ø§Ù„Ù…Ø³ØªÙˆØ¯Ø¹ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ - Ø§Ù„Ø±ÙŠØ§Ø¶',
  },
  {
    id: 'MOV-005',
    dateTime: '2026-02-01 14:20',
    movementType: 'return',
    productName: 'Product D',
    sku: 'SKU-4007',
    quantityChange: '+5',
    location: 'LOC-004',
    doneBy: 'Ø³Ø§Ø±Ø© Ø­Ø³Ù†',
    reference: 'RET-00012',
    referenceType: 'return',
    warehouse: 'Ù…Ø³ØªÙˆØ¯Ø¹ Ø§Ù„Ø®Ø¨Ø±',
  },
  {
    id: 'MOV-006',
    dateTime: '2026-02-01 11:30',
    movementType: 'ÙØ§ØªÙˆØ±Ø©',
    productName: 'Product E',
    sku: 'SKU-5009',
    quantityChange: '-15',
    location: 'LOC-005',
    doneBy: 'Ø¹Ù„ÙŠ Ù…Ø­Ù…ÙˆØ¯',
    reference: 'INV-00089',
    referenceType: 'ÙØ§ØªÙˆØ±Ø©',
    warehouse: 'Ø§Ù„Ù…Ø³ØªÙˆØ¯Ø¹ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ - Ø§Ù„Ø±ÙŠØ§Ø¶',
  },
];

// Generated Reports data
const generatedReportsData = [
  {
    id: 'RPT-001',
    reportName: 'ØªÙ‚Ø±ÙŠØ± Ø§Ù„Ù…Ø®Ø²ÙˆÙ† Ø§Ù„Ø­Ø§Ù„ÙŠ - ÙØ¨Ø±Ø§ÙŠØ± 2026',
    creationDate: '2026-02-02 14:30',
    extension: 'PDF',
    status: 'Ù…ÙƒØªÙ…Ù„',
  },
  {
    id: 'RPT-002',
    reportName: 'ØªÙ‚Ø±ÙŠØ± Ø³Ø¬Ù„ Ø§Ù„Ø­Ø±ÙƒØ§Øª - ÙŠÙ†Ø§ÙŠØ± 2026',
    creationDate: '2026-02-01 10:15',
    extension: 'CSV',
    status: 'Ù…ÙƒØªÙ…Ù„',
  },
  {
    id: 'RPT-003',
    reportName: 'ØªÙ‚Ø±ÙŠØ± Ù…Ù„Ø®Øµ Ø§Ù„Ø·Ù„Ø¨Ø§Øª - Ø§Ù„Ø£Ø³Ø¨ÙˆØ¹ Ø§Ù„Ù…Ø§Ø¶ÙŠ',
    creationDate: '2026-01-30 16:45',
    extension: 'PDF',
    status: 'Ù…ÙƒØªÙ…Ù„',
  },
  {
    id: 'RPT-004',
    reportName: 'ØªÙ‚Ø±ÙŠØ± Ø³Ø¬Ù„ Ø§Ù„Ù…Ø®Ø²ÙˆÙ† - Ø¯ÙŠØ³Ù…Ø¨Ø± 2025',
    creationDate: '2026-01-28 09:20',
    extension: 'CSV',
    status: 'Ù…ÙƒØªÙ…Ù„',
  },
  {
    id: 'RPT-005',
    reportName: 'ØªÙ‚Ø±ÙŠØ± Ø§Ù„Ù…Ø®Ø²ÙˆÙ† Ø§Ù„Ø­Ø§Ù„ÙŠ - ÙŠÙ†Ø§ÙŠØ± 2026',
    creationDate: '2026-01-25 11:00',
    extension: 'PDF',
    status: 'Ù‚ÙŠØ¯ Ø§Ù„Ù…Ø¹Ø§Ù„Ø¬Ø©',
  },
];

// Billing/Subscription data
const billingData = {
  currentPlan: {
    planName: 'Ø®Ø·Ø© Ø§Ù„Ù…Ø¤Ø³Ø³Ø§Øª',
    planType: 'Ø®Ø·Ø© Ø§Ù„Ù…Ø¤Ø³Ø³Ø§Øª',
    renewalDate: '2026-03-01',
    status: 'Ù†Ø´Ø·',
  },
  usage: {
    space: {
      used: 75, // percentage
      total: 100,
      usedGB: 750,
      totalGB: 1000,
      estimatedCost: 1500,
    },
    incomingMovements: {
      count: 245,
      estimatedCost: 1225,
    },
    outgoingOrders: {
      count: 189,
      estimatedCost: 945,
    },
  },
  totalEstimatedCost: 3670,
};

// Invoices data
const invoicesData = [
  {
    id: 'INV-001',
    periodStart: '2026-01-01',
    periodEnd: '2026-01-31',
    status: 'Ù…Ø¯ÙÙˆØ¹',
    total: 3670,
    currency: 'Ø¯ÙˆÙ„Ø§Ø±',
    issueDate: '2026-02-01',
    paymentDate: '2026-02-05',
    notes: '',
  },
  {
    id: 'INV-002',
    periodStart: '2025-12-01',
    periodEnd: '2025-12-31',
    status: 'ØµØ§Ø¯Ø±Ø©',
    total: 3420,
    currency: 'Ø¯ÙˆÙ„Ø§Ø±',
    issueDate: '2026-01-01',
    paymentDate: '-',
    notes: '',
  },
  {
    id: 'INV-003',
    periodStart: '2025-11-01',
    periodEnd: '2025-11-30',
    status: 'Ù…Ø¯ÙÙˆØ¹',
    total: 3150,
    currency: 'Ø¯ÙˆÙ„Ø§Ø±',
    issueDate: '2025-12-01',
    paymentDate: '2025-12-03',
    notes: '',
  },
];

// Invoice details data
const getInvoiceDetails = (invoiceId: string) => {
  if (invoiceId === 'INV-001') {
    return {
      invoiceNumber: 'INV-001',
      periodStart: '2026-01-01',
      periodEnd: '2026-01-31',
      status: 'Ù…Ø¯ÙÙˆØ¹',
      cycle: 'Ø´Ù‡Ø±ÙŠ',
      currency: 'Ø¯ÙˆÙ„Ø§Ø±',
      totalAmount: 3670,
      items: [
        { type: 'Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…Ø©', quantity: 750, unitPrice: 2, amount: 1500 },
        { type: 'Ø­Ø±ÙƒØ§Øª Ø§Ù„ÙˆØ§Ø±Ø¯', quantity: 245, unitPrice: 5, amount: 1225 },
        { type: 'Ø·Ù„Ø¨Ø§Øª Ø§Ù„ØµØ§Ø¯Ø±', quantity: 189, unitPrice: 5, amount: 945 },
      ],
      fixedFee: 0,
      additionalFee: 0,
      totalMovementFees: 3670,
    };
  }
  return {
    invoiceNumber: 'INV-002',
    periodStart: '2025-12-01',
    periodEnd: '2025-12-31',
    status: 'ØµØ§Ø¯Ø±Ø©',
    cycle: 'Ø´Ù‡Ø±ÙŠ',
    currency: 'Ø¯ÙˆÙ„Ø§Ø±',
    totalAmount: 3420,
    items: [
      { type: 'Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…Ø©', quantity: 680, unitPrice: 2, amount: 1360 },
      { type: 'Ø­Ø±ÙƒØ§Øª Ø§Ù„ÙˆØ§Ø±Ø¯', quantity: 230, unitPrice: 5, amount: 1150 },
      { type: 'Ø·Ù„Ø¨Ø§Øª Ø§Ù„ØµØ§Ø¯Ø±', quantity: 182, unitPrice: 5, amount: 910 },
    ],
    fixedFee: 0,
    additionalFee: 0,
    totalMovementFees: 3420,
  };
};

// Users data
const usersData = [
  {
    id: '1',
    firstName: 'Ø£Ø­Ù…Ø¯',
    lastName: 'Ù…Ø­Ù…Ø¯',
    email: 'ahmed.mohamed@example.com',
    role: 'admin',
    status: 'Ù…ÙØ¹Ù„',
    creationTime: '2025-12-15 10:30',
  },
  {
    id: '2',
    firstName: 'ÙØ§Ø·Ù…Ø©',
    lastName: 'Ø¹Ù„ÙŠ',
    email: 'fatima.ali@example.com',
    role: 'Ù…Ø¯ÙŠØ± Ø§Ù„Ù…Ø®Ø²ÙˆÙ†',
    status: 'Ù…ÙØ¹Ù„',
    creationTime: '2025-12-20 14:15',
  },
  {
    id: '3',
    firstName: 'Ø®Ø§Ù„Ø¯',
    lastName: 'Ø³Ø¹ÙŠØ¯',
    email: 'khalid.saeed@example.com',
    role: 'Ù…ÙˆØ¸Ù',
    status: 'ØºÙŠØ± Ù…ÙØ¹Ù„',
    creationTime: '2026-01-05 09:00',
  },
  {
    id: '4',
    firstName: 'Ø³Ø§Ø±Ø©',
    lastName: 'Ø­Ø³Ù†',
    email: 'sara.hassan@example.com',
    role: 'Ù…Ø­Ø§Ø³Ø¨',
    status: 'Ù…ÙØ¹Ù„',
    creationTime: '2026-01-10 11:45',
  },
  {
    id: '5',
    firstName: 'Ù…Ø­Ù…Ø¯',
    lastName: 'Ø¹Ù„ÙŠ',
    email: 'mohamed.ali@example.com',
    role: 'Ù…Ø¯ÙŠØ± Ø§Ù„Ù…Ø¨ÙŠØ¹Ø§Øª',
    status: 'Ù…ÙØ¹Ù„',
    creationTime: '2026-01-15 16:20',
  },
];

// Notifications data
const notificationsData = [
  {
    id: 'NOT-001',
    creationTime: '2026-02-02 10:30',
    importance: 'Ù…Ø±ØªÙØ¹',
    title: 'Ø·Ù„Ø¨ ÙˆØ§Ø±Ø¯ Ø¬Ø¯ÙŠØ¯ ÙŠØ­ØªØ§Ø¬ Ø¥Ù„Ù‰ Ø§Ù„Ù…ÙˆØ§ÙÙ‚Ø©',
    messagePreview: 'ØªÙ… Ø¥Ù†Ø´Ø§Ø¡ Ø·Ù„Ø¨ ÙˆØ§Ø±Ø¯ Ø¬Ø¯ÙŠØ¯ INB-00041 ÙŠØ­ØªØ§Ø¬ Ø¥Ù„Ù‰ Ù…Ø±Ø§Ø¬Ø¹Ø© ÙˆÙ…ÙˆØ§ÙÙ‚Ø©...',
    fullMessage: 'ØªÙ… Ø¥Ù†Ø´Ø§Ø¡ Ø·Ù„Ø¨ ÙˆØ§Ø±Ø¯ Ø¬Ø¯ÙŠØ¯ Ø¨Ø±Ù‚Ù… INB-00041 ÙŠØ­ØªØ§Ø¬ Ø¥Ù„Ù‰ Ù…Ø±Ø§Ø¬Ø¹Ø© ÙˆÙ…ÙˆØ§ÙÙ‚Ø©. ÙŠØ±Ø¬Ù‰ Ù…Ø±Ø§Ø¬Ø¹Ø© ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø·Ù„Ø¨ ÙˆØ§Ù„Ù…ÙˆØ§ÙÙ‚Ø© Ø¹Ù„ÙŠÙ‡ ÙÙŠ Ø£Ù‚Ø±Ø¨ ÙˆÙ‚Øª Ù…Ù…ÙƒÙ†.',
    referenceType: 'Ø·Ù„Ø¨ ÙˆØ§Ø±Ø¯',
    referenceId: 'INB-00041',
    readStatus: 'ØºÙŠØ± Ù…Ù‚Ø±ÙˆØ¡',
  },
  {
    id: 'NOT-002',
    creationTime: '2026-02-02 09:15',
    importance: 'Ù…ØªÙˆØ³Ø·',
    title: 'ÙØ§ØªÙˆØ±Ø© Ø¬Ø¯ÙŠØ¯Ø© ØµØ§Ø¯Ø±Ø©',
    messagePreview: 'ØªÙ… Ø¥ØµØ¯Ø§Ø± ÙØ§ØªÙˆØ±Ø© Ø¬Ø¯ÙŠØ¯Ø© INV-001 Ù„Ù„Ù…Ø³ØªÙˆØ¯Ø¹ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ...',
    fullMessage: 'ØªÙ… Ø¥ØµØ¯Ø§Ø± ÙØ§ØªÙˆØ±Ø© Ø¬Ø¯ÙŠØ¯Ø© Ø¨Ø±Ù‚Ù… INV-001 Ù„Ù„Ù…Ø³ØªÙˆØ¯Ø¹ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ - Ø§Ù„Ø±ÙŠØ§Ø¶. ÙŠØ±Ø¬Ù‰ Ù…Ø±Ø§Ø¬Ø¹Ø© Ø§Ù„ÙØ§ØªÙˆØ±Ø© ÙˆØ§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ù…Ø¨Ø§Ù„Øº Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø©.',
    referenceType: 'ÙØ§ØªÙˆØ±Ø©',
    referenceId: 'INV-001',
    readStatus: 'Ù…Ù‚Ø±ÙˆØ¡',
  },
  {
    id: 'NOT-003',
    creationTime: '2026-02-01 16:45',
    importance: 'Ø­Ø±Ø¬',
    title: 'ØªÙ†Ø¨ÙŠÙ‡: Ù†Ù‚Øµ ÙÙŠ Ø§Ù„Ù…Ø®Ø²ÙˆÙ†',
    messagePreview: 'ØªÙ†Ø¨ÙŠÙ‡: Ø§Ù„Ù…Ù†ØªØ¬ SKU-1001 ÙˆØµÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ø¯Ù†Ù‰ Ù…Ù† Ø§Ù„Ù…Ø®Ø²ÙˆÙ†...',
    fullMessage: 'ØªÙ†Ø¨ÙŠÙ‡: Ø§Ù„Ù…Ù†ØªØ¬ SKU-1001 (Product A) ÙˆØµÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ø¯Ù†Ù‰ Ù…Ù† Ø§Ù„Ù…Ø®Ø²ÙˆÙ†. Ø§Ù„ÙƒÙ…ÙŠØ© Ø§Ù„Ø­Ø§Ù„ÙŠØ©: 50 Ù‚Ø·Ø¹Ø©. ÙŠØ±Ø¬Ù‰ Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ø·Ù„Ø¨ ÙÙŠ Ø£Ù‚Ø±Ø¨ ÙˆÙ‚Øª Ù…Ù…ÙƒÙ†.',
    referenceType: 'ØªÙ‚Ø§Ø±ÙŠØ±',
    referenceId: 'RPT-ALERT-001',
    readStatus: 'ØºÙŠØ± Ù…Ù‚Ø±ÙˆØ¡',
  },
  {
    id: 'NOT-004',
    creationTime: '2026-02-01 14:20',
    importance: 'Ù…Ù†Ø®ÙØ¶',
    title: 'ØªÙ‚Ø±ÙŠØ± Ø¬Ø§Ù‡Ø² Ù„Ù„ØªØ­Ù…ÙŠÙ„',
    messagePreview: 'ØªÙ‚Ø±ÙŠØ± Ø§Ù„Ù…Ø®Ø²ÙˆÙ† Ø§Ù„Ø­Ø§Ù„ÙŠ Ø¬Ø§Ù‡Ø² Ù„Ù„ØªØ­Ù…ÙŠÙ„...',
    fullMessage: 'ØªÙ‚Ø±ÙŠØ± Ø§Ù„Ù…Ø®Ø²ÙˆÙ† Ø§Ù„Ø­Ø§Ù„ÙŠ - ÙØ¨Ø±Ø§ÙŠØ± 2026 Ø¬Ø§Ù‡Ø² Ù„Ù„ØªØ­Ù…ÙŠÙ„. ÙŠÙ…ÙƒÙ†Ùƒ ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØªÙ‚Ø±ÙŠØ± Ø§Ù„Ø¢Ù† Ù…Ù† ØµÙØ­Ø© Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ±.',
    referenceType: 'ØªÙ‚Ø§Ø±ÙŠØ±',
    referenceId: 'RPT-001',
    readStatus: 'Ù…Ù‚Ø±ÙˆØ¡',
  },
  {
    id: 'NOT-005',
    creationTime: '2026-02-01 11:30',
    importance: 'Ù…ØªÙˆØ³Ø·',
    title: 'Ø·Ù„Ø¨ ØµØ§Ø¯Ø± ØªÙ… Ø¥ÙƒÙ…Ø§Ù„Ù‡',
    messagePreview: 'ØªÙ… Ø¥ÙƒÙ…Ø§Ù„ Ø·Ù„Ø¨ ØµØ§Ø¯Ø± OUT-00018 Ø¨Ù†Ø¬Ø§Ø­...',
    fullMessage: 'ØªÙ… Ø¥ÙƒÙ…Ø§Ù„ Ø·Ù„Ø¨ ØµØ§Ø¯Ø± Ø¨Ø±Ù‚Ù… OUT-00018 Ø¨Ù†Ø¬Ø§Ø­. ØªÙ… Ø´Ø­Ù† Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø¨Ù†ÙˆØ¯ Ø¥Ù„Ù‰ Ø§Ù„Ø¹Ù…ÙŠÙ„. ÙŠØ±Ø¬Ù‰ ØªØ­Ø¯ÙŠØ« Ø­Ø§Ù„Ø© Ø§Ù„Ø·Ù„Ø¨.',
    referenceType: 'Ø·Ù„Ø¨ ØµØ§Ø¯Ø±',
    referenceId: 'OUT-00018',
    readStatus: 'Ù…Ù‚Ø±ÙˆØ¡',
  },
];

// Support Tickets data
const supportTicketsData = [
  {
    id: 'TKT-001',
    title: 'Ù…Ø´ÙƒÙ„Ø© ÙÙŠ ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„',
    description: 'Ù„Ø§ Ø£Ø³ØªØ·ÙŠØ¹ ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ù†Ø¸Ø§Ù…. ÙŠØ¸Ù‡Ø± Ø®Ø·Ø£ Ø¹Ù†Ø¯ Ù…Ø­Ø§ÙˆÙ„Ø© Ø§Ù„Ø¯Ø®ÙˆÙ„.',
    status: 'Ù…ÙØªÙˆØ­',
    priority: 'Ù…Ø±ØªÙØ¹',
    creationDate: '2026-02-02 14:30',
    lastUpdate: '2026-02-02 15:00',
  },
  {
    id: 'TKT-002',
    title: 'Ø§Ø³ØªÙØ³Ø§Ø± Ø­ÙˆÙ„ ØªÙ‚Ø±ÙŠØ± Ø§Ù„Ù…Ø®Ø²ÙˆÙ†',
    description: 'Ø£Ø­ØªØ§Ø¬ Ø¥Ù„Ù‰ Ù…Ø³Ø§Ø¹Ø¯Ø© ÙÙŠ ÙÙ‡Ù… ÙƒÙŠÙÙŠØ© Ù‚Ø±Ø§Ø¡Ø© ØªÙ‚Ø±ÙŠØ± Ø§Ù„Ù…Ø®Ø²ÙˆÙ† Ø§Ù„Ø­Ø§Ù„ÙŠ.',
    status: 'Ù‚ÙŠØ¯ Ø§Ù„Ù…Ø¹Ø§Ù„Ø¬Ø©',
    priority: 'Ù…ØªÙˆØ³Ø·',
    creationDate: '2026-02-01 10:15',
    lastUpdate: '2026-02-01 11:30',
  },
  {
    id: 'TKT-003',
    title: 'Ø·Ù„Ø¨ Ù…ÙŠØ²Ø© Ø¬Ø¯ÙŠØ¯Ø©',
    description: 'Ø£Ø±ØºØ¨ ÙÙŠ Ø¥Ø¶Ø§ÙØ© Ù…ÙŠØ²Ø© ØªØµØ¯ÙŠØ± Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø¨ØªÙ†Ø³ÙŠÙ‚ Excel.',
    status: 'Ù…ØºÙ„Ù‚',
    priority: 'Ù…Ù†Ø®ÙØ¶',
    creationDate: '2026-01-30 09:00',
    lastUpdate: '2026-01-31 16:45',
  },
];

// Dashboard Page Component
function DashboardPage() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalStock: 0,
    incomingOrders: 0,
    outgoingOrders: 0,
  });
  const [movementByMonth, setMovementByMonth] = useState<
    { name: string; inbound: number; outbound: number }[]
  >([]);
  const [stockDistribution, setStockDistribution] = useState<
    { name: string; value: number; color: string }[]
  >([]);
  const [weeklyTrend, setWeeklyTrend] = useState<{ name: string; value: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const dashboard = await apiFetch<{
          stats: {
            totalProducts: number;
            totalStock: number;
            incomingOrders: number;
            outgoingOrders: number;
            recentMovements: number;
          };
          movementByMonth: { name: string; inbound: number; outbound: number }[];
          stockDistribution: { name: string; value: number }[];
          weeklyTrend: { name: string; value: number }[];
          recentMovements: {
            date: string;
            movementType: string;
            sku: string;
            qtyChange: number;
            referenceId: string | null;
          }[];
        }>('/inventory/dashboard');

        if (!active) return;

        setStats(dashboard.stats);
        setMovementByMonth(dashboard.movementByMonth);
        setWeeklyTrend(dashboard.weeklyTrend);

        const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
        setStockDistribution(
          dashboard.stockDistribution.map((item, index) => ({
            ...item,
            color: colors[index % colors.length],
          })),
        );

      } catch (e: any) {
        console.error('Failed to load dashboard data', e);
        if (active) {
          setError('ØªØ¹Ø°Ø± ØªØ­Ù…ÙŠÙ„ Ø¨ÙŠØ§Ù†Ø§Øª Ù„ÙˆØ­Ø© Ø§Ù„ØªØ­ÙƒÙ….');
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

  const statsCards = [
    { title: 'Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª', value: stats.totalProducts, icon: Package, color: 'bg-blue-500' },
    { title: 'Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„Ù…Ø®Ø²ÙˆÙ†', value: stats.totalStock.toLocaleString('en-US'), icon: TrendingUp, color: 'bg-green-500' },
    { title: 'Ø·Ù„Ø¨Ø§Øª ÙˆØ§Ø±Ø¯', value: stats.incomingOrders, icon: ArrowDown, color: 'bg-purple-500' },
    { title: 'Ø·Ù„Ø¨Ø§Øª ØµØ§Ø¯Ø±', value: stats.outgoingOrders, icon: ArrowUp, color: 'bg-orange-500' },
  ];

  return (
    <>
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ù„ÙˆØ­Ø© Ø§Ù„ØªØ­ÙƒÙ…</h1>
          <p className="text-gray-500 mt-1">Ù†Ø¸Ø±Ø© Ø¹Ø§Ù…Ø© Ø¹Ù„Ù‰ Ø£Ø¯Ø§Ø¡ Ø§Ù„Ù…Ø®Ø²ÙˆÙ† ÙˆØ§Ù„Ø­Ø±ÙƒØ§Øª</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {statsCards.map((card, index) => (
          <Card key={index} className="stat-card border-0 shadow-sm bg-white">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 mt-2">
                    Ù…Ø¨Ø§Ø´Ø± Ù…Ù† Ø§Ù„Ù†Ø¸Ø§Ù…
                  </span>
                </div>
                <div className={`${card.color} p-3 rounded-xl`}>
                  <card.icon className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory Movement Chart */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold">Ø­Ø±ÙƒØ§Øª Ø§Ù„Ù…Ø®Ø²ÙˆÙ†</CardTitle>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => navigate('/movements')}
                className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50"
              >
                Ø¹Ø±Ø¶ Ø­Ø±ÙƒØ§Øª Ø§Ù„Ù…Ø®Ø²ÙˆÙ†
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={movementByMonth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                  />
                  <Bar dataKey="inbound" name="ÙˆØ§Ø±Ø¯" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="outbound" name="ØµØ§Ø¯Ø±" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold">ØªÙˆØ²ÙŠØ¹ Ø§Ù„ÙØ¦Ø§Øª</CardTitle>
              <Button variant="ghost" size="sm" className="text-gray-500">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="chart-container flex items-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={stockDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {stockDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Statistics Chart */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold">Ø¥Ø­ØµØ§Ø¦ÙŠØ§Øª Ø§Ù„Ø£Ø¯Ø§Ø¡</CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                +12.5% Ù‡Ø°Ø§ Ø§Ù„Ø´Ù‡Ø±
              </Badge>
              <Button variant="ghost" size="sm" className="text-gray-500">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={weeklyTrend}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

    </>
  );
}

// Inventory Page Component
function InventoryPage() {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [productNameFilter, setProductNameFilter] = useState('');
  const [productCodeFilter, setProductCodeFilter] = useState('');
  const [inventoryRows, setInventoryRows] = useState<InventoryRow[]>([]);
  const [filteredRows, setFilteredRows] = useState<InventoryRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const stock = await apiFetch<any[]>('/inventory/current-stock');
        if (!active) return;
        const mapped: InventoryRow[] = stock.map((row) => ({
          productName: row.product?.name || '',
          productCode: row.product?.sku || '',
          uom: row.product?.defaultUom?.code || '',
          currentQuantity:
            typeof row.quantity === 'string'
              ? Number(row.quantity)
              : Number(row.quantity ?? 0),
          lastMovementDate: row.updatedAt
            ? new Date(row.updatedAt).toLocaleDateString('en-US')
            : '',
          lastMovementDateRaw: row.updatedAt ? new Date(row.updatedAt) : null,
          notes: '',
        }));
        setInventoryRows(mapped);
        setFilteredRows(mapped);
      } catch (e: any) {
        console.error('Failed to load inventory', e);
        if (active) {
          setError('ØªØ¹Ø°Ø± ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ù…Ø®Ø²ÙˆÙ†. ÙŠØ±Ø¬Ù‰ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø© Ø£Ø®Ø±Ù‰.');
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

  // Apply filters
  useEffect(() => {
    let filtered = [...inventoryRows];

    if (productNameFilter) {
      filtered = filtered.filter((row) =>
        row.productName.toLowerCase().includes(productNameFilter.toLowerCase())
      );
    }

    if (productCodeFilter) {
      filtered = filtered.filter((row) =>
        row.productCode.toLowerCase().includes(productCodeFilter.toLowerCase())
      );
    }

    if (dateFrom) {
      filtered = filtered.filter((row) => {
        if (!row.lastMovementDateRaw) return false;
        const filterDate = new Date(dateFrom);
        filterDate.setHours(0, 0, 0, 0);
        const rowDate = new Date(row.lastMovementDateRaw);
        rowDate.setHours(0, 0, 0, 0);
        return rowDate >= filterDate;
      });
    }

    if (dateTo) {
      filtered = filtered.filter((row) => {
        if (!row.lastMovementDateRaw) return false;
        const filterDate = new Date(dateTo);
        filterDate.setHours(23, 59, 59, 999);
        const rowDate = new Date(row.lastMovementDateRaw);
        rowDate.setHours(0, 0, 0, 0);
        return rowDate <= filterDate;
      });
    }

    setFilteredRows(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [productNameFilter, productCodeFilter, dateFrom, dateTo, inventoryRows]);

  const paginated = paginate(filteredRows, currentPage, pageSize);
  const displayRows = paginated.data;

  const handleExportCSV = () => {
    const csvData = filteredRows.map((row) => ({
      'Ø§Ø³Ù… Ø§Ù„Ù…Ù†ØªØ¬': row.productName,
      'ÙƒÙˆØ¯ Ø§Ù„Ù…Ù†ØªØ¬': row.productCode,
      'ÙˆØ­Ø¯Ø© Ø§Ù„Ù‚ÙŠØ§Ø³': row.uom,
      'Ø§Ù„ÙƒÙ…ÙŠØ© Ø§Ù„Ø­Ø§Ù„ÙŠØ©': row.currentQuantity,
      'ØªØ§Ø±ÙŠØ® Ø¢Ø®Ø± Ø­Ø±ÙƒØ©': row.lastMovementDate,
      'Ù…Ù„Ø§Ø­Ø¸Ø§Øª': row.notes || '',
    }));
    exportToCSV(csvData, 'Ø§Ù„Ù…Ø®Ø²ÙˆÙ†_Ø§Ù„Ø­Ø§Ù„ÙŠ.csv');
  };

  const handleExportPDF = async () => {
    await exportToPDF('inventory-page-content', 'Ø§Ù„Ù…Ø®Ø²ÙˆÙ†_Ø§Ù„Ø­Ø§Ù„ÙŠ.pdf');
  };

  return (
    <div id="inventory-page-content">
      {/* Section 1: Title and Export Buttons */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Ø§Ù„Ù…Ø®Ø²ÙˆÙ† Ø§Ù„Ø­Ø§Ù„ÙŠ</h1>
        <div className="flex items-center gap-3">
          <Button 
            onClick={handleExportCSV}
            variant="outline" 
            className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2"
          >
            <Download className="w-4 h-4" />
            ØªØµØ¯ÙŠØ± CSV
          </Button>
          <Button 
            onClick={handleExportPDF}
            variant="outline" 
            className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2"
          >
            <Download className="w-4 h-4" />
            ØªØµØ¯ÙŠØ± PDF
          </Button>
        </div>
      </div>

      {/* Section 2: Filters */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Ø§Ø³Ù… Ø§Ù„Ù…Ù†ØªØ¬
            </label>
              <Input
                type="text"
                value={productNameFilter}
                onChange={(e) => setProductNameFilter(e.target.value)}
                placeholder="Ø§Ø¨Ø­Ø« Ø¹Ù† Ø§Ø³Ù… Ø§Ù„Ù…Ù†ØªØ¬..."
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                ÙƒÙˆØ¯ Ø§Ù„Ù…Ù†ØªØ¬
              </label>
              <Input
                type="text"
                value={productCodeFilter}
                onChange={(e) => setProductCodeFilter(e.target.value)}
                placeholder="Ø§Ø¨Ø­Ø« Ø¹Ù† ÙƒÙˆØ¯ Ø§Ù„Ù…Ù†ØªØ¬..."
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                ØªØ§Ø±ÙŠØ® Ø¢Ø®Ø± Ø­Ø±ÙƒØ© (Ù…Ù†)
              </label>
              <Input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                ØªØ§Ø±ÙŠØ® Ø¢Ø®Ø± Ø­Ø±ÙƒØ© (Ø¥Ù„Ù‰)
              </label>
              <Input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Inventory Table */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md m-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ø³Ù… Ø§Ù„Ù…Ù†ØªØ¬
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    ÙƒÙˆØ¯ Ø§Ù„Ù…Ù†ØªØ¬
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    ÙˆØ­Ø¯Ø© Ø§Ù„Ù‚ÙŠØ§Ø³
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ù„ÙƒÙ…ÙŠØ© Ø§Ù„Ø­Ø§Ù„ÙŠØ©
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    ØªØ§Ø±ÙŠØ® Ø¢Ø®Ø± Ø­Ø±ÙƒØ©
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ù…Ù„Ø§Ø­Ø¸Ø§Øª
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-sm text-gray-500">
                      Ø¬Ø§Ø±Ù ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ù…Ø®Ø²ÙˆÙ†...
                    </td>
                  </tr>
                ) : displayRows.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-sm text-gray-500">
                      Ù„Ø§ ØªÙˆØ¬Ø¯ Ø¨ÙŠØ§Ù†Ø§Øª Ù…Ø®Ø²ÙˆÙ† Ù…ØªØ§Ø­Ø©.
                    </td>
                  </tr>
                ) : (
                  displayRows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                      {row.productName}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 font-mono font-medium">
                      {row.productCode}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {row.uom}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                      {row.currentQuantity}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                      {row.lastMovementDate}
                    </td>
                    <td className="py-4 px-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="text-sm text-[#176C33] hover:text-[#104920] hover:underline cursor-pointer transition-colors">
                            {row.notes ? 'Ø¹Ø±Ø¶ Ø§Ù„Ù…Ù„Ø§Ø­Ø¸Ø§Øª' : '-'}
                          </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Ù…Ù„Ø§Ø­Ø¸Ø§Øª - {row.productName}</DialogTitle>
                            <DialogDescription className="text-right">
                              {row.productCode}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4">
                            <p className="text-sm text-gray-700 text-right leading-relaxed">
                              {row.notes || 'Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ù„Ø§Ø­Ø¸Ø§Øª'}
                            </p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </td>
                  </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {filteredRows.length > pageSize && (
            <Pagination
              currentPage={currentPage}
              totalPages={paginated.totalPages}
              total={paginated.total}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Orders Page Component
function OrdersPage({ 
  onCreateOrder, 
  onCreateOrderDetails 
}: { 
  onCreateOrder: (type: 'ÙˆØ§Ø±Ø¯' | 'ØµØ§Ø¯Ø±') => void;
  onCreateOrderDetails: (orderId: string, orderType: 'ÙˆØ§Ø±Ø¯' | 'ØµØ§Ø¯Ø±') => void;
}) {
  const [status, setStatus] = useState('Ø¬Ø¯ÙŠØ¯');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [orderType, setOrderType] = useState('ÙˆØ§Ø±Ø¯');
  const [incomingRows, setIncomingRows] = useState<SimpleOrderRow[]>([]);
  const [outgoingRows, setOutgoingRows] = useState<SimpleOrderRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        setError(null);
        
        const [inbound, outbound] = await Promise.all([
          apiFetch<any[]>('/inbound-orders'),
          apiFetch<any[]>('/outbound-orders'),
        ]);
        
        if (!active) return;
        
        const inboundMapped: SimpleOrderRow[] = inbound.map((order) => ({
          id: order.id,
          orderNumber: order.orderNumber || order.id,
          creationDate: order.createdAt
            ? new Date(order.createdAt).toLocaleDateString('en-US')
            : '',
          status: order.status === 'COMPLETED' ? 'Ù…ÙƒØªÙ…Ù„' : order.status === 'IN_PROGRESS' || order.status === 'RECEIVING' ? 'Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°' : 'Ø¬Ø¯ÙŠØ¯',
          expectedDate: order.expectedArrivalDate
            ? new Date(order.expectedArrivalDate).toLocaleDateString('en-US')
            : '',
          expectedDateRaw: order.expectedArrivalDate ? new Date(order.expectedArrivalDate) : null,
          itemsCount: order.items?.length || 0,
          notes: order.notes || '',
        }));
        
        const outboundMapped: SimpleOrderRow[] = outbound.map((order) => ({
          id: order.id,
          orderNumber: order.orderNumber || order.id,
          creationDate: order.createdAt
            ? new Date(order.createdAt).toLocaleDateString('en-US')
            : '',
          status: order.status === 'COMPLETED' || order.status === 'SHIPPED' ? 'Ù…ÙƒØªÙ…Ù„' : order.status === 'IN_PROGRESS' ? 'Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°' : 'Ø¬Ø¯ÙŠØ¯',
          expectedDate: order.expectedShipDate
            ? new Date(order.expectedShipDate).toLocaleDateString('en-US')
            : '',
          expectedDateRaw: order.expectedShipDate ? new Date(order.expectedShipDate) : null,
          itemsCount: order.items?.length || 0,
          notes: order.notes || '',
        }));
        
        setIncomingRows(inboundMapped);
        setOutgoingRows(outboundMapped);
      } catch (e: any) {
        console.error('Failed to load orders', e);
        if (active) {
          setError('ØªØ¹Ø°Ø± ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø·Ù„Ø¨Ø§Øª. ÙŠØ±Ø¬Ù‰ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø© Ø£Ø®Ø±Ù‰.');
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

  // Calculate stats from real data
  const incomingStats = {
    open: incomingRows.filter((r) => r.status === 'Ø¬Ø¯ÙŠØ¯').length,
    inProgress: incomingRows.filter((r) => r.status === 'Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°').length,
    completed: incomingRows.filter((r) => r.status === 'Ù…ÙƒØªÙ…Ù„').length,
  };

  const outgoingStats = {
    open: outgoingRows.filter((r) => r.status === 'Ø¬Ø¯ÙŠØ¯').length,
    inProgress: outgoingRows.filter((r) => r.status === 'Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°').length,
    completed: outgoingRows.filter((r) => r.status === 'Ù…ÙƒØªÙ…Ù„').length,
  };

  const stats = orderType === 'ÙˆØ§Ø±Ø¯' ? incomingStats : outgoingStats;
  const allTableData =
    orderType === 'ÙˆØ§Ø±Ø¯'
      ? incomingRows
      : outgoingRows;

  // Apply filters
  const [filteredTableData, setFilteredTableData] = useState<SimpleOrderRow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    let filtered = [...allTableData];

    if (status && status !== 'Ø§Ù„ÙƒÙ„') {
      filtered = filtered.filter((row) => row.status === status);
    }

    if (dateFrom) {
      filtered = filtered.filter((row) => {
        if (!row.expectedDateRaw) return false;
        const filterDate = new Date(dateFrom);
        filterDate.setHours(0, 0, 0, 0);
        const rowDate = new Date(row.expectedDateRaw);
        rowDate.setHours(0, 0, 0, 0);
        return rowDate >= filterDate;
      });
    }

    if (dateTo) {
      filtered = filtered.filter((row) => {
        if (!row.expectedDateRaw) return false;
        const filterDate = new Date(dateTo);
        filterDate.setHours(23, 59, 59, 999);
        const rowDate = new Date(row.expectedDateRaw);
        rowDate.setHours(0, 0, 0, 0);
        return rowDate <= filterDate;
      });
    }

    setFilteredTableData(filtered);
    setCurrentPage(1);
  }, [status, dateFrom, dateTo, allTableData, orderType]);

  const paginated = paginate(filteredTableData, currentPage, pageSize);
  const tableData = paginated.data;

  const handleExportCSV = () => {
    const csvData = filteredTableData.map((row) => ({
      'Ø±Ù‚Ù… Ø§Ù„Ø·Ù„Ø¨': row.orderNumber,
      'ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡': row.creationDate,
      'Ø§Ù„Ø­Ø§Ù„Ø©': row.status,
      'Ø§Ù„ØªØ§Ø±ÙŠØ® Ø§Ù„Ù…ØªÙˆÙ‚Ø¹': row.expectedDate,
      'Ø¹Ø¯Ø¯ Ø§Ù„Ø¨Ù†ÙˆØ¯': row.itemsCount,
      'Ù…Ù„Ø§Ø­Ø¸Ø§Øª': row.notes || '',
    }));
    exportToCSV(csvData, `${orderType === 'ÙˆØ§Ø±Ø¯' ? 'Ø·Ù„Ø¨Ø§Øª_Ø§Ù„ÙˆØ§Ø±Ø¯' : 'Ø·Ù„Ø¨Ø§Øª_Ø§Ù„ØµØ§Ø¯Ø±'}.csv`);
  };

  const handleExportPDF = async () => {
    await exportToPDF('orders-page-content', `${orderType === 'ÙˆØ§Ø±Ø¯' ? 'Ø·Ù„Ø¨Ø§Øª_Ø§Ù„ÙˆØ§Ø±Ø¯' : 'Ø·Ù„Ø¨Ø§Øª_Ø§Ù„ØµØ§Ø¯Ø±'}.pdf`);
  };

  return (
    <div id="orders-page-content">
      {/* Section 1: Title and Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">
            {orderType === 'ÙˆØ§Ø±Ø¯' ? 'Ø·Ù„Ø¨Ø§Øª Ø§Ù„ÙˆØ§Ø±Ø¯' : 'Ø·Ù„Ø¨Ø§Øª Ø§Ù„ØµØ§Ø¯Ø±'}
          </h1>
          <div className="flex items-center gap-2">
            <Button
              variant={orderType === 'ÙˆØ§Ø±Ø¯' ? 'default' : 'outline'}
              onClick={() => {
                setOrderType('ÙˆØ§Ø±Ø¯');
                setCurrentPage(1);
              }}
              className={orderType === 'ÙˆØ§Ø±Ø¯' 
                ? 'bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white' 
                : 'text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50'
              }
            >
              ÙˆØ§Ø±Ø¯
            </Button>
            <Button
              variant={orderType === 'ØµØ§Ø¯Ø±' ? 'default' : 'outline'}
              onClick={() => {
                setOrderType('ØµØ§Ø¯Ø±');
                setCurrentPage(1);
              }}
              className={orderType === 'ØµØ§Ø¯Ø±' 
                ? 'bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white' 
                : 'text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50'
              }
            >
              ØµØ§Ø¯Ø±
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            onClick={handleExportCSV}
            variant="outline" 
            className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2"
          >
            <Download className="w-4 h-4" />
            ØªØµØ¯ÙŠØ± CSV
          </Button>
          <Button 
            onClick={handleExportPDF}
            variant="outline" 
            className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2"
          >
            <Download className="w-4 h-4" />
            ØªØµØ¯ÙŠØ± PDF
          </Button>
        <Button
          onClick={() => onCreateOrder(orderType as 'ÙˆØ§Ø±Ø¯' | 'ØµØ§Ø¯Ø±')}
          className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white gap-2"
        >
          <Plus className="w-4 h-4" />
          {orderType === 'ÙˆØ§Ø±Ø¯' ? 'Ø¥Ø±Ø³Ø§Ù„ Ø·Ù„Ø¨ ÙˆØ§Ø±Ø¯' : 'Ø¥Ø±Ø³Ø§Ù„ Ø·Ù„Ø¨ ØµØ§Ø¯Ø±'}
        </Button>
        </div>
      </div>

      {/* Section 2: Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="stat-card border-0 shadow-sm bg-white">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {orderType === 'ÙˆØ§Ø±Ø¯' ? 'Ø·Ù„Ø¨Ø§Øª ÙˆØ§Ø±Ø¯ Ù…ÙØªÙˆØ­Ø©' : 'Ø·Ù„Ø¨Ø§Øª ØµØ§Ø¯Ø± Ù…ÙØªÙˆØ­Ø©'}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stats.open}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="stat-card border-0 shadow-sm bg-white">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {orderType === 'ÙˆØ§Ø±Ø¯' ? 'ÙˆØ§Ø±Ø¯ Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°' : 'ØµØ§Ø¯Ø± Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°'}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stats.inProgress}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="stat-card border-0 shadow-sm bg-white">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {orderType === 'ÙˆØ§Ø±Ø¯' ? 'ÙˆØ§Ø±Ø¯ Ù…ÙƒØªÙ…Ù„ Ø¢Ø®Ø± 30 ÙŠÙˆÙ…Ø§Ù‹' : 'ØµØ§Ø¯Ø± Ù…ÙƒØªÙ…Ù„ Ø¢Ø®Ø± 30 ÙŠÙˆÙ…Ø§Ù‹'}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 3: Filters */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Ø§Ù„Ø­Ø§Ù„Ø©
              </label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ø§Ù„ÙƒÙ„">Ø§Ù„ÙƒÙ„</SelectItem>
                  <SelectItem value="Ø¬Ø¯ÙŠØ¯">Ø¬Ø¯ÙŠØ¯</SelectItem>
                  <SelectItem value="Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°">Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°</SelectItem>
                  <SelectItem value="Ù…ÙƒØªÙ…Ù„">Ù…ÙƒØªÙ…Ù„</SelectItem>
                  <SelectItem value="Ù…Ù„ØºÙŠ">Ù…Ù„ØºÙŠ</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {orderType === 'ÙˆØ§Ø±Ø¯' ? 'ØªØ§Ø±ÙŠØ® Ø§Ù„ÙˆØµÙˆÙ„ Ø§Ù„Ù…ØªÙˆÙ‚Ø¹ (Ù…Ù†)' : 'ØªØ§Ø±ÙŠØ® Ø§Ù„Ø´Ø­Ù† Ø§Ù„Ù…ØªÙˆÙ‚Ø¹ (Ù…Ù†)'}
              </label>
                <Input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {orderType === 'ÙˆØ§Ø±Ø¯' ? 'ØªØ§Ø±ÙŠØ® Ø§Ù„ÙˆØµÙˆÙ„ Ø§Ù„Ù…ØªÙˆÙ‚Ø¹ (Ø¥Ù„Ù‰)' : 'ØªØ§Ø±ÙŠØ® Ø§Ù„Ø´Ø­Ù† Ø§Ù„Ù…ØªÙˆÙ‚Ø¹ (Ø¥Ù„Ù‰)'}
              </label>
                <Input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                className="w-full"
                />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Orders Table */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md m-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    {orderType === 'ÙˆØ§Ø±Ø¯' ? 'Ø·Ù„Ø¨ ÙˆØ§Ø±Ø¯ #' : 'Ø·Ù„Ø¨ ØµØ§Ø¯Ø± #'}
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ù„Ø­Ø§Ù„Ø©
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    {orderType === 'ÙˆØ§Ø±Ø¯' ? 'ØªØ§Ø±ÙŠØ® Ø§Ù„ÙˆØµÙˆÙ„ Ø§Ù„Ù…ØªÙˆÙ‚Ø¹' : 'ØªØ§Ø±ÙŠØ® Ø§Ù„Ø´Ø­Ù† Ø§Ù„Ù…ØªÙˆÙ‚Ø¹'}
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø¹Ø¯Ø¯ Ø§Ù„Ø¨Ù†ÙˆØ¯
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ù…Ù„Ø§Ø­Ø¸Ø§Øª
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-sm text-gray-500">
                      Ø¬Ø§Ø±Ù ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø·Ù„Ø¨Ø§Øª...
                    </td>
                  </tr>
                ) : tableData.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-sm text-gray-500">
                      Ù„Ø§ ØªÙˆØ¬Ø¯ Ø·Ù„Ø¨Ø§Øª Ù…ØªØ§Ø­Ø©.
                    </td>
                  </tr>
                ) : (
                  tableData.map((row: SimpleOrderRow, index: number) => (
                  <tr
                    key={index}
                    className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-4 text-sm text-gray-900 font-mono font-medium">
                      {row.orderNumber}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                      {row.creationDate}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          row.status === 'Ù…ÙƒØªÙ…Ù„'
                            ? 'bg-green-100 text-green-700'
                            : row.status === 'Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                      {row.expectedDate}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                      {row.itemsCount}
                    </td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => onCreateOrderDetails(row.id, orderType as 'ÙˆØ§Ø±Ø¯' | 'ØµØ§Ø¯Ø±')}
                        className="text-sm text-[#176C33] hover:text-[#104920] hover:underline cursor-pointer transition-colors"
                      >
                        Ø¹Ø±Ø¶
                      </button>
                    </td>
                  </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {filteredTableData.length > pageSize && (
            <Pagination
              currentPage={currentPage}
              totalPages={paginated.totalPages}
              total={paginated.total}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Create Order Page Component
function CreateOrderPage({ orderType, onCancel }: { orderType: 'ÙˆØ§Ø±Ø¯' | 'ØµØ§Ø¯Ø±'; onCancel: () => void }) {
  const [expectedDate, setExpectedDate] = useState('');
  const [notes, setNotes] = useState('');
  const [orderItems, setOrderItems] = useState<Array<{ id: string; productId: string; quantity: number }>>([]);
  const [availableProducts, setAvailableProducts] = useState<
    Array<{ id: string; name: string; code: string; uomId: string; availableQty: number }>
  >([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function loadProducts() {
      try {
        const productsResponse = await apiFetch<any[]>('/products?isActive=true');
        if (!active) return;
        const mapped = productsResponse
          .filter((p) => p?.id && p?.defaultUom?.id)
          .map((p) => ({
            id: p.id as string,
            name: (p.name as string) || '',
            code: (p.sku as string) || '',
            uomId: p.defaultUom.id as string,
            availableQty: 0,
          }));
        
        // For outbound orders, fetch current stock to show available quantities
        if (orderType === 'ØµØ§Ø¯Ø±') {
          try {
            const stockRows = await apiFetch<any[]>('/inventory/current-stock');
            if (!active) return;

            const toNumber = (value: unknown): number => {
              if (typeof value === 'number') return value;
              if (typeof value === 'string') {
                const parsed = Number(value);
                return Number.isFinite(parsed) ? parsed : 0;
              }
              if (
                value &&
                typeof value === 'object' &&
                'toNumber' in value &&
                typeof (value as { toNumber?: unknown }).toNumber === 'function'
              ) {
                return (value as { toNumber: () => number }).toNumber();
              }
              return 0;
            };

            const stockByProduct = new Map<string, number>();
            for (const row of stockRows) {
              const productId = row?.productId as string | undefined;
              if (!productId) continue;
              if (!mapped.some((p) => p.id === productId)) continue;
              const current = stockByProduct.get(productId) || 0;
              stockByProduct.set(productId, current + toNumber(row?.quantity));
            }

            setAvailableProducts(
              mapped.map((product) => ({
                ...product,
                availableQty: stockByProduct.get(product.id) || 0,
              })),
            );
          } catch {
            // If stock fetch fails, still show products with 0 available
            if (active) {
              setAvailableProducts(mapped);
            }
          }
        } else {
          setAvailableProducts(mapped);
        }
      } catch {
        if (active) {
          setAvailableProducts([]);
        }
      }
    }
    void loadProducts();
    return () => {
      active = false;
    };
  }, [orderType]);

  const addOrderItem = () => {
    const newItem = {
      id: Date.now().toString(),
      productId: '',
      quantity: 0,
    };
    setOrderItems([...orderItems, newItem]);
  };

  const removeOrderItem = (id: string) => {
    setOrderItems(orderItems.filter(item => item.id !== id));
  };

  const updateOrderItem = (id: string, field: 'productId' | 'quantity', value: string | number) => {
    setOrderItems(orderItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      setError(null);
      if (!expectedDate) {
        setError('ÙŠØ±Ø¬Ù‰ ØªØ­Ø¯ÙŠØ¯ Ø§Ù„ØªØ§Ø±ÙŠØ® Ø§Ù„Ù…ØªÙˆÙ‚Ø¹.');
        return;
      }
      if (orderItems.length === 0) {
        setError('ÙŠØ±Ø¬Ù‰ Ø¥Ø¶Ø§ÙØ© Ø¨Ù†Ø¯ ÙˆØ§Ø­Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„.');
        return;
      }
      if (orderItems.some((item) => !item.productId || item.quantity <= 0)) {
        setError('ÙŠØ±Ø¬Ù‰ ØªØ¹Ø¨Ø¦Ø© Ø§Ù„Ù…Ù†ØªØ¬ ÙˆØ§Ù„ÙƒÙ…ÙŠØ© Ù„ÙƒÙ„ Ø§Ù„Ø¨Ù†ÙˆØ¯.');
        return;
      }

      // For outbound orders, validate stock availability
      if (orderType === 'ØµØ§Ø¯Ø±') {
        const requestedByProduct = new Map<string, number>();
        for (const item of orderItems) {
          requestedByProduct.set(
            item.productId,
            (requestedByProduct.get(item.productId) || 0) + item.quantity,
          );
        }

        for (const [productId, requestedQty] of requestedByProduct) {
          const selectedProduct = availableProducts.find((p) => p.id === productId);
          const availableQty = selectedProduct?.availableQty || 0;
          if (requestedQty > availableQty) {
            setError(
              `Ø§Ù„ÙƒÙ…ÙŠØ© Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø© Ù„Ù„Ù…Ù†ØªØ¬ "${selectedProduct?.name || productId}" ØªØªØ¬Ø§ÙˆØ² Ø§Ù„Ù…ØªØ§Ø­ ÙÙŠ Ø§Ù„Ù…Ø®Ø²ÙˆÙ†. Ø§Ù„Ù…ØªØ§Ø­: ${availableQty}`,
            );
            return;
          }
        }
      }

      const createPath = orderType === 'ÙˆØ§Ø±Ø¯' ? '/inbound-orders' : '/outbound-orders';
      const createdOrder = await apiFetch<any>(createPath, {
        method: 'POST',
        body: JSON.stringify(
          orderType === 'ÙˆØ§Ø±Ø¯'
            ? { expectedDate }
            : { expectedShipDate: expectedDate },
        ),
      });

      const addItemPathBase =
        orderType === 'ÙˆØ§Ø±Ø¯'
          ? `/inbound-orders/${createdOrder.id}/items`
          : `/outbound-orders/${createdOrder.id}/items`;

      await Promise.all(
        orderItems.map(async (item) => {
          const selectedProduct = availableProducts.find((p) => p.id === item.productId);
          if (!selectedProduct) {
            throw new Error('ØªØ¹Ø°Ø± ØªØ­Ø¯ÙŠØ¯ ÙˆØ­Ø¯Ø© Ø§Ù„Ù‚ÙŠØ§Ø³ Ù„Ù„Ù…Ù†ØªØ¬ Ø§Ù„Ù…Ø­Ø¯Ø¯.');
          }
          await apiFetch(addItemPathBase, {
            method: 'POST',
            body: JSON.stringify({
              productId: item.productId,
              qtyOrdered: item.quantity,
              uomId: selectedProduct.uomId,
            }),
          });
        }),
      );

      void notes; // notes field kept in UI for future backend support
    onCancel();
    } catch (e) {
      const apiError = e as ApiError;
      if (
        apiError.body &&
        typeof apiError.body === 'object' &&
        'message' in apiError.body &&
        typeof (apiError.body as { message?: unknown }).message === 'string'
      ) {
        setError((apiError.body as { message: string }).message);
      } else {
        setError('ØªØ¹Ø°Ø± Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø·Ù„Ø¨. Ø­Ø§ÙˆÙ„ Ù…Ø±Ø© Ø£Ø®Ø±Ù‰.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Section 1: Title and Form */}
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {orderType === 'ÙˆØ§Ø±Ø¯' ? 'Ø¥Ø±Ø³Ø§Ù„ Ø·Ù„Ø¨ ÙˆØ§Ø±Ø¯' : 'Ø¥Ø±Ø³Ø§Ù„ Ø·Ù„Ø¨ ØµØ§Ø¯Ø±'}
        </h1>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="space-y-4">
              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  {error}
              </div>
              )}

              {/* Expected Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {orderType === 'ÙˆØ§Ø±Ø¯' ? 'ØªØ§Ø±ÙŠØ® Ø§Ù„ÙˆØµÙˆÙ„ Ø§Ù„Ù…ØªÙˆÙ‚Ø¹' : 'ØªØ§Ø±ÙŠØ® Ø§Ù„Ø´Ø­Ù† Ø§Ù„Ù…ØªÙˆÙ‚Ø¹'}
                </label>
                <Input
                  type="date"
                  value={expectedDate}
                  onChange={(e) => setExpectedDate(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ø§Ù„Ù…Ù„Ø§Ø­Ø¸Ø§Øª <span className="text-gray-400 text-xs">(Ø§Ø®ØªÙŠØ§Ø±ÙŠ)</span>
                </label>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ø£Ø¯Ø®Ù„ Ø£ÙŠ Ù…Ù„Ø§Ø­Ø¸Ø§Øª Ø¥Ø¶Ø§ÙÙŠØ©"
                  className="w-full min-h-24"
                  rows={4}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 2: Order Items Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Ø¨Ù†ÙˆØ¯ Ø§Ù„Ø·Ù„Ø¨</h2>
          <Button
            onClick={addOrderItem}
            className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white gap-2"
          >
            <Plus className="w-4 h-4" />
            Ø¥Ø¶Ø§ÙØ© Ø¨Ù†Ø¯
          </Button>
        </div>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="data-table w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ø§Ù„Ù…Ù†ØªØ¬
                    </th>
                    {orderType === 'ØµØ§Ø¯Ø±' && (
                      <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                        Ø§Ù„Ù…ØªØ§Ø­ ÙÙŠ Ø§Ù„Ù…Ø®Ø²ÙˆÙ†
                      </th>
                    )}
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ø§Ù„ÙƒÙ…ÙŠØ© Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø©
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ø­Ø°Ù
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.length === 0 ? (
                    <tr>
                      <td colSpan={orderType === 'ØµØ§Ø¯Ø±' ? 4 : 3} className="py-8 px-4 text-center text-gray-500">
                        Ù„Ø§ ØªÙˆØ¬Ø¯ Ø¨Ù†ÙˆØ¯. Ø§Ø¶ØºØ· Ø¹Ù„Ù‰ "Ø¥Ø¶Ø§ÙØ© Ø¨Ù†Ø¯" Ù„Ø¥Ø¶Ø§ÙØ© Ù…Ù†ØªØ¬.
                      </td>
                    </tr>
                  ) : (
                    orderItems.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <Select
                            value={item.productId}
                            onValueChange={(value) => updateOrderItem(item.id, 'productId', value)}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Ø§Ø®ØªØ± Ø§Ù„Ù…Ù†ØªØ¬" />
                            </SelectTrigger>
                            <SelectContent>
                              {availableProducts.map((product) => (
                                <SelectItem key={product.id} value={product.id}>
                                  {product.name} ({product.code})
                                  {orderType === 'ØµØ§Ø¯Ø±' ? ` - Ø§Ù„Ù…ØªØ§Ø­: ${product.availableQty}` : ''}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </td>
                        {orderType === 'ØµØ§Ø¯Ø±' && (
                          <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                            {availableProducts.find((p) => p.id === item.productId)?.availableQty ?? 0}
                          </td>
                        )}
                        <td className="py-4 px-4">
                          <Input
                            type="number"
                            min="1"
                            step="any"
                            value={item.quantity || ''}
                            onChange={(e) => updateOrderItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                            placeholder="Ø§Ù„ÙƒÙ…ÙŠØ©"
                            className="w-full"
                          />
                        </td>
                        <td className="py-4 px-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeOrderItem(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 gap-2"
                          >
                            <Trash2 className="w-4 h-4" />
                            Ø­Ø°Ù
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

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-3 pt-4">
        <Button
          variant="outline"
          onClick={onCancel}
          className="text-gray-700 border-gray-300 hover:bg-gray-50"
        >
          Ø¥Ù„ØºØ§Ø¡
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={submitting}
          className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
        >
          {submitting ? 'Ø¬Ø§Ø±Ù Ø§Ù„Ø¥Ø±Ø³Ø§Ù„...' : 'Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø·Ù„Ø¨'}
        </Button>
      </div>
    </>
  );
}

// Order Details Page Component
function OrderDetailsPage({ 
  orderId, 
  orderType, 
  onBack 
}: { 
  orderId: string; 
  orderType: 'ÙˆØ§Ø±Ø¯' | 'ØµØ§Ø¯Ø±'; 
  onBack: () => void;
}) {
  const [orderDetails, setOrderDetails] = useState<{
    orderNumber: string;
    status: string;
    expectedDate: string;
    creationTime: string;
    completionDate: string;
    items: Array<{
      id: string;
      productName: string;
      productCode: string;
      requiredQty: number;
      processedQty: number;
      remaining: number;
      notes: string;
    }>;
    statusHistory: Array<{ dateTime: string; status: string }>;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [itemNotes, setItemNotes] = useState<{ [key: number]: string }>({});
  const [editingItemIndex, setEditingItemIndex] = useState<number | null>(null);
  const [tempNotes, setTempNotes] = useState('');

  useEffect(() => {
    let active = true;
    async function loadOrderDetails() {
      try {
        setLoading(true);
        setError(null);
        const endpoint =
          orderType === 'ÙˆØ§Ø±Ø¯'
            ? `/inbound-orders/${encodeURIComponent(orderId)}`
            : `/outbound-orders/${encodeURIComponent(orderId)}`;
        const data = await apiFetch<any>(endpoint);
        if (!active) return;

        const toNumber = (value: unknown): number => {
          if (typeof value === 'number') return value;
          if (typeof value === 'string') {
            const parsed = Number(value);
            return Number.isFinite(parsed) ? parsed : 0;
          }
          if (
            value &&
            typeof value === 'object' &&
            'toNumber' in value &&
            typeof (value as { toNumber?: unknown }).toNumber === 'function'
          ) {
            return (value as { toNumber: () => number }).toNumber();
          }
          return 0;
        };

        const mapStatusToArabic = (status: string | undefined) => {
          if (!status) return 'ØºÙŠØ± Ù…Ø¹Ø±ÙˆÙ';
          if (status === 'COMPLETED' || status === 'SHIPPED') return 'Ù…ÙƒØªÙ…Ù„';
          if (status === 'IN_PROGRESS' || status === 'RECEIVING')
            return 'Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°';
          if (status === 'CANCELLED') return 'Ù…Ù„ØºÙŠ';
          if (status === 'PENDING') return 'Ù‚ÙŠØ¯ Ø§Ù„Ù…Ø±Ø§Ø¬Ø¹Ø©';
          return 'Ø¬Ø¯ÙŠØ¯';
        };

        const items = Array.isArray(data.items)
          ? data.items.map((item: any) => {
              const requiredQty = toNumber(item.qtyOrdered);
              const processedQty =
                orderType === 'ÙˆØ§Ø±Ø¯'
                  ? toNumber(item.qtyReceived)
                  : toNumber(item.qtyShipped);
              return {
                id: item.id || `${item.productId || 'item'}-${Math.random()}`,
                productName: item.product?.name || '-',
                productCode: item.product?.sku || '-',
                requiredQty,
                processedQty,
                remaining: Math.max(requiredQty - processedQty, 0),
                notes: '',
              };
            })
          : [];

        const creationDate = data.createdAt
          ? new Date(data.createdAt).toLocaleString('en-US')
          : '-';
        const completionDate =
          (data.status === 'COMPLETED' || data.status === 'SHIPPED') &&
          data.updatedAt
            ? new Date(data.updatedAt).toLocaleString('en-US')
            : '-';

        const history = [
          {
            dateTime: creationDate,
            status: 'Ø¬Ø¯ÙŠØ¯',
          },
        ];
        if (data.updatedAt && data.updatedAt !== data.createdAt) {
          history.push({
            dateTime: new Date(data.updatedAt).toLocaleString('en-US'),
            status: mapStatusToArabic(data.status),
          });
        }

        setOrderDetails({
          orderNumber: data.orderNumber || data.id || orderId,
          status: mapStatusToArabic(data.status),
          expectedDate:
            orderType === 'ÙˆØ§Ø±Ø¯'
              ? data.expectedDate
                ? new Date(data.expectedDate).toLocaleDateString('en-US')
                : '-'
              : data.expectedShipDate
                ? new Date(data.expectedShipDate).toLocaleDateString('en-US')
                : '-',
          creationTime: creationDate,
          completionDate,
          items,
          statusHistory: history,
        });
      } catch (e) {
        console.error('Failed to load order details', e);
        if (active) {
          setError('ØªØ¹Ø°Ø± ØªØ­Ù…ÙŠÙ„ ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø·Ù„Ø¨. ÙŠØ±Ø¬Ù‰ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø© Ø£Ø®Ø±Ù‰.');
          setOrderDetails(null);
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    void loadOrderDetails();
    return () => {
      active = false;
    };
  }, [orderId, orderType]);

  const handleOpenNotesDialog = (index: number, currentNotes: string) => {
    setEditingItemIndex(index);
    setTempNotes(currentNotes);
  };

  const handleSaveNotes = (index: number) => {
    setItemNotes({ ...itemNotes, [index]: tempNotes });
    setEditingItemIndex(null);
    setTempNotes('');
  };

  const handleCancelNotes = () => {
    setEditingItemIndex(null);
    setTempNotes('');
  };

  if (loading) {
    return (
      <Card className="border-0 shadow-sm">
        <CardContent className="p-6 text-center text-sm text-gray-500">
          Ø¬Ø§Ø±Ù ØªØ­Ù…ÙŠÙ„ ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø·Ù„Ø¨...
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-0 shadow-sm">
        <CardContent className="p-6 space-y-4">
          <p className="text-sm text-red-600">{error}</p>
          <div className="flex justify-end">
            <Button variant="outline" onClick={onBack}>
              Ø§Ù„Ø¹ÙˆØ¯Ø© Ø¥Ù„Ù‰ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!orderDetails) {
    return (
      <Card className="border-0 shadow-sm">
        <CardContent className="p-6 space-y-4">
          <p className="text-sm text-gray-600">Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø¨ÙŠØ§Ù†Ø§Øª Ù„Ù„Ø·Ù„Ø¨.</p>
          <div className="flex justify-end">
            <Button variant="outline" onClick={onBack}>
              Ø§Ù„Ø¹ÙˆØ¯Ø© Ø¥Ù„Ù‰ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      {/* Section 1: Title and Action Buttons */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          {orderType === 'ÙˆØ§Ø±Ø¯' ? 'ØªÙØ§ØµÙŠÙ„ Ø·Ù„Ø¨ ÙˆØ§Ø±Ø¯' : 'ØªÙØ§ØµÙŠÙ„ Ø·Ù„Ø¨ ØµØ§Ø¯Ø±'} - {orderDetails.orderNumber}
        </h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2">
            <Download className="w-4 h-4" />
            ØªØµØ¯ÙŠØ± CSV
          </Button>
          <Button variant="outline" className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2">
            <Download className="w-4 h-4" />
            ØªØµØ¯ÙŠØ± PDF
          </Button>
          <Button variant="outline" className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2">
            <ArrowLeftRight className="w-4 h-4" />
            Ø¹Ø±Ø¶ Ø§Ù„Ø­Ø±ÙƒØ§Øª ÙÙŠ Ø§Ù„Ø³ÙŠÙ„
          </Button>
        </div>
      </div>

      {/* Section 2: Order Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-5">
            <p className="text-sm text-gray-500 mb-1">Ø±Ù‚Ù… Ø§Ù„Ø·Ù„Ø¨</p>
            <p className="text-lg font-bold text-gray-900 font-mono">{orderDetails.orderNumber}</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-5">
            <p className="text-sm text-gray-500 mb-1">Ø§Ù„Ø­Ø§Ù„Ø©</p>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                orderDetails.status === 'Ù…ÙƒØªÙ…Ù„'
                  ? 'bg-green-100 text-green-700'
                  : orderDetails.status === 'Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {orderDetails.status}
            </span>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-5">
            <p className="text-sm text-gray-500 mb-1">
              {orderType === 'ÙˆØ§Ø±Ø¯' ? 'ØªØ§Ø±ÙŠØ® Ø§Ù„ÙˆØµÙˆÙ„ Ø§Ù„Ù…ØªÙˆÙ‚Ø¹' : 'ØªØ§Ø±ÙŠØ® Ø§Ù„Ø´Ø­Ù†Ø© Ø§Ù„Ù…ØªÙˆÙ‚Ø¹Ø©'}
            </p>
            <p className="text-lg font-bold text-gray-900 font-mono">{orderDetails.expectedDate}</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-5">
            <p className="text-sm text-gray-500 mb-1">ÙˆÙ‚Øª Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡</p>
            <p className="text-lg font-bold text-gray-900 font-mono">{orderDetails.creationTime}</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-5">
            <p className="text-sm text-gray-500 mb-1">ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥ÙƒØªÙ…Ø§Ù„</p>
            <p className="text-lg font-bold text-gray-900 font-mono">{orderDetails.completionDate}</p>
          </CardContent>
        </Card>
      </div>

      {/* Section 3: Order Items Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Ø§Ù„Ø¨Ù†ÙˆØ¯</h2>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="data-table w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ø§Ø³Ù… Ø§Ù„Ù…Ù†ØªØ¬
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      ÙƒÙˆØ¯ Ø§Ù„Ù…Ù†ØªØ¬
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ø§Ù„ÙƒÙ…ÙŠØ© Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø©
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      {orderType === 'ÙˆØ§Ø±Ø¯' ? 'Ø§Ù„ÙƒÙ…ÙŠØ© Ø§Ù„Ù…Ø³ØªÙ„Ù…Ø©' : 'Ø§Ù„ÙƒÙ…ÙŠØ© Ø§Ù„Ù…Ø´Ø­ÙˆÙ†Ø©'}
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ø§Ù„Ù…ØªØ¨Ù‚ÙŠ
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ù…Ù„Ø§Ø­Ø¸Ø§Øª
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetails.items.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 px-4 text-center text-gray-500">
                        Ù„Ø§ ØªÙˆØ¬Ø¯ Ø¨Ù†ÙˆØ¯ Ù„Ù‡Ø°Ø§ Ø§Ù„Ø·Ù„Ø¨.
                      </td>
                    </tr>
                  ) : (
                    orderDetails.items.map((item, index) => (
                    <tr
                      key={item.id}
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                        {item.productName}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-mono font-medium">
                        {item.productCode}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                        {item.requiredQty}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                        {item.processedQty}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                        {item.remaining}
                      </td>
                      <td className="py-4 px-4">
                        <Dialog 
                          open={editingItemIndex === index} 
                          onOpenChange={(open) => {
                            if (!open) {
                              handleCancelNotes();
                            }
                          }}
                        >
                          <button
                            onClick={() => handleOpenNotesDialog(index, itemNotes[index] || item.notes || '')}
                            className="text-sm text-[#176C33] hover:text-[#104920] hover:underline cursor-pointer transition-colors"
                          >
                            {itemNotes[index] || item.notes ? 'ØªØ¹Ø¯ÙŠÙ„' : 'Ø¥Ø¶Ø§ÙØ©'}
                          </button>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Ù…Ù„Ø§Ø­Ø¸Ø§Øª - {item.productName}</DialogTitle>
                              <DialogDescription className="text-right">
                                {item.productCode}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                              <Textarea
                                value={tempNotes}
                                onChange={(e) => setTempNotes(e.target.value)}
                                placeholder="Ø£Ø¯Ø®Ù„ Ø§Ù„Ù…Ù„Ø§Ø­Ø¸Ø§Øª"
                                className="w-full min-h-32"
                                rows={6}
                              />
                            </div>
                            <div className="flex items-center justify-end gap-3 mt-4">
                              <Button
                                variant="outline"
                                onClick={handleCancelNotes}
                                className="text-gray-700 border-gray-300 hover:bg-gray-50"
                              >
                                Ø¥Ù„ØºØ§Ø¡
                              </Button>
                              <Button
                                onClick={() => handleSaveNotes(index)}
                                className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
                              >
                                Ø­ÙØ¸
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
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

      {/* Section 4: Status History */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Ø³Ø¬Ù„ Ø­Ø±ÙƒØ© Ø§Ù„Ø­Ø§Ù„Ø§Øª</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orderDetails.statusHistory.map((history, index) => (
            <Card key={index} className="border-0 shadow-sm bg-white">
              <CardContent className="p-5">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Ø§Ù„ØªØ§Ø±ÙŠØ® ÙˆØ§Ù„ÙˆÙ‚Øª</p>
                  <p className="text-sm font-medium text-gray-900 font-mono">{history.dateTime}</p>
                  <p className="text-sm text-gray-500 mt-3">Ø§Ù„Ø­Ø§Ù„Ø©</p>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      history.status === 'Ù…ÙƒØªÙ…Ù„'
                        ? 'bg-green-100 text-green-700'
                        : history.status === 'Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {history.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="flex items-center justify-end pt-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="text-gray-700 border-gray-300 hover:bg-gray-50"
        >
          Ø§Ù„Ø¹ÙˆØ¯Ø© Ø¥Ù„Ù‰ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©
        </Button>
      </div>
    </>
  );
}

// Movements Page Component
function MovementsPage() {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [movementType, setMovementType] = useState('');
  const [productSku, setProductSku] = useState('');
  const [warehouse, setWarehouse] = useState('');
  const [location, setLocation] = useState('');
  const [referenceType, setReferenceType] = useState('');
  const [movements, setMovements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMovement, setSelectedMovement] = useState<any | null>(null);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const params = new URLSearchParams();
        if (dateFrom) params.append('dateFrom', dateFrom);
        if (dateTo) params.append('dateTo', dateTo);
        if (movementType && movementType !== '') {
          const movementMap: Record<string, string> = {
            'ÙˆØ§Ø±Ø¯': 'RECEIPT',
            'ØµØ§Ø¯Ø±': 'SHIPMENT',
            'return': 'RETURN',
          };
          params.append('movementType', movementMap[movementType] || movementType);
        }
        if (productSku) params.append('productId', productSku);
        const data = await apiFetch<any[]>(`/inventory/ledger?${params.toString()}`);
        if (!active) return;
        const mapped = data.map((entry) => ({
          id: entry.id,
          dateTime: entry.createdAt ? new Date(entry.createdAt).toLocaleString('en-US') : '',
          movementType: entry.movementType === 'RECEIPT' ? 'ÙˆØ§Ø±Ø¯' : entry.movementType === 'SHIPMENT' ? 'ØµØ§Ø¯Ø±' : entry.movementType === 'RETURN' ? 'Ø¥Ø±Ø¬Ø§Ø¹' : entry.movementType === 'ADJUSTMENT' ? 'ØªØ¹Ø¯ÙŠÙ„' : 'Ù†Ù‚Ù„',
          productName: entry.product?.name || '',
          sku: entry.product?.sku || '',
          quantityChange: `${entry.qtyChange > 0 ? '+' : ''}${entry.qtyChange}`,
          location: entry.location?.code || '',
          warehouse: entry.warehouse?.name || '',
          doneBy: entry.createdByActorId || '-',
          reference: entry.referenceId || '',
          referenceType: entry.referenceType || '',
        }));
        setMovements(mapped);
      } catch (e: any) {
        console.error('Failed to load movements', e);
        if (active) {
          setError('ØªØ¹Ø°Ø± ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø­Ø±ÙƒØ§Øª. ÙŠØ±Ø¬Ù‰ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø© Ø£Ø®Ø±Ù‰.');
          setMovements([]);
        }
      } finally {
        if (active) setLoading(false);
      }
    }
    void load();
    return () => { active = false; };
  }, [dateFrom, dateTo, movementType, productSku]);

  const getMovementTypeColor = (type: string) => {
    switch (type) {
      case 'ÙˆØ§Ø±Ø¯':
        return 'bg-green-100 text-green-700';
      case 'ØµØ§Ø¯Ø±':
        return 'bg-rose-100 text-rose-700';
      case 'Ø¥Ø±Ø¬Ø§Ø¹':
        return 'bg-amber-100 text-amber-700';
      case 'ØªØ¹Ø¯ÙŠÙ„':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  // Apply client-side filters for warehouse, location, referenceType
  const [filteredMovements, setFilteredMovements] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    let filtered = [...movements];

    if (warehouse) {
      filtered = filtered.filter((m) => m.warehouse === warehouse);
    }

    if (location) {
      filtered = filtered.filter((m) => 
        m.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (referenceType) {
      filtered = filtered.filter((m) => m.referenceType === referenceType);
    }

    setFilteredMovements(filtered);
    setCurrentPage(1);
  }, [warehouse, location, referenceType, movements]);

  const paginated = paginate(filteredMovements, currentPage, pageSize);
  const displayMovements = paginated.data;

  const handleExportCSV = () => {
    const csvData = filteredMovements.map((m) => ({
      'Ø§Ù„ØªØ§Ø±ÙŠØ® ÙˆØ§Ù„ÙˆÙ‚Øª': m.dateTime,
      'Ù†ÙˆØ¹ Ø§Ù„Ø­Ø±ÙƒØ©': m.movementType,
      'Ø§Ø³Ù… Ø§Ù„Ù…Ù†ØªØ¬': m.productName,
      'SKU': m.sku,
      'ØªØºÙŠÙŠØ± Ø§Ù„ÙƒÙ…ÙŠØ©': m.quantityChange,
      'Ø§Ù„Ù…ÙˆÙ‚Ø¹': m.location,
      'Ø§Ù„Ù…Ø³ØªÙˆØ¯Ø¹': m.warehouse,
      'ØªÙ… Ø¨ÙˆØ§Ø³Ø·Ø©': m.doneBy,
      'Ø§Ù„Ù…Ø±Ø¬Ø¹': m.reference,
    }));
    exportToCSV(csvData, 'Ø³Ø¬Ù„_Ø§Ù„Ø­Ø±ÙƒØ§Øª.csv');
  };

  const handleExportPDF = async () => {
    await exportToPDF('movements-page-content', 'Ø³Ø¬Ù„_Ø§Ù„Ø­Ø±ÙƒØ§Øª.pdf');
  };

  return (
    <div id="movements-page-content">
      {/* Section 1: Title, Buttons, and Filters */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Ø³Ø¬Ù„ Ø§Ù„Ø­Ø±ÙƒØ§Øª Ø§Ù„Ù…Ø®Ø²ÙˆÙ†</h1>
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleExportCSV}
              variant="outline" 
              className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2"
            >
              <Download className="w-4 h-4" />
              ØªØµØ¯ÙŠØ± CSV
            </Button>
            <Button 
              onClick={handleExportPDF}
              variant="outline" 
              className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2"
            >
              <Download className="w-4 h-4" />
              ØªØµØ¯ÙŠØ± PDF
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Date Range */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ù†Ø·Ø§Ù‚ Ø§Ù„ØªØ§Ø±ÙŠØ®
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    type="date"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    className="flex-1"
                  />
                  <span className="text-gray-500 text-sm whitespace-nowrap">Ø¥Ù„Ù‰</span>
                  <Input
                    type="date"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              {/* Movement Type */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ù†ÙˆØ¹ Ø§Ù„Ø­Ø±ÙƒØ©
                </label>
                <Select value={movementType} onValueChange={setMovementType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Ø§Ø®ØªØ± Ù†ÙˆØ¹ Ø§Ù„Ø­Ø±ÙƒØ©" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ÙˆØ§Ø±Ø¯">ÙˆØ§Ø±Ø¯</SelectItem>
                    <SelectItem value="ØµØ§Ø¯Ø±">ØµØ§Ø¯Ø±</SelectItem>
                    <SelectItem value="return">return</SelectItem>
                    <SelectItem value="ÙØ§ØªÙˆØ±Ø©">ÙØ§ØªÙˆØ±Ø©</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Product SKU */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  product SKU
                </label>
                <Input
                  type="text"
                  value={productSku}
                  onChange={(e) => setProductSku(e.target.value)}
                  placeholder="Ø£Ø¯Ø®Ù„ SKU"
                  className="w-full"
                />
              </div>

              {/* Warehouse */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ø§Ù„Ù…Ø³ØªÙˆØ¯Ø¹
                </label>
                <Select value={warehouse} onValueChange={setWarehouse}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Ø§Ø®ØªØ± Ø§Ù„Ù…Ø³ØªÙˆØ¯Ø¹" />
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

              {/* Location */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ø§Ù„Ù…ÙˆÙ‚Ø¹
                </label>
                <Input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ø£Ø¯Ø®Ù„ ÙƒÙˆØ¯ Ø§Ù„Ù…ÙˆÙ‚Ø¹"
                  className="w-full"
                />
              </div>

              {/* Reference Type */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ù†ÙˆØ¹ Ø§Ù„Ù…Ø±Ø¬Ø¹
                </label>
                <Select value={referenceType} onValueChange={setReferenceType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Ø§Ø®ØªØ± Ù†ÙˆØ¹ Ø§Ù„Ù…Ø±Ø¬Ø¹" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ø·Ù„Ø¨ ÙˆØ§Ø±Ø¯">Ø·Ù„Ø¨ ÙˆØ§Ø±Ø¯</SelectItem>
                    <SelectItem value="Ø·Ù„Ø¨ ØµØ§Ø¯Ø±">Ø·Ù„Ø¨ ØµØ§Ø¯Ø±</SelectItem>
                    <SelectItem value="return">return</SelectItem>
                    <SelectItem value="ÙØ§ØªÙˆØ±Ø©">ÙØ§ØªÙˆØ±Ø©</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 2: Movements Table */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ù„ØªØ§Ø±ÙŠØ® ÙˆØ§Ù„ÙˆÙ‚Øª
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ù†ÙˆØ¹ Ø§Ù„Ø­Ø±ÙƒØ©
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ø³Ù… Ø§Ù„Ù…Ù†ØªØ¬
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    SKU
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    ØªØºÙŠÙŠØ± Ø§Ù„ÙƒÙ…ÙŠØ©
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ù„Ù…ÙˆÙ‚Ø¹
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    ØªÙ… Ø¨ÙˆØ§Ø³Ø·Ø©
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ù„Ù…Ø±Ø¬Ø¹
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-sm text-gray-500">
                      Ø¬Ø§Ø±Ù ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø­Ø±ÙƒØ§Øª...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-sm text-red-500">
                      {error}
                    </td>
                  </tr>
                ) : displayMovements.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-sm text-gray-500">
                      Ù„Ø§ ØªÙˆØ¬Ø¯ Ø­Ø±ÙƒØ§Øª Ù…Ø·Ø§Ø¨Ù‚Ø© Ù„Ù„ÙÙ„Ø§ØªØ± Ø§Ù„Ø­Ø§Ù„ÙŠØ©.
                    </td>
                  </tr>
                ) : (
                  displayMovements.map((movement: any, index: number) => (
                  <tr
                    key={index}
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
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {movement.doneBy}
                    </td>
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

      {/* Movement Details Dialog */}
      <Dialog open={selectedMovement !== null} onOpenChange={(open) => !open && setSelectedMovement(null)}>
        <DialogContent className="sm:max-w-2xl">
          {selectedMovement && (
            <>
              <DialogHeader>
                <DialogTitle>ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø­Ø±ÙƒØ© - {selectedMovement.id}</DialogTitle>
                <DialogDescription className="text-right">
                  {selectedMovement.dateTime}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Ù†ÙˆØ¹ Ø§Ù„Ø­Ø±ÙƒØ©</p>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getMovementTypeColor(selectedMovement.movementType)}`}
                    >
                      {selectedMovement.movementType}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Ø§Ø³Ù… Ø§Ù„Ù…Ù†ØªØ¬</p>
                    <p className="text-sm font-medium text-gray-900">{selectedMovement.productName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">SKU</p>
                    <p className="text-sm font-mono text-gray-900">{selectedMovement.sku}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">ØªØºÙŠÙŠØ± Ø§Ù„ÙƒÙ…ÙŠØ©</p>
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
                    <p className="text-sm text-gray-500 mb-1">Ø§Ù„Ù…ÙˆÙ‚Ø¹</p>
                    <p className="text-sm font-mono text-gray-900">{selectedMovement.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Ø§Ù„Ù…Ø³ØªÙˆØ¯Ø¹</p>
                    <p className="text-sm text-gray-900">{selectedMovement.warehouse}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">ØªÙ… Ø¨ÙˆØ§Ø³Ø·Ø©</p>
                    <p className="text-sm text-gray-900">{selectedMovement.doneBy}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Ø§Ù„Ù…Ø±Ø¬Ø¹</p>
                    <p className="text-sm font-mono text-gray-900">{selectedMovement.reference}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Ù†ÙˆØ¹ Ø§Ù„Ù…Ø±Ø¬Ø¹</p>
                    <p className="text-sm text-gray-900">{selectedMovement.referenceType}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Reports Page Component
function ReportsPage() {
  const [reportType, setReportType] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [warehouse, setWarehouse] = useState('');
  const [sku, setSku] = useState('');
  const [location, setLocation] = useState('');
  const [reports, setReports] = useState<
    {
      id: string;
      reportName: string;
      creationDate: string;
      extension: string;
      status: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const response = await apiFetch<{
          data: {
            id: string;
            reportName: string;
            creationDate: string;
            extension: string;
            status: string;
          }[];
          pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
          };
        }>('/reports');

        if (!active) return;

        setReports(response.data);
      } catch (e: any) {
        console.error('Failed to load reports', e);
        if (active) {
          setError('ØªØ¹Ø°Ø± ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ±.');
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

  const handleGenerateReport = async () => {
    if (!reportType) {
      alert('ÙŠØ±Ø¬Ù‰ Ø§Ø®ØªÙŠØ§Ø± Ù†ÙˆØ¹ Ø§Ù„ØªÙ‚Ø±ÙŠØ±');
      return;
    }

    try {
      setGenerating(true);
      setError(null);

      const response = await apiFetch<{
        id: string;
        reportName: string;
        creationDate: string;
        extension: string;
        status: string;
      }>('/reports/generate', {
        method: 'POST',
        body: JSON.stringify({
          reportType,
          dateFrom: dateFrom || undefined,
          dateTo: dateTo || undefined,
          warehouseId: warehouse || undefined,
          sku: sku || undefined,
          location: location || undefined,
        }),
      });

      // Reload reports list
      const reportsResponse = await apiFetch<{
        data: {
          id: string;
          reportName: string;
          creationDate: string;
          extension: string;
          status: string;
        }[];
        pagination: {
          page: number;
          limit: number;
          total: number;
          totalPages: number;
        };
      }>('/reports');

      setReports(reportsResponse.data);
      alert('ØªÙ… Ø¥Ù†Ø´Ø§Ø¡ Ø§Ù„ØªÙ‚Ø±ÙŠØ± Ø¨Ù†Ø¬Ø§Ø­');
    } catch (e: any) {
      console.error('Failed to generate report', e);
      setError('ØªØ¹Ø°Ø± Ø¥Ù†Ø´Ø§Ø¡ Ø§Ù„ØªÙ‚Ø±ÙŠØ±.');
      alert('ØªØ¹Ø°Ø± Ø¥Ù†Ø´Ø§Ø¡ Ø§Ù„ØªÙ‚Ø±ÙŠØ±. ÙŠØ±Ø¬Ù‰ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø© Ø£Ø®Ø±Ù‰.');
    } finally {
      setGenerating(false);
    }
  };

  const handleDownloadReport = async (reportId: string, extension: string) => {
    try {
      const format = extension.toLowerCase() === 'csv' ? 'csv' : 'pdf';
      const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:3000';
      const response = await fetch(`${apiBaseUrl}/reports/${reportId}/download?format=${format}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('clientAuthToken')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to download report');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `report.${format}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (e: any) {
      console.error('Failed to download report', e);
      alert('ØªØ¹Ø°Ø± ØªÙ†Ø²ÙŠÙ„ Ø§Ù„ØªÙ‚Ø±ÙŠØ±. ÙŠØ±Ø¬Ù‰ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø© Ø£Ø®Ø±Ù‰.');
    }
  };

  // Pagination for reports table
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
  const paginated = paginate(reports, currentPage, pageSize);
  const displayReports = paginated.data;

  const handleExportReportsCSV = () => {
    const csvData = reports.map((report) => ({
      'Ø§Ø³Ù… Ø§Ù„ØªÙ‚Ø±ÙŠØ±': report.reportName,
      'ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡': new Date(report.creationDate).toLocaleString('en-US'),
      'Ø§Ù„Ø§Ù…ØªØ¯Ø§Ø¯': report.extension,
      'Ø§Ù„Ø­Ø§Ù„Ø©': report.status,
    }));
    exportToCSV(csvData, 'Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ±_Ø§Ù„Ù…ÙˆÙ„Ø¯Ø©.csv');
  };

  const handleExportReportsPDF = async () => {
    await exportToPDF('reports-page-content', 'Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ±_Ø§Ù„Ù…ÙˆÙ„Ø¯Ø©.pdf');
  };

  return (
    <div id="reports-page-content">
      {/* Title */}
      <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-900">Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ±</h1>
        <div className="flex items-center gap-3">
          <Button 
            onClick={handleExportReportsCSV}
            variant="outline" 
            className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2"
          >
            <Download className="w-4 h-4" />
            ØªØµØ¯ÙŠØ± CSV
          </Button>
          <Button 
            onClick={handleExportReportsPDF}
            variant="outline" 
            className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2"
          >
            <Download className="w-4 h-4" />
            ØªØµØ¯ÙŠØ± PDF
          </Button>
        </div>
      </div>

      {/* Section 1: Filters */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Report Type */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Ù†ÙˆØ¹ Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ±
              </label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Ø§Ø®ØªØ± Ù†ÙˆØ¹ Ø§Ù„ØªÙ‚Ø±ÙŠØ±" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ØªÙ‚Ø±ÙŠØ± Ø§Ù„Ù…Ø®Ø²ÙˆÙ† Ø§Ù„Ø­Ø§Ù„ÙŠ">ØªÙ‚Ø±ÙŠØ± Ø§Ù„Ù…Ø®Ø²ÙˆÙ† Ø§Ù„Ø­Ø§Ù„ÙŠ</SelectItem>
                  <SelectItem value="ØªÙ‚Ø±ÙŠØ± Ø³Ø¬Ù„ Ø§Ù„Ù…Ø®Ø²ÙˆÙ†">ØªÙ‚Ø±ÙŠØ± Ø³Ø¬Ù„ Ø§Ù„Ù…Ø®Ø²ÙˆÙ†</SelectItem>
                  <SelectItem value="ØªÙ‚Ø±ÙŠØ± Ù…Ù„Ø®Øµ Ø§Ù„Ø·Ù„Ø¨Ø§Øª">ØªÙ‚Ø±ÙŠØ± Ù…Ù„Ø®Øµ Ø§Ù„Ø·Ù„Ø¨Ø§Øª</SelectItem>
                  <SelectItem value="ØªÙ‚Ø±ÙŠØ± Ø³Ø¬Ù„ Ø§Ù„Ø­Ø±ÙƒØ§Øª">ØªÙ‚Ø±ÙŠØ± Ø³Ø¬Ù„ Ø§Ù„Ø­Ø±ÙƒØ§Øª</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date From */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Ø§Ù„ØªØ§Ø±ÙŠØ® Ù…Ù†
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
                Ø§Ù„ØªØ§Ø±ÙŠØ® Ø¥Ù„Ù‰
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
                Ø§Ù„Ù…Ø³ØªÙˆØ¯Ø¹Ø©
              </label>
              <Select value={warehouse} onValueChange={setWarehouse}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Ø§Ø®ØªØ± Ø§Ù„Ù…Ø³ØªÙˆØ¯Ø¹" />
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
                placeholder="Ø£Ø¯Ø®Ù„ SKU"
                className="w-full"
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Ø§Ù„Ù…ÙˆÙ‚Ø¹
              </label>
              <Input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Ø£Ø¯Ø®Ù„ ÙƒÙˆØ¯ Ø§Ù„Ù…ÙˆÙ‚Ø¹"
                className="w-full"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-200">
            <Button
              onClick={handleGenerateReport}
              disabled={generating}
              className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white gap-2"
            >
              <Plus className="w-4 h-4" />
              {generating ? 'Ø¬Ø§Ø±ÙŠ Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡...' : 'Ø¥Ù†Ø´Ø§Ø¡ Ø§Ù„ØªÙ‚Ø±ÙŠØ±'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Generated Reports Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">ØªÙ‚Ø§Ø±ÙŠØ± Ù…ÙˆÙ„Ø¯Ø© Ù…Ø¤Ø®Ø±Ø§Ù‹</h2>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="data-table w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ø§Ø³Ù… Ø§Ù„ØªÙ‚Ø±ÙŠØ±
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ø§Ù„Ø§Ù…ØªØ¯Ø§Ø¯
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ø§Ù„Ø­Ø§Ù„Ø©
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ø§Ù„Ø¥Ø¬Ø±Ø§Ø¡
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-sm text-gray-500">
                        Ø¬Ø§Ø±ÙŠ Ø§Ù„ØªØ­Ù…ÙŠÙ„...
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-sm text-red-500">
                        {error}
                      </td>
                    </tr>
                  ) : displayReports.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-sm text-gray-500">
                        Ù„Ø§ ØªÙˆØ¬Ø¯ ØªÙ‚Ø§Ø±ÙŠØ± Ù…ØªØ§Ø­Ø©
                      </td>
                    </tr>
                  ) : (
                    displayReports.map((report) => (
                      <tr
                        key={report.id}
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                        {report.reportName}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                          {new Date(report.creationDate).toLocaleString('en-US', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                      </td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                          {report.extension}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            report.status === 'Ù…ÙƒØªÙ…Ù„'
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
                          ØªÙ†Ø²ÙŠÙ„
                        </Button>
                      </td>
                    </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          {reports.length > pageSize && (
            <Pagination
              currentPage={currentPage}
              totalPages={paginated.totalPages}
              total={paginated.total}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
            />
          )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Billing/Subscription Page Component
function BillingPage() {
  return (
    <>
      {/* Section 1: Current Plan */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Ø§Ù„ÙÙˆØªØ±Ø© ÙˆØ§Ù„Ø§Ø´ØªØ±Ø§Ùƒ</h1>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Ø§Ù„Ø®Ø·Ø© Ø§Ù„Ø­Ø§Ù„ÙŠØ©</h2>
          <Button className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white">
            ØªØºÙŠÙŠØ± Ø§Ù„Ø®Ø·Ø©
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-5">
              <p className="text-sm text-gray-500 mb-1">Ø§Ù„Ø®Ø·Ø©</p>
              <p className="text-lg font-bold text-gray-900">{billingData.currentPlan.planName}</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-5">
              <p className="text-sm text-gray-500 mb-1">ØªØ§Ø±ÙŠØ® Ø§Ù„ØªØ¬Ø¯ÙŠØ¯</p>
              <p className="text-lg font-bold text-gray-900 font-mono">{billingData.currentPlan.renewalDate}</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-5">
              <p className="text-sm text-gray-500 mb-1">Ø§Ù„Ø­Ø§Ù„Ø©</p>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                {billingData.currentPlan.status}
              </span>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section 2: Current Usage Cycle */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Ø¯ÙˆØ±Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ø­Ø§Ù„ÙŠØ©</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Space Usage Card */}
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-base font-semibold">Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…Ø©</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…Ø©</span>
                  <span className="font-medium text-gray-900">{billingData.usage.space.usedGB} GB</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„ÙƒÙ„ÙŠØ©</span>
                  <span className="font-medium text-gray-900">{billingData.usage.space.totalGB} GB</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-[#176C33] to-[#104920] h-3 rounded-full transition-all"
                    style={{ width: `${billingData.usage.space.used}%` }}
                  />
                </div>
                <div className="text-center text-xs text-gray-500">
                  {billingData.usage.space.used}% Ù…Ø³ØªØ®Ø¯Ù…
                </div>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-1">Ø§Ù„ØªÙƒÙ„ÙØ© Ø§Ù„ØªÙ‚Ø¯ÙŠØ±ÙŠØ© Ù„Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…Ø©</p>
                <p className="text-xl font-bold text-gray-900">{billingData.usage.space.estimatedCost.toLocaleString()} Ø¯ÙˆÙ„Ø§Ø±</p>
              </div>
            </CardContent>
          </Card>

          {/* Incoming Movements Card */}
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-base font-semibold">Ø­Ø±ÙƒØ§Øª Ø§Ù„ÙˆØ§Ø±Ø¯</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Ø¹Ø¯Ø¯ Ø­Ø±ÙƒØ§Øª Ø§Ù„ÙˆØ§Ø±Ø¯</p>
                <p className="text-3xl font-bold text-gray-900">{billingData.usage.incomingMovements.count.toLocaleString()}</p>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-1">Ø§Ù„ØªÙƒÙ„ÙØ© Ø§Ù„ØªÙ‚Ø¯ÙŠØ±ÙŠØ© Ù„Ø­Ø±ÙƒØ§Øª Ø§Ù„ÙˆØ§Ø±Ø¯</p>
                <p className="text-xl font-bold text-gray-900">{billingData.usage.incomingMovements.estimatedCost.toLocaleString()} Ø¯ÙˆÙ„Ø§Ø±</p>
              </div>
            </CardContent>
          </Card>

          {/* Outgoing Orders Card */}
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-base font-semibold">Ø·Ù„Ø¨Ø§Øª Ø§Ù„ØµØ§Ø¯Ø±</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Ø¹Ø¯Ø¯ Ø·Ù„Ø¨Ø§Øª Ø§Ù„ØµØ§Ø¯Ø±</p>
                <p className="text-3xl font-bold text-gray-900">{billingData.usage.outgoingOrders.count.toLocaleString()}</p>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-1">Ø§Ù„ØªÙƒÙ„ÙØ© Ø§Ù„ØªÙ‚Ø¯ÙŠØ±ÙŠØ© Ù„Ø·Ù„Ø¨Ø§Øª Ø§Ù„ØµØ§Ø¯Ø±</p>
                <p className="text-xl font-bold text-gray-900">{billingData.usage.outgoingOrders.estimatedCost.toLocaleString()} Ø¯ÙˆÙ„Ø§Ø±</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section 3: Total Estimate */}
      <Card className="border-0 shadow-sm bg-gradient-to-r from-[#176C33]/10 to-[#104920]/10">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„ØªÙ‚Ø¯ÙŠØ±ÙŠ</h3>
              <p className="text-sm text-gray-600">Ø§Ù„ØªÙƒÙ„ÙØ© Ø§Ù„Ø®Ø§ØµØ© Ø¨Ù‡Ø°Ø§ Ø§Ù„Ø´Ù‡Ø± Ø­ØªÙ‰ Ø§Ù„Ø¢Ù†</p>
            </div>
            <div className="text-left">
              <p className="text-4xl font-bold text-[#176C33]">
                {billingData.totalEstimatedCost.toLocaleString()} Ø¯ÙˆÙ„Ø§Ø±
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

// Invoices Page Component
function InvoicesPage({ onViewInvoice }: { onViewInvoice: (invoiceId: string) => void }) {
  const [status, setStatus] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [billingCycle, setBillingCycle] = useState('');
  const [filteredInvoices, setFilteredInvoices] = useState(invoicesData);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  // Apply filters
  useEffect(() => {
    let filtered = [...invoicesData];

    if (status) {
      filtered = filtered.filter((inv) => inv.status === status);
    }

    if (dateFrom) {
      filtered = filtered.filter((inv) => {
        const periodStart = new Date(inv.periodStart);
        periodStart.setHours(0, 0, 0, 0);
        const filterDate = new Date(dateFrom);
        filterDate.setHours(0, 0, 0, 0);
        return periodStart >= filterDate;
      });
    }

    if (dateTo) {
      filtered = filtered.filter((inv) => {
        const periodEnd = new Date(inv.periodEnd);
        periodEnd.setHours(0, 0, 0, 0);
        const filterDate = new Date(dateTo);
        filterDate.setHours(23, 59, 59, 999);
        return periodEnd <= filterDate;
      });
    }

    setFilteredInvoices(filtered);
    setCurrentPage(1);
  }, [status, dateFrom, dateTo, billingCycle]);

  const paginated = paginate(filteredInvoices, currentPage, pageSize);
  const displayInvoices = paginated.data;

  const handleExportCSV = () => {
    const csvData = filteredInvoices.map((inv) => ({
      'Ø§Ù„ÙØ§ØªÙˆØ±Ø©': inv.id,
      'Ø¨Ø¯Ø§ÙŠØ© Ø§Ù„ÙØªØ±Ø©': inv.periodStart,
      'Ù†Ù‡Ø§ÙŠØ© Ø§Ù„ÙØªØ±Ø©': inv.periodEnd,
      'Ø§Ù„Ø­Ø§Ù„Ø©': inv.status,
      'Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ': inv.total,
      'Ø§Ù„Ø¹Ù…Ù„Ø©': inv.currency,
      'ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥ØµØ¯Ø§Ø±': inv.issueDate,
      'ØªØ§Ø±ÙŠØ® Ø§Ù„Ø³Ø¯Ø§Ø¯': inv.paymentDate,
    }));
    exportToCSV(csvData, 'Ø§Ù„ÙÙˆØ§ØªÙŠØ±.csv');
  };

  const handleExportPDF = async () => {
    await exportToPDF('invoices-page-content', 'Ø§Ù„ÙÙˆØ§ØªÙŠØ±.pdf');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ù…Ø¯ÙÙˆØ¹':
        return 'bg-green-100 text-green-700';
      case 'ØµØ§Ø¯Ø±Ø©':
        return 'bg-blue-100 text-blue-700';
      case 'Ù…Ø³ØªÙˆØ·Ø©':
        return 'bg-amber-100 text-amber-700';
      case 'Ù…Ù„ØºÙ‰':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div id="invoices-page-content">
      {/* Section 1: Title, Button, and Filters */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Ø§Ù„ÙÙˆØ§ØªÙŠØ±</h1>
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleExportCSV}
              variant="outline" 
              className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2"
            >
            <Download className="w-4 h-4" />
            ØªØµØ¯ÙŠØ± CSV
          </Button>
            <Button 
              onClick={handleExportPDF}
              variant="outline" 
              className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2"
            >
              <Download className="w-4 h-4" />
              ØªØµØ¯ÙŠØ± PDF
          </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Status */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ø§Ù„Ø­Ø§Ù„Ø©
                </label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Ø§Ø®ØªØ± Ø§Ù„Ø­Ø§Ù„Ø©" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Ø§Ù„ÙƒÙ„</SelectItem>
                    <SelectItem value="Ù…Ø³ØªÙˆØ·Ø©">Ù…Ø³ØªÙˆØ·Ø©</SelectItem>
                    <SelectItem value="ØµØ§Ø¯Ø±Ø©">ØµØ§Ø¯Ø±Ø©</SelectItem>
                    <SelectItem value="Ù…Ø¯ÙÙˆØ¹">Ù…Ø¯ÙÙˆØ¹</SelectItem>
                    <SelectItem value="Ù…Ù„ØºÙ‰">Ù…Ù„ØºÙ‰</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Range */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ù†Ø·Ø§Ù‚ Ø§Ù„ÙØªØ±Ø©
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    type="date"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    className="flex-1"
                    placeholder="Ù…Ù†"
                  />
                  <span className="text-gray-500 text-sm whitespace-nowrap">Ø¥Ù„Ù‰</span>
                  <Input
                    type="date"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                    className="flex-1"
                    placeholder="Ø¥Ù„Ù‰"
                  />
                </div>
              </div>

              {/* Billing Cycle */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ø¯ÙˆØ±Ø© Ø§Ù„ÙÙˆØªØ±Ø©
                </label>
                <Select value={billingCycle} onValueChange={setBillingCycle}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Ø§Ø®ØªØ± Ø§Ù„Ø¯ÙˆØ±Ø©" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ø£Ø³Ø¨ÙˆØ¹ÙŠ">Ø£Ø³Ø¨ÙˆØ¹ÙŠ</SelectItem>
                    <SelectItem value="Ø´Ù‡Ø±ÙŠ">Ø´Ù‡Ø±ÙŠ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 2: Invoices Table */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    ÙØ§ØªÙˆØ±Ø©
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø¨Ø¯Ø§ÙŠØ© Ø§Ù„ÙØªØ±Ø©
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ù†Ù‡Ø§ÙŠØ© Ø§Ù„ÙØªØ±Ø©
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ù„Ø­Ø§Ù„Ø©
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ù„Ø¹Ù…Ù„Ø©
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥ØµØ¯Ø§Ø±
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    ØªØ§Ø±ÙŠØ® Ø§Ù„Ø³Ø¯Ø§Ø¯
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ù…Ù„Ø§Ø­Ø¸Ø§Øª
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayInvoices.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-8 text-center text-sm text-gray-500">
                      Ù„Ø§ ØªÙˆØ¬Ø¯ ÙÙˆØ§ØªÙŠØ± Ù…Ø·Ø§Ø¨Ù‚Ø© Ù„Ù„ÙÙ„Ø§ØªØ± Ø§Ù„Ø­Ø§Ù„ÙŠØ©.
                    </td>
                  </tr>
                ) : (
                  displayInvoices.map((invoice, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-4 text-sm text-gray-900 font-mono font-medium">
                      {invoice.id}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                      {invoice.periodStart}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                      {invoice.periodEnd}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                      {invoice.total.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {invoice.currency}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                      {invoice.issueDate}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                      {invoice.paymentDate}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#176C33] hover:text-[#104920] hover:bg-[#176C33]/10 gap-1"
                        >
                          <Download className="w-3 h-3" />
                          ØªÙ†Ø²ÙŠÙ„ PDF
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onViewInvoice(invoice.id)}
                          className="text-[#176C33] hover:text-[#104920] hover:bg-[#176C33]/10"
                        >
                          Ø¹Ø±Ø¶
                        </Button>
                      </div>
                    </td>
                  </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {filteredInvoices.length > pageSize && (
            <Pagination
              currentPage={currentPage}
              totalPages={paginated.totalPages}
              total={paginated.total}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Invoice Details Page Component
function InvoiceDetailsPage({ invoiceId, onBack }: { invoiceId: string; onBack: () => void }) {
  const invoiceDetails = getInvoiceDetails(invoiceId);

  return (
    <>
      {/* Section 1: Title, Buttons, and Invoice Info Card */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">ÙØ§ØªÙˆØ±Ø©</h1>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2">
              <Download className="w-4 h-4" />
              ØªÙ†Ø²ÙŠÙ„ PDF
            </Button>
            <Button variant="outline" className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2">
              <Download className="w-4 h-4" />
              ØªØ­Ø¯ÙŠØ« PDF
            </Button>
          </div>
        </div>

        {/* Invoice Info Card */}
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Ø±Ù‚Ù… Ø§Ù„ÙØ§ØªÙˆØ±Ø©</p>
                <p className="text-lg font-bold text-gray-900 font-mono">{invoiceDetails.invoiceNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Ø¨Ø¯Ø§ÙŠØ© Ø§Ù„ÙØªØ±Ø©</p>
                <p className="text-lg font-bold text-gray-900 font-mono">{invoiceDetails.periodStart}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Ù†Ù‡Ø§ÙŠØ© Ø§Ù„ÙØªØ±Ø©</p>
                <p className="text-lg font-bold text-gray-900 font-mono">{invoiceDetails.periodEnd}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Ø§Ù„Ø­Ø§Ù„Ø©</p>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    invoiceDetails.status === 'Ù…Ø¯ÙÙˆØ¹'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {invoiceDetails.status}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Ø§Ù„Ø¯ÙˆØ±Ø©</p>
                <p className="text-lg font-bold text-gray-900">{invoiceDetails.cycle}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Ø§Ù„Ø¹Ù…Ù„Ø©</p>
                <p className="text-lg font-bold text-gray-900">{invoiceDetails.currency}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500 mb-1">Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„Ù…Ø¨Ù„Øº</p>
                <p className="text-2xl font-bold text-[#176C33]">{invoiceDetails.totalAmount.toLocaleString()} {invoiceDetails.currency}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 2: Items and Totals */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Right Section: Order Items Table */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Ø¨Ù†ÙˆØ¯ Ø§Ù„Ø·Ù„Ø¨</h2>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="data-table w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                        Ù†ÙˆØ¹ Ø§Ù„Ø¨Ù†Ø¯
                      </th>
                      <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                        Ø§Ù„ÙƒÙ…ÙŠØ©
                      </th>
                      <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                        Ø³Ø¹Ø± Ø§Ù„ÙˆØ­Ø¯Ø©
                      </th>
                      <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                        Ø§Ù„Ù…Ø¨Ù„Øº
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceDetails.items.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                          {item.type}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-900">
                          {item.quantity.toLocaleString()}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-900">
                          {item.unitPrice.toLocaleString()} {invoiceDetails.currency}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                          {item.amount.toLocaleString()} {invoiceDetails.currency}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Left Section: Totals Card */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠØ§Øª</h2>
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Ø±Ø³ÙˆÙ… Ø§Ù„ØªØ®Ø²ÙŠÙ† Ø§Ù„Ø«Ø§Ø¨ØªØ©</p>
                <p className="text-sm font-medium text-gray-900">
                  {invoiceDetails.fixedFee.toLocaleString()} {invoiceDetails.currency}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Ø±Ø³ÙˆÙ… Ø§Ù„Ø²ÙŠØ§Ø¯Ø©</p>
                <p className="text-sm font-medium text-gray-900">
                  {invoiceDetails.additionalFee.toLocaleString()} {invoiceDetails.currency}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø±Ø³ÙˆÙ… Ø§Ù„Ø­Ø±ÙƒØ§Øª</p>
                <p className="text-sm font-medium text-gray-900">
                  {invoiceDetails.totalMovementFees.toLocaleString()} {invoiceDetails.currency}
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-gray-900">Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„Ù…Ø¨Ù„Øº</p>
                  <p className="text-xl font-bold text-[#176C33]">
                    {invoiceDetails.totalAmount.toLocaleString()} {invoiceDetails.currency}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Back Button */}
      <div className="flex items-center justify-end pt-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="text-gray-700 border-gray-300 hover:bg-gray-50"
        >
          Ø§Ù„Ø¹ÙˆØ¯Ø© Ø¥Ù„Ù‰ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©
        </Button>
      </div>
    </>
  );
}

// Users Page Component
function UsersPage() {
  const [status, setStatus] = useState('');
  const [role, setRole] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [inviteDialogOpen, setInviteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [disableDialogOpen, setDisableDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<typeof usersData[0] | null>(null);
  
  // Form states for invite
  const [inviteFirstName, setInviteFirstName] = useState('');
  const [inviteLastName, setInviteLastName] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('');
  
  // Form states for edit
  const [editFirstName, setEditFirstName] = useState('');
  const [editLastName, setEditLastName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editRole, setEditRole] = useState('');
  const [editStatus, setEditStatus] = useState('');

  const handleInviteUser = () => {
    // Handle invite user
    console.log('Inviting user:', { inviteFirstName, inviteLastName, inviteEmail, inviteRole });
    setInviteDialogOpen(false);
    // Reset form
    setInviteFirstName('');
    setInviteLastName('');
    setInviteEmail('');
    setInviteRole('');
  };

  const handleEditUser = () => {
    // Handle edit user
    console.log('Editing user:', { editFirstName, editLastName, editEmail, editRole, editStatus });
    setEditDialogOpen(false);
    setSelectedUser(null);
  };

  const handleDisableUser = () => {
    // Handle disable user
    console.log('Disabling user:', selectedUser?.id);
    setDisableDialogOpen(false);
    setSelectedUser(null);
  };

  const openEditDialog = (user: typeof usersData[0]) => {
    setSelectedUser(user);
    setEditFirstName(user.firstName);
    setEditLastName(user.lastName);
    setEditEmail(user.email);
    setEditRole(user.role);
    setEditStatus(user.status);
    setEditDialogOpen(true);
  };

  const openDisableDialog = (user: typeof usersData[0]) => {
    setSelectedUser(user);
    setDisableDialogOpen(true);
  };

  // Apply filters
  const [filteredUsers, setFilteredUsers] = useState(usersData);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    let filtered = [...usersData];

    if (status) {
      filtered = filtered.filter((user) => user.status === status);
    }

    if (role) {
      filtered = filtered.filter((user) => user.role === role);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (user) =>
          user.firstName.toLowerCase().includes(query) ||
          user.lastName.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
      );
    }

    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [status, role, searchQuery]);

  const paginated = paginate(filteredUsers, currentPage, pageSize);
  const displayUsers = paginated.data;

  const handleExportCSV = () => {
    const csvData = filteredUsers.map((user) => ({
      'Ø§Ù„Ø§Ø³Ù…': `${user.firstName} ${user.lastName}`,
      'Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ': user.email,
      'Ø§Ù„Ø¯ÙˆØ±': user.role,
      'Ø§Ù„Ø­Ø§Ù„Ø©': user.status,
      'ÙˆÙ‚Øª Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡': user.creationTime,
    }));
    exportToCSV(csvData, 'Ù…Ø³ØªØ®Ø¯Ù…Ùˆ_Ø§Ù„ÙØ±ÙŠÙ‚.csv');
  };

  const handleExportPDF = async () => {
    await exportToPDF('users-page-content', 'Ù…Ø³ØªØ®Ø¯Ù…Ùˆ_Ø§Ù„ÙØ±ÙŠÙ‚.pdf');
  };

  return (
    <div id="users-page-content">
      {/* Section 1: Title, Button, and Filters */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Ù…Ø³ØªØ®Ø¯Ù…Ùˆ Ø§Ù„ÙØ±ÙŠÙ‚</h1>
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleExportCSV}
              variant="outline" 
              className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2"
            >
              <Download className="w-4 h-4" />
              ØªØµØ¯ÙŠØ± CSV
            </Button>
            <Button 
              onClick={handleExportPDF}
              variant="outline" 
              className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2"
            >
              <Download className="w-4 h-4" />
              ØªØµØ¯ÙŠØ± PDF
            </Button>
          <Button
            onClick={() => setInviteDialogOpen(true)}
            className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white gap-2"
          >
            <Plus className="w-4 h-4" />
            Ø¯Ø¹ÙˆØ© Ù…Ø³ØªØ®Ø¯Ù…
          </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Status */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ø§Ù„Ø­Ø§Ù„Ø©
                </label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Ø§Ø®ØªØ± Ø§Ù„Ø­Ø§Ù„Ø©" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Ø§Ù„ÙƒÙ„</SelectItem>
                    <SelectItem value="Ù…ÙØ¹Ù„">Ù…ÙØ¹Ù„</SelectItem>
                    <SelectItem value="ØºÙŠØ± Ù…ÙØ¹Ù„">ØºÙŠØ± Ù…ÙØ¹Ù„</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Role */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ø§Ù„Ø¯ÙˆØ±
                </label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Ø§Ø®ØªØ± Ø§Ù„Ø¯ÙˆØ±" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Ø§Ù„ÙƒÙ„</SelectItem>
                    <SelectItem value="admin">admin</SelectItem>
                    <SelectItem value="Ù…Ø¯ÙŠØ± Ø§Ù„Ù…Ø®Ø²ÙˆÙ†">Ù…Ø¯ÙŠØ± Ø§Ù„Ù…Ø®Ø²ÙˆÙ†</SelectItem>
                    <SelectItem value="Ù…Ø¯ÙŠØ± Ø§Ù„Ù…Ø¨ÙŠØ¹Ø§Øª">Ù…Ø¯ÙŠØ± Ø§Ù„Ù…Ø¨ÙŠØ¹Ø§Øª</SelectItem>
                    <SelectItem value="Ù…Ø­Ø§Ø³Ø¨">Ù…Ø­Ø§Ø³Ø¨</SelectItem>
                    <SelectItem value="Ù…ÙˆØ¸Ù">Ù…ÙˆØ¸Ù</SelectItem>
                    <SelectItem value="Ù…Ø´Ø±Ù">Ù…Ø´Ø±Ù</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ø§Ù„Ø¨Ø­Ø«
                </label>
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ø§Ø¨Ø­Ø« Ø¹Ù† Ù…Ø³ØªØ®Ø¯Ù…..."
                    className="w-full pr-10"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 2: Users Table */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ù„Ø§Ø³Ù…
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ù„Ø¯ÙˆØ±
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ù„Ø­Ø§Ù„Ø©
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    ÙˆÙ‚Øª Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ù„Ù…Ù„Ø§Ø­Ø¸Ø§Øª
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayUsers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-sm text-gray-500">
                      Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† Ù…Ø·Ø§Ø¨Ù‚ÙŠÙ† Ù„Ù„ÙÙ„Ø§ØªØ± Ø§Ù„Ø­Ø§Ù„ÙŠØ©.
                    </td>
                  </tr>
                ) : (
                  displayUsers.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                      {user.firstName} {user.lastName}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {user.email}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {user.role}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          user.status === 'Ù…ÙØ¹Ù„'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                      {user.creationTime}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openEditDialog(user)}
                          className="text-[#176C33] hover:text-[#104920] hover:bg-[#176C33]/10"
                        >
                          ØªØ¹Ø¯ÙŠÙ„
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openDisableDialog(user)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          ØªØ¹Ø·ÙŠÙ„
                        </Button>
                      </div>
                    </td>
                  </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {filteredUsers.length > pageSize && (
            <Pagination
              currentPage={currentPage}
              totalPages={paginated.totalPages}
              total={paginated.total}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
            />
          )}
        </CardContent>
      </Card>

      {/* Invite User Dialog */}
      <Dialog open={inviteDialogOpen} onOpenChange={setInviteDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Ø¯Ø¹ÙˆØ© Ù…Ø³ØªØ®Ø¯Ù…</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø§Ù„Ø§Ø³Ù… Ø§Ù„Ø£ÙˆÙ„
              </label>
              <Input
                type="text"
                value={inviteFirstName}
                onChange={(e) => setInviteFirstName(e.target.value)}
                placeholder="Ø£Ø¯Ø®Ù„ Ø§Ù„Ø§Ø³Ù… Ø§Ù„Ø£ÙˆÙ„"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø§Ø³Ù… Ø§Ù„Ø¹Ø§Ø¦Ù„Ø©
              </label>
              <Input
                type="text"
                value={inviteLastName}
                onChange={(e) => setInviteLastName(e.target.value)}
                placeholder="Ø£Ø¯Ø®Ù„ Ø§Ø³Ù… Ø§Ù„Ø¹Ø§Ø¦Ù„Ø©"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ
              </label>
              <Input
                type="email"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                placeholder="Ø£Ø¯Ø®Ù„ Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø§Ù„Ø¯ÙˆØ±
              </label>
              <Select value={inviteRole} onValueChange={setInviteRole}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Ø§Ø®ØªØ± Ø§Ù„Ø¯ÙˆØ±" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">admin</SelectItem>
                  <SelectItem value="Ù…Ø¯ÙŠØ± Ø§Ù„Ù…Ø®Ø²ÙˆÙ†">Ù…Ø¯ÙŠØ± Ø§Ù„Ù…Ø®Ø²ÙˆÙ†</SelectItem>
                  <SelectItem value="Ù…Ø¯ÙŠØ± Ø§Ù„Ù…Ø¨ÙŠØ¹Ø§Øª">Ù…Ø¯ÙŠØ± Ø§Ù„Ù…Ø¨ÙŠØ¹Ø§Øª</SelectItem>
                  <SelectItem value="Ù…Ø­Ø§Ø³Ø¨">Ù…Ø­Ø§Ø³Ø¨</SelectItem>
                  <SelectItem value="Ù…ÙˆØ¸Ù">Ù…ÙˆØ¸Ù</SelectItem>
                  <SelectItem value="Ù…Ø´Ø±Ù">Ù…Ø´Ø±Ù</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 mt-6">
            <Button
              variant="outline"
              onClick={() => {
                setInviteDialogOpen(false);
                setInviteFirstName('');
                setInviteLastName('');
                setInviteEmail('');
                setInviteRole('');
              }}
              className="text-gray-700 border-gray-300 hover:bg-gray-50"
            >
              Ø¥Ù„ØºØ§Ø¡
            </Button>
            <Button
              onClick={handleInviteUser}
              className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
            >
              Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø¯Ø¹ÙˆØ©
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø§Ù„Ø§Ø³Ù… Ø§Ù„Ø£ÙˆÙ„
              </label>
              <Input
                type="text"
                value={editFirstName}
                onChange={(e) => setEditFirstName(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø§Ø³Ù… Ø§Ù„Ø¹Ø§Ø¦Ù„Ø©
              </label>
              <Input
                type="text"
                value={editLastName}
                onChange={(e) => setEditLastName(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø§Ù„Ø¯ÙˆØ±
              </label>
              <Select value={editRole} onValueChange={setEditRole}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">admin</SelectItem>
                  <SelectItem value="Ù…Ø¯ÙŠØ± Ø§Ù„Ù…Ø®Ø²ÙˆÙ†">Ù…Ø¯ÙŠØ± Ø§Ù„Ù…Ø®Ø²ÙˆÙ†</SelectItem>
                  <SelectItem value="Ù…Ø¯ÙŠØ± Ø§Ù„Ù…Ø¨ÙŠØ¹Ø§Øª">Ù…Ø¯ÙŠØ± Ø§Ù„Ù…Ø¨ÙŠØ¹Ø§Øª</SelectItem>
                  <SelectItem value="Ù…Ø­Ø§Ø³Ø¨">Ù…Ø­Ø§Ø³Ø¨</SelectItem>
                  <SelectItem value="Ù…ÙˆØ¸Ù">Ù…ÙˆØ¸Ù</SelectItem>
                  <SelectItem value="Ù…Ø´Ø±Ù">Ù…Ø´Ø±Ù</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø§Ù„Ø­Ø§Ù„Ø©
              </label>
              <Select value={editStatus} onValueChange={setEditStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ù…ÙØ¹Ù„">Ù…ÙØ¹Ù„</SelectItem>
                  <SelectItem value="ØºÙŠØ± Ù…ÙØ¹Ù„">ØºÙŠØ± Ù…ÙØ¹Ù„</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ
              </label>
              <Input
                type="email"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 mt-6">
            <Button
              variant="outline"
              onClick={() => {
                setEditDialogOpen(false);
                setSelectedUser(null);
              }}
              className="text-gray-700 border-gray-300 hover:bg-gray-50"
            >
              Ø¥Ù„ØºØ§Ø¡
            </Button>
            <Button
              onClick={handleEditUser}
              className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
            >
              Ø­ÙØ¸
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Disable User Alert Dialog */}
      <AlertDialog open={disableDialogOpen} onOpenChange={setDisableDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>ØªØ¹Ø·ÙŠÙ„ Ø§Ù„Ø­Ø³Ø§Ø¨</AlertDialogTitle>
            <AlertDialogDescription className="text-right">
              Ù‡Ù„ Ø£Ù†Øª Ù…ØªØ£ÙƒØ¯ Ù…Ù† Ø£Ù†Ùƒ ØªØ±ÙŠØ¯ ØªØ¹Ø·ÙŠÙ„ Ø­Ø³Ø§Ø¨ {selectedUser?.firstName} {selectedUser?.lastName}ØŸ
              <br />
              Ù„Ù† ÙŠØªÙ…ÙƒÙ† Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ù…Ù† Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ù†Ø¸Ø§Ù… Ø¨Ø¹Ø¯ ØªØ¹Ø·ÙŠÙ„ Ø§Ù„Ø­Ø³Ø§Ø¨.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setSelectedUser(null)}>
              Ø¥Ù„ØºØ§Ø¡
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDisableUser}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              ØªØ¹Ø·ÙŠÙ„
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

// Notifications Page Component
function NotificationsPage({ onNavigateToReference }: { onNavigateToReference: (referenceType: string, referenceId: string) => void }) {
  const [importance, setImportance] = useState('');
  const [readStatus, setReadStatus] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [referenceType, setReferenceType] = useState('');
  const [selectedNotification, setSelectedNotification] = useState<typeof notificationsData[0] | null>(null);
  const [notifications, setNotifications] = useState(notificationsData);

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'Ø­Ø±Ø¬':
        return 'bg-red-100 text-red-700';
      case 'Ù…Ø±ØªÙØ¹':
        return 'bg-orange-100 text-orange-700';
      case 'Ù…ØªÙˆØ³Ø·':
        return 'bg-blue-100 text-blue-700';
      case 'Ù…Ù†Ø®ÙØ¶':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleMarkAsRead = (notificationId: string) => {
    setNotifications(notifications.map(notif => 
      notif.id === notificationId ? { ...notif, readStatus: 'Ù…Ù‚Ø±ÙˆØ¡' } : notif
    ));
    setSelectedNotification(null);
  };

  const handleGoToReference = (notification: typeof notificationsData[0]) => {
    setSelectedNotification(null);
    onNavigateToReference(notification.referenceType, notification.referenceId);
  };

  // Apply filters
  const [filteredNotifications, setFilteredNotifications] = useState(notifications);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    let filtered = [...notifications];

    if (importance) {
      filtered = filtered.filter((notif) => notif.importance === importance);
    }

    if (readStatus) {
      filtered = filtered.filter((notif) => notif.readStatus === readStatus);
    }

    if (dateFrom) {
      filtered = filtered.filter((notif) => {
        // Parse the formatted date string back to Date
        const notifDate = new Date(notif.dateTime);
        if (isNaN(notifDate.getTime())) return false;
        notifDate.setHours(0, 0, 0, 0);
        const filterDate = new Date(dateFrom);
        filterDate.setHours(0, 0, 0, 0);
        return notifDate >= filterDate;
      });
    }

    if (dateTo) {
      filtered = filtered.filter((notif) => {
        // Parse the formatted date string back to Date
        const notifDate = new Date(notif.dateTime);
        if (isNaN(notifDate.getTime())) return false;
        notifDate.setHours(0, 0, 0, 0);
        const filterDate = new Date(dateTo);
        filterDate.setHours(23, 59, 59, 999);
        return notifDate <= filterDate;
      });
    }

    if (referenceType) {
      filtered = filtered.filter((notif) => notif.referenceType === referenceType);
    }

    setFilteredNotifications(filtered);
    setCurrentPage(1);
  }, [importance, readStatus, dateFrom, dateTo, referenceType, notifications]);

  const paginated = paginate(filteredNotifications, currentPage, pageSize);
  const displayNotifications = paginated.data;

  const handleExportCSV = () => {
    const csvData = filteredNotifications.map((notif) => ({
      'Ø§Ù„ÙˆÙ‚Øª': notif.dateTime,
      'Ø§Ù„Ø£Ù‡Ù…ÙŠØ©': notif.importance,
      'Ø§Ù„Ø­Ø§Ù„Ø©': notif.readStatus,
      'Ø§Ù„Ù†ÙˆØ¹': notif.type,
      'Ø§Ù„Ø±Ø³Ø§Ù„Ø©': notif.message,
      'Ù†ÙˆØ¹ Ø§Ù„Ù…Ø±Ø¬Ø¹': notif.referenceType,
      'Ù…Ø¹Ø±Ù Ø§Ù„Ù…Ø±Ø¬Ø¹': notif.referenceId,
    }));
    exportToCSV(csvData, 'Ø§Ù„Ø¥Ø´Ø¹Ø§Ø±Ø§Øª.csv');
  };

  const handleExportPDF = async () => {
    await exportToPDF('notifications-page-content', 'Ø§Ù„Ø¥Ø´Ø¹Ø§Ø±Ø§Øª.pdf');
  };

  return (
    <div id="notifications-page-content">
      {/* Section 1: Title and Filters */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Ø§Ù„Ø¥Ø´Ø¹Ø§Ø±Ø§Øª</h1>
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleExportCSV}
              variant="outline" 
              className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2"
            >
              <Download className="w-4 h-4" />
              ØªØµØ¯ÙŠØ± CSV
            </Button>
            <Button 
              onClick={handleExportPDF}
              variant="outline" 
              className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2"
            >
              <Download className="w-4 h-4" />
              ØªØµØ¯ÙŠØ± PDF
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Importance */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ø§Ù„Ø£Ù‡Ù…ÙŠØ©
                </label>
                <Select value={importance} onValueChange={setImportance}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Ø§Ø®ØªØ± Ø§Ù„Ø£Ù‡Ù…ÙŠØ©" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Ø§Ù„ÙƒÙ„</SelectItem>
                    <SelectItem value="Ù…Ù†Ø®ÙØ¶">Ù…Ù†Ø®ÙØ¶</SelectItem>
                    <SelectItem value="Ù…ØªÙˆØ³Ø·">Ù…ØªÙˆØ³Ø·</SelectItem>
                    <SelectItem value="Ù…Ø±ØªÙØ¹">Ù…Ø±ØªÙØ¹</SelectItem>
                    <SelectItem value="Ø­Ø±Ø¬">Ø­Ø±Ø¬</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Read Status */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ø­Ø§Ù„Ø© Ø§Ù„Ù‚Ø±Ø§Ø¡Ø©
                </label>
                <Select value={readStatus} onValueChange={setReadStatus}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Ø§Ø®ØªØ± Ø§Ù„Ø­Ø§Ù„Ø©" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Ø§Ù„ÙƒÙ„</SelectItem>
                    <SelectItem value="ØºÙŠØ± Ù…Ù‚Ø±ÙˆØ¡">ØºÙŠØ± Ù…Ù‚Ø±ÙˆØ¡</SelectItem>
                    <SelectItem value="Ù…Ù‚Ø±ÙˆØ¡">Ù…Ù‚Ø±ÙˆØ¡</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Range */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ù…Ù†
                </label>
                <Input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ø¥Ù„Ù‰
                </label>
                <Input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Reference Type */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ù†ÙˆØ¹ Ø§Ù„Ù…Ø±Ø¬Ø¹
                </label>
                <Select value={referenceType} onValueChange={setReferenceType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Ø§Ø®ØªØ± Ø§Ù„Ù†ÙˆØ¹" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Ø§Ù„ÙƒÙ„</SelectItem>
                    <SelectItem value="Ø·Ù„Ø¨ ÙˆØ§Ø±Ø¯">Ø·Ù„Ø¨ ÙˆØ§Ø±Ø¯</SelectItem>
                    <SelectItem value="Ø·Ù„Ø¨ ØµØ§Ø¯Ø±">Ø·Ù„Ø¨ ØµØ§Ø¯Ø±</SelectItem>
                    <SelectItem value="ÙØ§ØªÙˆØ±Ø©">ÙØ§ØªÙˆØ±Ø©</SelectItem>
                    <SelectItem value="ØªÙ‚Ø§Ø±ÙŠØ±">ØªÙ‚Ø§Ø±ÙŠØ±</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 2: Notifications Table */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    ÙˆÙ‚Øª Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ù„Ø£Ù‡Ù…ÙŠØ©
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ù„Ø¹Ù†ÙˆØ§Ù†
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ù†ÙˆØ¹ Ø§Ù„Ù…Ø±Ø¬Ø¹
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ù…Ø¹Ø±Ù Ø§Ù„Ù…Ø±Ø¬Ø¹
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ø§Ù„Ù‚Ø±Ø§Ø¡Ø©
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    Ù…Ù„Ø§Ø­Ø¸Ø§Øª
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayNotifications.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-sm text-gray-500">
                      Ù„Ø§ ØªÙˆØ¬Ø¯ Ø¥Ø´Ø¹Ø§Ø±Ø§Øª Ù…Ø·Ø§Ø¨Ù‚Ø© Ù„Ù„ÙÙ„Ø§ØªØ± Ø§Ù„Ø­Ø§Ù„ÙŠØ©.
                    </td>
                  </tr>
                ) : (
                  displayNotifications.map((notification, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-50 hover:bg-gray-50/50 transition-colors ${
                      notification.readStatus === 'ØºÙŠØ± Ù…Ù‚Ø±ÙˆØ¡' ? 'bg-blue-50/30' : ''
                    }`}
                  >
                    <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                      {notification.creationTime}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getImportanceColor(notification.importance)}`}
                      >
                        {notification.importance}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                      {notification.title}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {notification.referenceType}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 font-mono">
                      {notification.referenceId}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          notification.readStatus === 'Ù…Ù‚Ø±ÙˆØ¡'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {notification.readStatus}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedNotification(notification)}
                        className="text-[#176C33] hover:text-[#104920] hover:bg-[#176C33]/10"
                      >
                        Ø¹Ø±Ø¶
                      </Button>
                    </td>
                  </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {filteredNotifications.length > pageSize && (
            <Pagination
              currentPage={currentPage}
              totalPages={paginated.totalPages}
              total={paginated.total}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
            />
          )}
        </CardContent>
      </Card>

      {/* Notification Details Dialog */}
      <Dialog open={selectedNotification !== null} onOpenChange={(open) => !open && setSelectedNotification(null)}>
        <DialogContent className="sm:max-w-lg">
          {selectedNotification && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedNotification.title}</DialogTitle>
                <DialogDescription className="text-right">
                  {selectedNotification.creationTime}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Ø§Ù„Ø£Ù‡Ù…ÙŠØ©</p>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getImportanceColor(selectedNotification.importance)}`}
                  >
                    {selectedNotification.importance}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Ù†ÙˆØ¹ Ø§Ù„Ù…Ø±Ø¬Ø¹</p>
                  <p className="text-sm text-gray-900">{selectedNotification.referenceType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Ù…Ø¹Ø±Ù Ø§Ù„Ù…Ø±Ø¬Ø¹</p>
                  <p className="text-sm font-mono text-gray-900">{selectedNotification.referenceId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Ø§Ù„Ø±Ø³Ø§Ù„Ø©</p>
                  <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-3 rounded-lg">
                    {selectedNotification.fullMessage}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 mt-6">
                <Button
                  variant="outline"
                  onClick={() => handleMarkAsRead(selectedNotification.id)}
                  className="text-gray-700 border-gray-300 hover:bg-gray-50"
                >
                  ÙˆØ¶Ø¹ ÙƒÙ…Ù‚Ø±ÙˆØ¡
                </Button>
                <Button
                  onClick={() => handleGoToReference(selectedNotification)}
                  className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
                >
                  Ø§Ù„Ø°Ù‡Ø§Ø¨
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Support Page Component
function SupportPage() {
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ id: string; text: string; sender: 'user' | 'support'; time: string }>>([
    { id: '1', text: 'Ù…Ø±Ø­Ø¨Ø§Ù‹! ÙƒÙŠÙ ÙŠÙ…ÙƒÙ†Ù†ÙŠ Ù…Ø³Ø§Ø¹Ø¯ØªÙƒ Ø§Ù„ÙŠÙˆÙ…ØŸ', sender: 'support', time: '10:00' },
  ]);
  const [ticketDialogOpen, setTicketDialogOpen] = useState(false);
  const [viewTicketDialogOpen, setViewTicketDialogOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<typeof supportTicketsData[0] | null>(null);
  
  // Ticket creation form
  const [ticketTitle, setTicketTitle] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');
  const [ticketPriority, setTicketPriority] = useState('');

  const handleSendChatMessage = () => {
    if (!chatMessage.trim()) return;
    const newMessage = {
      id: Date.now().toString(),
      text: chatMessage,
      sender: 'user' as const,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };
    setChatMessages([...chatMessages, newMessage]);
    setChatMessage('');
    
    // Simulate support response
    setTimeout(() => {
      const supportResponse = {
        id: (Date.now() + 1).toString(),
        text: 'Ø´ÙƒØ±Ø§Ù‹ Ù„ØªÙˆØ§ØµÙ„Ùƒ. Ø³Ø£Ù‚ÙˆÙ… Ø¨Ù…Ø±Ø§Ø¬Ø¹Ø© Ø·Ù„Ø¨Ùƒ ÙˆØ§Ù„Ø±Ø¯ Ø¹Ù„ÙŠÙƒ Ù‚Ø±ÙŠØ¨Ø§Ù‹.',
        sender: 'support' as const,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setChatMessages(prev => [...prev, supportResponse]);
    }, 1000);
  };

  const handleCreateTicket = () => {
    // Handle ticket creation
    console.log('Creating ticket:', { ticketTitle, ticketDescription, ticketPriority });
    setTicketDialogOpen(false);
    setTicketTitle('');
    setTicketDescription('');
    setTicketPriority('');
  };

  const handleViewTicket = (ticket: typeof supportTicketsData[0]) => {
    setSelectedTicket(ticket);
    setViewTicketDialogOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ù…ÙØªÙˆØ­':
        return 'bg-blue-100 text-blue-700';
      case 'Ù‚ÙŠØ¯ Ø§Ù„Ù…Ø¹Ø§Ù„Ø¬Ø©':
        return 'bg-amber-100 text-amber-700';
      case 'Ù…ØºÙ„Ù‚':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Ù…Ø±ØªÙØ¹':
        return 'bg-red-100 text-red-700';
      case 'Ù…ØªÙˆØ³Ø·':
        return 'bg-orange-100 text-orange-700';
      case 'Ù…Ù†Ø®ÙØ¶':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  // Filters for tickets
  const [statusFilter, setStatusFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [filteredTickets, setFilteredTickets] = useState(supportTicketsData);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    let filtered = [...supportTicketsData];

    if (statusFilter) {
      filtered = filtered.filter((ticket) => ticket.status === statusFilter);
    }

    if (priorityFilter) {
      filtered = filtered.filter((ticket) => ticket.priority === priorityFilter);
    }

    setFilteredTickets(filtered);
    setCurrentPage(1);
  }, [statusFilter, priorityFilter]);

  const paginated = paginate(filteredTickets, currentPage, pageSize);
  const displayTickets = paginated.data;

  const handleExportCSV = () => {
    const csvData = filteredTickets.map((ticket) => ({
      'Ø±Ù‚Ù… Ø§Ù„ØªØ°ÙƒØ±Ø©': ticket.id,
      'Ø§Ù„Ø¹Ù†ÙˆØ§Ù†': ticket.title,
      'Ø§Ù„Ø­Ø§Ù„Ø©': ticket.status,
      'Ø§Ù„Ø£ÙˆÙ„ÙˆÙŠØ©': ticket.priority,
      'ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡': ticket.creationDate,
      'Ø¢Ø®Ø± ØªØ­Ø¯ÙŠØ«': ticket.lastUpdate,
    }));
    exportToCSV(csvData, 'ØªØ°Ø§ÙƒØ±_Ø§Ù„Ø¯Ø¹Ù….csv');
  };

  const handleExportPDF = async () => {
    await exportToPDF('support-page-content', 'ØªØ°Ø§ÙƒØ±_Ø§Ù„Ø¯Ø¹Ù….pdf');
  };

  return (
    <div id="support-page-content">
      {/* Section 1: Live Chat and Ticket Creation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Chat Section */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Ù…Ø­Ø§Ø¯Ø«Ø© Ù…Ø¨Ø§Ø´Ø±Ø© Ù…Ø¹ Ø§Ù„Ø¯Ø¹Ù…</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-64 overflow-y-auto space-y-3 p-4 bg-gray-50 rounded-lg">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-[#176C33] to-[#104920] text-white'
                        : 'bg-white border border-gray-200 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendChatMessage()}
                placeholder="Ø§ÙƒØªØ¨ Ø±Ø³Ø§Ù„ØªÙƒ..."
                className="flex-1"
              />
              <Button
                onClick={handleSendChatMessage}
                className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
              >
                Ø¥Ø±Ø³Ø§Ù„
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Ticket Creation Section */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Ø¥Ù†Ø´Ø§Ø¡ ØªØ°ÙƒØ±Ø© Ø¯Ø¹Ù…</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Ø¥Ø°Ø§ ÙƒÙ†Øª Ø¨Ø­Ø§Ø¬Ø© Ø¥Ù„Ù‰ Ù…Ø³Ø§Ø¹Ø¯Ø©ØŒ ÙŠÙ…ÙƒÙ†Ùƒ Ø¥Ù†Ø´Ø§Ø¡ ØªØ°ÙƒØ±Ø© Ø¯Ø¹Ù… ÙˆØ³ÙŠÙ‚ÙˆÙ… ÙØ±ÙŠÙ‚Ù†Ø§ Ø¨Ø§Ù„Ø±Ø¯ Ø¹Ù„ÙŠÙƒ ÙÙŠ Ø£Ù‚Ø±Ø¨ ÙˆÙ‚Øª Ù…Ù…ÙƒÙ†.
              </p>
              <Button
                onClick={() => setTicketDialogOpen(true)}
                className="w-full bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white gap-2"
              >
                <Plus className="w-4 h-4" />
                Ø¥Ù†Ø´Ø§Ø¡ ØªØ°ÙƒØ±Ø© Ø¬Ø¯ÙŠØ¯Ø©
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 2: Recent Tickets Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Ø§Ù„ØªØ°Ø§ÙƒØ± Ø§Ù„ØµØ§Ø¯Ø±Ø© Ù…Ø¤Ø®Ø±Ø§Ù‹</h2>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="data-table w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ø±Ù‚Ù… Ø§Ù„ØªØ°ÙƒØ±Ø©
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ø§Ù„Ø¹Ù†ÙˆØ§Ù†
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ø§Ù„Ø­Ø§Ù„Ø©
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ø§Ù„Ø£ÙˆÙ„ÙˆÙŠØ©
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ø¢Ø®Ø± ØªØ­Ø¯ÙŠØ«
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      Ø§Ù„Ø¥Ø¬Ø±Ø§Ø¡
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayTickets.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-sm text-gray-500">
                        Ù„Ø§ ØªÙˆØ¬Ø¯ ØªØ°Ø§ÙƒØ± Ù…Ø·Ø§Ø¨Ù‚Ø© Ù„Ù„ÙÙ„Ø§ØªØ± Ø§Ù„Ø­Ø§Ù„ÙŠØ©.
                      </td>
                    </tr>
                  ) : (
                    displayTickets.map((ticket, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-4 px-4 text-sm text-gray-900 font-mono font-medium">
                        {ticket.id}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                        {ticket.title}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}
                        >
                          {ticket.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}
                        >
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                        {ticket.creationDate}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                        {ticket.lastUpdate}
                      </td>
                      <td className="py-4 px-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewTicket(ticket)}
                          className="text-[#176C33] hover:text-[#104920] hover:bg-[#176C33]/10"
                        >
                          Ø¹Ø±Ø¶
                        </Button>
                      </td>
                    </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {filteredTickets.length > pageSize && (
              <Pagination
                currentPage={currentPage}
                totalPages={paginated.totalPages}
                total={paginated.total}
                pageSize={pageSize}
                onPageChange={setCurrentPage}
              />
            )}
          </CardContent>
        </Card>
      </div>

      {/* Create Ticket Dialog */}
      <Dialog open={ticketDialogOpen} onOpenChange={setTicketDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Ø¥Ù†Ø´Ø§Ø¡ ØªØ°ÙƒØ±Ø© Ø¯Ø¹Ù… Ø¬Ø¯ÙŠØ¯Ø©</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø§Ù„Ø¹Ù†ÙˆØ§Ù†
              </label>
              <Input
                type="text"
                value={ticketTitle}
                onChange={(e) => setTicketTitle(e.target.value)}
                placeholder="Ø£Ø¯Ø®Ù„ Ø¹Ù†ÙˆØ§Ù† Ø§Ù„ØªØ°ÙƒØ±Ø©"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø§Ù„ÙˆØµÙ
              </label>
              <Textarea
                value={ticketDescription}
                onChange={(e) => setTicketDescription(e.target.value)}
                placeholder="Ø£Ø¯Ø®Ù„ ÙˆØµÙ Ø§Ù„Ù…Ø´ÙƒÙ„Ø© Ø£Ùˆ Ø§Ù„Ø§Ø³ØªÙØ³Ø§Ø±"
                className="w-full min-h-32"
                rows={6}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø§Ù„Ø£ÙˆÙ„ÙˆÙŠØ©
              </label>
              <Select value={ticketPriority} onValueChange={setTicketPriority}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Ø§Ø®ØªØ± Ø§Ù„Ø£ÙˆÙ„ÙˆÙŠØ©" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ù…Ù†Ø®ÙØ¶">Ù…Ù†Ø®ÙØ¶</SelectItem>
                  <SelectItem value="Ù…ØªÙˆØ³Ø·">Ù…ØªÙˆØ³Ø·</SelectItem>
                  <SelectItem value="Ù…Ø±ØªÙØ¹">Ù…Ø±ØªÙØ¹</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 mt-6">
            <Button
              variant="outline"
              onClick={() => {
                setTicketDialogOpen(false);
                setTicketTitle('');
                setTicketDescription('');
                setTicketPriority('');
              }}
              className="text-gray-700 border-gray-300 hover:bg-gray-50"
            >
              Ø¥Ù„ØºØ§Ø¡
            </Button>
            <Button
              onClick={handleCreateTicket}
              className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
            >
              Ø¥Ù†Ø´Ø§Ø¡ Ø§Ù„ØªØ°ÙƒØ±Ø©
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* View Ticket Dialog */}
      <Dialog open={viewTicketDialogOpen} onOpenChange={setViewTicketDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          {selectedTicket && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedTicket.title}</DialogTitle>
                <DialogDescription className="text-right">
                  Ø±Ù‚Ù… Ø§Ù„ØªØ°ÙƒØ±Ø©: {selectedTicket.id}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Ø§Ù„Ø­Ø§Ù„Ø©</p>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedTicket.status)}`}
                    >
                      {selectedTicket.status}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Ø§Ù„Ø£ÙˆÙ„ÙˆÙŠØ©</p>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(selectedTicket.priority)}`}
                    >
                      {selectedTicket.priority}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡</p>
                    <p className="text-sm font-mono text-gray-900">{selectedTicket.creationDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Ø¢Ø®Ø± ØªØ­Ø¯ÙŠØ«</p>
                    <p className="text-sm font-mono text-gray-900">{selectedTicket.lastUpdate}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Ø§Ù„ÙˆØµÙ</p>
                  <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                    {selectedTicket.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 mt-6">
                <Button
                  variant="outline"
                  onClick={() => setViewTicketDialogOpen(false)}
                  className="text-gray-700 border-gray-300 hover:bg-gray-50"
                >
                  Ø¥ØºÙ„Ø§Ù‚
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Settings Page Component
function SettingsPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [language, setLanguage] = useState('');
  const [timezone, setTimezone] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [activeSessions, setActiveSessions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [savingAccount, setSavingAccount] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);
  const [savingPreferences, setSavingPreferences] = useState(false);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const response = await apiFetch<{
          profile: {
            firstName: string;
            lastName: string;
            email: string;
          };
          preferences: {
            language: string;
            timezone: string;
            notificationsEnabled: boolean;
          };
          security: {
            twoFactorEnabled: boolean;
            activeSessions: number;
          };
        }>('/client-settings/me');
        if (!active) return;
        setFirstName(response.profile.firstName);
        setLastName(response.profile.lastName);
        setEmail(response.profile.email);
        setLanguage(response.preferences.language);
        setTimezone(response.preferences.timezone);
        setNotificationsEnabled(response.preferences.notificationsEnabled);
        setTwoFactorEnabled(response.security.twoFactorEnabled);
        setActiveSessions(response.security.activeSessions);
      } catch (e) {
        if (!active) return;
        setError('ØªØ¹Ø°Ø± ØªØ­Ù…ÙŠÙ„ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø­Ø³Ø§Ø¨.');
      } finally {
        if (active) setLoading(false);
      }
    }
    void load();
    return () => {
      active = false;
    };
  }, []);

  const getErrorMessage = (e: unknown, fallback: string): string => {
    const apiError = e as ApiError;
    if (
      apiError?.body &&
      typeof apiError.body === 'object' &&
      'message' in apiError.body &&
      typeof (apiError.body as { message?: unknown }).message === 'string'
    ) {
      return (apiError.body as { message: string }).message;
    }
    return fallback;
  };

  const handleSaveAccount = async () => {
    try {
      setSavingAccount(true);
      setError(null);
      setMessage(null);
      const response = await apiFetch<{
        profile: { firstName: string; lastName: string; email: string };
      }>('/client-settings/me/profile', {
        method: 'PATCH',
        body: JSON.stringify({ firstName, lastName, email }),
      });
      setFirstName(response.profile.firstName);
      setLastName(response.profile.lastName);
      setEmail(response.profile.email);
      setMessage('ØªÙ… Ø­ÙØ¸ Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø­Ø³Ø§Ø¨ Ø¨Ù†Ø¬Ø§Ø­.');
    } catch (e) {
      setError(getErrorMessage(e, 'ØªØ¹Ø°Ø± Ø­ÙØ¸ Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø­Ø³Ø§Ø¨.'));
    } finally {
      setSavingAccount(false);
    }
  };

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setError('ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø© ÙˆØªØ£ÙƒÙŠØ¯ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± ØºÙŠØ± Ù…ØªØ·Ø§Ø¨Ù‚ÙŠÙ†');
      return;
    }
    if (!newPassword || newPassword.length < 8) {
      setError('ÙŠØ¬Ø¨ Ø£Ù† ØªØ­ØªÙˆÙŠ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø© Ø¹Ù„Ù‰ 8 Ø£Ø­Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„.');
      return;
    }
    try {
      setSavingPassword(true);
      setError(null);
      setMessage(null);
      await apiFetch('/client-settings/me/password', {
        method: 'PATCH',
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
      setMessage('ØªÙ… ØªØºÙŠÙŠØ± ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ø¨Ù†Ø¬Ø§Ø­.');
    } catch (e) {
      setError(getErrorMessage(e, 'ØªØ¹Ø°Ø± ØªØºÙŠÙŠØ± ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±.'));
    } finally {
      setSavingPassword(false);
    }
  };

  const handleSavePreferences = async () => {
    try {
      setSavingPreferences(true);
      setError(null);
      setMessage(null);
      const response = await apiFetch<{
        preferences: {
          language: string;
          timezone: string;
          notificationsEnabled: boolean;
        };
        security: {
          twoFactorEnabled: boolean;
          activeSessions: number;
        };
      }>('/client-settings/me/preferences', {
        method: 'PATCH',
        body: JSON.stringify({
          language,
          timezone,
          notificationsEnabled,
        }),
      });
      setLanguage(response.preferences.language);
      setTimezone(response.preferences.timezone);
      setNotificationsEnabled(response.preferences.notificationsEnabled);
      setTwoFactorEnabled(response.security.twoFactorEnabled);
      setActiveSessions(response.security.activeSessions);
      setMessage('ØªÙ… Ø­ÙØ¸ Ø§Ù„ØªÙØ¶ÙŠÙ„Ø§Øª Ø¨Ù†Ø¬Ø§Ø­.');
    } catch (e) {
      setError(getErrorMessage(e, 'ØªØ¹Ø°Ø± Ø­ÙØ¸ Ø§Ù„ØªÙØ¶ÙŠÙ„Ø§Øª.'));
    } finally {
      setSavingPreferences(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <p className="text-gray-500">Ø¬Ø§Ø±Ù ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª...</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª</h1>
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}
      {message && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          {message}
        </div>
      )}

      {/* Section 1: My Profile */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Ù…Ù„ÙÙŠ Ø§Ù„Ø´Ø®ØµÙŠ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20 border-2 border-[#176C33]/20">
              <AvatarFallback className="bg-gradient-to-br from-[#176C33] to-[#104920] text-white text-2xl font-medium">
                {firstName[0]} {lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-bold text-gray-900">{firstName} {lastName}</p>
              <p className="text-sm text-gray-500">{email}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Account */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Ø§Ù„Ø­Ø³Ø§Ø¨</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø§Ù„Ø§Ø³Ù… Ø§Ù„Ø£ÙˆÙ„
              </label>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø§Ø³Ù… Ø§Ù„Ø¹Ø§Ø¦Ù„Ø©
              </label>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex items-center justify-end pt-4">
              <Button
                onClick={handleSaveAccount}
                disabled={savingAccount}
                className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
              >
                {savingAccount ? 'Ø¬Ø§Ø±Ù Ø§Ù„Ø­ÙØ¸...' : 'Ø­ÙØ¸'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Password */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ø§Ù„Ø­Ø§Ù„ÙŠØ©
              </label>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full"
                placeholder="Ø£Ø¯Ø®Ù„ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ø§Ù„Ø­Ø§Ù„ÙŠØ©"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©
              </label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full"
                placeholder="Ø£Ø¯Ø®Ù„ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ØªØ£ÙƒÙŠØ¯ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full"
                placeholder="Ø£Ø¹Ø¯ Ø¥Ø¯Ø®Ø§Ù„ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©"
              />
            </div>
            <div className="flex items-center justify-end pt-4">
              <Button
                onClick={handleChangePassword}
                disabled={savingPassword}
                className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
              >
                {savingPassword ? 'Ø¬Ø§Ø±Ù Ø§Ù„ØªØºÙŠÙŠØ±...' : 'ØªØºÙŠÙŠØ± ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Preferences */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Ø§Ù„ØªÙØ¶ÙŠÙ„Ø§Øª</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø§Ù„Ù„ØºØ©
              </label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©">Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ø§Ù„Ù…Ù†Ø·Ù‚Ø© Ø§Ù„Ø²Ù…Ù†ÙŠØ©
              </label>
              <Select value={timezone} onValueChange={setTimezone}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Asia/Riyadh">Asia/Riyadh (GMT+3)</SelectItem>
                  <SelectItem value="Asia/Dubai">Asia/Dubai (GMT+4)</SelectItem>
                  <SelectItem value="UTC">UTC (GMT+0)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  ØªÙØ¹ÙŠÙ„ Ø§Ù„Ø¥Ø´Ø¹Ø§Ø±Ø§Øª
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  Ø§Ø³ØªÙ‚Ø¨Ù„ Ø¥Ø´Ø¹Ø§Ø±Ø§Øª Ø­ÙˆÙ„ Ø§Ù„ØªØ­Ø¯ÙŠØ«Ø§Øª ÙˆØ§Ù„Ø£Ù†Ø´Ø·Ø© Ø§Ù„Ù…Ù‡Ù…Ø©
                </p>
              </div>
              <button
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notificationsEnabled ? 'bg-[#176C33]' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notificationsEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-end pt-4">
              <Button
                onClick={handleSavePreferences}
                disabled={savingPreferences}
                className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
              >
                {savingPreferences ? 'Ø¬Ø§Ø±Ù Ø§Ù„Ø­ÙØ¸...' : 'Ø­ÙØ¸ Ø§Ù„ØªÙØ¶ÙŠÙ„Ø§Øª'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Security */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Ø§Ù„Ø£Ù…Ø§Ù†</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">Ø§Ù„Ù…ØµØ§Ø¯Ù‚Ø© Ø§Ù„Ø«Ù†Ø§Ø¦ÙŠØ©</p>
                <p className="text-xs text-gray-500 mt-1">
                  {twoFactorEnabled
                    ? 'Ø§Ù„Ù…ØµØ§Ø¯Ù‚Ø© Ø§Ù„Ø«Ù†Ø§Ø¦ÙŠØ© Ù…ÙØ¹Ù„Ø© Ù„Ù‡Ø°Ø§ Ø§Ù„Ø­Ø³Ø§Ø¨'
                    : 'Ø£Ø¶Ù Ø·Ø¨Ù‚Ø© Ø¥Ø¶Ø§ÙÙŠØ© Ù…Ù† Ø§Ù„Ø£Ù…Ø§Ù† Ù„Ø­Ø³Ø§Ø¨Ùƒ'}
                </p>
              </div>
              <Button variant="outline" size="sm" disabled>
                {twoFactorEnabled ? 'Ù…ÙØ¹Ù„Ø©' : 'ØºÙŠØ± Ù…ÙØ¹Ù„Ø©'}
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">Ø¬Ù„Ø³Ø§Øª Ù†Ø´Ø·Ø©</p>
                <p className="text-xs text-gray-500 mt-1">
                  Ø¹Ø¯Ø¯ Ø§Ù„Ø¬Ù„Ø³Ø§Øª Ø§Ù„Ù†Ø´Ø·Ø© Ø­Ø§Ù„ÙŠØ§Ù‹: {activeSessions}
                </p>
              </div>
              <Button variant="outline" size="sm" disabled>
                {activeSessions} Ø¬Ù„Ø³Ø©
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function CreateOrderRoute({ onCancel }: { onCancel: () => void }) {
  const { type } = useParams();
  const orderType: 'ÙˆØ§Ø±Ø¯' | 'ØµØ§Ø¯Ø±' = type === 'outbound' ? 'ØµØ§Ø¯Ø±' : 'ÙˆØ§Ø±Ø¯';
  return <CreateOrderPage orderType={orderType} onCancel={onCancel} />;
}

function OrderDetailsRoute({ onBack }: { onBack: () => void }) {
  const { type, orderId } = useParams();
  const orderType: 'ÙˆØ§Ø±Ø¯' | 'ØµØ§Ø¯Ø±' = type === 'outbound' ? 'ØµØ§Ø¯Ø±' : 'ÙˆØ§Ø±Ø¯';
  return (
    <OrderDetailsPage
      orderId={decodeURIComponent(orderId ?? '')}
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
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState(notificationsData);
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
      navigate('/dashboard', { replace: true });
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Ø¬Ø§Ø±ÙŠ Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ù‡ÙˆÙŠØ©...</p>
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
        className={`fixed right-0 top-0 h-full bg-white border-l border-gray-200 z-50 transition-all duration-300 ${
          sidebarOpen ? 'w-64 translate-x-0' : 'w-64 translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#176C33] to-[#104920] rounded-xl flex items-center justify-center shadow-lg shadow-[#176C33]/25">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900">Ù…Ø®Ø²Ù†ÙŠ</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100%-4rem)]">
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
      <main
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'mr-64' : 'mr-0'
        }`}
      >
        {/* Navbar */}
        <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-40 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            {/* Notifications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
            <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
                  {notifications.filter(n => n.readStatus === 'ØºÙŠØ± Ù…Ù‚Ø±ÙˆØ¡').length > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
            </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 max-h-96 overflow-y-auto">
                <div className="p-3 border-b border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900">Ø§Ù„Ø¥Ø´Ø¹Ø§Ø±Ø§Øª</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {notifications.filter(n => n.readStatus === 'ØºÙŠØ± Ù…Ù‚Ø±ÙˆØ¡').length} ØºÙŠØ± Ù…Ù‚Ø±ÙˆØ¡
                  </p>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications
                    .filter(n => n.readStatus === 'ØºÙŠØ± Ù…Ù‚Ø±ÙˆØ¡')
                    .slice(0, 5)
                    .map((notification) => (
                      <DropdownMenuItem
                        key={notification.id}
                        className="cursor-pointer p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                        onClick={() => {
                          if (notification.referenceType === 'Ø·Ù„Ø¨ ÙˆØ§Ø±Ø¯') {
                            navigate(`/orders/inbound/${encodeURIComponent(notification.referenceId)}`);
                          } else if (notification.referenceType === 'Ø·Ù„Ø¨ ØµØ§Ø¯Ø±') {
                            navigate(`/orders/outbound/${encodeURIComponent(notification.referenceId)}`);
                          } else if (notification.referenceType === 'ÙØ§ØªÙˆØ±Ø©') {
                            navigate(`/invoices/${encodeURIComponent(notification.referenceId)}`);
                          } else if (notification.referenceType === 'ØªÙ‚Ø§Ø±ÙŠØ±') {
                            navigate('/reports');
                          } else {
                            navigate('/dashboard');
                          }
                        }}
                      >
                        <div className="flex items-start gap-3 w-full">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            notification.importance === 'Ø­Ø±Ø¬' ? 'bg-red-500' :
                            notification.importance === 'Ù…Ø±ØªÙØ¹' ? 'bg-orange-500' :
                            notification.importance === 'Ù…ØªÙˆØ³Ø·' ? 'bg-yellow-500' : 'bg-blue-500'
                          }`}></div>
                          <div className="flex-1 text-right">
                            <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{notification.messagePreview}</p>
                            <p className="text-xs text-gray-400 mt-1">{notification.creationTime}</p>
                          </div>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  {notifications.filter(n => n.readStatus === 'ØºÙŠØ± Ù…Ù‚Ø±ÙˆØ¡').length === 0 && (
                    <div className="p-4 text-center text-sm text-gray-500">
                      Ù„Ø§ ØªÙˆØ¬Ø¯ Ø¥Ø´Ø¹Ø§Ø±Ø§Øª ØºÙŠØ± Ù…Ù‚Ø±ÙˆØ¡Ø©
                    </div>
                  )}
                </div>
                {notifications.filter(n => n.readStatus === 'ØºÙŠØ± Ù…Ù‚Ø±ÙˆØ¡').length > 0 && (
                  <div className="p-2 border-t border-gray-200">
                    <button
                      onClick={() => navigate('/notifications')}
                      className="w-full text-center text-sm text-[#176C33] hover:text-[#104920] font-medium"
                    >
                      Ø¹Ø±Ø¶ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø¥Ø´Ø¹Ø§Ø±Ø§Øª
                    </button>
                  </div>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Client Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 pl-4 border-l border-gray-200 hover:opacity-80 transition-opacity">
              <Avatar className="w-9 h-9 border-2 border-[#176C33]/20">
                <AvatarFallback className="bg-gradient-to-br from-[#176C33] to-[#104920] text-white text-sm font-medium">
                      {user?.role ? user.role.charAt(0) : 'Ø¹'}
                </AvatarFallback>
              </Avatar>
                  <div className="hidden md:block text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {user?.role || 'Ø¹Ù…ÙŠÙ„'}
                    </p>
                    <p className="text-xs text-gray-500">Ø­Ø³Ø§Ø¨ Ø¹Ù…ÙŠÙ„</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem 
                  onClick={() => navigate('/notifications')} 
                  className="cursor-pointer"
                >
                  <Bell className="w-4 h-4 ml-2" />
                  Ø§Ù„Ø¥Ø´Ø¹Ø§Ø±Ø§Øª
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => navigate('/support')} 
                  className="cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4 ml-2" />
                  Ø§Ù„Ø¯Ø¹Ù…
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => navigate('/settings')} 
                  className="cursor-pointer"
                >
                  <Settings className="w-4 h-4 ml-2" />
                  Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª
                </DropdownMenuItem>
                <div className="border-t border-gray-200 my-1"></div>
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer">
                  <Power className="w-4 h-4 ml-2" />
                  ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø®Ø±ÙˆØ¬
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 space-y-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route
              path="/orders"
              element={
                <OrdersPage
                  onCreateOrder={(type: 'ÙˆØ§Ø±Ø¯' | 'ØµØ§Ø¯Ø±') => {
                    const typePath = type === 'ÙˆØ§Ø±Ø¯' ? 'inbound' : 'outbound';
                    navigate(`/orders/create/${typePath}`);
                  }}
                  onCreateOrderDetails={(orderId: string, type: 'ÙˆØ§Ø±Ø¯' | 'ØµØ§Ø¯Ø±') => {
                    const typePath = type === 'ÙˆØ§Ø±Ø¯' ? 'inbound' : 'outbound';
                    navigate(`/orders/${typePath}/${encodeURIComponent(orderId)}`);
                  }}
                />
              }
            />
            <Route
              path="/orders/create/:type"
              element={<CreateOrderRoute onCancel={() => navigate('/orders')} />}
            />
            <Route
              path="/orders/:type/:orderId"
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
                    if (referenceType === 'Ø·Ù„Ø¨ ÙˆØ§Ø±Ø¯') {
                      navigate(`/orders/inbound/${encodeURIComponent(referenceId)}`);
                    } else if (referenceType === 'Ø·Ù„Ø¨ ØµØ§Ø¯Ø±') {
                      navigate(`/orders/outbound/${encodeURIComponent(referenceId)}`);
                    } else if (referenceType === 'ÙØ§ØªÙˆØ±Ø©') {
                      navigate(`/invoices/${encodeURIComponent(referenceId)}`);
                    } else if (referenceType === 'ØªÙ‚Ø§Ø±ÙŠØ±') {
                      navigate('/reports');
                    } else {
                      navigate('/dashboard');
                    }
                  }}
                />
              }
            />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {!sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        />
      )}
    </div>
  );
}

export default App;
