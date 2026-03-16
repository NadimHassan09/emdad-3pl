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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        createdByActorId: string;
    }>;
}
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        createdByActorId: string;
    }>;
}
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        createdByActorId: string;
    }>;
}
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        createdByActorId: string;
    }>;
}
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        createdByActorId: string;
    }>;
}
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        createdByActorId: string;
    }>;
}
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        createdByActorId: string;
    }>;
}
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        createdByActorId: string;
    }>;
}
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        createdByActorId: string;
    }>;
}
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        createdByActorId: string;
    }>;
}
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        createdByActorId: string;
    }>;
}
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        createdByActorId: string;
    }>;
}
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        createdByActorId: string;
    }>;
}
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        createdByActorId: string;
    }>;
}
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
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
            user: {
                id: string;
                email: string;
            } | null;
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        clientId: string;
        warehouseId: string;
        productId: string | null;
        batchId: string | null;
        locationId: string | null;
        status: import(".prisma/client").$Enums.AdjustmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        reason: string | null;
        createdByActorId: string;
    }>;
}
