import { BillingService } from './billing.service';
import { CreateBillingPlanDto } from './dto/create-billing-plan.dto';
import { UpdateBillingPlanDto } from './dto/update-billing-plan.dto';
import { BillingPlanFilterDto } from './dto/billing-plan-filter.dto';
export declare class BillingPlansController {
    private readonly billing;
    constructor(billing: BillingService);
    create(dto: CreateBillingPlanDto): Promise<unknown>;
    findMany(filter: BillingPlanFilterDto): Promise<unknown[]>;
    findOne(id: string): Promise<{}>;
    update(id: string, dto: UpdateBillingPlanDto): Promise<unknown>;
}
