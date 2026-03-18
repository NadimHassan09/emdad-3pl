import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class ClientAccountGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
