import { PrismaService } from '../../database/prisma/prisma.service';
export declare class ActorsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByUserId(userId: string): Promise<({
        user: {
            id: string;
            email: string;
            passwordHash: string | null;
            firstName: string;
            lastName: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            internalRoleId: string | null;
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
            id: string;
            clientId: string;
            clientRoleId: string;
            email: string;
            passwordHash: string | null;
            firstName: string;
            lastName: string;
            isActive: boolean;
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
