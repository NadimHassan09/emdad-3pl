import { BillingService } from './billing.service';
import { CreateClientBillingPlanDto } from './dto/create-client-billing-plan.dto';
import { UpdateClientBillingPlanDto } from './dto/update-client-billing-plan.dto';
import { ClientBillingPlanFilterDto } from './dto/client-billing-plan-filter.dto';
export declare class ClientBillingPlansController {
    private readonly billing;
    constructor(billing: BillingService);
    create(dto: CreateClientBillingPlanDto): Promise<unknown>;
    findMany(filter: ClientBillingPlanFilterDto): Promise<unknown[]>;
    findOne(id: string): Promise<{}>;
    update(id: string, dto: UpdateClientBillingPlanDto): Promise<unknown>;
}
