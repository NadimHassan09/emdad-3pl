import { JwtPayload } from '../../../common/interfaces/jwt-payload.interface';
export type AuthMeResponseDto = JwtPayload;
export interface AuthTokensResponseDto {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    user: AuthMeResponseDto;
}
export interface AuthRefreshResponseDto {
    accessToken: string;
    expiresIn: number;
    user: AuthMeResponseDto;
}
