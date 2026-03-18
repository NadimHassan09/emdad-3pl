import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ClientPortalTeamService } from './client-portal-team.service';
import { ClientPortalTeamQueryDto } from './dto/client-portal-team-query.dto';
import { InviteTeamAccountDto } from './dto/invite-team-account.dto';
import { UpdateTeamAccountDto } from './dto/update-team-account.dto';
import { SetTeamAccountActiveDto } from './dto/set-team-account-active.dto';
export declare class ClientPortalTeamController {
    private readonly team;
    constructor(team: ClientPortalTeamService);
    listRoles(): Promise<{
        id: string;
        roleName: string;
    }[]>;
    listAccounts(actor: JwtPayload, query: ClientPortalTeamQueryDto): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        isActive: boolean;
        clientRoleId: string;
        roleName: string;
        createdAt: Date;
    }[]>;
    invite(actor: JwtPayload, dto: InviteTeamAccountDto): Promise<{
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
    }>;
    update(id: string, actor: JwtPayload, dto: UpdateTeamAccountDto): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        isActive: boolean;
        clientRoleId: string;
        roleName: string;
        createdAt: Date;
    }>;
    setActive(id: string, actor: JwtPayload, dto: SetTeamAccountActiveDto): Promise<{
        id: string;
        isActive: boolean;
    }>;
}
