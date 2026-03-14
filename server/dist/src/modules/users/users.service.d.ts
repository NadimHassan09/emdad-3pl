import { PrismaService } from '../../database/prisma/prisma.service';
export interface UserWithRole {
    id: string;
    email: string;
    passwordHash: string | null;
    firstName: string;
    lastName: string;
    isActive: boolean;
    internalRole: {
        id: string;
        roleName: string;
        permissionsJson: unknown;
    } | null;
}
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findMany(): Promise<UserWithRole[]>;
    findUserByEmail(email: string): Promise<UserWithRole | null>;
    validateUserCredentials(email: string, password: string): Promise<UserWithRole>;
}
