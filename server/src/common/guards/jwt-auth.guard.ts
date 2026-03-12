import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AUTH } from '../constants/auth.constants';

/**
 * Guard for routes that require a valid access token.
 * Attach to controllers or handlers; validates JWT and sets request.user to JwtPayload.
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard(AUTH.JWT_ACCESS_STRATEGY) {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest<TUser>(err: Error | null, user: TUser | false): TUser {
    if (err || !user) {
      throw err ?? new UnauthorizedException('Invalid or expired token');
    }
    return user;
  }
}
