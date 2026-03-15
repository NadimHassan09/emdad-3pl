import { IsUUID, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAllocationDto } from './create-allocation.dto';

export class CreateReservationDto {
  @IsUUID()
  @IsNotEmpty()
  outboundOrderId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAllocationDto)
  allocations: CreateAllocationDto[];
}


