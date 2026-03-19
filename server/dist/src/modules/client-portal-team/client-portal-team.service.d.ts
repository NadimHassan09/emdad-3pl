import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../database/prisma/prisma.service';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorsService } from '../actors/actors.service';
import { MailService } from '../mail/mail.service';
import { ClientPortalTeamQueryDto } from './dto/client-portal-team-query.dto';
import { InviteTeamAccountDto } from './dto/invite-team-account.dto';
import { UpdateTeamAccountDto } from './dto/update-team-account.dto';
export declare class ClientPortalTeamService {
    private readonly prisma;
    private readonly actors;
    private readonly mail;
    private readonly config;
    constructor(prisma: PrismaService, actors: ActorsService, mail: MailService, config: ConfigService);
    private requireClientAdmin;
    listRoles(): Promise<{
        id: string;
        roleName: string;
    }[]>;
    listAccounts(clientId: string, query?: ClientPortalTeamQueryDto): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        isActive: boolean;
        clientRoleId: string;
        roleName: string;
        createdAt: Date;
    }[]>;
    private getAccountInClientOrThrow;
    invite(actor: JwtPayload, clientId: string, dto: InviteTeamAccountDto): Promise<{
        account: {
            id: string;
            firstName: string;
            lastName: string;
            email: string;
            isActive: boolean;
            clientRoleId: string;
            roleName: string;
            createdAt: Date;
        };
        temporaryPassword: string;
        emailSent: boolean;
    }>;
    update(actor: JwtPayload, clientId: string, accountId: string, dto: UpdateTeamAccountDto): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        isActive: boolean;
        clientRoleId: string;
        roleName: string;
        createdAt: Date;
    }>;
    setActive(actor: JwtPayload, clientId: string, accountId: string, isActive: boolean): Promise<{
        id: string;
        isActive: boolean;
    }>;
}
