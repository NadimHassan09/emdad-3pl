import { IsOptional, IsEnum, IsUUID } from 'class-validator';
import { ApprovalStatus } from '../../../common/enums/approval-status.enum';
import { ApprovalReferenceType } from '../../../common/enums/approval-reference-type.enum';

export class ApprovalFilterDto {
  @IsOptional()
  @IsEnum(ApprovalStatus)
  status?: ApprovalStatus;

  @IsOptional()
  @IsEnum(ApprovalReferenceType)
  referenceType?: ApprovalReferenceType;

  @IsOptional()
  @IsUUID()
  requestedByActorId?: string;
}
