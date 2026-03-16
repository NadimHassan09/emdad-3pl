import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class UsersController {
    private readonly users;
    constructor(users: UsersService);
    findRoles(): Promise<import("./users.service").UserRoleInfo[]>;
    findRolesWithPermissions(): Promise<import("./users.service").UserRoleWithPermissions[]>;
    findRoleById(roleId: string): Promise<import("./users.service").UserRoleWithPermissions>;
    createRole(dto: CreateRoleDto): Promise<import("./users.service").UserRoleWithPermissions>;
    updateRole(roleId: string, dto: UpdateRoleDto): Promise<import("./users.service").UserRoleWithPermissions>;
    findMany(): Promise<import("./users.service").UserWithRole[]>;
    update(id: string, dto: UpdateUserDto): Promise<import("./users.service").UserWithRole>;
}
