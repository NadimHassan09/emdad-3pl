import { PrismaService } from '../../database/prisma/prisma.service';
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
    private readonly prisma;
    constructor(prisma: PrismaService);
    listForActor(actor: JwtPayload, query?: ClientPortalNotificationQueryDto): Promise<ClientPortalNotification[]>;
    findUnreadForActor(actor: JwtPayload, limit?: number): Promise<ClientPortalNotification[]>;
    markAllReadForActor(actor: JwtPayload): Promise<{
        count: number;
    }>;
    markRead(actor: JwtPayload, id: string): Promise<{
        id: string;
        readStatus: NotificationReadStatus;
    }>;
    deleteForActor(actor: JwtPayload, id: string): Promise<{
        success: boolean;
    }>;
}
