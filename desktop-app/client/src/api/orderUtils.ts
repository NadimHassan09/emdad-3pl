/** Map API order status to Arabic UI bucket */
export function orderStatusToAr(status: string): string {
  switch (status) {
    case 'PENDING':
      return 'بانتظار الموافقة';
    case 'DRAFT':
      return 'مسودة';
    case 'CONFIRMED':
      return 'مؤكد';
    case 'COMPLETED':
    case 'SHIPPED':
      return 'مكتمل';
    case 'CANCELLED':
      return 'ملغي';
    case 'IN_PROGRESS':
    case 'RECEIVING':
      return 'قيد التنفيذ';
    default:
      return 'جديد';
  }
}

export function matchesStatusFilter(arStatus: string, filter: string): boolean {
  if (!filter || filter === 'الكل') return true;
  return arStatus === filter;
}

export function getOrdersErrorMessage(err: unknown): string {
  const e = err as { status?: number };
  if (e?.status === 401) return 'انتهت الجلسة. يرجى تسجيل الدخول مرة أخرى.';
  if (e?.status === 403) return 'غير مصرح لك بالوصول.';
  if (e?.status === 404) return 'الطلب غير موجود.';
  return 'تعذر تحميل البيانات. يرجى المحاولة مرة أخرى.';
}
