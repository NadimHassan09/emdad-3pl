import { ApprovalStatus } from '../../../common/enums/approval-status.enum';
import { ApprovalReferenceType } from '../../../common/enums/approval-reference-type.enum';
export declare class ApprovalFilterDto {
    status?: ApprovalStatus;
    referenceType?: ApprovalReferenceType;
    requestedByActorId?: string;
}
