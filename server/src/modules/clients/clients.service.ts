import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { randomBytes } from 'crypto';
import { PrismaService } from '../../database/prisma/prisma.service';
import { ActorsService } from '../actors/actors.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientFilterDto } from './dto/client-filter.dto';
import { CreateClientRoleDto } from './dto/create-client-role.dto';
import { UpdateClientRoleDto } from './dto/update-client-role.dto';
import { CreateClientAccountDto } from './dto/create-client-account.dto';
import { UpdateClientAccountDto } from './dto/update-client-account.dto';
import { OnboardClientDto } from './dto/onboard-client.dto';
import { CLIENT_PERMISSION_CATALOG } from './client-permissions.catalog';
import {
  normalizePermissionsForCatalog,
  parsePermissionList,
  validatePermissionsAgainstCatalog,
} from './client-permissions.util';

/** Type for Prisma delegate access when PrismaClient types are not resolved. */
interface PrismaWithClients {
  client: {
    create: (args: { data: Record<string, unknown> }) => Promise<unknown>;
    findMany: (args: {
      where?: Record<string, unknown>;
      orderBy?: Record<string, string>;
      select?: Record<string, boolean>;
    }) => Promise<unknown[]>;
    findUnique: (args: {
      where: { id: string };
      select?: Record<string, boolean>;
    }) => Promise<unknown>;
    update: (args: {
      where: { id: string };
      data: Record<string, unknown>;
      select?: Record<string, boolean>;
    }) => Promise<unknown>;
  };
  clientAccount: {
    findFirst: (args: {
      where: { email: string; isActive: boolean };
      include: Record<string, unknown>;
    }) => Promise<ClientAccountWithRelations | null>;
  };
}

export interface ClientAccountWithRelations {
  id: string;
  clientId: string;
  clientRoleId: string;
  email: string;
  passwordHash: string | null;
  firstName: string;
  lastName: string;
  isActive: boolean;
  client: {
    id: string;
    code: string;
    name: string;
    status: string;
    isActive: boolean;
  };
  clientRole: {
    id: string;
    roleName: string;
    permissionsJson: unknown;
  };
}

