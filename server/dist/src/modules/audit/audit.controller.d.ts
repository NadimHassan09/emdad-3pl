import { AuditService } from './audit.service';
import { AuditLogFilterDto } from './dto/audit-log-filter.dto';
export declare class AuditController {
    private readonly audit;
    constructor(audit: AuditService);
    findMany(filter: AuditLogFilterDto): Promise<unknown[]>;
    findOne(id: string): Promise<{}>;
}
