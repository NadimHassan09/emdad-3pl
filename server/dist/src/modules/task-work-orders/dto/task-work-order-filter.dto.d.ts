import { TaskType } from '../../../common/enums/task-type.enum';
import { TaskStatus } from '../../../common/enums/task-status.enum';
import { TaskPriority } from '../../../common/enums/task-priority.enum';
export declare class TaskWorkOrderFilterDto {
    clientId?: string;
    warehouseId?: string;
    taskType?: TaskType;
    status?: TaskStatus;
    priority?: TaskPriority;
    assignedUserId?: string;
    referenceType?: string;
    referenceId?: string;
}
