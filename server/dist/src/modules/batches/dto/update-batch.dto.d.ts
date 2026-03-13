import { BatchStatus } from '../../../common/enums/batch-status.enum';
export declare class UpdateBatchDto {
    batchCode?: string;
    expiryDate?: string;
    manufacturingDate?: string;
    receivedDate?: string;
    lotNumber?: string;
    supplierBatchCode?: string;
    batchStatus?: BatchStatus;
}
