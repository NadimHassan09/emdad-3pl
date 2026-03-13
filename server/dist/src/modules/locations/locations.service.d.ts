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
        id: string;
        warehouseId: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        isActive: boolean;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        parentLocationId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
    }>;
    findManyByWarehouse(warehouseId: string): Promise<({
        capacityUom: {
            id: string;
            code: string;
            name: string;
        } | null;
        parentLocation: {
            id: string;
            code: string;
        } | null;
    } & {
        id: string;
        warehouseId: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        isActive: boolean;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        parentLocationId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
    })[]>;
    findOne(id: string): Promise<{
        warehouse: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            name: string;
            isActive: boolean;
            capacityValue: import("@prisma/client/runtime/library").Decimal | null;
            capacityUomId: string | null;
        };
        capacityUom: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            name: string;
            isActive: boolean;
            dimension: import(".prisma/client").$Enums.UomDimension;
            baseConversion: import("@prisma/client/runtime/library").Decimal;
        } | null;
        parentLocation: {
            id: string;
            warehouseId: string;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            isActive: boolean;
            capacityValue: import("@prisma/client/runtime/library").Decimal | null;
            capacityUomId: string | null;
            parentLocationId: string | null;
            locationType: import(".prisma/client").$Enums.LocationType;
        } | null;
    } & {
        id: string;
        warehouseId: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        isActive: boolean;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        parentLocationId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
    }>;
    update(id: string, dto: UpdateLocationDto): Promise<{
        id: string;
        warehouseId: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        isActive: boolean;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        parentLocationId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
    }>;
    findTree(): Promise<LocationTreeNode[]>;
}
