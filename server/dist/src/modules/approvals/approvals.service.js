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
exports.ApprovalsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
const approval_status_enum_1 = require("../../common/enums/approval-status.enum");
let ApprovalsService = class ApprovalsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createRequest(input) {
        const db = this.prisma;
        return db.approval.create({
            data: {
                referenceType: input.referenceType,
                referenceId: input.referenceId,
                requestedByActorId: input.requestedByActorId,
                approvalStep: input.approvalStep ?? 'INITIAL',
                sequenceNo: input.sequenceNo ?? 1,
                requestNotes: input.requestNotes,
                status: approval_status_enum_1.ApprovalStatus.PENDING,
            },
        });
    }
    async findMany(filter) {
        const db = this.prisma;
        const where = {};
        if (filter?.status)
            where.status = filter.status;
        if (filter?.referenceType)
            where.referenceType = filter.referenceType;
        if (filter?.requestedByActorId)
            where.requestedByActorId = filter.requestedByActorId;
        return db.approval.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const db = this.prisma;
        const approval = await db.approval.findUnique({ where: { id } });
        if (!approval)
            throw new common_1.NotFoundException('Approval not found');
        return approval;
    }
    async approve(id, approverActorId, dto) {
        const db = this.prisma;
        const approval = await this.findOne(id);
        const status = approval.status;
        if (status !== approval_status_enum_1.ApprovalStatus.PENDING) {
            throw new common_1.BadRequestException('Only pending approvals can be approved');
        }
        return db.approval.update({
            where: { id },
            data: {
                status: approval_status_enum_1.ApprovalStatus.APPROVED,
                approvedByActorId: approverActorId,
                decisionNotes: dto.decisionNotes,
                decisionAt: new Date(),
            },
        });
    }
    async reject(id, approverActorId, dto) {
        const db = this.prisma;
        const approval = await this.findOne(id);
        const status = approval.status;
        if (status !== approval_status_enum_1.ApprovalStatus.PENDING) {
            throw new common_1.BadRequestException('Only pending approvals can be rejected');
        }
        return db.approval.update({
            where: { id },
            data: {
                status: approval_status_enum_1.ApprovalStatus.REJECTED,
                approvedByActorId: approverActorId,
                decisionNotes: dto.decisionNotes,
                decisionAt: new Date(),
            },
        });
    }
};
exports.ApprovalsService = ApprovalsService;
exports.ApprovalsService = ApprovalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ApprovalsService);
//# sourceMappingURL=approvals.service.js.map