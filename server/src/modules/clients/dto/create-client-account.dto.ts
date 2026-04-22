import { IsEmail, IsString, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateClientAccountDto {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  firstName!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  lastName!: string;

  @IsEmail()
  email!: string;

  @IsUUID()
  clientRoleId!: string;
}
