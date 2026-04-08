import { IsOptional, IsString, IsIn, IsDateString } from 'class-validator';

export class ClientPortalNotificationQueryDto {
  @IsOptional()
  @IsIn(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'])
  importance?: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

  @IsOptional()
  @IsIn(['UNREAD', 'READ'])
  readStatus?: 'UNREAD' | 'READ';

  @IsOptional()
  @IsString()
  referenceType?: string;

  @IsOptional()
  @IsDateString()
  dateFrom?: string;

  @IsOptional()
  @IsDateString()
  dateTo?: string;
}
