import { IsString, IsOptional, IsEnum, IsDateString } from 'class-validator';
import { MinLength, MaxLength } from 'class-validator';
import { BatchStatus } from '../../../common/enums/batch-status.enum';

export class UpdateBatchDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  batchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  lotNumber?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  supplierBatchCode?: string;

  @IsOptional()
  @IsEnum(BatchStatus)
  batchStatus?: BatchStatus;
}
