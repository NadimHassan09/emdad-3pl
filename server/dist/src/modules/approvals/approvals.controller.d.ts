import { ApprovalsService } from './approvals.service';
import { ApprovalFilterDto } from './dto/approval-filter.dto';
import { ApprovalDecisionDto } from './dto/approval-decision.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
export declare class ApprovalsController {
    private readonly approvals;
    constructor(approvals: ApprovalsService);
    findMany(filter: ApprovalFilterDto): Promise<unknown[]>;
    findOne(id: string): Promise<{}>;
    approve(id: string, dto: ApprovalDecisionDto, payload: JwtPayload): Promise<unknown>;
    reject(id: string, dto: ApprovalDecisionDto, payload: JwtPayload): Promise<unknown>;
}
