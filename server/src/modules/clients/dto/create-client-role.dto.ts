import { IsArray, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateClientRoleDto {
  @IsString()
  @MinLength(1, { message: 'Role name is required' })
  @MaxLength(120)
  roleName!: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  permissions?: string[];
}
