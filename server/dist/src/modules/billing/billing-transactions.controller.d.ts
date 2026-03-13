import { BillingService } from './billing.service';
import { BillingTransactionFilterDto } from './dto/billing-transaction-filter.dto';
export declare class BillingTransactionsController {
    private readonly billing;
    constructor(billing: BillingService);
    findMany(filter: BillingTransactionFilterDto): Promise<unknown[]>;
}
