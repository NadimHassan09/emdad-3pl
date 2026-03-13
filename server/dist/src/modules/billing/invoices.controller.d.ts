import { BillingService } from './billing.service';
import { GenerateInvoiceDto } from './dto/generate-invoice.dto';
import { InvoiceFilterDto } from './dto/invoice-filter.dto';
export declare class InvoicesController {
    private readonly billing;
    constructor(billing: BillingService);
    generate(dto: GenerateInvoiceDto): Promise<{}>;
    findMany(filter: InvoiceFilterDto): Promise<unknown[]>;
    findOne(id: string): Promise<{}>;
}
