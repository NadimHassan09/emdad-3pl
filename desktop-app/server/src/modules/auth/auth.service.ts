import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ActorType } from '../../common/enums/actor-type.enum';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ClientsService } from '../clients/clients.service';
import { UsersService } from '../users/users.service';
import { ActorsService } from '../actors/actors.service';
import {
  AuthTokensResponseDto,
  AuthRefreshResponseDto,
  AuthMeResponseDto,
} from './dto/auth-response.dto';

function verifyRefreshToken(
  jwtService: { verify: (token: string) => unknown },
  token: string,
): JwtPayload {
  return jwtService.verify(token) as JwtPayload;
}

function parsePermissions(permissionsJson: unknown): string[] {
  if (Array.isArray(permissionsJson)) {
    return permissionsJson.filter((p): p is string => typeof p === 'string');
  }
  if (
    permissionsJson &&
    typeof permissionsJson === 'object' &&
    'permissions' in permissionsJson
  ) {
    const p = (permissionsJson as { permissions: unknown }).permissions;
    return Array.isArray(p)
      ? p.filter((x): x is string => typeof x === 'string')
      : [];
  }
  return [];
}

@Injectable()
export class AuthService {
  constructor(
    private readonly config: ConfigService,
    private readonly jwt: JwtService,
    private readonly clients: ClientsService,
    private readonly users: UsersService,
    private readonly actors: ActorsService,
  ) {}

  private getAccessExpiresIn(): number {
    const val = this.config.get<string | number>('JWT_ACCESS_EXPIRES_IN', 900);
    return typeof val === 'string' ? parseInt(val, 10) : val;
  }

  private getRefreshExpiresIn(): number {
    const val = this.config.get<string | number>(
      'JWT_REFRESH_EXPIRES_IN',
      604800,
    );
    return typeof val === 'string' ? parseInt(val, 10) : val;
  }

  async clientLogin(
    email: string,
    password: string,
  ): Promise<AuthTokensResponseDto> {
    const account = await this.clients.validateClientAccountCredentials(
      email,
      password,
    );
    const actor = await this.actors.getOrCreateForClientAccount(account.id);
    const role = account.clientRole.roleName;
    const permissions = parsePermissions(account.clientRole.permissionsJson);
    const payload: JwtPayload = {
      actorId: actor.id,
      actorType: ActorType.CLIENT_ACCOUNT,
      sub: account.id,
      clientId: account.clientId,
      role,
      permissions,
      type: 'access',
    };
    const refreshPayload: JwtPayload = { ...payload, type: 'refresh' };
    const accessToken = this.jwt.sign(payload as object, {
      expiresIn: this.getAccessExpiresIn(),
    });
    const refreshToken = this.jwt.sign(refreshPayload as object, {
      expiresIn: this.getRefreshExpiresIn(),
    });
    return {
      accessToken,
      refreshToken,
      expiresIn: this.getAccessExpiresIn(),
      user: payload,
    };
  }

  async staffLogin(
    email: string,
    password: string,
  ): Promise<AuthTokensResponseDto> {
    const user = await this.users.validateUserCredentials(email, password);
    const actor = await this.actors.getOrCreateForUser(user.id);
    const role = user.internalRole?.roleName ?? '';
    const permissions = user.internalRole
      ? parsePermissions(user.internalRole.permissionsJson)
      : [];
    const payload: JwtPayload = {
      actorId: actor.id,
      actorType: ActorType.INTERNAL_USER,
      sub: user.id,
      role,
      permissions,
      type: 'access',
    };
    const refreshPayload: JwtPayload = { ...payload, type: 'refresh' };
    const accessToken = this.jwt.sign(payload as object, {
      expiresIn: this.getAccessExpiresIn(),
    });
    const refreshToken = this.jwt.sign(refreshPayload as object, {
      expiresIn: this.getRefreshExpiresIn(),
    });
    return {
      accessToken,
      refreshToken,
      expiresIn: this.getAccessExpiresIn(),
      user: payload,
    };
  }

  /**
   * Validate refresh token and return new access token and identity.
   * Refresh token payload must have type: 'refresh'.
   */
  refresh(refreshToken: string): AuthRefreshResponseDto {
    let payload: JwtPayload;
    try {
      const decoded = verifyRefreshToken(this.jwt, refreshToken);
      if (decoded.type !== 'refresh')
        throw new UnauthorizedException('Invalid token type');
      payload = decoded;
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
    const accessPayload: JwtPayload = { ...payload, type: 'access' };
    const accessToken = this.jwt.sign(accessPayload as object, {
      expiresIn: this.getAccessExpiresIn(),
    });
    return {
      accessToken,
      expiresIn: this.getAccessExpiresIn(),
      user: accessPayload,
    };
  }

  /** Return current identity from validated JWT payload (for GET /auth/me). */
  me(payload: JwtPayload): AuthMeResponseDto {
    return payload;
  }
}
