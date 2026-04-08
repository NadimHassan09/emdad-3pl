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
      include?: Record<string, unknown>;
    }) => Promise<unknown[]>;
    findUnique: (args: { where: { id: string }; include?: Record<string, unknown> }) => Promise<unknown>;
    create: (args: { data: Record<string, unknown> }) => Promise<unknown>;
    update: (args: {
      where: { id: string };
      data: Record<string, unknown>;
      include?: Record<string, unknown>;
    }) => Promise<unknown>;
  };
  inboundOrder: {
    findUnique: (args: { where: { id: string }; select?: Record<string, unknown> }) => Promise<unknown>;
    update: (args: { where: { id: string }; data: Record<string, unknown> }) => Promise<unknown>;
  };
  outboundOrder: {
    findUnique: (args: { where: { id: string }; select?: Record<string, unknown> }) => Promise<unknown>;
    update: (args: { where: { id: string }; data: Record<string, unknown> }) => Promise<unknown>;
  };
}

interface OrderInfo {
  orderNumber?: string | null;
  status?: string;
  client?: { name: string; code?: string } | null;
  warehouse?: { name: string } | null;
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

    const rows = await db.approval.findMany({
      where,
      include: {
        requestedByActor: {
          select: {
            id: true,
            actorType: true,
            user: { select: { id: true, email: true } },
            clientAccount: { select: { id: true, email: true } },
          },
        },
        approvedByActor: {
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

    // Enrich ORDER approvals with order details
    return Promise.all(
      (rows as Array<Record<string, unknown>>).map(async (row) => {
        if (row.referenceType !== ApprovalReferenceType.ORDER) return row;

        const refId = row.referenceId as string;
        const step = row.approvalStep as string;
        const orderSelect = {
          orderNumber: true,
          status: true,
          client: { select: { name: true, code: true } },
          warehouse: { select: { name: true } },
        };

        let orderInfo: OrderInfo | null = null;
        try {
          if (step === 'INBOUND_ORDER') {
            orderInfo = (await db.inboundOrder.findUnique({
              where: { id: refId },
              select: orderSelect,
            })) as OrderInfo | null;
          } else if (step === 'OUTBOUND_ORDER') {
            orderInfo = (await db.outboundOrder.findUnique({
              where: { id: refId },
              select: orderSelect,
            })) as OrderInfo | null;
          }
        } catch {
          // order may not exist yet; ignore
        }

        return { ...row, orderInfo };
      }),
    );
  }

  async findOne(id: string) {
    const db = this.prisma as unknown as PrismaWithApprovals;
    const approval = await db.approval.findUnique({
      where: { id },
      include: {
        requestedByActor: {
          select: {
            id: true,
            actorType: true,
            user: { select: { id: true, email: true } },
            clientAccount: { select: { id: true, email: true } },
          },
        },
        approvedByActor: {
          select: {
            id: true,
            actorType: true,
            user: { select: { id: true, email: true } },
            clientAccount: { select: { id: true, email: true } },
          },
        },
      },
    });
    if (!approval) throw new NotFoundException('Approval not found');
    return approval;
  }

  async approve(id: string, approverActorId: string, dto: ApprovalDecisionDto) {
    const db = this.prisma as unknown as PrismaWithApprovals;
    const approval = await this.findOne(id);
    const approvalRecord = approval as Record<string, unknown>;
    if (approvalRecord.status !== ApprovalStatus.PENDING) {
      throw new BadRequestException('Only pending approvals can be approved');
    }

    const updated = await db.approval.update({
      where: { id },
      data: {
        status: ApprovalStatus.APPROVED,
        approvedByActorId: approverActorId,
        decisionNotes: dto.decisionNotes,
        decisionAt: new Date(),
      },
      include: {
        requestedByActor: {
          select: {
            id: true,
            actorType: true,
            user: { select: { id: true, email: true } },
            clientAccount: { select: { id: true, email: true } },
          },
        },
        approvedByActor: {
          select: {
            id: true,
            actorType: true,
            user: { select: { id: true, email: true } },
            clientAccount: { select: { id: true, email: true } },
          },
        },
      },
    });

    // Propagate approval to the referenced order
    if (approvalRecord.referenceType === ApprovalReferenceType.ORDER) {
      const refId = approvalRecord.referenceId as string;
      const step = approvalRecord.approvalStep as string;
      try {
        if (step === 'INBOUND_ORDER') {
          await db.inboundOrder.update({ where: { id: refId }, data: { status: 'IN_PROGRESS' } });
        } else if (step === 'OUTBOUND_ORDER') {
          await db.outboundOrder.update({ where: { id: refId }, data: { status: 'IN_PROGRESS' } });
        }
      } catch {
        // order may have been deleted; ignore
      }
    }

    return updated;
  }

  async reject(id: string, approverActorId: string, dto: ApprovalDecisionDto) {
    const db = this.prisma as unknown as PrismaWithApprovals;
    const approval = await this.findOne(id);
    const approvalRecord = approval as Record<string, unknown>;
    if (approvalRecord.status !== ApprovalStatus.PENDING) {
      throw new BadRequestException('Only pending approvals can be rejected');
    }

    const updated = await db.approval.update({
      where: { id },
      data: {
        status: ApprovalStatus.REJECTED,
        approvedByActorId: approverActorId,
        decisionNotes: dto.decisionNotes,
        decisionAt: new Date(),
      },
      include: {
        requestedByActor: {
          select: {
            id: true,
            actorType: true,
            user: { select: { id: true, email: true } },
            clientAccount: { select: { id: true, email: true } },
          },
        },
        approvedByActor: {
          select: {
            id: true,
            actorType: true,
            user: { select: { id: true, email: true } },
            clientAccount: { select: { id: true, email: true } },
          },
        },
      },
    });

    // Propagate rejection to the referenced order
    if (approvalRecord.referenceType === ApprovalReferenceType.ORDER) {
      const refId = approvalRecord.referenceId as string;
      const step = approvalRecord.approvalStep as string;
      try {
        if (step === 'INBOUND_ORDER') {
          await db.inboundOrder.update({ where: { id: refId }, data: { status: 'CANCELLED' } });
        } else if (step === 'OUTBOUND_ORDER') {
          await db.outboundOrder.update({ where: { id: refId }, data: { status: 'CANCELLED' } });
        }
      } catch {
        // order may have been deleted; ignore
      }
    }

    return updated;
  }
}
