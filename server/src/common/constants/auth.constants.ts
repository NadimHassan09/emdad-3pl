/**
 * Auth-related constants. Avoid hardcoded strings in guards and strategies.
 */
export const AUTH = {
  /** JWT strategy name for access token */
  JWT_ACCESS_STRATEGY: 'jwt-access',
  /** JWT strategy name for refresh token */
  JWT_REFRESH_STRATEGY: 'jwt-refresh',
  /** Request property key for the validated JWT payload */
  REQUEST_USER_KEY: 'user',
  /** Metadata key for @RequirePermissions() */
  REQUIRE_PERMISSIONS_KEY: 'requirePermissions',
} as const;
