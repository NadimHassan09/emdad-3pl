import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientFilterDto } from './dto/client-filter.dto';

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
  constructor(private readonly prisma: PrismaService) {}

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
