import { IsUUID, IsNotEmpty } from 'class-validator';

export class AssignTaskWorkOrderDto {
  @IsUUID()
  @IsNotEmpty()
  assignedUserId: string;
}

