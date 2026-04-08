import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { AUTH } from '../constants/auth.constants';

/**
 * Guard that checks the current actor has at least one of the required permissions.
 * Use with @RequirePermissions('permission:a', 'permission:b').
 * Must be used after JwtAuthGuard so request.user is set.
 */
@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const required = this.reflector.getAllAndOverride<string[]>(
      AUTH.REQUIRE_PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!required?.length) return true;

    const request = context.switchToHttp().getRequest<{ user?: JwtPayload }>();
    const payload = request.user;
    if (!payload?.permissions)
      throw new ForbiddenException('Insufficient permissions');

    const hasOne = required.some((p) => payload.permissions.includes(p));
    if (!hasOne) throw new ForbiddenException('Insufficient permissions');
    return true;
  }
}
