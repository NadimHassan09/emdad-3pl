import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateTaskWorkOrderDto } from './dto/create-task-work-order.dto';
import { UpdateTaskWorkOrderDto } from './dto/update-task-work-order.dto';
import { TaskWorkOrderFilterDto } from './dto/task-work-order-filter.dto';
import { AssignTaskWorkOrderDto } from './dto/assign-task-work-order.dto';
import { TaskStatus } from '../../common/enums/task-status.enum';

/**
 * Task Work Orders Service
 *
 * Handles physical warehouse work task management.
 *
 * Tasks can reference:
 * - Inbound orders (receiving, putaway)
 * - Outbound orders (picking, packing, shipping)
 * - Adjustments
 * - Return orders
 * - Specific item rows (via referenceItemId)
 *
 * Task lifecycle:
 * - PENDING: Created, not yet assigned
 * - ASSIGNED: Assigned to a user, ready to start
 * - IN_PROGRESS: User has started working on it
 * - COMPLETED: Task finished successfully
 * - CANCELLED: Task cancelled before completion
 *
 * This module is reusable for all warehouse task types:
 * - Receiving, Putaway, Picking, Packing, Shipping
 * - Cycle Count, Replenishment, Adjustment
 */
@Injectable()
export class TaskWorkOrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateTaskWorkOrderDto) {
    // Validate client and warehouse exist
    await this.prisma.client.findUniqueOrThrow({ where: { id: dto.clientId } });
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: dto.warehouseId },
    });

    return this.prisma.taskWorkOrder.create({
      data: {
        clientId: dto.clientId,
        warehouseId: dto.warehouseId,
        taskType: dto.taskType as any,
        referenceType: dto.referenceType?.trim(),
        referenceId: dto.referenceId,
        referenceItemId: dto.referenceItemId,
        priority: (dto.priority || 'NORMAL') as any,
        status: 'PENDING' as any,
      },
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        assignedUser: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
      },
    });
  }

  async findMany(filter?: TaskWorkOrderFilterDto) {
    const where: {
      clientId?: string;
      warehouseId?: string;
      taskType?: any;
      status?: any;
      priority?: any;
      assignedUserId?: string | null;
      referenceType?: string;
      referenceId?: string;
    } = {};

    if (filter?.clientId) where.clientId = filter.clientId;
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.taskType) where.taskType = filter.taskType;
    if (filter?.status) where.status = filter.status;
    if (filter?.priority) where.priority = filter.priority;
    if (filter?.assignedUserId !== undefined) {
      where.assignedUserId = filter.assignedUserId || null;
    }
    if (filter?.referenceType) where.referenceType = filter.referenceType;
    if (filter?.referenceId) where.referenceId = filter.referenceId;

    return this.prisma.taskWorkOrder.findMany({
      where,
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        assignedUser: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
      },
      orderBy: [{ priority: 'desc' }, { createdAt: 'asc' }],
    });
  }

  async findOne(id: string) {
    const task = await this.prisma.taskWorkOrder.findUnique({
      where: { id },
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        assignedUser: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
      },
    });

    if (!task) throw new NotFoundException('Task work order not found');
    return task;
  }

  async update(id: string, dto: UpdateTaskWorkOrderDto) {
    await this.findOne(id);

    return this.prisma.taskWorkOrder.update({
      where: { id },
      data: {
        ...(dto.taskType !== undefined && { taskType: dto.taskType as any }),
        ...(dto.referenceType !== undefined && {
          referenceType: dto.referenceType?.trim(),
        }),
        ...(dto.referenceId !== undefined && { referenceId: dto.referenceId }),
        ...(dto.referenceItemId !== undefined && {
          referenceItemId: dto.referenceItemId,
        }),
        ...(dto.priority !== undefined && { priority: dto.priority as any }),
        ...(dto.status !== undefined && { status: dto.status as any }),
      },
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        assignedUser: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
      },
    });
  }

  async assign(id: string, dto: AssignTaskWorkOrderDto) {
    const task = await this.findOne(id);

    // Validate user exists
    await this.prisma.user.findUniqueOrThrow({
      where: { id: dto.assignedUserId },
    });

    // Validate user belongs to same warehouse context (optional business rule)
    // This could be enhanced based on business requirements

    return this.prisma.taskWorkOrder.update({
      where: { id },
      data: {
        assignedUserId: dto.assignedUserId,
        status: 'ASSIGNED' as any,
      },
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        assignedUser: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
      },
    });
  }

  async complete(id: string) {
    const task = await this.findOne(id);

    if (task.status === 'COMPLETED') {
      throw new BadRequestException('Task is already completed');
    }

    if (task.status === 'CANCELLED') {
      throw new BadRequestException('Cannot complete a cancelled task');
    }

    if (!task.assignedUserId) {
      throw new BadRequestException('Task must be assigned before completion');
    }

    return this.prisma.taskWorkOrder.update({
      where: { id },
      data: {
        status: 'COMPLETED' as any,
      },
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        assignedUser: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
      },
    });
  }
}
