import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientFilterDto } from './dto/client-filter.dto';
import { CreateClientRoleDto } from './dto/create-client-role.dto';
import { UpdateClientRoleDto } from './dto/update-client-role.dto';
import { CreateClientAccountDto } from './dto/create-client-account.dto';
import { UpdateClientAccountDto } from './dto/update-client-account.dto';
import { SetClientAccountActiveDto } from './dto/set-client-account-active.dto';
import { OnboardClientDto } from './dto/onboard-client.dto';
export declare class ClientsController {
    private readonly clients;
    constructor(clients: ClientsService);
    create(dto: CreateClientDto): Promise<unknown>;
    findMany(filter: ClientFilterDto): Promise<unknown[]>;
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
    getRoleCatalog(): import("./client-permissions.catalog").ClientPermissionPanel[];
    findClientRoles(): Promise<{
        id: string;
        roleName: string;
    }[]>;
    findClientRolesWithPermissions(): Promise<{
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
    updateClientRole(roleId: string, dto: UpdateClientRoleDto): Promise<{
        id: string;
        isActive: boolean;
        roleName: string;
        permissionsJson: import("@prisma/client/runtime/library").JsonValue;
    }>;
    backfillClientRoles(): Promise<{
        updatedCount: number;
    }>;
    findOne(id: string): Promise<{}>;
    findAccounts(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        isActive: boolean;
        clientRoleId: string;
        roleName: string;
        createdAt: Date;
    }[]>;
<<<<<<< HEAD
=======
    createAccount(id: string, dto: CreateClientAccountDto): Promise<{
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
    updateAccount(id: string, accountId: string, dto: UpdateClientAccountDto): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        isActive: boolean;
        clientRoleId: string;
        roleName: string;
        createdAt: Date;
    }>;
    setAccountActive(id: string, accountId: string, dto: SetClientAccountActiveDto): Promise<{
        id: string;
        isActive: boolean;
    }>;
>>>>>>> d5f264cd6ecebd7ca41983abd6a16dca8a8da1cd
    update(id: string, dto: UpdateClientDto): Promise<unknown>;
}
