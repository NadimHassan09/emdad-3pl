import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { InventoryService } from '../inventory/inventory.service';
import { ApprovalsService } from '../approvals/approvals.service';
export declare class AdjustmentsService {
    private readonly prisma;
    private readonly inventoryService;
    private readonly approvalsService;
    constructor(prisma: PrismaService, inventoryService: InventoryService, approvalsService: ApprovalsService);
    create(dto: CreateAdjustmentDto, createdByActorId: string): Promise<{
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        client: {
            id: string;
            code: string;
            name: string;
        };
        location: {
            id: string;
            code: string;
        } | null;
        product: {
            id: string;
            name: string;
            sku: string;
        } | null;
        batch: {
            id: string;
            batchCode: string;
        } | null;
        createdByActor: {
            id: string;
            user: {
                id: string;
                email: string;
            } | null;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        clientId: string;
        productId: string | null;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        batchId: string | null;
        locationId: string | null;
        createdByActorId: string;
        reason: string | null;
    }>;
    findMany(filter?: AdjustmentFilterDto): Promise<({
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        client: {
            id: string;
            code: string;
            name: string;
        };
        location: {
            id: string;
            code: string;
        } | null;
        product: {
            id: string;
            name: string;
            sku: string;
        } | null;
        batch: {
            id: string;
            batchCode: string;
        } | null;
        createdByActor: {
            id: string;
            user: {
                id: string;
                email: string;
            } | null;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        clientId: string;
        productId: string | null;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        batchId: string | null;
        locationId: string | null;
        createdByActorId: string;
        reason: string | null;
    })[]>;
    findOne(id: string): Promise<{
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        client: {
            id: string;
            code: string;
            name: string;
        };
        location: {
            id: string;
            code: string;
        } | null;
        product: {
            id: string;
            name: string;
            sku: string;
        } | null;
        batch: {
            id: string;
            batchCode: string;
        } | null;
        createdByActor: {
            id: string;
            user: {
                id: string;
                email: string;
            } | null;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        clientId: string;
        productId: string | null;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        batchId: string | null;
        locationId: string | null;
        createdByActorId: string;
        reason: string | null;
    }>;
    apply(id: string): Promise<{
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        client: {
            id: string;
            code: string;
            name: string;
        };
        location: {
            id: string;
            code: string;
        } | null;
        product: {
            id: string;
            name: string;
            sku: string;
        } | null;
        batch: {
            id: string;
            batchCode: string;
        } | null;
        createdByActor: {
            id: string;
            user: {
                id: string;
                email: string;
            } | null;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        clientId: string;
        productId: string | null;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        batchId: string | null;
        locationId: string | null;
        createdByActorId: string;
        reason: string | null;
    }>;
}
