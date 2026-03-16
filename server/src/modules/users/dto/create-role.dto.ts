import { IsString, IsOptional, IsArray, MinLength } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @MinLength(1, { message: 'Role name is required' })
  roleName: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  permissions?: string[];
}
