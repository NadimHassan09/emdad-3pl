import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateTaskWorkOrderDto } from './dto/create-task-work-order.dto';
import { UpdateTaskWorkOrderDto } from './dto/update-task-work-order.dto';
import { TaskWorkOrderFilterDto } from './dto/task-work-order-filter.dto';
import { AssignTaskWorkOrderDto } from './dto/assign-task-work-order.dto';
export declare class TaskWorkOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findMany(filter?: TaskWorkOrderFilterDto): Promise<({
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare class TaskWorkOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findMany(filter?: TaskWorkOrderFilterDto): Promise<({
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare class TaskWorkOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findMany(filter?: TaskWorkOrderFilterDto): Promise<({
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare class TaskWorkOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findMany(filter?: TaskWorkOrderFilterDto): Promise<({
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare class TaskWorkOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findMany(filter?: TaskWorkOrderFilterDto): Promise<({
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare class TaskWorkOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findMany(filter?: TaskWorkOrderFilterDto): Promise<({
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare class TaskWorkOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findMany(filter?: TaskWorkOrderFilterDto): Promise<({
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare class TaskWorkOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findMany(filter?: TaskWorkOrderFilterDto): Promise<({
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare class TaskWorkOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findMany(filter?: TaskWorkOrderFilterDto): Promise<({
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare class TaskWorkOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findMany(filter?: TaskWorkOrderFilterDto): Promise<({
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare class TaskWorkOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findMany(filter?: TaskWorkOrderFilterDto): Promise<({
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare class TaskWorkOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findMany(filter?: TaskWorkOrderFilterDto): Promise<({
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare class TaskWorkOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findMany(filter?: TaskWorkOrderFilterDto): Promise<({
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare class TaskWorkOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findMany(filter?: TaskWorkOrderFilterDto): Promise<({
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare class TaskWorkOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findMany(filter?: TaskWorkOrderFilterDto): Promise<({
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        clientId: string;
        warehouseId: string;
        referenceType: string | null;
        referenceId: string | null;
        taskType: import(".prisma/client").$Enums.TaskType;
        referenceItemId: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        assignedUserId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
