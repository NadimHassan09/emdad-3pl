import { TaskType } from '../../../common/enums/task-type.enum';
import { TaskStatus } from '../../../common/enums/task-status.enum';
import { TaskPriority } from '../../../common/enums/task-priority.enum';
export declare class UpdateTaskWorkOrderDto {
    taskType?: TaskType;
    referenceType?: string;
    referenceId?: string;
    referenceItemId?: string;
    priority?: TaskPriority;
    status?: TaskStatus;
}
