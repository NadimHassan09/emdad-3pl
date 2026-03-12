import { PrismaService } from '../../database/prisma/prisma.service';
import { ClientStatus } from '@prisma/client';
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
        status: ClientStatus;
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
    constructor(prisma: PrismaService);
    findClientAccountByEmail(email: string): Promise<ClientAccountWithRelations | null>;
    validateClientAccountCredentials(email: string, password: string): Promise<ClientAccountWithRelations>;
}
