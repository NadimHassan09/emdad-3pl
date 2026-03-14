import { PrismaService } from '../../database/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
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
export interface UserRoleInfo {
    id: string;
    roleName: string;
}
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllRoles(): Promise<UserRoleInfo[]>;
    findMany(): Promise<UserWithRole[]>;
    update(id: string, dto: UpdateUserDto): Promise<UserWithRole>;
    findUserByEmail(email: string): Promise<UserWithRole | null>;
    validateUserCredentials(email: string, password: string): Promise<UserWithRole>;
}
