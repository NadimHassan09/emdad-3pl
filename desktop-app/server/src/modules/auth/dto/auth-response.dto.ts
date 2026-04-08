import { JwtPayload } from '../../../common/interfaces/jwt-payload.interface';

/**
 * Normalized identity returned by login and GET /auth/me.
 * Matches JwtPayload shape so clients get consistent identity.
 */
export type AuthMeResponseDto = JwtPayload;

export interface AuthTokensResponseDto {
  accessToken: string;
  refreshToken: string;
  /** Access token TTL in seconds */
  expiresIn: number;
  user: AuthMeResponseDto;
}

export interface AuthRefreshResponseDto {
  accessToken: string;
  /** Access token TTL in seconds */
  expiresIn: number;
  user: AuthMeResponseDto;
}
