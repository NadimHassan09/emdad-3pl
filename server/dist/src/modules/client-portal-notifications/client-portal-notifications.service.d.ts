import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ClientPortalNotificationQueryDto } from './dto/client-portal-notification-query.dto';
export type NotificationImportance = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type NotificationReadStatus = 'UNREAD' | 'READ';
export interface ClientPortalNotification {
    id: string;
    clientId: string;
    createdAt: string;
    importance: NotificationImportance;
    title: string;
    messagePreview: string;
    fullMessage: string;
    referenceType: string;
    referenceId: string;
    readStatus: NotificationReadStatus;
}
export declare class ClientPortalNotificationsService {
    private readonly store;
    private seedForClient;
    private getAllForClient;
    listForActor(actor: JwtPayload, query?: ClientPortalNotificationQueryDto): ClientPortalNotification[];
    markRead(actor: JwtPayload, id: string): {
        id: string;
        readStatus: NotificationReadStatus;
    };
}
