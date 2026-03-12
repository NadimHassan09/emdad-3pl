import { useState } from 'react';
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
  TrendingDown,
  MoreHorizontal,
  Calendar,
  Download,
  Plus,
  Trash2
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

// Sidebar navigation items
const sidebarItems = [
  { icon: LayoutDashboard, label: 'لوحة التحكم', active: true },
  { icon: Package, label: 'المخزون', active: false },
  { icon: ShoppingCart, label: 'الطلبات', active: false },
  { icon: ArrowLeftRight, label: 'الحركات', active: false },
  { icon: FileText, label: 'التقارير', active: false },
  { icon: CreditCard, label: 'الفوترة', active: false },
  { icon: Receipt, label: 'الفواتير', active: false },
  { icon: Users, label: 'المستخدمون', active: false },
  { icon: Bell, label: 'الإشعارات', active: false },
  { icon: HelpCircle, label: 'الدعم', active: false },
  { icon: Settings, label: 'الإعدادات', active: false },
];

// Stats cards data
const statsCards = [
  { title: 'ملخص المخزون', value: '12,340', icon: Package, color: 'bg-blue-500', trend: '+5.2%' },
  { title: 'المنتجات النشطة', value: '128', icon: TrendingUp, color: 'bg-green-500', trend: '+12%' },
  { title: 'طلبات وارد مفتوحة', value: '6', icon: ArrowLeftRight, color: 'bg-amber-500', trend: 'جديد' },
  { title: 'طلبات صادر مفتوحة', value: '4', icon: TrendingDown, color: 'bg-rose-500', trend: '-2' },
  { title: 'حركات حديثة', value: '19', icon: Calendar, color: 'bg-purple-500', trend: 'اليوم' },
];

// Table data
const tableData = [
  { date: '2026-02-02 10:15', type: 'وارد', sku: 'SKU-1001', change: '+50', reference: 'INB-00041', typeColor: 'bg-green-100 text-green-700' },
  { date: '2026-02-02 09:40', type: 'صادر', sku: 'SKU-2003', change: '-8', reference: 'OUT-00018', typeColor: 'bg-rose-100 text-rose-700' },
  { date: '2026-02-02 08:30', type: 'وارد', sku: 'SKU-1005', change: '+120', reference: 'INB-00040', typeColor: 'bg-green-100 text-green-700' },
  { date: '2026-02-01 16:45', type: 'صادر', sku: 'SKU-2001', change: '-25', reference: 'OUT-00017', typeColor: 'bg-rose-100 text-rose-700' },
  { date: '2026-02-01 14:20', type: 'تعديل', sku: 'SKU-1008', change: '+5', reference: 'ADJ-00009', typeColor: 'bg-amber-100 text-amber-700' },
];

// Chart data
const inventoryData = [
  { name: 'يناير', وارد: 400, صادر: 240 },
  { name: 'فبراير', وارد: 300, صادر: 139 },
  { name: 'مارس', وارد: 200, صادر: 980 },
  { name: 'أبريل', وارد: 278, صادر: 390 },
  { name: 'مايو', وارد: 189, صادر: 480 },
  { name: 'يونيو', وارد: 239, صادر: 380 },
  { name: 'يوليو', وارد: 349, صادر: 430 },
];

const categoryData = [
  { name: 'إلكترونيات', value: 35, color: '#3b82f6' },
  { name: 'ملابس', value: 25, color: '#10b981' },
  { name: 'مواد غذائية', value: 20, color: '#f59e0b' },
  { name: 'أثاث', value: 15, color: '#ef4444' },
  { name: 'أخرى', value: 5, color: '#8b5cf6' },
];

const trendData = [
  { name: 'الأسبوع 1', value: 2400 },
  { name: 'الأسبوع 2', value: 1398 },
  { name: 'الأسبوع 3', value: 9800 },
  { name: 'الأسبوع 4', value: 3908 },
];

// Inventory table data
const inventoryTableData = [
  { 
    productName: 'Product A', 
    productCode: 'SKU-1001', 
    uom: 'قطعة', 
    currentQuantity: 540, 
    lastMovementDate: '2026-02-01', 
    notes: 'هذا المنتج يحتاج إلى مراجعة دورية. تم استلام شحنة جديدة في تاريخ 2026-02-01. يرجى التحقق من حالة التخزين والتأكد من صلاحية المنتج قبل التوزيع.' 
  },
  { 
    productName: 'Product B', 
    productCode: 'SKU-2003', 
    uom: 'كرتون', 
    currentQuantity: 88, 
    lastMovementDate: '2026-02-02', 
    notes: 'الكمية الحالية منخفضة وتحتاج إلى إعادة طلب. تم إرسال طلب شراء جديد للمورد. المنتج في حالة جيدة ولا توجد مشاكل في التخزين.' 
  },
];

// Incoming orders table data
const incomingOrdersTableData = [
  {
    orderNumber: 'INB-00041',
    creationDate: '2026-02-01',
    status: 'قيد التنفيذ',
    expectedArrivalDate: '2026-02-03',
    itemsCount: 3,
    notes: 'الطلب يحتوي على 3 بنود مختلفة. تم تأكيد الطلب مع المورد وتم تحديد تاريخ الوصول المتوقع. يرجى التحضير لاستلام الشحنة في التاريخ المحدد.'
  },
  {
    orderNumber: 'INB-00038',
    creationDate: '2026-01-28',
    status: 'مكتمل',
    expectedArrivalDate: '2026-01-30',
    itemsCount: 5,
    notes: 'تم استلام الطلب بنجاح في التاريخ المحدد. جميع البنود الخمسة تم التحقق منها وهي في حالة جيدة. تم إدخالها إلى المخزون.'
  },
];

// Outgoing orders table data
const outgoingOrdersTableData = [
  {
    orderNumber: 'OUT-00018',
    creationDate: '2026-02-02',
    status: 'قيد التنفيذ',
    expectedShipDate: '2026-02-04',
    itemsCount: 4,
    notes: 'طلب صادر يحتوي على 4 بنود. تم تأكيد الطلب مع العميل وتم تحديد تاريخ الشحن المتوقع. يرجى التحضير لتجهيز الشحنة في التاريخ المحدد.'
  },
  {
    orderNumber: 'OUT-00017',
    creationDate: '2026-01-29',
    status: 'مكتمل',
    expectedShipDate: '2026-01-31',
    itemsCount: 2,
    notes: 'تم شحن الطلب بنجاح في التاريخ المحدد. جميع البنود تم تجهيزها وتم إرسالها للعميل. تم تحديث المخزون.'
  },
];

// Sample data for order creation
const clients = [
  { id: '1', name: 'شركة التقنية المتقدمة' },
  { id: '2', name: 'مؤسسة التجارة الإلكترونية' },
  { id: '3', name: 'شركة التوزيع الحديثة' },
  { id: '4', name: 'مجموعة الخليج التجارية' },
];

const warehouses = [
  { id: '1', name: 'المستودع الرئيسي - الرياض' },
  { id: '2', name: 'مستودع جدة' },
  { id: '3', name: 'مستودع الدمام' },
  { id: '4', name: 'مستودع الخبر' },
];

