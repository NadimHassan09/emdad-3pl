import { IsOptional, IsBoolean, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';
import { ClientStatus } from '../../../common/enums/client-status.enum';

export class ClientFilterDto {
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === true || value === 'true')
  isActive?: boolean;

  @IsOptional()
  @IsEnum(ClientStatus)
  status?: ClientStatus;
}
