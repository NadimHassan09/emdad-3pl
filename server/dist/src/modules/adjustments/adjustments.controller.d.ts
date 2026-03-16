import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
export declare class AdjustmentsController {
    private readonly adjustments;
    constructor(adjustments: AdjustmentsService);
    create(dto: CreateAdjustmentDto, payload: JwtPayload): Promise<{
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        product: {
            id: string;
            name: string;
            sku: string;
        } | null;
        batch: {
            id: string;
            batchCode: string;
        } | null;
        location: {
            id: string;
            code: string;
        } | null;
        createdByActor: {
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            user: {
                id: string;
                email: string;
            } | null;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        createdAt: Date;
        id: string;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        createdByActorId: string;
    }>;
    findMany(filter: AdjustmentFilterDto): Promise<({
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        product: {
            id: string;
            name: string;
            sku: string;
        } | null;
        batch: {
            id: string;
            batchCode: string;
        } | null;
        location: {
            id: string;
            code: string;
        } | null;
        createdByActor: {
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            user: {
                id: string;
                email: string;
            } | null;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        createdAt: Date;
        id: string;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        createdByActorId: string;
    })[]>;
    findOne(id: string): Promise<{
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        product: {
            id: string;
            name: string;
            sku: string;
        } | null;
        batch: {
            id: string;
            batchCode: string;
        } | null;
        location: {
            id: string;
            code: string;
        } | null;
        createdByActor: {
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            user: {
                id: string;
                email: string;
            } | null;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        createdAt: Date;
        id: string;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        createdByActorId: string;
    }>;
    apply(id: string): Promise<{
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        product: {
            id: string;
            name: string;
            sku: string;
        } | null;
        batch: {
            id: string;
            batchCode: string;
        } | null;
        location: {
            id: string;
            code: string;
        } | null;
        createdByActor: {
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            user: {
                id: string;
                email: string;
            } | null;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        createdAt: Date;
        id: string;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        createdByActorId: string;
    }>;
    reject(id: string, reason?: string): Promise<{
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        product: {
            id: string;
            name: string;
            sku: string;
        } | null;
        batch: {
            id: string;
            batchCode: string;
        } | null;
        location: {
            id: string;
            code: string;
        } | null;
        createdByActor: {
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            user: {
                id: string;
                email: string;
            } | null;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        createdAt: Date;
        id: string;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        createdByActorId: string;
    }>;
}
