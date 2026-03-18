import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { randomBytes } from 'crypto';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../database/prisma/prisma.service';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorsService } from '../actors/actors.service';
import { ClientPortalTeamQueryDto } from './dto/client-portal-team-query.dto';
import { InviteTeamAccountDto } from './dto/invite-team-account.dto';
import { UpdateTeamAccountDto } from './dto/update-team-account.dto';

const CLIENT_ADMIN_ROLE = 'CLIENT_ADMIN';

@Injectable()
export class ClientPortalTeamService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly actors: ActorsService,
  ) {}

  private requireClientAdmin(actor: JwtPayload): void {
    if (actor.role !== CLIENT_ADMIN_ROLE) {
      throw new ForbiddenException(
        'Only client administrators can perform this action.',
      );
    }
  }

  async listRoles() {
    return this.prisma.clientRole.findMany({
      where: { isActive: true },
      select: { id: true, roleName: true },
      orderBy: { roleName: 'asc' },
    });
  }

  async listAccounts(clientId: string, query?: ClientPortalTeamQueryDto) {
    const where: Prisma.ClientAccountWhereInput = { clientId };
    if (query?.isActive !== undefined) {
      where.isActive = query.isActive;
    }
    if (query?.clientRoleId) {
      where.clientRoleId = query.clientRoleId;
    }
    if (query?.search?.trim()) {
      const s = query.search.trim();
      where.OR = [
        { email: { contains: s, mode: 'insensitive' } },
        { firstName: { contains: s, mode: 'insensitive' } },
        { lastName: { contains: s, mode: 'insensitive' } },
      ];
    }
    const rows = await this.prisma.clientAccount.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        isActive: true,
        clientRoleId: true,
        createdAt: true,
        clientRole: { select: { roleName: true } },
      },
    });
    return rows.map((r) => ({
      id: r.id,
      firstName: r.firstName,
      lastName: r.lastName,
      email: r.email,
      isActive: r.isActive,
      clientRoleId: r.clientRoleId,
      roleName: r.clientRole.roleName,
      createdAt: r.createdAt,
    }));
  }

  private async getAccountInClientOrThrow(clientId: string, accountId: string) {
    const acc = await this.prisma.clientAccount.findFirst({
      where: { id: accountId, clientId },
      include: { clientRole: { select: { roleName: true } } },
    });
    if (!acc) throw new NotFoundException('Team member not found');
    return acc;
  }

  async invite(actor: JwtPayload, clientId: string, dto: InviteTeamAccountDto) {
    this.requireClientAdmin(actor);
    const role = await this.prisma.clientRole.findFirst({
      where: { id: dto.clientRoleId, isActive: true },
    });
    if (!role) throw new NotFoundException('Role not found');

    const email = dto.email.trim().toLowerCase();
    const existing = await this.prisma.clientAccount.findUnique({
      where: { email },
    });
    if (existing) {
      throw new ConflictException('An account with this email already exists');
    }

    const tempPassword = randomBytes(12).toString('base64url');
    const passwordHash = await bcrypt.hash(tempPassword, 10);

    const account = await this.prisma.clientAccount.create({
      data: {
        clientId,
        clientRoleId: dto.clientRoleId,
        email,
        passwordHash,
        firstName: dto.firstName.trim(),
        lastName: dto.lastName.trim(),
        isActive: true,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        isActive: true,
        clientRoleId: true,
        createdAt: true,
        clientRole: { select: { roleName: true } },
      },
    });

    await this.actors.getOrCreateForClientAccount(account.id);

    return {
      account: {
        id: account.id,
        firstName: account.firstName,
        lastName: account.lastName,
        email: account.email,
        isActive: account.isActive,
        clientRoleId: account.clientRoleId,
        roleName: account.clientRole.roleName,
        createdAt: account.createdAt,
      },
      temporaryPassword: tempPassword,
    };
  }

  async update(
    actor: JwtPayload,
    clientId: string,
    accountId: string,
    dto: UpdateTeamAccountDto,
  ) {
    const acc = await this.getAccountInClientOrThrow(clientId, accountId);
    const isSelf = actor.sub === accountId;
    const isAdmin = actor.role === CLIENT_ADMIN_ROLE;

    if (!isSelf && !isAdmin) {
      throw new ForbiddenException('You can only update your own profile');
    }
    if (isSelf && !isAdmin && dto.clientRoleId !== undefined) {
      throw new ForbiddenException('You cannot change your own role');
    }

    const data: Prisma.ClientAccountUpdateInput = {};
    if (dto.firstName !== undefined) data.firstName = dto.firstName.trim();
    if (dto.lastName !== undefined) data.lastName = dto.lastName.trim();
    if (dto.email !== undefined) {
      const email = dto.email.trim().toLowerCase();
      if (email !== acc.email) {
        const taken = await this.prisma.clientAccount.findUnique({
          where: { email },
        });
        if (taken) throw new ConflictException('Email already in use');
      }
      data.email = email;
    }
    if (dto.clientRoleId !== undefined) {
      if (!isAdmin) throw new ForbiddenException('Only administrators can change roles');
      const role = await this.prisma.clientRole.findFirst({
        where: { id: dto.clientRoleId, isActive: true },
      });
      if (!role) throw new NotFoundException('Role not found');
      data.clientRole = { connect: { id: dto.clientRoleId } };
    }

    const updated = await this.prisma.clientAccount.update({
      where: { id: accountId },
      data,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        isActive: true,
        clientRoleId: true,
        createdAt: true,
        clientRole: { select: { roleName: true } },
      },
    });

    return {
      id: updated.id,
      firstName: updated.firstName,
      lastName: updated.lastName,
      email: updated.email,
      isActive: updated.isActive,
      clientRoleId: updated.clientRoleId,
      roleName: updated.clientRole.roleName,
      createdAt: updated.createdAt,
    };
  }

  async setActive(
    actor: JwtPayload,
    clientId: string,
    accountId: string,
    isActive: boolean,
  ) {
    this.requireClientAdmin(actor);
    if (actor.sub === accountId && !isActive) {
      throw new ForbiddenException('You cannot deactivate your own account');
    }
    await this.getAccountInClientOrThrow(clientId, accountId);
    await this.prisma.clientAccount.update({
      where: { id: accountId },
      data: { isActive },
    });
    return { id: accountId, isActive };
  }
}
