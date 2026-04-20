import { PrismaService } from '../../database/prisma/prisma.service';
import { ApprovalReferenceType } from '../../common/enums/approval-reference-type.enum';
import { ApprovalFilterDto } from './dto/approval-filter.dto';
import { ApprovalDecisionDto } from './dto/approval-decision.dto';
export declare class ApprovalsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createRequest(input: {
        referenceType: ApprovalReferenceType;
        referenceId: string;
        requestedByActorId: string;
        approvalStep?: string;
        sequenceNo?: number;
        requestNotes?: string;
    }): Promise<unknown>;
    findMany(filter?: ApprovalFilterDto): Promise<Record<string, unknown>[]>;
    findOne(id: string): Promise<{}>;
    approve(id: string, approverActorId: string, dto: ApprovalDecisionDto): Promise<unknown>;
    reject(id: string, approverActorId: string, dto: ApprovalDecisionDto): Promise<unknown>;
}
