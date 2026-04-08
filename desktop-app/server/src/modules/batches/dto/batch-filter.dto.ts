import { IsOptional, IsUUID, IsEnum } from 'class-validator';
import { BatchStatus } from '../../../common/enums/batch-status.enum';

export class BatchFilterDto {
  @IsOptional()
  @IsUUID()
  productId?: string;

  @IsOptional()
  @IsEnum(BatchStatus)
  batchStatus?: BatchStatus;
}
