import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ClientPortalNotificationsService } from './client-portal-notifications.service';
import { ClientPortalNotificationQueryDto } from './dto/client-portal-notification-query.dto';
import { UnreadNotificationsQueryDto } from './dto/unread-query.dto';
export declare class ClientPortalNotificationsController {
    private readonly notifications;
    constructor(notifications: ClientPortalNotificationsService);
    list(actor: JwtPayload, query: ClientPortalNotificationQueryDto): Promise<import("./client-portal-notifications.service").ClientPortalNotification[]>;
    findUnread(actor: JwtPayload, query: UnreadNotificationsQueryDto): Promise<import("./client-portal-notifications.service").ClientPortalNotification[]>;
    markAllRead(actor: JwtPayload): Promise<{
        count: number;
    }>;
    markRead(id: string, actor: JwtPayload): Promise<{
        id: string;
        readStatus: import("./client-portal-notifications.service").NotificationReadStatus;
    }>;
    delete(id: string, actor: JwtPayload): Promise<{
        success: boolean;
    }>;
}
