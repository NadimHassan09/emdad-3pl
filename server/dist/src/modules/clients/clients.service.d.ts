import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientFilterDto } from './dto/client-filter.dto';
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
    constructor(prisma: PrismaService);
    findClientAccountByEmail(email: string): Promise<ClientAccountWithRelations | null>;
    validateClientAccountCredentials(email: string, password: string): Promise<ClientAccountWithRelations>;
    create(dto: CreateClientDto): Promise<unknown>;
    findMany(filter?: ClientFilterDto): Promise<unknown[]>;
    findOne(id: string): Promise<{}>;
    update(id: string, dto: UpdateClientDto): Promise<unknown>;
}
