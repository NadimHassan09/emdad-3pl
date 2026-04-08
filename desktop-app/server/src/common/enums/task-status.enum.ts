/**
 * Task status enum; matches schema task_status.
 * Used in task_work_order to track task lifecycle.
 * Separate from order_status - tasks have their own status flow.
 */
export enum TaskStatus {
  PENDING = 'PENDING',
  ASSIGNED = 'ASSIGNED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}
