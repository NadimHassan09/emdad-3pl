import { Injectable } from '@nestjs/common';
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

function toApi(n: {
  id: string;
  clientId: string;
  createdAt: Date;
  importance: string;
  title: string;
  message: string;
  referenceType: string | null;
  referenceId: string | null;
  isRead: boolean;
}): ClientPortalNotification {
  const msg = n.message || '';
  return {
    id: n.id,
    clientId: n.clientId,
    createdAt: n.createdAt.toISOString(),
    importance: (n.importance as NotificationImportance) || 'MEDIUM',
    title: n.title,
    messagePreview: msg.length > 80 ? msg.slice(0, 80) + '...' : msg,
    fullMessage: msg,
    referenceType: n.referenceType || '',
    referenceId: n.referenceId || '',
    readStatus: n.isRead ? 'READ' : 'UNREAD',
  };
}

@Injectable()
export class ClientPortalNotificationsService {
  constructor(private readonly prisma: PrismaService) {}

  async listForActor(
    actor: JwtPayload,
    query?: ClientPortalNotificationQueryDto,
  ): Promise<ClientPortalNotification[]> {
    const clientId = actor.clientId!;
    const where: {
      clientId: string;
      importance?: string;
      isRead?: boolean;
      referenceType?: string;
      createdAt?: { gte?: Date; lte?: Date };
    } = { clientId };

    if (query?.importance) where.importance = query.importance;
    if (query?.readStatus) where.isRead = query.readStatus === 'READ';
    if (query?.referenceType) where.referenceType = query.referenceType;
    if (query?.dateFrom) {
      where.createdAt = { ...where.createdAt, gte: new Date(query.dateFrom) };
    }
    if (query?.dateTo) {
      const to = new Date(query.dateTo);
      to.setHours(23, 59, 59, 999);
      where.createdAt = { ...where.createdAt, lte: to };
    }

    const rows = await this.prisma.clientNotification.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
    return rows.map(toApi);
  }

  async findUnreadForActor(
    actor: JwtPayload,
    limit = 5,
  ): Promise<ClientPortalNotification[]> {
    const clientId = actor.clientId!;
    const rows = await this.prisma.clientNotification.findMany({
      where: { clientId, isRead: false },
      orderBy: { createdAt: 'desc' },
      take: Math.min(limit, 20),
    });
    return rows.map(toApi);
  }

  async markAllReadForActor(actor: JwtPayload): Promise<{ count: number }> {
    const clientId = actor.clientId!;
    const result = await this.prisma.clientNotification.updateMany({
      where: { clientId, isRead: false },
      data: { isRead: true },
    });
    return { count: result.count };
  }

  async markRead(
    actor: JwtPayload,
    id: string,
  ): Promise<{ id: string; readStatus: NotificationReadStatus }> {
    const clientId = actor.clientId!;
    const n = await this.prisma.clientNotification.findFirst({
      where: { id, clientId },
    });
    if (!n) return { id, readStatus: 'READ' };
    await this.prisma.clientNotification.update({
      where: { id },
      data: { isRead: true },
    });
    return { id, readStatus: 'READ' };
  }

  async deleteForActor(actor: JwtPayload, id: string): Promise<{ success: boolean }> {
    const clientId = actor.clientId!;
    const n = await this.prisma.clientNotification.findFirst({
      where: { id, clientId },
    });
    if (!n) return { success: false };
    await this.prisma.clientNotification.delete({ where: { id } });
    return { success: true };
  }
}
