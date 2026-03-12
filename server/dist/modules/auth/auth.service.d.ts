import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ClientsService } from '../clients/clients.service';
import { UsersService } from '../users/users.service';
import { ActorsService } from '../actors/actors.service';
import { AuthTokensResponseDto, AuthRefreshResponseDto, AuthMeResponseDto } from './dto/auth-response.dto';
export declare class AuthService {
    private readonly config;
    private readonly jwt;
    private readonly clients;
    private readonly users;
    private readonly actors;
    constructor(config: ConfigService, jwt: JwtService, clients: ClientsService, users: UsersService, actors: ActorsService);
    private getAccessExpiresIn;
    private getRefreshExpiresIn;
    clientLogin(email: string, password: string): Promise<AuthTokensResponseDto>;
    staffLogin(email: string, password: string): Promise<AuthTokensResponseDto>;
    refresh(refreshToken: string): AuthRefreshResponseDto;
    me(payload: JwtPayload): AuthMeResponseDto;
}
