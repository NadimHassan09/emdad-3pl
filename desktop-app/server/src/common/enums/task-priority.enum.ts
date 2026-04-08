/**
 * Task priority enum; matches schema task_priority.
 * Used in task_work_order to prioritize warehouse work.
 */
export enum TaskPriority {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}
