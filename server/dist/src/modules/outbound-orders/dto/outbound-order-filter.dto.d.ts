import { OrderStatus } from '../../../common/enums/order-status.enum';
export declare class OutboundOrderFilterDto {
    clientId?: string;
    warehouseId?: string;
    status?: OrderStatus;
    orderNumber?: string;
}