const products = [
  { id: '1', name: 'Product A', code: 'SKU-1001' },
  { id: '2', name: 'Product B', code: 'SKU-2003' },
  { id: '3', name: 'Product C', code: 'SKU-3005' },
  { id: '4', name: 'Product D', code: 'SKU-4007' },
  { id: '5', name: 'Product E', code: 'SKU-5009' },
];

// Order details data
const getOrderDetails = (orderNumber: string, orderType: 'وارد' | 'صادر') => {
  if (orderType === 'وارد') {
    if (orderNumber === 'INB-00041') {
      return {
        orderNumber: 'INB-00041',
        status: 'قيد التنفيذ',
        expectedDate: '2026-02-03',
        creationTime: '2026-02-01 10:15',
        completionDate: '-',
        items: [
          { productName: 'Product A', productCode: 'SKU-1001', requiredQty: 50, shippedQty: 30, remaining: 20, notes: 'يحتاج إلى مراجعة قبل الشحن' },
          { productName: 'Product B', productCode: 'SKU-2003', requiredQty: 100, shippedQty: 100, remaining: 0, notes: '' },
          { productName: 'Product C', productCode: 'SKU-3005', requiredQty: 25, shippedQty: 0, remaining: 25, notes: '' },
        ],
        statusHistory: [
          { dateTime: '2026-02-01 10:15', status: 'جديد' },
          { dateTime: '2026-02-01 14:30', status: 'قيد التنفيذ' },
        ],
      };
    }
    return {
      orderNumber: 'INB-00038',
      status: 'مكتمل',
      expectedDate: '2026-01-30',
      creationTime: '2026-01-28 09:00',
      completionDate: '2026-01-30 16:45',
      items: [
        { productName: 'Product A', productCode: 'SKU-1001', requiredQty: 30, shippedQty: 30, remaining: 0, notes: '' },
        { productName: 'Product D', productCode: 'SKU-4007', requiredQty: 20, shippedQty: 20, remaining: 0, notes: 'تم الشحن بنجاح' },
        { productName: 'Product E', productCode: 'SKU-5009', requiredQty: 15, shippedQty: 15, remaining: 0, notes: '' },
      ],
      statusHistory: [
        { dateTime: '2026-01-28 09:00', status: 'جديد' },
        { dateTime: '2026-01-28 11:20', status: 'قيد التنفيذ' },
        { dateTime: '2026-01-30 16:45', status: 'مكتمل' },
      ],
    };
  } else {
    if (orderNumber === 'OUT-00018') {
      return {
        orderNumber: 'OUT-00018',
        status: 'قيد التنفيذ',
        expectedDate: '2026-02-04',
        creationTime: '2026-02-02 08:30',
        completionDate: '-',
        items: [
          { productName: 'Product A', productCode: 'SKU-1001', requiredQty: 40, shippedQty: 25, remaining: 15, notes: 'في انتظار التأكيد' },
          { productName: 'Product B', productCode: 'SKU-2003', requiredQty: 60, shippedQty: 60, remaining: 0, notes: '' },
          { productName: 'Product C', productCode: 'SKU-3005', requiredQty: 20, shippedQty: 0, remaining: 20, notes: '' },
          { productName: 'Product D', productCode: 'SKU-4007', requiredQty: 15, shippedQty: 0, remaining: 15, notes: '' },
        ],
        statusHistory: [
          { dateTime: '2026-02-02 08:30', status: 'جديد' },
          { dateTime: '2026-02-02 12:15', status: 'قيد التنفيذ' },
        ],
      };
    }
    return {
      orderNumber: 'OUT-00017',
      status: 'مكتمل',
      expectedDate: '2026-01-31',
      creationTime: '2026-01-29 10:00',
      completionDate: '2026-01-31 14:20',
      items: [
        { productName: 'Product A', productCode: 'SKU-1001', requiredQty: 20, shippedQty: 20, remaining: 0, notes: '' },
        { productName: 'Product E', productCode: 'SKU-5009', requiredQty: 10, shippedQty: 10, remaining: 0, notes: 'تم التسليم' },
      ],
      statusHistory: [
        { dateTime: '2026-01-29 10:00', status: 'جديد' },
        { dateTime: '2026-01-29 13:45', status: 'قيد التنفيذ' },
        { dateTime: '2026-01-31 14:20', status: 'مكتمل' },
      ],
    };
  }
};

