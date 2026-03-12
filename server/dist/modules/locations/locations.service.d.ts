import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
export interface LocationTreeNode {
    id: string;
    code: string;
    locationType: string;
    parentLocationId: string | null;
    children: LocationTreeNode[];
}
export declare class LocationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(warehouseId: string, dto: CreateLocationDto): Promise<{
        code: string;
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
        parentLocationId: string | null;
        warehouseId: string;
    }>;
    findManyByWarehouse(warehouseId: string): Promise<({
        capacityUom: {
            code: string;
            name: string;
            id: string;
        } | null;
        parentLocation: {
            code: string;
            id: string;
        } | null;
    } & {
        code: string;
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
        parentLocationId: string | null;
        warehouseId: string;
    })[]>;
    findOne(id: string): Promise<{
        warehouse: {
            code: string;
            name: string;
            isActive: boolean;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            capacityValue: import("@prisma/client/runtime/library").Decimal | null;
            capacityUomId: string | null;
        };
        capacityUom: {
            code: string;
            name: string;
            isActive: boolean;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            dimension: import(".prisma/client").$Enums.UomDimension;
            baseConversion: import("@prisma/client/runtime/library").Decimal;
        } | null;
        parentLocation: {
            code: string;
            isActive: boolean;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            capacityValue: import("@prisma/client/runtime/library").Decimal | null;
            capacityUomId: string | null;
            locationType: import(".prisma/client").$Enums.LocationType;
            parentLocationId: string | null;
            warehouseId: string;
        } | null;
    } & {
        code: string;
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
        parentLocationId: string | null;
        warehouseId: string;
    }>;
    update(id: string, dto: UpdateLocationDto): Promise<{
        code: string;
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
        parentLocationId: string | null;
        warehouseId: string;
    }>;
    findTree(): Promise<LocationTreeNode[]>;
}
