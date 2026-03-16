import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ClientSettingsService } from './client-settings.service';
import { UpdateClientProfileDto } from './dto/update-client-profile.dto';
import { ChangeClientPasswordDto } from './dto/change-client-password.dto';
import { UpdateClientPreferencesDto } from './dto/update-client-preferences.dto';
export declare class ClientSettingsController {
    private readonly settings;
    constructor(settings: ClientSettingsService);
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
export declare class ClientSettingsController {
    private readonly settings;
    constructor(settings: ClientSettingsService);
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
export declare class ClientSettingsController {
    private readonly settings;
    constructor(settings: ClientSettingsService);
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
export declare class ClientSettingsController {
    private readonly settings;
    constructor(settings: ClientSettingsService);
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
export declare class ClientSettingsController {
    private readonly settings;
    constructor(settings: ClientSettingsService);
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
export declare class ClientSettingsController {
    private readonly settings;
    constructor(settings: ClientSettingsService);
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
export declare class ClientSettingsController {
    private readonly settings;
    constructor(settings: ClientSettingsService);
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
export declare class ClientSettingsController {
    private readonly settings;
    constructor(settings: ClientSettingsService);
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
export declare class ClientSettingsController {
    private readonly settings;
    constructor(settings: ClientSettingsService);
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
export declare class ClientSettingsController {
    private readonly settings;
    constructor(settings: ClientSettingsService);
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
export declare class ClientSettingsController {
    private readonly settings;
    constructor(settings: ClientSettingsService);
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
export declare class ClientSettingsController {
    private readonly settings;
    constructor(settings: ClientSettingsService);
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
export declare class ClientSettingsController {
    private readonly settings;
    constructor(settings: ClientSettingsService);
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
export declare class ClientSettingsController {
    private readonly settings;
    constructor(settings: ClientSettingsService);
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
export declare class ClientSettingsController {
    private readonly settings;
    constructor(settings: ClientSettingsService);
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
