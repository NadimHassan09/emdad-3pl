import { OrderStatus } from './inbound-order-filter.dto';
export declare class UpdateInboundOrderDto {
    orderNumber?: string;
    status?: OrderStatus;
    currentStage?: string;
    expectedDate?: string;
}
