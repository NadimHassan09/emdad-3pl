import { Injectable } from '@nestjs/common';
import { ActorType } from '../../common/enums/actor-type.enum';
import { PrismaService } from '../../database/prisma/prisma.service';

@Injectable()
export class ActorsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Resolve actor by internal user id. Returns null if no actor row exists.
   */
  async findByUserId(userId: string) {
    return this.prisma.actor.findUnique({
      where: { userId },
      include: { user: true },
    });
  }

  /**
   * Resolve actor by client_account id. Returns null if no actor row exists.
   */
  async findByClientAccountId(clientAccountId: string) {
    return this.prisma.actor.findUnique({
      where: { clientAccountId },
      include: { clientAccount: true },
    });
  }

  /**
   * Get or create actor for an internal user. Used after staff login so operational
   * tables can reference createdByActorId.
   */
  async getOrCreateForUser(userId: string) {
    const existing = await this.prisma.actor.findUnique({ where: { userId } });
    if (existing) return existing;
    return this.prisma.actor.create({
      data: {
        actorType: ActorType.INTERNAL_USER as 'INTERNAL_USER',
        userId,
      },
    });
  }

  /**
   * Get or create actor for a client account. Used after client login so operational
   * tables can reference createdByActorId.
   */
  async getOrCreateForClientAccount(clientAccountId: string) {
    const existing = await this.prisma.actor.findUnique({
      where: { clientAccountId },
    });
    if (existing) return existing;
    return this.prisma.actor.create({
      data: {
        actorType: ActorType.CLIENT_ACCOUNT as 'CLIENT_ACCOUNT',
        clientAccountId,
      },
    });
  }
}
