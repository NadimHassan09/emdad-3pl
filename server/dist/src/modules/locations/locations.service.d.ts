import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
export interface LocationTreeNode {
    id: string;
    code: string;
    locationType: string;
    parentLocationId: string | null;
    warehouseId: string;
    children: LocationTreeNode[];
}
export declare class LocationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(warehouseId: string, dto: CreateLocationDto): Promise<{
        id: string;
        code: string;
        locationType: import(".prisma/client").$Enums.LocationType;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        parentLocationId: string | null;
        capacityUomId: string | null;
    }>;
    findManyByWarehouse(warehouseId: string): Promise<({
        parentLocation: {
            id: string;
            code: string;
        } | null;
        capacityUom: {
            id: string;
            code: string;
            name: string;
        } | null;
    } & {
        id: string;
        code: string;
        locationType: import(".prisma/client").$Enums.LocationType;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        parentLocationId: string | null;
        capacityUomId: string | null;
    })[]>;
    findOne(id: string): Promise<{
        warehouse: {
            id: string;
            code: string;
            capacityValue: import("@prisma/client/runtime/library").Decimal | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            capacityUomId: string | null;
            name: string;
        };
        parentLocation: {
            id: string;
            code: string;
            locationType: import(".prisma/client").$Enums.LocationType;
            capacityValue: import("@prisma/client/runtime/library").Decimal | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            warehouseId: string;
            parentLocationId: string | null;
            capacityUomId: string | null;
        } | null;
        capacityUom: {
            id: string;
            code: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            dimension: import(".prisma/client").$Enums.UomDimension;
            baseConversion: import("@prisma/client/runtime/library").Decimal;
        } | null;
    } & {
        id: string;
        code: string;
        locationType: import(".prisma/client").$Enums.LocationType;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        parentLocationId: string | null;
        capacityUomId: string | null;
    }>;
    update(id: string, dto: UpdateLocationDto): Promise<{
        id: string;
        code: string;
        locationType: import(".prisma/client").$Enums.LocationType;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        parentLocationId: string | null;
        capacityUomId: string | null;
    }>;
    findTree(): Promise<LocationTreeNode[]>;
}
