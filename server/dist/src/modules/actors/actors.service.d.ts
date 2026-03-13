import { PrismaService } from '../../database/prisma/prisma.service';
export declare class ActorsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByUserId(userId: string): Promise<({
        user: {
            isActive: boolean;
            createdAt: Date;
            id: string;
            updatedAt: Date;
            email: string;
            passwordHash: string | null;
            firstName: string;
            lastName: string;
            internalRoleId: string | null;
        } | null;
    } & {
        createdAt: Date;
        id: string;
        updatedAt: Date;
        actorType: import(".prisma/client").$Enums.ActorType;
        userId: string | null;
        clientAccountId: string | null;
    }) | null>;
    findByClientAccountId(clientAccountId: string): Promise<({
        clientAccount: {
            isActive: boolean;
            clientId: string;
            createdAt: Date;
            id: string;
            updatedAt: Date;
            email: string;
            passwordHash: string | null;
            firstName: string;
            lastName: string;
            clientRoleId: string;
        } | null;
    } & {
        createdAt: Date;
        id: string;
        updatedAt: Date;
        actorType: import(".prisma/client").$Enums.ActorType;
        userId: string | null;
        clientAccountId: string | null;
    }) | null>;
    getOrCreateForUser(userId: string): Promise<{
        createdAt: Date;
        id: string;
        updatedAt: Date;
        actorType: import(".prisma/client").$Enums.ActorType;
        userId: string | null;
        clientAccountId: string | null;
    }>;
    getOrCreateForClientAccount(clientAccountId: string): Promise<{
        createdAt: Date;
        id: string;
        updatedAt: Date;
        actorType: import(".prisma/client").$Enums.ActorType;
        userId: string | null;
        clientAccountId: string | null;
    }>;
}
