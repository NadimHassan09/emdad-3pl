import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginClientDto } from './dto/login-client.dto';
import { LoginStaffDto } from './dto/login-staff.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('client/login')
  async clientLogin(@Body() dto: LoginClientDto) {
    return this.auth.clientLogin(dto.email, dto.password);
  }

  @Post('staff/login')
  async staffLogin(@Body() dto: LoginStaffDto) {
    return this.auth.staffLogin(dto.email, dto.password);
  }

  @Post('refresh')
  refresh(@Body() dto: RefreshTokenDto) {
    return this.auth.refresh(dto.refreshToken);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@CurrentActor() payload: JwtPayload) {
    return this.auth.me(payload);
  }
}
