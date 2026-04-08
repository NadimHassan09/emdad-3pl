import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

/**
 * Injects the validated JWT payload (identity) into a handler parameter.
 * Use only on routes protected by JwtAuthGuard.
 */
export const CurrentActor = createParamDecorator(
  (
    data: keyof JwtPayload | undefined,
    ctx: ExecutionContext,
  ): JwtPayload | JwtPayload[keyof JwtPayload] => {
    const request = ctx.switchToHttp().getRequest<{ user?: JwtPayload }>();
    const user = request.user;
    return data && user ? user[data] : (user as JwtPayload);
  },
);
