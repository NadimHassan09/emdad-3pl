import { TaskType } from '../../../common/enums/task-type.enum';
import { TaskPriority } from '../../../common/enums/task-priority.enum';
export declare class CreateTaskWorkOrderDto {
    clientId: string;
    warehouseId: string;
    taskType: TaskType;
    referenceType?: string;
    referenceId?: string;
    referenceItemId?: string;
    priority?: TaskPriority;
}
