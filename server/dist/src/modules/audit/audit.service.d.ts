import { PrismaService } from '../../database/prisma/prisma.service';
import { AuditLogFilterDto } from './dto/audit-log-filter.dto';
export interface AuditLogInput {
    actorId?: string;
    action: string;
    resourceType: string;
    resourceId?: string;
    ipAddress?: string;
    detailsJson?: Record<string, unknown>;
}
export declare class AuditService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    log(input: AuditLogInput): Promise<unknown>;
    findMany(filter?: AuditLogFilterDto): Promise<unknown[]>;
    findOne(id: string): Promise<{}>;
}
