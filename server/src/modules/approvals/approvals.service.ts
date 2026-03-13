import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { ApprovalStatus } from '../../common/enums/approval-status.enum';
import { ApprovalReferenceType } from '../../common/enums/approval-reference-type.enum';
import { ApprovalFilterDto } from './dto/approval-filter.dto';
import { ApprovalDecisionDto } from './dto/approval-decision.dto';

interface PrismaWithApprovals {
  approval: {
    findMany: (args: {
      where?: Record<string, unknown>;
      orderBy?: Record<string, 'asc' | 'desc'>;
    }) => Promise<unknown[]>;
    findUnique: (args: { where: { id: string } }) => Promise<unknown>;
    create: (args: { data: Record<string, unknown> }) => Promise<unknown>;
    update: (args: {
      where: { id: string };
      data: Record<string, unknown>;
    }) => Promise<unknown>;
  };
}

@Injectable()
export class ApprovalsService {
  constructor(private readonly prisma: PrismaService) {}

  /** Exposed for other modules to create approval requests. */
  async createRequest(input: {
    referenceType: ApprovalReferenceType;
    referenceId: string;
    requestedByActorId: string;
    approvalStep?: string;
    sequenceNo?: number;
    requestNotes?: string;
  }) {
    const db = this.prisma as unknown as PrismaWithApprovals;
    return db.approval.create({
      data: {
        referenceType: input.referenceType,
        referenceId: input.referenceId,
        requestedByActorId: input.requestedByActorId,
        approvalStep: input.approvalStep ?? 'INITIAL',
        sequenceNo: input.sequenceNo ?? 1,
        requestNotes: input.requestNotes,
        status: ApprovalStatus.PENDING,
      },
    });
  }

  async findMany(filter?: ApprovalFilterDto) {
    const db = this.prisma as unknown as PrismaWithApprovals;
    const where: Record<string, unknown> = {};

    if (filter?.status) where.status = filter.status;
    if (filter?.referenceType) where.referenceType = filter.referenceType;
    if (filter?.requestedByActorId)
      where.requestedByActorId = filter.requestedByActorId;

    return db.approval.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const db = this.prisma as unknown as PrismaWithApprovals;
    const approval = await db.approval.findUnique({ where: { id } });
    if (!approval) throw new NotFoundException('Approval not found');
    return approval;
  }

  async approve(id: string, approverActorId: string, dto: ApprovalDecisionDto) {
    const db = this.prisma as unknown as PrismaWithApprovals;
    const approval = await this.findOne(id);
    const status = (approval as { status?: ApprovalStatus }).status;
    if (status !== ApprovalStatus.PENDING) {
      throw new BadRequestException('Only pending approvals can be approved');
    }

    return db.approval.update({
      where: { id },
      data: {
        status: ApprovalStatus.APPROVED,
        approvedByActorId: approverActorId,
        decisionNotes: dto.decisionNotes,
        decisionAt: new Date(),
      },
    });
  }

  async reject(id: string, approverActorId: string, dto: ApprovalDecisionDto) {
    const db = this.prisma as unknown as PrismaWithApprovals;
    const approval = await this.findOne(id);
    const status = (approval as { status?: ApprovalStatus }).status;
    if (status !== ApprovalStatus.PENDING) {
      throw new BadRequestException('Only pending approvals can be rejected');
    }

    return db.approval.update({
      where: { id },
      data: {
        status: ApprovalStatus.REJECTED,
        approvedByActorId: approverActorId,
        decisionNotes: dto.decisionNotes,
        decisionAt: new Date(),
      },
    });
  }
}
