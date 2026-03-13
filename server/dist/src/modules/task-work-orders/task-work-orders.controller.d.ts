import { TaskWorkOrdersService } from './task-work-orders.service';
import { CreateTaskWorkOrderDto } from './dto/create-task-work-order.dto';
import { UpdateTaskWorkOrderDto } from './dto/update-task-work-order.dto';
import { TaskWorkOrderFilterDto } from './dto/task-work-order-filter.dto';
import { AssignTaskWorkOrderDto } from './dto/assign-task-work-order.dto';
export declare class TaskWorkOrdersController {
    private readonly taskWorkOrders;
    constructor(taskWorkOrders: TaskWorkOrdersService);
    create(dto: CreateTaskWorkOrderDto): Promise<{
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        assignedUser: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.TaskStatus;
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        assignedUserId: string | null;
    }>;
    findMany(filter: TaskWorkOrderFilterDto): Promise<({
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        assignedUser: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.TaskStatus;
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        assignedUserId: string | null;
    })[]>;
    findOne(id: string): Promise<{
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        assignedUser: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.TaskStatus;
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        assignedUserId: string | null;
    }>;
    update(id: string, dto: UpdateTaskWorkOrderDto): Promise<{
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        assignedUser: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.TaskStatus;
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        assignedUserId: string | null;
    }>;
    assign(id: string, dto: AssignTaskWorkOrderDto): Promise<{
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        assignedUser: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.TaskStatus;
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        assignedUserId: string | null;
    }>;
    complete(id: string): Promise<{
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        assignedUser: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.TaskStatus;
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        assignedUserId: string | null;
    }>;
}
