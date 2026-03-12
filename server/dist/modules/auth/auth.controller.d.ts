import { AuthService } from './auth.service';
import { LoginClientDto } from './dto/login-client.dto';
import { LoginStaffDto } from './dto/login-staff.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
export declare class AuthController {
    private readonly auth;
    constructor(auth: AuthService);
    clientLogin(dto: LoginClientDto): Promise<import("./dto/auth-response.dto").AuthTokensResponseDto>;
    staffLogin(dto: LoginStaffDto): Promise<import("./dto/auth-response.dto").AuthTokensResponseDto>;
    refresh(dto: RefreshTokenDto): import("./dto/auth-response.dto").AuthRefreshResponseDto;
    me(payload: JwtPayload): JwtPayload;
}
