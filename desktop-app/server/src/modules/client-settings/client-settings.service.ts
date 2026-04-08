import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../../database/prisma/prisma.service';
import { ActorType } from '../../common/enums/actor-type.enum';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { UpdateClientProfileDto } from './dto/update-client-profile.dto';
import { UpdateClientPreferencesDto } from './dto/update-client-preferences.dto';
import { ChangeClientPasswordDto } from './dto/change-client-password.dto';

type ClientSettingsPreferences = {
  language: string;
  timezone: string;
  notificationsEnabled: boolean;
  twoFactorEnabled: boolean;
};

const DEFAULT_PREFERENCES: ClientSettingsPreferences = {
  language: 'العربية',
  timezone: 'Asia/Riyadh',
  notificationsEnabled: true,
  twoFactorEnabled: false,
};

@Injectable()
export class ClientSettingsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Temporary in-memory preference store keyed by client account id.
   * Profile/password remain persisted in DB; preferences can be migrated
   * to a dedicated table later without changing API contract.
   */
  private static readonly preferenceStore = new Map<string, ClientSettingsPreferences>();

  private ensureClientActor(actor: JwtPayload): string {
    if (actor.actorType !== ActorType.CLIENT_ACCOUNT) {
      throw new ForbiddenException('Client settings are only available for client accounts');
    }
    return actor.sub;
  }

  private async findAccountOrThrow(accountId: string) {
    const account = await this.prisma.clientAccount.findUnique({
      where: { id: accountId },
      include: {
        client: { select: { id: true, code: true, name: true } },
        clientRole: { select: { roleName: true } },
      },
    });
    if (!account) throw new NotFoundException('Client account not found');
    return account;
  }

  private getPreferences(accountId: string): ClientSettingsPreferences {
    return (
      ClientSettingsService.preferenceStore.get(accountId) ?? {
        ...DEFAULT_PREFERENCES,
      }
    );
  }

  private setPreferences(
    accountId: string,
    updates: Partial<ClientSettingsPreferences>,
  ): ClientSettingsPreferences {
    const next = {
      ...this.getPreferences(accountId),
      ...updates,
    };
    ClientSettingsService.preferenceStore.set(accountId, next);
    return next;
  }

  async getMe(actor: JwtPayload) {
    const accountId = this.ensureClientActor(actor);
    const account = await this.findAccountOrThrow(accountId);
    const preferences = this.getPreferences(accountId);

    return {
      profile: {
        firstName: account.firstName,
        lastName: account.lastName,
        email: account.email,
      },
      preferences: {
        language: preferences.language,
        timezone: preferences.timezone,
        notificationsEnabled: preferences.notificationsEnabled,
      },
      security: {
        twoFactorEnabled: preferences.twoFactorEnabled,
        activeSessions: 1,
      },
    };
  }

  async updateProfile(actor: JwtPayload, dto: UpdateClientProfileDto) {
    const accountId = this.ensureClientActor(actor);
    const account = await this.findAccountOrThrow(accountId);

    const updated = await this.prisma.clientAccount.update({
      where: { id: account.id },
      data: {
        ...(dto.firstName !== undefined && { firstName: dto.firstName.trim() }),
        ...(dto.lastName !== undefined && { lastName: dto.lastName.trim() }),
        ...(dto.email !== undefined && { email: dto.email.trim().toLowerCase() }),
      },
      select: {
        firstName: true,
        lastName: true,
        email: true,
      },
    });

    return { profile: updated };
  }

  async changePassword(actor: JwtPayload, dto: ChangeClientPasswordDto) {
    const accountId = this.ensureClientActor(actor);
    const account = await this.findAccountOrThrow(accountId);

    if (!account.passwordHash) {
      throw new UnauthorizedException('Password is not configured for this account');
    }
    const valid = await bcrypt.compare(dto.currentPassword, account.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    const passwordHash = await bcrypt.hash(dto.newPassword, 10);
    await this.prisma.clientAccount.update({
      where: { id: account.id },
      data: { passwordHash },
    });

    return { success: true };
  }

  async updatePreferences(actor: JwtPayload, dto: UpdateClientPreferencesDto) {
    const accountId = this.ensureClientActor(actor);
    await this.findAccountOrThrow(accountId);

    const preferences = this.setPreferences(accountId, {
      ...(dto.language !== undefined && { language: dto.language }),
      ...(dto.timezone !== undefined && { timezone: dto.timezone }),
      ...(dto.notificationsEnabled !== undefined && {
        notificationsEnabled: dto.notificationsEnabled,
      }),
    });

    return {
      preferences: {
        language: preferences.language,
        timezone: preferences.timezone,
        notificationsEnabled: preferences.notificationsEnabled,
      },
      security: {
        twoFactorEnabled: preferences.twoFactorEnabled,
        activeSessions: 1,
      },
    };
  }
}


