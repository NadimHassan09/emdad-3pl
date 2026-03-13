"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskWorkOrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let TaskWorkOrdersService = class TaskWorkOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        await this.prisma.client.findUniqueOrThrow({ where: { id: dto.clientId } });
        await this.prisma.warehouse.findUniqueOrThrow({
            where: { id: dto.warehouseId },
        });
        return this.prisma.taskWorkOrder.create({
            data: {
                clientId: dto.clientId,
                warehouseId: dto.warehouseId,
                taskType: dto.taskType,
                referenceType: dto.referenceType?.trim(),
                referenceId: dto.referenceId,
                referenceItemId: dto.referenceItemId,
                priority: (dto.priority || 'NORMAL'),
                status: 'PENDING',
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
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.taskType)
            where.taskType = filter.taskType;
        if (filter?.status)
            where.status = filter.status;
        if (filter?.priority)
            where.priority = filter.priority;
        if (filter?.assignedUserId !== undefined) {
            where.assignedUserId = filter.assignedUserId || null;
        }
        if (filter?.referenceType)
            where.referenceType = filter.referenceType;
        if (filter?.referenceId)
            where.referenceId = filter.referenceId;
        return this.prisma.taskWorkOrder.findMany({
            where,
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                assignedUser: {
                    select: { id: true, email: true, firstName: true, lastName: true },
                },
            },
            orderBy: [
                { priority: 'desc' },
                { createdAt: 'asc' },
            ],
        });
    }
    async findOne(id) {
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
        if (!task)
            throw new common_1.NotFoundException('Task work order not found');
        return task;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.taskWorkOrder.update({
            where: { id },
            data: {
                ...(dto.taskType !== undefined && { taskType: dto.taskType }),
                ...(dto.referenceType !== undefined && {
                    referenceType: dto.referenceType?.trim(),
                }),
                ...(dto.referenceId !== undefined && { referenceId: dto.referenceId }),
                ...(dto.referenceItemId !== undefined && {
                    referenceItemId: dto.referenceItemId,
                }),
                ...(dto.priority !== undefined && { priority: dto.priority }),
                ...(dto.status !== undefined && { status: dto.status }),
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
    async assign(id, dto) {
        const task = await this.findOne(id);
        await this.prisma.user.findUniqueOrThrow({
            where: { id: dto.assignedUserId },
        });
        return this.prisma.taskWorkOrder.update({
            where: { id },
            data: {
                assignedUserId: dto.assignedUserId,
                status: 'ASSIGNED',
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
    async complete(id) {
        const task = await this.findOne(id);
        if (task.status === 'COMPLETED') {
            throw new common_1.BadRequestException('Task is already completed');
        }
        if (task.status === 'CANCELLED') {
            throw new common_1.BadRequestException('Cannot complete a cancelled task');
        }
        if (!task.assignedUserId) {
            throw new common_1.BadRequestException('Task must be assigned before completion');
        }
        return this.prisma.taskWorkOrder.update({
            where: { id },
            data: {
                status: 'COMPLETED',
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
};
exports.TaskWorkOrdersService = TaskWorkOrdersService;
exports.TaskWorkOrdersService = TaskWorkOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TaskWorkOrdersService);
//# sourceMappingURL=task-work-orders.service.js.map