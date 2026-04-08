import { apiFetch } from './api';

export const TASK_TYPE_LABELS: Record<string, string> = {
  RECEIVING: 'استلام وارد',
  PUTAWAY: 'وضع بعيد',
  PICKING: 'مهمة انتقاء',
  PACKING: 'تعبئة',
  SHIPPING: 'شحن',
  CYCLE_COUNT: 'جرد دوري',
  REPLENISHMENT: 'نقل مخزون',
  ADJUSTMENT: 'معالجة إرجاع',
};

export const TASK_STATUS_LABELS: Record<string, string> = {
  PENDING: 'جديد',
  ASSIGNED: 'قيد التنفيذ',
  IN_PROGRESS: 'قيد التنفيذ',
  COMPLETED: 'مكتمل',
  CANCELLED: 'ملغي',
};

export const TASK_PRIORITY_LABELS: Record<string, string> = {
  URGENT: 'عاجل',
  HIGH: 'عالي',
  NORMAL: 'متوسط',
  LOW: 'منخفض',
};

export interface TaskWorkOrderResponse {
  id: string;
  taskType: string;
  status: string;
  priority: string;
  createdAt: string;
  client?: { id: string; code: string; name: string };
  warehouse?: { id: string; code: string; name: string };
  assignedUser?: { id: string; email: string; firstName: string; lastName: string } | null;
}

export interface TaskWorkOrderFilter {
  taskType?: string;
  status?: string;
  dueFrom?: string;
  dueTo?: string;
}

export async function fetchTaskWorkOrders(filter: TaskWorkOrderFilter = {}): Promise<TaskWorkOrderResponse[]> {
  const params = new URLSearchParams();
  if (filter.taskType) params.set('taskType', filter.taskType);
  if (filter.status) params.set('status', filter.status);
  if (filter.dueFrom) params.set('dueFrom', filter.dueFrom);
  if (filter.dueTo) params.set('dueTo', filter.dueTo);
  if (filter.referenceId) params.set('referenceId', filter.referenceId);
  const qs = params.toString();
  return apiFetch<TaskWorkOrderResponse[]>(`/task-work-orders${qs ? `?${qs}` : ''}`);
}

export interface CreateTaskWorkOrderPayload {
  clientId: string;
  warehouseId: string;
  taskType: string;
  referenceType?: string;
  referenceId?: string;
  priority?: string;
}

export async function createTaskWorkOrder(payload: CreateTaskWorkOrderPayload): Promise<TaskWorkOrderResponse> {
  return apiFetch<TaskWorkOrderResponse>('/task-work-orders', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function assignTaskWorkOrder(taskId: string, assignedUserId: string): Promise<TaskWorkOrderResponse> {
  return apiFetch<TaskWorkOrderResponse>(`/task-work-orders/${taskId}/assign`, {
    method: 'POST',
    body: JSON.stringify({ assignedUserId }),
  });
}

export async function startTaskWorkOrder(taskId: string): Promise<TaskWorkOrderResponse> {
  return apiFetch<TaskWorkOrderResponse>(`/task-work-orders/${taskId}`, {
    method: 'PATCH',
    body: JSON.stringify({ status: 'IN_PROGRESS' }),
  });
}

export async function completeTaskWorkOrder(taskId: string): Promise<TaskWorkOrderResponse> {
  return apiFetch<TaskWorkOrderResponse>(`/task-work-orders/${taskId}/complete`, {
    method: 'POST',
  });
}
