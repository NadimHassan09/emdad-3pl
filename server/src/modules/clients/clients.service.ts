import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../database/prisma/prisma.service';
import { ClientStatus } from '@prisma/client';

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
    status: ClientStatus;
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
    const account = await this.prisma.clientAccount.findFirst({
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
    return account as ClientAccountWithRelations | null;
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

    if (
      !account.client.isActive ||
      account.client.status !== ClientStatus.ACTIVE
    ) {
      throw new UnauthorizedException('Client account is not active');
    }

    if (!account.passwordHash)
      throw new UnauthorizedException('Invalid email or password');
    const valid = await bcrypt.compare(password, account.passwordHash);
    if (!valid) throw new UnauthorizedException('Invalid email or password');

    return account;
  }
}
