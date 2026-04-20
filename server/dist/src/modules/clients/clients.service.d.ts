import { PrismaService } from '../../database/prisma/prisma.service';
import { ActorsService } from '../actors/actors.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientFilterDto } from './dto/client-filter.dto';
import { CreateClientRoleDto } from './dto/create-client-role.dto';
import { UpdateClientRoleDto } from './dto/update-client-role.dto';
import { CreateClientAccountDto } from './dto/create-client-account.dto';
import { UpdateClientAccountDto } from './dto/update-client-account.dto';
import { OnboardClientDto } from './dto/onboard-client.dto';
export interface ClientAccountWithRelations {
    id: string;
    clientId: string;
    clientRoleId: string;
    email: string;
    passwordHash: string | null;
    firstName: string;
    lastName: string;
    isActive: boolean;
    client: {
        id: string;
        code: string;
        name: string;
        status: string;
        isActive: boolean;
    };
    clientRole: {
        id: string;
        roleName: string;
        permissionsJson: unknown;
    };
}
export declare class ClientsService {
    private readonly prisma;
    private readonly actors;
    constructor(prisma: PrismaService, actors: ActorsService);
    findClientAccountByEmail(email: string): Promise<ClientAccountWithRelations | null>;
    validateClientAccountCredentials(email: string, password: string): Promise<ClientAccountWithRelations>;
    create(dto: CreateClientDto): Promise<unknown>;
    getClientPermissionCatalog(): import("./client-permissions.catalog").ClientPermissionPanel[];
    findAllClientRoles(): Promise<{
        id: string;
        roleName: string;
    }[]>;
    findAllClientRolesWithPermissions(): Promise<{
        permissionsJson: {
            permissions: string[];
        };
        id: string;
        isActive: boolean;
        roleName: string;
    }[]>;
    createClientRole(dto: CreateClientRoleDto): Promise<{
        id: string;
        isActive: boolean;
        roleName: string;
        permissionsJson: import("@prisma/client/runtime/library").JsonValue;
    }>;
    backfillClientRolePermissions(): Promise<{
        updatedCount: number;
    }>;
    updateClientRole(roleId: string, dto: UpdateClientRoleDto): Promise<{
        id: string;
        isActive: boolean;
        roleName: string;
        permissionsJson: import("@prisma/client/runtime/library").JsonValue;
    }>;
    findMany(filter?: ClientFilterDto): Promise<unknown[]>;
    findOne(id: string): Promise<{}>;
    findAccounts(clientId: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        isActive: boolean;
        clientRoleId: string;
        roleName: string;
        createdAt: Date;
    }[]>;
    private ensureClientExists;
    private ensureActiveClientRole;
    private getClientAccountOrThrow;
    createAccount(clientId: string, dto: CreateClientAccountDto): Promise<{
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
    updateAccount(clientId: string, accountId: string, dto: UpdateClientAccountDto): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        isActive: boolean;
        clientRoleId: string;
        roleName: string;
        createdAt: Date;
    }>;
    setAccountActive(clientId: string, accountId: string, isActive: boolean): Promise<{
        id: string;
        isActive: boolean;
    }>;
    onboard(dto: OnboardClientDto): Promise<{
        client: unknown;
        accounts: {
            id: string;
            firstName: string;
            lastName: string;
            email: string;
            roleName: string;
            temporaryPassword: string;
        }[];
    }>;
    update(id: string, dto: UpdateClientDto): Promise<unknown>;
}
