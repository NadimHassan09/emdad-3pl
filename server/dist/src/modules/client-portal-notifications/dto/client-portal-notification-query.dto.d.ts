export declare class ClientPortalNotificationQueryDto {
    importance?: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    readStatus?: 'UNREAD' | 'READ';
    referenceType?: string;
    dateFrom?: string;
    dateTo?: string;
}
