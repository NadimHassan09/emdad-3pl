import { MovementType } from '../../../common/enums/movement-type.enum';
export declare class CreateLedgerEntryDto {
    clientId: string;
    warehouseId: string;
    productId: string;
    batchId?: string;
    locationId?: string;
    movementType: MovementType;
    qtyChange: number;
    referenceType?: string;
    referenceId?: string;
}
