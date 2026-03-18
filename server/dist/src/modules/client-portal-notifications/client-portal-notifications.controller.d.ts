import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ClientPortalNotificationsService } from './client-portal-notifications.service';
import { ClientPortalNotificationQueryDto } from './dto/client-portal-notification-query.dto';
export declare class ClientPortalNotificationsController {
    private readonly notifications;
    constructor(notifications: ClientPortalNotificationsService);
    list(actor: JwtPayload, query: ClientPortalNotificationQueryDto): import("./client-portal-notifications.service").ClientPortalNotification[];
    markRead(id: string, actor: JwtPayload): {
        id: string;
        readStatus: import("./client-portal-notifications.service").NotificationReadStatus;
    };
}