// Movements/Transactions data
const movementsData = [
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

// Billing/Subscription data
const billingData = {
  currentPlan: {
    planName: 'خطة المؤسسات',
    planType: 'خطة المؤسسات',
    renewalDate: '2026-03-01',
    status: 'نشط',
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
    status: 'مدفوع',
    total: 3670,
    currency: 'دولار',
    issueDate: '2026-02-01',
    paymentDate: '2026-02-05',
    notes: '',
  },
  {
    id: 'INV-002',
    periodStart: '2025-12-01',
    periodEnd: '2025-12-31',
    status: 'صادرة',
    total: 3420,
    currency: 'دولار',
    issueDate: '2026-01-01',
    paymentDate: '-',
    notes: '',
  },
  {
    id: 'INV-003',
    periodStart: '2025-11-01',
    periodEnd: '2025-11-30',
    status: 'مدفوع',
    total: 3150,
    currency: 'دولار',
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
      status: 'مدفوع',
      cycle: 'شهري',
      currency: 'دولار',
      totalAmount: 3670,
      items: [
        { type: 'المساحة المستخدمة', quantity: 750, unitPrice: 2, amount: 1500 },
        { type: 'حركات الوارد', quantity: 245, unitPrice: 5, amount: 1225 },
        { type: 'طلبات الصادر', quantity: 189, unitPrice: 5, amount: 945 },
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
    status: 'صادرة',
    cycle: 'شهري',
    currency: 'دولار',
    totalAmount: 3420,
    items: [
      { type: 'المساحة المستخدمة', quantity: 680, unitPrice: 2, amount: 1360 },
      { type: 'حركات الوارد', quantity: 230, unitPrice: 5, amount: 1150 },
      { type: 'طلبات الصادر', quantity: 182, unitPrice: 5, amount: 910 },
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
    firstName: 'أحمد',
    lastName: 'محمد',
    email: 'ahmed.mohamed@example.com',
    role: 'admin',
    status: 'مفعل',
    creationTime: '2025-12-15 10:30',
  },
  {
    id: '2',
    firstName: 'فاطمة',
    lastName: 'علي',
    email: 'fatima.ali@example.com',
    role: 'مدير المخزون',
    status: 'مفعل',
    creationTime: '2025-12-20 14:15',
  },
  {
    id: '3',
    firstName: 'خالد',
    lastName: 'سعيد',
    email: 'khalid.saeed@example.com',
    role: 'موظف',
    status: 'غير مفعل',
    creationTime: '2026-01-05 09:00',
  },
  {
    id: '4',
    firstName: 'سارة',
    lastName: 'حسن',
    email: 'sara.hassan@example.com',
    role: 'محاسب',
    status: 'مفعل',
    creationTime: '2026-01-10 11:45',
  },
  {
    id: '5',
    firstName: 'محمد',
    lastName: 'علي',
    email: 'mohamed.ali@example.com',
    role: 'مدير المبيعات',
    status: 'مفعل',
    creationTime: '2026-01-15 16:20',
  },
];

// Notifications data
const notificationsData = [
  {
    id: 'NOT-001',
    creationTime: '2026-02-02 10:30',
    importance: 'مرتفع',
    title: 'طلب وارد جديد يحتاج إلى الموافقة',
    messagePreview: 'تم إنشاء طلب وارد جديد INB-00041 يحتاج إلى مراجعة وموافقة...',
    fullMessage: 'تم إنشاء طلب وارد جديد برقم INB-00041 يحتاج إلى مراجعة وموافقة. يرجى مراجعة تفاصيل الطلب والموافقة عليه في أقرب وقت ممكن.',
    referenceType: 'طلب وارد',
    referenceId: 'INB-00041',
    readStatus: 'غير مقروء',
  },
  {
    id: 'NOT-002',
    creationTime: '2026-02-02 09:15',
    importance: 'متوسط',
    title: 'فاتورة جديدة صادرة',
    messagePreview: 'تم إصدار فاتورة جديدة INV-001 للمستودع الرئيسي...',
    fullMessage: 'تم إصدار فاتورة جديدة برقم INV-001 للمستودع الرئيسي - الرياض. يرجى مراجعة الفاتورة والتحقق من المبالغ المطلوبة.',
    referenceType: 'فاتورة',
    referenceId: 'INV-001',
    readStatus: 'مقروء',
  },
  {
    id: 'NOT-003',
    creationTime: '2026-02-01 16:45',
    importance: 'حرج',
    title: 'تنبيه: نقص في المخزون',
    messagePreview: 'تنبيه: المنتج SKU-1001 وصل إلى الحد الأدنى من المخزون...',
    fullMessage: 'تنبيه: المنتج SKU-1001 (Product A) وصل إلى الحد الأدنى من المخزون. الكمية الحالية: 50 قطعة. يرجى إعادة الطلب في أقرب وقت ممكن.',
    referenceType: 'تقارير',
    referenceId: 'RPT-ALERT-001',
    readStatus: 'غير مقروء',
  },
  {
    id: 'NOT-004',
    creationTime: '2026-02-01 14:20',
    importance: 'منخفض',
    title: 'تقرير جاهز للتحميل',
    messagePreview: 'تقرير المخزون الحالي جاهز للتحميل...',
    fullMessage: 'تقرير المخزون الحالي - فبراير 2026 جاهز للتحميل. يمكنك تحميل التقرير الآن من صفحة التقارير.',
    referenceType: 'تقارير',
    referenceId: 'RPT-001',
    readStatus: 'مقروء',
  },
  {
    id: 'NOT-005',
    creationTime: '2026-02-01 11:30',
    importance: 'متوسط',
    title: 'طلب صادر تم إكماله',
    messagePreview: 'تم إكمال طلب صادر OUT-00018 بنجاح...',
    fullMessage: 'تم إكمال طلب صادر برقم OUT-00018 بنجاح. تم شحن جميع البنود إلى العميل. يرجى تحديث حالة الطلب.',
    referenceType: 'طلب صادر',
    referenceId: 'OUT-00018',
    readStatus: 'مقروء',
  },
];

// Support Tickets data
const supportTicketsData = [
  {
    id: 'TKT-001',
    title: 'مشكلة في تسجيل الدخول',
    description: 'لا أستطيع تسجيل الدخول إلى النظام. يظهر خطأ عند محاولة الدخول.',
    status: 'مفتوح',
    priority: 'مرتفع',
    creationDate: '2026-02-02 14:30',
    lastUpdate: '2026-02-02 15:00',
  },
  {
    id: 'TKT-002',
    title: 'استفسار حول تقرير المخزون',
    description: 'أحتاج إلى مساعدة في فهم كيفية قراءة تقرير المخزون الحالي.',
    status: 'قيد المعالجة',
    priority: 'متوسط',
    creationDate: '2026-02-01 10:15',
    lastUpdate: '2026-02-01 11:30',
  },
  {
    id: 'TKT-003',
    title: 'طلب ميزة جديدة',
    description: 'أرغب في إضافة ميزة تصدير البيانات بتنسيق Excel.',
    status: 'مغلق',
    priority: 'منخفض',
    creationDate: '2026-01-30 09:00',
    lastUpdate: '2026-01-31 16:45',
  },
];

// Dashboard Page Component
function DashboardPage() {
  return (
    <>
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">لوحة التحكم</h1>
          <p className="text-gray-500 mt-1">نظرة عامة على أداء المخزون والحركات</p>
        </div>
        <Button className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white gap-2">
          <Download className="w-4 h-4" />
          تصدير التقرير
        </Button>
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
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 mt-2">
                    {card.trend}
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
              <CardTitle className="text-lg font-bold">حركات المخزون</CardTitle>
              <Button variant="ghost" size="sm" className="text-gray-500">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={inventoryData}>
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
                  <Bar dataKey="وارد" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="صادر" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold">توزيع الفئات</CardTitle>
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
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
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
            <CardTitle className="text-lg font-bold">إحصائيات الأداء</CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                +12.5% هذا الشهر
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
              <AreaChart data={trendData}>
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

      {/* Recent Movements Table */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-bold">حركات مخزون حديثة</CardTitle>
              <p className="text-sm text-gray-500 mt-1">آخر 5 حركات في النظام</p>
            </div>
            <Button variant="outline" className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50">
              عرض كل الحركات
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    التاريخ/الوقت
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    نوع الحركة
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    SKU
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    تغير الكمية
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    المرجع
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                      {row.date}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${row.typeColor}`}
                      >
                        {row.type}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 font-mono font-medium">
                      {row.sku}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`text-sm font-medium ${
                          row.change.startsWith('+')
                            ? 'text-green-600'
                            : 'text-rose-600'
                        }`}
                      >
                        {row.change}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                      {row.reference}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

  return (
    <>
      {/* Section 1: Title and Export Buttons */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">المخزون الحالي</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2">
            <Download className="w-4 h-4" />
            تصدير CSV
          </Button>
          <Button variant="outline" className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2">
            <Download className="w-4 h-4" />
            تصدير PDF
          </Button>
        </div>
      </div>

      {/* Section 2: Date Filter */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
              آخر حركة (من/إلى)
            </label>
            <div className="flex items-center gap-3 flex-1">
              <Input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="max-w-xs"
              />
              <span className="text-gray-500">إلى</span>
              <Input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="max-w-xs"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Inventory Table */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    اسم المنتج
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    كود المنتج
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    وحدة القياس
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    الكمية الحالية
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    تاريخ آخر حركة
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    ملاحظات
                  </th>
                </tr>
              </thead>
              <tbody>
                {inventoryTableData.map((row, index) => (
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
                            {row.notes ? 'عرض الملاحظات' : '-'}
                          </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>ملاحظات - {row.productName}</DialogTitle>
                            <DialogDescription className="text-right">
                              {row.productCode}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4">
                            <p className="text-sm text-gray-700 text-right leading-relaxed">
                              {row.notes || 'لا توجد ملاحظات'}
                            </p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

// Orders Page Component
function OrdersPage({ 
  onCreateOrder, 
  onCreateOrderDetails 
}: { 
  onCreateOrder: (type: 'وارد' | 'صادر') => void;
  onCreateOrderDetails: (orderNumber: string, orderType: 'وارد' | 'صادر') => void;
}) {
  const [status, setStatus] = useState('جديد');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [orderType, setOrderType] = useState('وارد');

  // Stats data based on order type
  const incomingStats = {
    open: 6,
    inProgress: 2,
    completed: 14,
  };

  const outgoingStats = {
    open: 4,
    inProgress: 3,
    completed: 12,
  };

  const stats = orderType === 'وارد' ? incomingStats : outgoingStats;
  const tableData = orderType === 'وارد' ? incomingOrdersTableData : outgoingOrdersTableData;

  return (
    <>
      {/* Section 1: Title and Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">
            {orderType === 'وارد' ? 'طلبات الوارد' : 'طلبات الصادر'}
          </h1>
          <div className="flex items-center gap-2">
            <Button
              variant={orderType === 'وارد' ? 'default' : 'outline'}
              onClick={() => setOrderType('وارد')}
              className={orderType === 'وارد' 
                ? 'bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white' 
                : 'text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50'
              }
            >
              وارد
            </Button>
            <Button
              variant={orderType === 'صادر' ? 'default' : 'outline'}
              onClick={() => setOrderType('صادر')}
              className={orderType === 'صادر' 
                ? 'bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white' 
                : 'text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50'
              }
            >
              صادر
            </Button>
          </div>
        </div>
        <Button
          onClick={() => onCreateOrder(orderType as 'وارد' | 'صادر')}
          className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white gap-2"
        >
          <Plus className="w-4 h-4" />
          {orderType === 'وارد' ? 'إرسال طلب وارد' : 'إرسال طلب صادر'}
        </Button>
      </div>

      {/* Section 2: Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="stat-card border-0 shadow-sm bg-white">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {orderType === 'وارد' ? 'طلبات وارد مفتوحة' : 'طلبات صادر مفتوحة'}
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
                  {orderType === 'وارد' ? 'وارد قيد التنفيذ' : 'صادر قيد التنفيذ'}
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
                  {orderType === 'وارد' ? 'وارد مكتمل آخر 30 يوماً' : 'صادر مكتمل آخر 30 يوماً'}
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
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                الحالة
              </label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="جديد">جديد</SelectItem>
                  <SelectItem value="قيد التنفيذ">قيد التنفيذ</SelectItem>
                  <SelectItem value="مكتمل">مكتمل</SelectItem>
                  <SelectItem value="ملغي">ملغي</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                {orderType === 'وارد' ? 'نطاق تاريخ الوصول المتوقع' : 'نطاق تاريخ الشحن المتوقع'}
              </label>
              <div className="flex items-center gap-3 flex-1">
                <Input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="max-w-xs"
                />
                <span className="text-gray-500">إلى</span>
                <Input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="max-w-xs"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Orders Table */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    {orderType === 'وارد' ? 'طلب وارد #' : 'طلب صادر #'}
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    تاريخ الإنشاء
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    الحالة
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    {orderType === 'وارد' ? 'تاريخ الوصول المتوقع' : 'تاريخ الشحن المتوقع'}
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    عدد البنود
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    ملاحظات
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
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
                          row.status === 'مكتمل'
                            ? 'bg-green-100 text-green-700'
                            : row.status === 'قيد التنفيذ'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                      {'expectedArrivalDate' in row 
                        ? row.expectedArrivalDate 
                        : 'expectedShipDate' in row 
                        ? row.expectedShipDate 
                        : '-'}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                      {row.itemsCount}
                    </td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => onCreateOrderDetails(row.orderNumber, orderType as 'وارد' | 'صادر')}
                        className="text-sm text-[#176C33] hover:text-[#104920] hover:underline cursor-pointer transition-colors"
                      >
                        عرض
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

// Create Order Page Component
function CreateOrderPage({ orderType, onCancel }: { orderType: 'وارد' | 'صادر'; onCancel: () => void }) {
  const [clientName, setClientName] = useState('');
  const [warehouse, setWarehouse] = useState('');
  const [expectedDate, setExpectedDate] = useState('');
  const [notes, setNotes] = useState('');
  const [orderItems, setOrderItems] = useState<Array<{ id: string; productId: string; quantity: number }>>([]);

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

  const handleSubmit = () => {
    // Handle form submission
    console.log('Submitting order:', { clientName, warehouse, expectedDate, notes, orderItems });
    // Navigate back to orders page
    onCancel();
  };

  return (
    <>
      {/* Section 1: Title and Form */}
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {orderType === 'وارد' ? 'إرسال طلب وارد' : 'إرسال طلب صادر'}
        </h1>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Client Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  العميل
                </label>
                <Input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="أدخل اسم العميل"
                  className="w-full"
                />
              </div>

              {/* Warehouse */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  المستودع
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

              {/* Expected Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  تاريخ الشحن المتوقع
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
                  الملاحظات <span className="text-gray-400 text-xs">(اختياري)</span>
                </label>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="أدخل أي ملاحظات إضافية"
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
          <h2 className="text-xl font-bold text-gray-900">بنود الطلب</h2>
          <Button
            onClick={addOrderItem}
            className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white gap-2"
          >
            <Plus className="w-4 h-4" />
            إضافة بند
          </Button>
        </div>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="data-table w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      المنتج
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      الكمية المطلوبة
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      حذف
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="py-8 px-4 text-center text-gray-500">
                        لا توجد بنود. اضغط على "إضافة بند" لإضافة منتج.
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
                              <SelectValue placeholder="اختر المنتج" />
                            </SelectTrigger>
                            <SelectContent>
                              {products.map((product) => (
                                <SelectItem key={product.id} value={product.id}>
                                  {product.name} ({product.code})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </td>
                        <td className="py-4 px-4">
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity || ''}
                            onChange={(e) => updateOrderItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                            placeholder="الكمية"
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
                            حذف
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
          إلغاء
        </Button>
        <Button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
        >
          إرسال الطلب
        </Button>
      </div>
    </>
  );
}

// Order Details Page Component
function OrderDetailsPage({ 
  orderNumber, 
  orderType, 
  onBack 
}: { 
  orderNumber: string; 
  orderType: 'وارد' | 'صادر'; 
  onBack: () => void;
}) {
  const orderDetails = getOrderDetails(orderNumber, orderType);
  const [itemNotes, setItemNotes] = useState<{ [key: number]: string }>({});
  const [editingItemIndex, setEditingItemIndex] = useState<number | null>(null);
  const [tempNotes, setTempNotes] = useState('');

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

  return (
    <>
      {/* Section 1: Title and Action Buttons */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          {orderType === 'وارد' ? 'تفاصيل طلب وارد' : 'تفاصيل طلب صادر'} - {orderNumber}
        </h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2">
            <Download className="w-4 h-4" />
            تصدير CSV
          </Button>
          <Button variant="outline" className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2">
            <Download className="w-4 h-4" />
            تصدير PDF
          </Button>
          <Button variant="outline" className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2">
            <ArrowLeftRight className="w-4 h-4" />
            عرض الحركات في السيل
          </Button>
        </div>
      </div>

      {/* Section 2: Order Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-5">
            <p className="text-sm text-gray-500 mb-1">رقم الطلب</p>
            <p className="text-lg font-bold text-gray-900 font-mono">{orderDetails.orderNumber}</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-5">
            <p className="text-sm text-gray-500 mb-1">الحالة</p>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                orderDetails.status === 'مكتمل'
                  ? 'bg-green-100 text-green-700'
                  : orderDetails.status === 'قيد التنفيذ'
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
            <p className="text-sm text-gray-500 mb-1">تاريخ الشحنة المتوقعة</p>
            <p className="text-lg font-bold text-gray-900 font-mono">{orderDetails.expectedDate}</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-5">
            <p className="text-sm text-gray-500 mb-1">وقت الإنشاء</p>
            <p className="text-lg font-bold text-gray-900 font-mono">{orderDetails.creationTime}</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-5">
            <p className="text-sm text-gray-500 mb-1">تاريخ الإكتمال</p>
            <p className="text-lg font-bold text-gray-900 font-mono">{orderDetails.completionDate}</p>
          </CardContent>
        </Card>
      </div>

      {/* Section 3: Order Items Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">البنود</h2>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="data-table w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      اسم المنتج
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      كود المنتج
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      الكمية المطلوبة
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      الكمية المشحونة
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      المتبقي
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      ملاحظات
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetails.items.map((item, index) => (
                    <tr
                      key={index}
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
                        {item.shippedQty}
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
                            {itemNotes[index] || item.notes ? 'تعديل' : 'إضافة'}
                          </button>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>ملاحظات - {item.productName}</DialogTitle>
                              <DialogDescription className="text-right">
                                {item.productCode}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                              <Textarea
                                value={tempNotes}
                                onChange={(e) => setTempNotes(e.target.value)}
                                placeholder="أدخل الملاحظات"
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
                                إلغاء
                              </Button>
                              <Button
                                onClick={() => handleSaveNotes(index)}
                                className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
                              >
                                حفظ
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 4: Status History */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">سجل حركة الحالات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orderDetails.statusHistory.map((history, index) => (
            <Card key={index} className="border-0 shadow-sm bg-white">
              <CardContent className="p-5">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">التاريخ والوقت</p>
                  <p className="text-sm font-medium text-gray-900 font-mono">{history.dateTime}</p>
                  <p className="text-sm text-gray-500 mt-3">الحالة</p>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      history.status === 'مكتمل'
                        ? 'bg-green-100 text-green-700'
                        : history.status === 'قيد التنفيذ'
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
          العودة إلى القائمة
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
  const [selectedMovement, setSelectedMovement] = useState<typeof movementsData[0] | null>(null);

  const getMovementTypeColor = (type: string) => {
    switch (type) {
      case 'وارد':
        return 'bg-green-100 text-green-700';
      case 'صادر':
        return 'bg-rose-100 text-rose-700';
      case 'return':
        return 'bg-amber-100 text-amber-700';
      case 'فاتورة':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <>
      {/* Section 1: Title, Buttons, and Filters */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">سجل الحركات المخزون</h1>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2">
              <Download className="w-4 h-4" />
              تصدير CSV
            </Button>
            <Button variant="outline" className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2">
              <Download className="w-4 h-4" />
              تصدير PDF
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
                  نطاق التاريخ
                </label>
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

              {/* Movement Type */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  نوع الحركة
                </label>
                <Select value={movementType} onValueChange={setMovementType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="اختر نوع الحركة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="وارد">وارد</SelectItem>
                    <SelectItem value="صادر">صادر</SelectItem>
                    <SelectItem value="return">return</SelectItem>
                    <SelectItem value="فاتورة">فاتورة</SelectItem>
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
                  placeholder="أدخل SKU"
                  className="w-full"
                />
              </div>

              {/* Warehouse */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  المستودع
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

              {/* Reference Type */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  نوع المرجع
                </label>
                <Select value={referenceType} onValueChange={setReferenceType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="اختر نوع المرجع" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="طلب وارد">طلب وارد</SelectItem>
                    <SelectItem value="طلب صادر">طلب صادر</SelectItem>
                    <SelectItem value="return">return</SelectItem>
                    <SelectItem value="فاتورة">فاتورة</SelectItem>
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
                    التاريخ والوقت
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    نوع الحركة
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    اسم المنتج
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    SKU
                  </th>
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
                {movementsData.map((movement, index) => (
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
                ))}
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
                    <p className="text-sm font-medium text-gray-900">{selectedMovement.productName}</p>
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
        <h2 className="text-xl font-bold text-gray-900">تقارير مولدة مؤخراً</h2>
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

// Billing/Subscription Page Component
function BillingPage() {
  return (
    <>
      {/* Section 1: Current Plan */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">الفوترة والاشتراك</h1>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">الخطة الحالية</h2>
          <Button className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white">
            تغيير الخطة
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-5">
              <p className="text-sm text-gray-500 mb-1">الخطة</p>
              <p className="text-lg font-bold text-gray-900">{billingData.currentPlan.planName}</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-5">
              <p className="text-sm text-gray-500 mb-1">تاريخ التجديد</p>
              <p className="text-lg font-bold text-gray-900 font-mono">{billingData.currentPlan.renewalDate}</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-5">
              <p className="text-sm text-gray-500 mb-1">الحالة</p>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                {billingData.currentPlan.status}
              </span>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section 2: Current Usage Cycle */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">دورة الاستخدام الحالية</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Space Usage Card */}
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-base font-semibold">المساحة المستخدمة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">المساحة المستخدمة</span>
                  <span className="font-medium text-gray-900">{billingData.usage.space.usedGB} GB</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">المساحة الكلية</span>
                  <span className="font-medium text-gray-900">{billingData.usage.space.totalGB} GB</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-[#176C33] to-[#104920] h-3 rounded-full transition-all"
                    style={{ width: `${billingData.usage.space.used}%` }}
                  />
                </div>
                <div className="text-center text-xs text-gray-500">
                  {billingData.usage.space.used}% مستخدم
                </div>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-1">التكلفة التقديرية للمساحة المستخدمة</p>
                <p className="text-xl font-bold text-gray-900">{billingData.usage.space.estimatedCost.toLocaleString()} دولار</p>
              </div>
            </CardContent>
          </Card>

          {/* Incoming Movements Card */}
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-base font-semibold">حركات الوارد</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">عدد حركات الوارد</p>
                <p className="text-3xl font-bold text-gray-900">{billingData.usage.incomingMovements.count.toLocaleString()}</p>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-1">التكلفة التقديرية لحركات الوارد</p>
                <p className="text-xl font-bold text-gray-900">{billingData.usage.incomingMovements.estimatedCost.toLocaleString()} دولار</p>
              </div>
            </CardContent>
          </Card>

          {/* Outgoing Orders Card */}
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-base font-semibold">طلبات الصادر</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">عدد طلبات الصادر</p>
                <p className="text-3xl font-bold text-gray-900">{billingData.usage.outgoingOrders.count.toLocaleString()}</p>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-1">التكلفة التقديرية لطلبات الصادر</p>
                <p className="text-xl font-bold text-gray-900">{billingData.usage.outgoingOrders.estimatedCost.toLocaleString()} دولار</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">الإجمالي التقديري</h3>
              <p className="text-sm text-gray-600">التكلفة الخاصة بهذا الشهر حتى الآن</p>
            </div>
            <div className="text-left">
              <p className="text-4xl font-bold text-[#176C33]">
                {billingData.totalEstimatedCost.toLocaleString()} دولار
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'مدفوع':
        return 'bg-green-100 text-green-700';
      case 'صادرة':
        return 'bg-blue-100 text-blue-700';
      case 'مستوطة':
        return 'bg-amber-100 text-amber-700';
      case 'ملغى':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <>
      {/* Section 1: Title, Button, and Filters */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">الفواتير</h1>
          <Button variant="outline" className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2">
            <Download className="w-4 h-4" />
            تصدير CSV
          </Button>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Status */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  الحالة
                </label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="اختر الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="مستوطة">مستوطة</SelectItem>
                    <SelectItem value="صادرة">صادرة</SelectItem>
                    <SelectItem value="مدفوع">مدفوع</SelectItem>
                    <SelectItem value="ملغى">ملغى</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Range */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  نطاق الفترة
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    type="date"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    className="flex-1"
                    placeholder="من"
                  />
                  <span className="text-gray-500 text-sm whitespace-nowrap">إلى</span>
                  <Input
                    type="date"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                    className="flex-1"
                    placeholder="إلى"
                  />
                </div>
              </div>

              {/* Billing Cycle */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  دورة الفوترة
                </label>
                <Select value={billingCycle} onValueChange={setBillingCycle}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="اختر الدورة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="أسبوعي">أسبوعي</SelectItem>
                    <SelectItem value="شهري">شهري</SelectItem>
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
                    فاتورة
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    بداية الفترة
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    نهاية الفترة
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    الحالة
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    الإجمالي
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    العملة
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    تاريخ الإصدار
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    تاريخ السداد
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    ملاحظات
                  </th>
                </tr>
              </thead>
              <tbody>
                {invoicesData.map((invoice, index) => (
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
                          تنزيل PDF
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onViewInvoice(invoice.id)}
                          className="text-[#176C33] hover:text-[#104920] hover:bg-[#176C33]/10"
                        >
                          عرض
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </>
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
          <h1 className="text-2xl font-bold text-gray-900">فاتورة</h1>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2">
              <Download className="w-4 h-4" />
              تنزيل PDF
            </Button>
            <Button variant="outline" className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2">
              <Download className="w-4 h-4" />
              تحديث PDF
            </Button>
          </div>
        </div>

        {/* Invoice Info Card */}
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">رقم الفاتورة</p>
                <p className="text-lg font-bold text-gray-900 font-mono">{invoiceDetails.invoiceNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">بداية الفترة</p>
                <p className="text-lg font-bold text-gray-900 font-mono">{invoiceDetails.periodStart}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">نهاية الفترة</p>
                <p className="text-lg font-bold text-gray-900 font-mono">{invoiceDetails.periodEnd}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">الحالة</p>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    invoiceDetails.status === 'مدفوع'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {invoiceDetails.status}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">الدورة</p>
                <p className="text-lg font-bold text-gray-900">{invoiceDetails.cycle}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">العملة</p>
                <p className="text-lg font-bold text-gray-900">{invoiceDetails.currency}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500 mb-1">إجمالي المبلغ</p>
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
          <h2 className="text-lg font-semibold text-gray-900">بنود الطلب</h2>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="data-table w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                        نوع البند
                      </th>
                      <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                        الكمية
                      </th>
                      <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                        سعر الوحدة
                      </th>
                      <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                        المبلغ
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
          <h2 className="text-lg font-semibold text-gray-900">الإجماليات</h2>
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">رسوم التخزين الثابتة</p>
                <p className="text-sm font-medium text-gray-900">
                  {invoiceDetails.fixedFee.toLocaleString()} {invoiceDetails.currency}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">رسوم الزيادة</p>
                <p className="text-sm font-medium text-gray-900">
                  {invoiceDetails.additionalFee.toLocaleString()} {invoiceDetails.currency}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">إجمالي رسوم الحركات</p>
                <p className="text-sm font-medium text-gray-900">
                  {invoiceDetails.totalMovementFees.toLocaleString()} {invoiceDetails.currency}
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-gray-900">إجمالي المبلغ</p>
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
          العودة إلى القائمة
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

  return (
    <>
      {/* Section 1: Title, Button, and Filters */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">مستخدمو الفريق</h1>
          <Button
            onClick={() => setInviteDialogOpen(true)}
            className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white gap-2"
          >
            <Plus className="w-4 h-4" />
            دعوة مستخدم
          </Button>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Status */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  الحالة
                </label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="اختر الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="مفعل">مفعل</SelectItem>
                    <SelectItem value="غير مفعل">غير مفعل</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Role */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  الدور
                </label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="اختر الدور" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">admin</SelectItem>
                    <SelectItem value="مدير المخزون">مدير المخزون</SelectItem>
                    <SelectItem value="مدير المبيعات">مدير المبيعات</SelectItem>
                    <SelectItem value="محاسب">محاسب</SelectItem>
                    <SelectItem value="موظف">موظف</SelectItem>
                    <SelectItem value="مشرف">مشرف</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  البحث
                </label>
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث عن مستخدم..."
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
                    الاسم
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    البريد الإلكتروني
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    الدور
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    الحالة
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    وقت الإنشاء
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    الملاحظات
                  </th>
                </tr>
              </thead>
              <tbody>
                {usersData.map((user, index) => (
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
                          user.status === 'مفعل'
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
                          تعديل
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openDisableDialog(user)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          تعطيل
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Invite User Dialog */}
      <Dialog open={inviteDialogOpen} onOpenChange={setInviteDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>دعوة مستخدم</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الاسم الأول
              </label>
              <Input
                type="text"
                value={inviteFirstName}
                onChange={(e) => setInviteFirstName(e.target.value)}
                placeholder="أدخل الاسم الأول"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                اسم العائلة
              </label>
              <Input
                type="text"
                value={inviteLastName}
                onChange={(e) => setInviteLastName(e.target.value)}
                placeholder="أدخل اسم العائلة"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني
              </label>
              <Input
                type="email"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                placeholder="أدخل البريد الإلكتروني"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الدور
              </label>
              <Select value={inviteRole} onValueChange={setInviteRole}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="اختر الدور" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">admin</SelectItem>
                  <SelectItem value="مدير المخزون">مدير المخزون</SelectItem>
                  <SelectItem value="مدير المبيعات">مدير المبيعات</SelectItem>
                  <SelectItem value="محاسب">محاسب</SelectItem>
                  <SelectItem value="موظف">موظف</SelectItem>
                  <SelectItem value="مشرف">مشرف</SelectItem>
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
              إلغاء
            </Button>
            <Button
              onClick={handleInviteUser}
              className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
            >
              إرسال الدعوة
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>تعديل المستخدم</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الاسم الأول
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
                اسم العائلة
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
                الدور
              </label>
              <Select value={editRole} onValueChange={setEditRole}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">admin</SelectItem>
                  <SelectItem value="مدير المخزون">مدير المخزون</SelectItem>
                  <SelectItem value="مدير المبيعات">مدير المبيعات</SelectItem>
                  <SelectItem value="محاسب">محاسب</SelectItem>
                  <SelectItem value="موظف">موظف</SelectItem>
                  <SelectItem value="مشرف">مشرف</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الحالة
              </label>
              <Select value={editStatus} onValueChange={setEditStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="مفعل">مفعل</SelectItem>
                  <SelectItem value="غير مفعل">غير مفعل</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني
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
              إلغاء
            </Button>
            <Button
              onClick={handleEditUser}
              className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
            >
              حفظ
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Disable User Alert Dialog */}
      <AlertDialog open={disableDialogOpen} onOpenChange={setDisableDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>تعطيل الحساب</AlertDialogTitle>
            <AlertDialogDescription className="text-right">
              هل أنت متأكد من أنك تريد تعطيل حساب {selectedUser?.firstName} {selectedUser?.lastName}؟
              <br />
              لن يتمكن المستخدم من الوصول إلى النظام بعد تعطيل الحساب.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setSelectedUser(null)}>
              إلغاء
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDisableUser}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              تعطيل
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
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
      case 'حرج':
        return 'bg-red-100 text-red-700';
      case 'مرتفع':
        return 'bg-orange-100 text-orange-700';
      case 'متوسط':
        return 'bg-blue-100 text-blue-700';
      case 'منخفض':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleMarkAsRead = (notificationId: string) => {
    setNotifications(notifications.map(notif => 
      notif.id === notificationId ? { ...notif, readStatus: 'مقروء' } : notif
    ));
    setSelectedNotification(null);
  };

  const handleGoToReference = (notification: typeof notificationsData[0]) => {
    setSelectedNotification(null);
    onNavigateToReference(notification.referenceType, notification.referenceId);
  };

  return (
    <>
      {/* Section 1: Title and Filters */}
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">الإشعارات</h1>

        {/* Filters */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Importance */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  الأهمية
                </label>
                <Select value={importance} onValueChange={setImportance}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="اختر الأهمية" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="منخفض">منخفض</SelectItem>
                    <SelectItem value="متوسط">متوسط</SelectItem>
                    <SelectItem value="مرتفع">مرتفع</SelectItem>
                    <SelectItem value="حرج">حرج</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Read Status */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  حالة القراءة
                </label>
                <Select value={readStatus} onValueChange={setReadStatus}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="اختر الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="غير مقروء">غير مقروء</SelectItem>
                    <SelectItem value="مقروء">مقروء</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Range */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  من
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
                  إلى
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
                  نوع المرجع
                </label>
                <Select value={referenceType} onValueChange={setReferenceType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="اختر النوع" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="طلب وارد">طلب وارد</SelectItem>
                    <SelectItem value="طلب صادر">طلب صادر</SelectItem>
                    <SelectItem value="فاتورة">فاتورة</SelectItem>
                    <SelectItem value="تقارير">تقارير</SelectItem>
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
                    وقت الإنشاء
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    الأهمية
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    العنوان
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    نوع المرجع
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    معرف المرجع
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    القراءة
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    ملاحظات
                  </th>
                </tr>
              </thead>
              <tbody>
                {notifications.map((notification, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-50 hover:bg-gray-50/50 transition-colors ${
                      notification.readStatus === 'غير مقروء' ? 'bg-blue-50/30' : ''
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
                          notification.readStatus === 'مقروء'
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
                        عرض
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
                  <p className="text-sm text-gray-500 mb-2">الأهمية</p>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getImportanceColor(selectedNotification.importance)}`}
                  >
                    {selectedNotification.importance}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">نوع المرجع</p>
                  <p className="text-sm text-gray-900">{selectedNotification.referenceType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">معرف المرجع</p>
                  <p className="text-sm font-mono text-gray-900">{selectedNotification.referenceId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">الرسالة</p>
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
                  وضع كمقروء
                </Button>
                <Button
                  onClick={() => handleGoToReference(selectedNotification)}
                  className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
                >
                  الذهاب
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

// Support Page Component
function SupportPage() {
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ id: string; text: string; sender: 'user' | 'support'; time: string }>>([
    { id: '1', text: 'مرحباً! كيف يمكنني مساعدتك اليوم؟', sender: 'support', time: '10:00' },
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
      time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
    };
    setChatMessages([...chatMessages, newMessage]);
    setChatMessage('');
    
    // Simulate support response
    setTimeout(() => {
      const supportResponse = {
        id: (Date.now() + 1).toString(),
        text: 'شكراً لتواصلك. سأقوم بمراجعة طلبك والرد عليك قريباً.',
        sender: 'support' as const,
        time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
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
      case 'مفتوح':
        return 'bg-blue-100 text-blue-700';
      case 'قيد المعالجة':
        return 'bg-amber-100 text-amber-700';
      case 'مغلق':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'مرتفع':
        return 'bg-red-100 text-red-700';
      case 'متوسط':
        return 'bg-orange-100 text-orange-700';
      case 'منخفض':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <>
      {/* Section 1: Live Chat and Ticket Creation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Chat Section */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">محادثة مباشرة مع الدعم</CardTitle>
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
                placeholder="اكتب رسالتك..."
                className="flex-1"
              />
              <Button
                onClick={handleSendChatMessage}
                className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
              >
                إرسال
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Ticket Creation Section */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">إنشاء تذكرة دعم</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                إذا كنت بحاجة إلى مساعدة، يمكنك إنشاء تذكرة دعم وسيقوم فريقنا بالرد عليك في أقرب وقت ممكن.
              </p>
              <Button
                onClick={() => setTicketDialogOpen(true)}
                className="w-full bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white gap-2"
              >
                <Plus className="w-4 h-4" />
                إنشاء تذكرة جديدة
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 2: Recent Tickets Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">التذاكر الصادرة مؤخراً</h2>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="data-table w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      رقم التذكرة
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      العنوان
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      الحالة
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      الأولوية
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      تاريخ الإنشاء
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      آخر تحديث
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      الإجراء
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {supportTicketsData.map((ticket, index) => (
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
                          عرض
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

      {/* Create Ticket Dialog */}
      <Dialog open={ticketDialogOpen} onOpenChange={setTicketDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>إنشاء تذكرة دعم جديدة</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                العنوان
              </label>
              <Input
                type="text"
                value={ticketTitle}
                onChange={(e) => setTicketTitle(e.target.value)}
                placeholder="أدخل عنوان التذكرة"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الوصف
              </label>
              <Textarea
                value={ticketDescription}
                onChange={(e) => setTicketDescription(e.target.value)}
                placeholder="أدخل وصف المشكلة أو الاستفسار"
                className="w-full min-h-32"
                rows={6}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الأولوية
              </label>
              <Select value={ticketPriority} onValueChange={setTicketPriority}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="اختر الأولوية" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="منخفض">منخفض</SelectItem>
                  <SelectItem value="متوسط">متوسط</SelectItem>
                  <SelectItem value="مرتفع">مرتفع</SelectItem>
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
              إلغاء
            </Button>
            <Button
              onClick={handleCreateTicket}
              className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
            >
              إنشاء التذكرة
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
                  رقم التذكرة: {selectedTicket.id}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">الحالة</p>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedTicket.status)}`}
                    >
                      {selectedTicket.status}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">الأولوية</p>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(selectedTicket.priority)}`}
                    >
                      {selectedTicket.priority}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">تاريخ الإنشاء</p>
                    <p className="text-sm font-mono text-gray-900">{selectedTicket.creationDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">آخر تحديث</p>
                    <p className="text-sm font-mono text-gray-900">{selectedTicket.lastUpdate}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">الوصف</p>
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
                  إغلاق
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

// Settings Page Component
function SettingsPage() {
  const [firstName, setFirstName] = useState('أحمد');
  const [lastName, setLastName] = useState('محمد');
  const [email, setEmail] = useState('ahmed.mohamed@example.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [language, setLanguage] = useState('العربية');
  const [timezone, setTimezone] = useState('Asia/Riyadh');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSaveAccount = () => {
    // Handle save account
    console.log('Saving account:', { firstName, lastName, email });
  };

  const handleChangePassword = () => {
    // Handle change password
    if (newPassword !== confirmPassword) {
      alert('كلمة المرور الجديدة وتأكيد كلمة المرور غير متطابقين');
      return;
    }
    console.log('Changing password');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">الإعدادات</h1>

      {/* Section 1: My Profile */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">ملفي الشخصي</CardTitle>
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
          <CardTitle className="text-lg font-semibold">الحساب</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الاسم الأول
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
                اسم العائلة
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
                عنوان البريد الإلكتروني
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
                className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
              >
                حفظ
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Password */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">كلمة المرور</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور الحالية
              </label>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full"
                placeholder="أدخل كلمة المرور الحالية"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور الجديدة
              </label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full"
                placeholder="أدخل كلمة المرور الجديدة"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                تأكيد كلمة المرور الجديدة
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full"
                placeholder="أعد إدخال كلمة المرور الجديدة"
              />
            </div>
            <div className="flex items-center justify-end pt-4">
              <Button
                onClick={handleChangePassword}
                className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
              >
                تغيير كلمة المرور
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Preferences */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">التفضيلات</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                اللغة
              </label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="العربية">العربية</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                المنطقة الزمنية
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
                  تفعيل الإشعارات
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  استقبل إشعارات حول التحديثات والأنشطة المهمة
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
                onClick={() => console.log('Saving preferences')}
                className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
              >
                حفظ التفضيلات
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Security */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">الأمان</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">المصادقة الثنائية</p>
                <p className="text-xs text-gray-500 mt-1">
                  أضف طبقة إضافية من الأمان لحسابك
                </p>
              </div>
              <Button variant="outline" size="sm">
                تفعيل
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">جلسات نشطة</p>
                <p className="text-xs text-gray-500 mt-1">
                  عرض وإدارة جلسات تسجيل الدخول النشطة
                </p>
              </div>
              <Button variant="outline" size="sm">
                عرض الجلسات
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('لوحة التحكم');
  const [currentPage, setCurrentPage] = useState<'main' | 'create-order' | 'order-details' | 'invoice-details'>('main');
  const [orderType, setOrderType] = useState<'وارد' | 'صادر'>('وارد');
  const [selectedOrderNumber, setSelectedOrderNumber] = useState('');
  const [selectedOrderType, setSelectedOrderType] = useState<'وارد' | 'صادر'>('وارد');
  const [selectedInvoiceId, setSelectedInvoiceId] = useState('');

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
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100%-4rem)]">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeItem === item.label
                  ? 'active bg-gradient-to-l from-[#176C33]/10 to-[#104920]/10 text-[#176C33]'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
              {item.label === 'الإشعارات' && (
                <Badge className="mr-auto bg-red-500 text-white text-xs px-2 py-0.5">
                  3
                </Badge>
              )}
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
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="البحث..."
                className="w-64 pr-10 pl-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#176C33]/20 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <Avatar className="w-9 h-9 border-2 border-[#176C33]/20">
                <AvatarFallback className="bg-gradient-to-br from-[#176C33] to-[#104920] text-white text-sm font-medium">
                  أ م
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-900">أحمد محمد</p>
                <p className="text-xs text-gray-500">مدير النظام</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 space-y-6">
          {currentPage === 'create-order' ? (
            <CreateOrderPage
              orderType={orderType}
              onCancel={() => {
                setCurrentPage('main');
                setActiveItem('الطلبات');
              }}
            />
          ) : currentPage === 'order-details' ? (
            <OrderDetailsPage
              orderNumber={selectedOrderNumber}
              orderType={selectedOrderType}
              onBack={() => {
                setCurrentPage('main');
                setActiveItem('الطلبات');
              }}
            />
          ) : currentPage === 'invoice-details' ? (
            <InvoiceDetailsPage
              invoiceId={selectedInvoiceId}
              onBack={() => {
                setCurrentPage('main');
                setActiveItem('الفواتير');
              }}
            />
          ) : (
            <>
              {activeItem === 'لوحة التحكم' && <DashboardPage />}
              {activeItem === 'المخزون' && <InventoryPage />}
              {activeItem === 'الحركات' && <MovementsPage />}
              {activeItem === 'التقارير' && <ReportsPage />}
              {activeItem === 'الفوترة' && <BillingPage />}
              {activeItem === 'الفواتير' && (
                <InvoicesPage
                  onViewInvoice={(invoiceId: string) => {
                    setSelectedInvoiceId(invoiceId);
                    setCurrentPage('invoice-details');
                  }}
                />
              )}
              {activeItem === 'المستخدمون' && <UsersPage />}
              {activeItem === 'الدعم' && <SupportPage />}
              {activeItem === 'الإعدادات' && <SettingsPage />}
              {activeItem === 'الإشعارات' && (
                <NotificationsPage
                  onNavigateToReference={(referenceType: string, referenceId: string) => {
                    // Navigate based on reference type
                    if (referenceType === 'طلب وارد' || referenceType === 'طلب صادر') {
                      setActiveItem('الطلبات');
                      // Could set order details here if needed
                    } else if (referenceType === 'فاتورة') {
                      setActiveItem('الفواتير');
                      setSelectedInvoiceId(referenceId);
                      setCurrentPage('invoice-details');
                    } else if (referenceType === 'تقارير') {
                      setActiveItem('التقارير');
                    }
                  }}
                />
              )}
              {activeItem === 'الطلبات' && (
                <OrdersPage
                  onCreateOrder={(type: 'وارد' | 'صادر') => {
                    setOrderType(type);
                    setCurrentPage('create-order');
                  }}
                  onCreateOrderDetails={(orderNumber: string, type: 'وارد' | 'صادر') => {
                    setSelectedOrderNumber(orderNumber);
                    setSelectedOrderType(type);
                    setCurrentPage('order-details');
                  }}
                />
              )}
            </>
          )}
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
