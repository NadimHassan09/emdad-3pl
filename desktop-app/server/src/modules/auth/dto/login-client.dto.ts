import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginClientDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(1, { message: 'Password is required' })
  password: string;
}
