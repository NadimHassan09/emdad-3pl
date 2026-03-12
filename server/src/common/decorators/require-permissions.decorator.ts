import { SetMetadata } from '@nestjs/common';
import { AUTH } from '../constants/auth.constants';

/**
 * Require at least one of the given permissions for the route.
 * Use with PermissionsGuard (after JwtAuthGuard).
 */
export const RequirePermissions = (...permissions: string[]) =>
  SetMetadata(AUTH.REQUIRE_PERMISSIONS_KEY, permissions);
