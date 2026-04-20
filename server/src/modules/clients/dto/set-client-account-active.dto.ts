import { IsBoolean } from 'class-validator';

export class SetClientAccountActiveDto {
  @IsBoolean()
  isActive!: boolean;
}
