import { apiFetch, type ApiError } from '@/lib/api';

const LIST = '/billing/client-portal/invoices';

export type InvoiceStatusApi =
  | 'DRAFT'
  | 'ISSUED'
  | 'PAID'
  | 'OVERDUE'
  | 'CANCELLED';

export interface ClientPortalInvoiceRow {
  id: string;
  invoiceNumber: string;
  periodStart: string;
  periodEnd: string;
  status: InvoiceStatusApi;
  subtotalCents: string | number;
  taxAmountCents: string | number;
  discountAmountCents: string | number;
  totalAmountCents: string | number;
  currency: string;
  issuedAt: string | null;
  paidAt: string | null;
  dueDate: string | null;
  notes: string | null;
  createdAt: string;
}

export interface ClientPortalInvoiceLine {
  id: string;
  chargeCategory: string;
  description: string | null;
  quantity: string | number;
  unitPriceCents: string | number;
  totalAmountCents: string | number;
  currency: string;
}

export interface ClientPortalInvoiceDetail extends ClientPortalInvoiceRow {
  lines: ClientPortalInvoiceLine[];
}

function toNum(v: string | number | bigint | undefined | null): number {
  if (v == null) return 0;
  if (typeof v === 'bigint') return Number(v);
  if (typeof v === 'number') return v;
  return Number(v) || 0;
}

export function centsToAmount(cents: string | number | bigint | null | undefined): number {
  return toNum(cents) / 100;
}

export function invoiceStatusToAr(status: string): string {
  switch (status) {
    case 'PAID':
      return 'مدفوع';
    case 'ISSUED':
      return 'صادرة';
    case 'DRAFT':
      return 'مسودة';
    case 'OVERDUE':
      return 'متأخر';
    case 'CANCELLED':
      return 'ملغى';
    default:
      return status;
  }
}

export function arStatusToApi(ar: string): InvoiceStatusApi | undefined {
  switch (ar) {
    case 'مسودة':
    case 'مستوطة':
      return 'DRAFT';
    case 'صادرة':
      return 'ISSUED';
    case 'مدفوع':
      return 'PAID';
    case 'ملغى':
      return 'CANCELLED';
    default:
      return undefined;
  }
}

export async function fetchClientPortalInvoices(params: {
  status?: InvoiceStatusApi;
  periodFrom?: string;
  periodTo?: string;
}): Promise<ClientPortalInvoiceRow[]> {
  const sp = new URLSearchParams();
  if (params.status) sp.set('status', params.status);
  if (params.periodFrom) sp.set('periodFrom', params.periodFrom);
  if (params.periodTo) sp.set('periodTo', params.periodTo);
  const q = sp.toString();
  return apiFetch<ClientPortalInvoiceRow[]>(q ? `${LIST}?${q}` : LIST);
}

export async function fetchClientPortalInvoice(id: string): Promise<ClientPortalInvoiceDetail> {
  return apiFetch<ClientPortalInvoiceDetail>(`${LIST}/${encodeURIComponent(id)}`);
}

export function getInvoicesErrorMessage(err: unknown): string {
  const e = err as ApiError;
  if (e?.status === 401) return 'انتهت الجلسة. يرجى تسجيل الدخول مرة أخرى.';
  if (e?.status === 403) return 'غير مصرح لك بالوصول.';
  if (e?.status === 404) return 'الفاتورة غير موجودة.';
  return 'تعذر تحميل البيانات. يرجى المحاولة مرة أخرى.';
}
