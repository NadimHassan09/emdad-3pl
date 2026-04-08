import { ActorType } from '../enums/actor-type.enum';

/**
 * Normalized identity carried in JWT and returned by GET /auth/me.
 * Operational modules use actorId for accountability (createdByActorId, etc.).
 */
export interface JwtPayload {
  /** Unified actor id; use for createdByActorId, approvedByActorId, etc. */
  actorId: string;
  actorType: ActorType;
  /** user id (INTERNAL_USER) or client_account id (CLIENT_ACCOUNT) */
  sub: string;
  /** Present only for CLIENT_ACCOUNT; tenant company id */
  clientId?: string;
  /** Role name from user_roles or client_roles */
  role: string;
  /** Parsed from role's permissions_json; empty array if none */
  permissions: string[];
  /** Token type to distinguish access vs refresh */
  type: 'access' | 'refresh';
}
