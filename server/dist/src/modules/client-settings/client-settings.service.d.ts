import { PrismaService } from '../../database/prisma/prisma.service';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { UpdateClientProfileDto } from './dto/update-client-profile.dto';
import { UpdateClientPreferencesDto } from './dto/update-client-preferences.dto';
import { ChangeClientPasswordDto } from './dto/change-client-password.dto';
export declare class ClientSettingsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private static readonly preferenceStore;
    private ensureClientActor;
    private findAccountOrThrow;
    private getPreferences;
    private setPreferences;
    getMe(actor: JwtPayload): Promise<{
        profile: {
            firstName: string;
            lastName: string;
            email: string;
        };
        preferences: {
            language: string;
            timezone: string;
            notificationsEnabled: boolean;
        };
        security: {
            twoFactorEnabled: boolean;
            activeSessions: number;
        };
    }>;
    updateProfile(actor: JwtPayload, dto: UpdateClientProfileDto): Promise<{
        profile: {
            email: string;
            firstName: string;
            lastName: string;
        };
    }>;
    changePassword(actor: JwtPayload, dto: ChangeClientPasswordDto): Promise<{
        success: boolean;
    }>;
    updatePreferences(actor: JwtPayload, dto: UpdateClientPreferencesDto): Promise<{
        preferences: {
            language: string;
            timezone: string;
            notificationsEnabled: boolean;
        };
        security: {
            twoFactorEnabled: boolean;
            activeSessions: number;
        };
    }>;
}
