import { IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateOutboundOrderClientPortalDto {
  @IsOptional()
  @IsString()
  currentStage?: string;

  @IsOptional()
  @IsDateString()
  expectedShipDate?: string;
}
