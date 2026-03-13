import { PrismaService } from '../../database/prisma/prisma.service';
export declare class ActorsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByUserId(userId: string): Promise<({
        user: {
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            passwordHash: string | null;
            firstName: string;
            lastName: string;
            internalRoleId: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        actorType: import(".prisma/client").$Enums.ActorType;
        userId: string | null;
        clientAccountId: string | null;
    }) | null>;
    findByClientAccountId(clientAccountId: string): Promise<({
        clientAccount: {
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            passwordHash: string | null;
            firstName: string;
            lastName: string;
            clientId: string;
            clientRoleId: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        actorType: import(".prisma/client").$Enums.ActorType;
        userId: string | null;
        clientAccountId: string | null;
    }) | null>;
    getOrCreateForUser(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        actorType: import(".prisma/client").$Enums.ActorType;
        userId: string | null;
        clientAccountId: string | null;
    }>;
    getOrCreateForClientAccount(clientAccountId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        actorType: import(".prisma/client").$Enums.ActorType;
        userId: string | null;
        clientAccountId: string | null;
    }>;
}
