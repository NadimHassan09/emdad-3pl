import { VasService } from './vas.service';
import { CreateVasDto } from './dto/create-vas.dto';
import { UpdateVasDto } from './dto/update-vas.dto';
import { VasFilterDto } from './dto/vas-filter.dto';
export declare class VasController {
    private readonly vas;
    constructor(vas: VasService);
    create(dto: CreateVasDto): Promise<unknown>;
    findMany(filter: VasFilterDto): Promise<unknown[]>;
    findOne(id: string): Promise<{}>;
    update(id: string, dto: UpdateVasDto): Promise<unknown>;
}
