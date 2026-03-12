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
    update(id: string, dto: UpdateClientDto): Promise<unknown>;
}
