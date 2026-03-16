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
exports.AdjustmentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
const inventory_service_1 = require("../inventory/inventory.service");
const movement_type_enum_1 = require("../../common/enums/movement-type.enum");
const approvals_service_1 = require("../approvals/approvals.service");
const approval_reference_type_enum_1 = require("../../common/enums/approval-reference-type.enum");
let AdjustmentsService = class AdjustmentsService {
    constructor(prisma, inventoryService, approvalsService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
        this.approvalsService = approvalsService;
    }
    async create(dto, createdByActorId) {
        await this.prisma.client.findUniqueOrThrow({ where: { id: dto.clientId } });
        await this.prisma.warehouse.findUniqueOrThrow({
            where: { id: dto.warehouseId },
        });
        if (dto.productId) {
            await this.prisma.product.findUniqueOrThrow({
                where: { id: dto.productId },
            });
        }
        const adjustment = await this.prisma.adjustment.create({
            data: {
                clientId: dto.clientId,
                warehouseId: dto.warehouseId,
                productId: dto.productId || null,
                batchId: dto.batchId || null,
                locationId: dto.locationId || null,
                qtyChange: dto.qtyChange,
                reason: dto.reason?.trim() || null,
                status: 'PENDING',
                createdByActorId,
            },
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
                location: { select: { id: true, code: true } },
                createdByActor: {
                    select: {
                        id: true,
                        actorType: true,
                        user: { select: { id: true, email: true } },
                        clientAccount: { select: { id: true, email: true } },
                    },
                },
            },
        });
        try {
            await this.approvalsService.createRequest({
                referenceType: approval_reference_type_enum_1.ApprovalReferenceType.ADJUSTMENT,
                referenceId: adjustment.id,
                requestedByActorId: createdByActorId,
                requestNotes: dto.reason || `Stock adjustment: ${dto.qtyChange > 0 ? '+' : ''}${dto.qtyChange}`,
            });
        }
        catch (error) {
            console.warn('Failed to create approval request for adjustment:', error);
        }
        return adjustment;
    }
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.productId !== undefined) {
            where.productId = filter.productId || null;
        }
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.locationId !== undefined) {
            where.locationId = filter.locationId || null;
        }
        if (filter?.status)
            where.status = filter.status;
        return this.prisma.adjustment.findMany({
            where,
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
                location: { select: { id: true, code: true } },
                createdByActor: {
                    select: {
                        id: true,
                        actorType: true,
                        user: { select: { id: true, email: true } },
                        clientAccount: { select: { id: true, email: true } },
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const adjustment = await this.prisma.adjustment.findUnique({
            where: { id },
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
                location: { select: { id: true, code: true } },
                createdByActor: {
                    select: {
                        id: true,
                        actorType: true,
                        user: { select: { id: true, email: true } },
                        clientAccount: { select: { id: true, email: true } },
                    },
                },
            },
        });
        if (!adjustment) {
            throw new common_1.NotFoundException('Adjustment not found');
        }
        return adjustment;
    }
    async apply(id) {
        const adjustment = await this.findOne(id);
        if (adjustment.status === 'APPLIED') {
            throw new common_1.BadRequestException('Adjustment is already applied');
        }
        if (adjustment.status === 'REJECTED') {
            throw new common_1.BadRequestException('Cannot apply a rejected adjustment');
        }
        if (adjustment.status === 'PENDING') {
            throw new common_1.BadRequestException('Adjustment must be approved before applying');
        }
        const approvals = await this.prisma.approval.findMany({
            where: {
                referenceType: approval_reference_type_enum_1.ApprovalReferenceType.ADJUSTMENT,
                referenceId: id,
            },
            orderBy: { createdAt: 'desc' },
        });
        const latestApproval = approvals?.[0];
        if (latestApproval &&
            latestApproval.status !== 'APPROVED' &&
            adjustment.status !== 'APPROVED') {
            throw new common_1.BadRequestException('Adjustment must be approved before applying');
        }
        if (!adjustment.productId) {
            throw new common_1.BadRequestException('Cannot apply adjustment without a productId');
        }
        await this.inventoryService.createLedgerEntry({
            clientId: adjustment.clientId,
            warehouseId: adjustment.warehouseId,
            productId: adjustment.productId,
            batchId: adjustment.batchId || undefined,
            locationId: adjustment.locationId || undefined,
            movementType: movement_type_enum_1.MovementType.ADJUSTMENT,
            qtyChange: adjustment.qtyChange.toNumber(),
            referenceType: 'ADJUSTMENT',
            referenceId: id,
        });
        return this.prisma.adjustment.update({
            where: { id },
            data: {
                status: 'APPLIED',
            },
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
                location: { select: { id: true, code: true } },
                createdByActor: {
                    select: {
                        id: true,
                        actorType: true,
                        user: { select: { id: true, email: true } },
                        clientAccount: { select: { id: true, email: true } },
                    },
                },
            },
        });
    }
    async reject(id, reason) {
        const adjustment = await this.findOne(id);
        if (adjustment.status === 'APPLIED') {
            throw new common_1.BadRequestException('Cannot reject an applied adjustment');
        }
        return this.prisma.adjustment.update({
            where: { id },
            data: {
                status: 'REJECTED',
                reason: reason?.trim() || adjustment.reason,
            },
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
                location: { select: { id: true, code: true } },
                createdByActor: {
                    select: {
                        id: true,
                        actorType: true,
                        user: { select: { id: true, email: true } },
                        clientAccount: { select: { id: true, email: true } },
                    },
                },
            },
        });
    }
};
exports.AdjustmentsService = AdjustmentsService;
exports.AdjustmentsService = AdjustmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService,
        approvals_service_1.ApprovalsService])
], AdjustmentsService);
//# sourceMappingURL=adjustments.service.js.map