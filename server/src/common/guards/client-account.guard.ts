import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { ActorType } from '../enums/actor-type.enum';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

/**
 * Restricts routes to authenticated client portal accounts (tenant users).
 * Internal staff JWTs do not carry clientId and must not use client-portal APIs.
 */
@Injectable()
export class ClientAccountGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context
      .switchToHttp()
      .getRequest<{ user?: JwtPayload }>();
    const user = request.user;
    if (
      !user ||
      user.actorType !== ActorType.CLIENT_ACCOUNT ||
      !user.clientId
    ) {
      throw new ForbiddenException(
        'This endpoint is only available to client portal accounts.',
      );
    }
    return true;
  }
}
