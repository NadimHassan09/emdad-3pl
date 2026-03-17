import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
export declare class AdjustmentsController {
    private readonly adjustments;
    constructor(adjustments: AdjustmentsService);
    create(dto: CreateAdjustmentDto, payload: JwtPayload): Promise<{
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
    findMany(filter: AdjustmentFilterDto): Promise<({
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
    reject(id: string, reason?: string): Promise<{
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
