import { IsBoolean } from 'class-validator';

export class SetTeamAccountActiveDto {
  @IsBoolean()
  isActive!: boolean;
}
