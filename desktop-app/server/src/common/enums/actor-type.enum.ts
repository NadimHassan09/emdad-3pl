/**
 * Unified actor type; matches Prisma actor_type / schema.sql.
 * Use this in app code (DTOs, JWT payload) to avoid depending on @prisma/client enum export.
 */
export enum ActorType {
  INTERNAL_USER = 'INTERNAL_USER',
  CLIENT_ACCOUNT = 'CLIENT_ACCOUNT',
  SYSTEM = 'SYSTEM',
}
