import { OrderStatus } from '../../../common/enums/order-status.enum';
export declare class InboundOrderFilterDto {
    clientId?: string;
    warehouseId?: string;
    status?: OrderStatus;
    orderNumber?: string;
    expectedDateFrom?: string;
    expectedDateTo?: string;
}
