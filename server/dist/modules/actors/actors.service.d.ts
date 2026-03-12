import { PrismaService } from '../../database/prisma/prisma.service';
export declare class ActorsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByUserId(userId: string): Promise<({
        user: {
            isActive: boolean;
            passwordHash: string | null;
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            internalRoleId: string | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        clientAccountId: string | null;
        actorType: import(".prisma/client").$Enums.ActorType;
    }) | null>;
    findByClientAccountId(clientAccountId: string): Promise<({
        clientAccount: {
            isActive: boolean;
            passwordHash: string | null;
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            clientRoleId: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        clientAccountId: string | null;
        actorType: import(".prisma/client").$Enums.ActorType;
    }) | null>;
    getOrCreateForUser(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        clientAccountId: string | null;
        actorType: import(".prisma/client").$Enums.ActorType;
    }>;
    getOrCreateForClientAccount(clientAccountId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        clientAccountId: string | null;
        actorType: import(".prisma/client").$Enums.ActorType;
    }>;
}
