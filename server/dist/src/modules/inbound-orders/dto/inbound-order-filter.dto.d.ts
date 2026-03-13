export declare enum OrderStatus {
    DRAFT = "DRAFT",
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    IN_PROGRESS = "IN_PROGRESS",
    RECEIVING = "RECEIVING",
    SHIPPED = "SHIPPED",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare class InboundOrderFilterDto {
    clientId?: string;
    warehouseId?: string;
    status?: OrderStatus;
    orderNumber?: string;
}
