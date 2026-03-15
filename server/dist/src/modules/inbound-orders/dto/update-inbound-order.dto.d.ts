import { OrderStatus } from '../../../common/enums/order-status.enum';
export declare class UpdateInboundOrderDto {
    orderNumber?: string;
    status?: OrderStatus;
    currentStage?: string;
    expectedDate?: string;
    warehouseId?: string;
}
