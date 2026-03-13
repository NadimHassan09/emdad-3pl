import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { AuditLogFilterDto } from './dto/audit-log-filter.dto';

/** Prisma delegate type for audit_log when PrismaClient types are not resolved. */
interface PrismaWithAuditLog {
  auditLog: {
    create: (args: { data: Record<string, unknown> }) => Promise<unknown>;
    findMany: (args: {
      where?: Record<string, unknown>;
      orderBy?: Record<string, 'asc' | 'desc'>;
    }) => Promise<unknown[]>;
    findUnique: (args: { where: { id: string } }) => Promise<unknown>;
  };
}

/** Input for appending an audit log entry. Other modules call this to record actions. */
export interface AuditLogInput {
  actorId?: string;
  action: string;
  resourceType: string;
  resourceId?: string;
  ipAddress?: string;
  detailsJson?: Record<string, unknown>;
}

@Injectable()
export class AuditService {
  constructor(private readonly prisma: PrismaService) {}

  /** Append-only: create one audit log entry. Reusable from auth, inbound, outbound, adjustments, approvals, billing. */
  async log(input: AuditLogInput) {
    const db = this.prisma as unknown as PrismaWithAuditLog;
    return db.auditLog.create({
      data: {
        actorId: input.actorId ?? null,
        action: input.action,
        resourceType: input.resourceType,
        resourceId: input.resourceId ?? null,
        ipAddress: input.ipAddress ?? null,
        detailsJson: input.detailsJson ?? {},
      },
    });
  }

  async findMany(filter?: AuditLogFilterDto) {
    const db = this.prisma as unknown as PrismaWithAuditLog;
    const where: Record<string, unknown> = {};
    if (filter?.actorId) where.actorId = filter.actorId;
    if (filter?.resourceType) where.resourceType = filter.resourceType;
    if (filter?.resourceId) where.resourceId = filter.resourceId;
    if (filter?.action) where.action = filter.action;
    if (filter?.dateFrom || filter?.dateTo) {
      where.createdAt = {};
      if (filter.dateFrom)
        (where.createdAt as Record<string, unknown>).gte = new Date(
          filter.dateFrom,
        );
      if (filter.dateTo)
        (where.createdAt as Record<string, unknown>).lte = new Date(
          filter.dateTo,
        );
    }
    return db.auditLog.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const db = this.prisma as unknown as PrismaWithAuditLog;
    const entry = await db.auditLog.findUnique({ where: { id } });
    if (!entry) throw new NotFoundException('Audit log not found');
    return entry;
  }
}
