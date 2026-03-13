import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateVasDto } from './dto/create-vas.dto';
import { UpdateVasDto } from './dto/update-vas.dto';
import { VasFilterDto } from './dto/vas-filter.dto';
import { CreateVasPricingDto } from './dto/create-vas-pricing.dto';
import { UpdateVasPricingDto } from './dto/update-vas-pricing.dto';
import { VasPricingFilterDto } from './dto/vas-pricing-filter.dto';
export declare class VasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private db;
    createVas(dto: CreateVasDto): Promise<unknown>;
    findManyVas(filter?: VasFilterDto): Promise<unknown[]>;
    findOneVas(id: string): Promise<{}>;
    updateVas(id: string, dto: UpdateVasDto): Promise<unknown>;
    createVasPricing(dto: CreateVasPricingDto): Promise<unknown>;
    findManyVasPricing(filter?: VasPricingFilterDto): Promise<unknown[]>;
    findOneVasPricing(id: string): Promise<{}>;
    updateVasPricing(id: string, dto: UpdateVasPricingDto): Promise<unknown>;
}
