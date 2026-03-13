import { VasService } from './vas.service';
import { CreateVasPricingDto } from './dto/create-vas-pricing.dto';
import { UpdateVasPricingDto } from './dto/update-vas-pricing.dto';
import { VasPricingFilterDto } from './dto/vas-pricing-filter.dto';
export declare class VasPricingController {
    private readonly vas;
    constructor(vas: VasService);
    create(dto: CreateVasPricingDto): Promise<unknown>;
    findMany(filter: VasPricingFilterDto): Promise<unknown[]>;
    findOne(id: string): Promise<{}>;
    update(id: string, dto: UpdateVasPricingDto): Promise<unknown>;
}
