import { InvoiceStatus } from '../../../common/enums/invoice-status.enum';
export declare class ClientPortalInvoiceQueryDto {
    status?: InvoiceStatus;
    periodFrom?: string;
    periodTo?: string;
}
