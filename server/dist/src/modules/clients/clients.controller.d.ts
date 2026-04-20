import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientFilterDto } from './dto/client-filter.dto';
export declare class ClientsController {
    private readonly clients;
    constructor(clients: ClientsService);
    create(dto: CreateClientDto): Promise<unknown>;
    findMany(filter: ClientFilterDto): Promise<unknown[]>;
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
    update(id: string, dto: UpdateClientDto): Promise<unknown>;
}
