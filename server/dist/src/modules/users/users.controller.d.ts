import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly users;
    constructor(users: UsersService);
    findRoles(): Promise<import("./users.service").UserRoleInfo[]>;
    findMany(): Promise<import("./users.service").UserWithRole[]>;
    update(id: string, dto: UpdateUserDto): Promise<import("./users.service").UserWithRole>;
}