@Injectable()
export class ClientsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly actors: ActorsService,
  ) {}

  /**
   * Find client_account by email; used by auth to resolve client login.
   */
  async findClientAccountByEmail(
    email: string,
  ): Promise<ClientAccountWithRelations | null> {
    const db = this.prisma as unknown as PrismaWithClients;
    const account = await db.clientAccount.findFirst({
      where: { email: email.trim().toLowerCase(), isActive: true },
      include: {
        client: {
          select: {
            id: true,
            code: true,
            name: true,
            status: true,
            isActive: true,
          },
        },
        clientRole: {
          select: { id: true, roleName: true, permissionsJson: true },
        },
      },
    });
    return account;
  }

  /**
   * Validate client_account credentials. Throws UnauthorizedException on failure.
   * Client and account must be active; client status must allow login (ACTIVE).
   */
  async validateClientAccountCredentials(
    email: string,
    password: string,
  ): Promise<ClientAccountWithRelations> {
    const account = await this.findClientAccountByEmail(email);
    if (!account) throw new UnauthorizedException('Invalid email or password');

    if (!account.client.isActive || account.client.status !== 'ACTIVE') {
      throw new UnauthorizedException('Client account is not active');
    }

    if (!account.passwordHash)
      throw new UnauthorizedException('Invalid email or password');
    const valid = await bcrypt.compare(password, account.passwordHash);
    if (!valid) throw new UnauthorizedException('Invalid email or password');

    return account;
  }

  async create(dto: CreateClientDto) {
    const db = this.prisma as unknown as PrismaWithClients;
    return db.client.create({
      data: {
        code: dto.code.trim(),
        name: dto.name.trim(),
        contactEmail: dto.contactEmail?.trim(),
        contactPhone: dto.contactPhone?.trim(),
        addressLine1: dto.addressLine1?.trim(),
        city: dto.city?.trim(),
        stateRegion: dto.stateRegion?.trim(),
        postalCode: dto.postalCode?.trim(),
        countryCode: dto.countryCode?.trim(),
        status: (dto.status as 'ACTIVE' | 'SUSPENDED' | 'CLOSED') ?? 'ACTIVE',
        isActive: dto.isActive ?? true,
        currency: dto.currency ?? 'USD',
      },
    });
  }

  getClientPermissionCatalog() {
    return CLIENT_PERMISSION_CATALOG;
  }

  async findAllClientRoles() {
    const rows = await this.prisma.clientRole.findMany({
      where: { isActive: true },
      select: { id: true, roleName: true },
      orderBy: { roleName: 'asc' },
    });
    return rows;
  }

  async findAllClientRolesWithPermissions() {
    const rows = await this.prisma.clientRole.findMany({
      where: { isActive: true },
      select: { id: true, roleName: true, permissionsJson: true, isActive: true },
      orderBy: { roleName: 'asc' },
    });
    return rows.map((row) => ({
      ...row,
      permissionsJson: { permissions: normalizePermissionsForCatalog(row.permissionsJson) },
    }));
  }

  async createClientRole(dto: CreateClientRoleDto) {
    const trimmedName = dto.roleName.trim();
    const existing = await this.prisma.clientRole.findFirst({
      where: { roleName: { equals: trimmedName, mode: 'insensitive' } },
    });
    if (existing) throw new ConflictException('Role name already exists');
    const normalizedPermissions = validatePermissionsAgainstCatalog(dto.permissions);
    const created = await this.prisma.clientRole.create({
      data: {
        roleName: trimmedName,
        permissionsJson: { permissions: normalizedPermissions },
        isActive: true,
      },
      select: { id: true, roleName: true, permissionsJson: true, isActive: true },
    });
    return created;
  }

  async backfillClientRolePermissions() {
    const roles = await this.prisma.clientRole.findMany({
      select: { id: true, permissionsJson: true },
    });
    let updatedCount = 0;
    for (const role of roles) {
      const normalized = normalizePermissionsForCatalog(role.permissionsJson);
      const current = JSON.stringify({ permissions: parsePermissionList(role.permissionsJson) });
      const next = JSON.stringify({ permissions: normalized });
      if (current === next) continue;
      await this.prisma.clientRole.update({
        where: { id: role.id },
        data: { permissionsJson: { permissions: normalized } },
      });
      updatedCount += 1;
    }
    return { updatedCount };
  }

  async updateClientRole(roleId: string, dto: UpdateClientRoleDto) {
    const existing = await this.prisma.clientRole.findUnique({ where: { id: roleId } });
    if (!existing) throw new NotFoundException('Role not found');
    const data: { roleName?: string; permissionsJson?: { permissions: string[] }; isActive?: boolean } =
      {};
    if (dto.roleName !== undefined) data.roleName = dto.roleName.trim();
    if (dto.permissions !== undefined) {
      data.permissionsJson = { permissions: validatePermissionsAgainstCatalog(dto.permissions) };
    }
    if (dto.isActive !== undefined) data.isActive = dto.isActive;
    const updated = await this.prisma.clientRole.update({
      where: { id: roleId },
      data,
      select: { id: true, roleName: true, permissionsJson: true, isActive: true },
    });
    return updated;
  }

  async findMany(filter?: ClientFilterDto) {
    try {
      const where: {
        isActive?: boolean;
        status?: 'ACTIVE' | 'SUSPENDED' | 'CLOSED';
      } = {};
      if (filter?.isActive !== undefined) where.isActive = filter.isActive;
      if (filter?.status !== undefined) where.status = filter.status;
      const db = this.prisma as unknown as PrismaWithClients;
      // Exclude balanceCents (BigInt) so JSON response serialization does not throw
      return await db.client.findMany({
        where,
        orderBy: { code: 'asc' },
        select: {
          id: true,
          code: true,
          name: true,
          contactEmail: true,
          contactPhone: true,
          addressLine1: true,
          city: true,
          stateRegion: true,
          postalCode: true,
          countryCode: true,
          currency: true,
          status: true,
          isActive: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (e) {
      console.error('[ClientsService] findMany failed:', e);
      return [];
    }
  }

  async findOne(id: string) {
    const db = this.prisma as unknown as PrismaWithClients;
    const client = await db.client.findUnique({
      where: { id },
      select: {
        id: true,
        code: true,
        name: true,
        contactEmail: true,
        contactPhone: true,
        addressLine1: true,
        city: true,
        stateRegion: true,
        postalCode: true,
        countryCode: true,
        currency: true,
        status: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!client) throw new NotFoundException('Client not found');
    return client;
  }

  async findAccounts(clientId: string) {
    await this.findOne(clientId);
    const rows = await this.prisma.clientAccount.findMany({
      where: { clientId },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        isActive: true,
        clientRoleId: true,
        createdAt: true,
        clientRole: { select: { id: true, roleName: true } },
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

  private async ensureClientExists(clientId: string): Promise<void> {
    const exists = await this.prisma.client.findUnique({
      where: { id: clientId },
      select: { id: true },
    });
    if (!exists) throw new NotFoundException('Client not found');
  }

  private async ensureActiveClientRole(roleId: string) {
    const role = await this.prisma.clientRole.findFirst({
      where: { id: roleId, isActive: true },
      select: { id: true, roleName: true },
    });
    if (!role) throw new NotFoundException('Role not found');
    return role;
  }

  private async getClientAccountOrThrow(clientId: string, accountId: string) {
    const account = await this.prisma.clientAccount.findFirst({
      where: { id: accountId, clientId },
      select: { id: true, email: true },
    });
    if (!account) throw new NotFoundException('Account not found');
    return account;
  }

  async createAccount(clientId: string, dto: CreateClientAccountDto) {
    await this.ensureClientExists(clientId);
    await this.ensureActiveClientRole(dto.clientRoleId);
    const email = dto.email.trim().toLowerCase();
    const existing = await this.prisma.clientAccount.findUnique({ where: { email } });
    if (existing) throw new ConflictException('An account with this email already exists');

    const temporaryPassword = randomBytes(12).toString('base64url');
    const passwordHash = await bcrypt.hash(temporaryPassword, 10);
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
      temporaryPassword,
    };
  }

  async updateAccount(clientId: string, accountId: string, dto: UpdateClientAccountDto) {
    await this.ensureClientExists(clientId);
    const existing = await this.getClientAccountOrThrow(clientId, accountId);
    const data: {
      firstName?: string;
      lastName?: string;
      email?: string;
      clientRole?: { connect: { id: string } };
    } = {};
    if (dto.firstName !== undefined) data.firstName = dto.firstName.trim();
    if (dto.lastName !== undefined) data.lastName = dto.lastName.trim();
    if (dto.email !== undefined) {
      const email = dto.email.trim().toLowerCase();
      if (email !== existing.email) {
        const taken = await this.prisma.clientAccount.findUnique({ where: { email } });
        if (taken) throw new ConflictException('Email already in use');
      }
      data.email = email;
    }
    if (dto.clientRoleId !== undefined) {
      await this.ensureActiveClientRole(dto.clientRoleId);
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

  async setAccountActive(clientId: string, accountId: string, isActive: boolean) {
    await this.ensureClientExists(clientId);
    await this.getClientAccountOrThrow(clientId, accountId);
    await this.prisma.clientAccount.update({
      where: { id: accountId },
      data: { isActive },
    });
    return { id: accountId, isActive };
  }

  async onboard(dto: OnboardClientDto) {
    const created = await this.create(dto);
    const client = created as { id: string };
    const accounts = Array.isArray(dto.accounts) ? dto.accounts : [];
    const createdAccounts: Array<{
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      roleName: string;
      temporaryPassword: string;
    }> = [];
    for (const account of accounts) {
      const createdAccount = await this.createAccount(client.id, account);
      createdAccounts.push({
        id: createdAccount.account.id,
        firstName: createdAccount.account.firstName,
        lastName: createdAccount.account.lastName,
        email: createdAccount.account.email,
        roleName: createdAccount.account.roleName,
        temporaryPassword: createdAccount.temporaryPassword,
      });
    }
    return {
      client: created,
      accounts: createdAccounts,
    };
  }

  async update(id: string, dto: UpdateClientDto) {
    await this.findOne(id);
    const db = this.prisma as unknown as PrismaWithClients;
    const select = {
      id: true,
      code: true,
      name: true,
      contactEmail: true,
      contactPhone: true,
      addressLine1: true,
      city: true,
      stateRegion: true,
      postalCode: true,
      countryCode: true,
      currency: true,
      status: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    };
    return db.client.update({
      where: { id },
      data: {
        ...(dto.code !== undefined && { code: dto.code.trim() }),
        ...(dto.name !== undefined && { name: dto.name.trim() }),
        ...(dto.contactEmail !== undefined && {
          contactEmail: dto.contactEmail?.trim(),
        }),
        ...(dto.contactPhone !== undefined && {
          contactPhone: dto.contactPhone?.trim(),
        }),
        ...(dto.addressLine1 !== undefined && {
          addressLine1: dto.addressLine1?.trim(),
        }),
        ...(dto.city !== undefined && { city: dto.city?.trim() }),
        ...(dto.stateRegion !== undefined && {
          stateRegion: dto.stateRegion?.trim(),
        }),
        ...(dto.postalCode !== undefined && {
          postalCode: dto.postalCode?.trim(),
        }),
        ...(dto.countryCode !== undefined && {
          countryCode: dto.countryCode?.trim(),
        }),
        ...(dto.status !== undefined && {
          status: dto.status as 'ACTIVE' | 'SUSPENDED' | 'CLOSED',
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
        ...(dto.currency !== undefined && { currency: dto.currency }),
      },
      select,
    });
  }
}
