import { UsersService } from './users.service';
export declare class UsersController {
    private readonly users;
    constructor(users: UsersService);
    findMany(): Promise<import("./users.service").UserWithRole[]>;
}
