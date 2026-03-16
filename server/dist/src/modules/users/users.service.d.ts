import { PrismaService } from '../../database/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export interface UserRoleWithPermissions extends UserRoleInfo {
    permissionsJson?: unknown;
}
export interface UserWithRole {
    id: string;
    email: string;
    passwordHash: string | null;
    firstName: string;
    lastName: string;
    isActive: boolean;
    warehouseId: string | null;
    internalRole: {
        id: string;
        roleName: string;
        permissionsJson: unknown;
    } | null;
    warehouse: {
        id: string;
        code: string;
        name: string;
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
    findAllRolesWithPermissions(): Promise<UserRoleWithPermissions[]>;
    findRoleById(id: string): Promise<UserRoleWithPermissions>;
    createRole(dto: CreateRoleDto): Promise<UserRoleWithPermissions>;
    updateRole(id: string, dto: UpdateRoleDto): Promise<UserRoleWithPermissions>;
    findMany(): Promise<UserWithRole[]>;
    update(id: string, dto: UpdateUserDto): Promise<UserWithRole>;
    findUserByEmail(email: string): Promise<UserWithRole | null>;
    validateUserCredentials(email: string, password: string): Promise<UserWithRole>;
}
