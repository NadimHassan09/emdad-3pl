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
        isActive: boolean;
        createdAt: Date;
        id: string;
        code: string;
        updatedAt: Date;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
        warehouseId: string;
        parentLocationId: string | null;
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
        isActive: boolean;
        createdAt: Date;
        id: string;
        code: string;
        updatedAt: Date;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
        warehouseId: string;
        parentLocationId: string | null;
    })[]>;
    findOne(id: string): Promise<{
        capacityUom: {
            isActive: boolean;
            createdAt: Date;
            id: string;
            code: string;
            name: string;
            dimension: import(".prisma/client").$Enums.UomDimension;
            baseConversion: import("@prisma/client/runtime/library").Decimal;
            updatedAt: Date;
        } | null;
        warehouse: {
            isActive: boolean;
            createdAt: Date;
            id: string;
            code: string;
            name: string;
            updatedAt: Date;
            capacityValue: import("@prisma/client/runtime/library").Decimal | null;
            capacityUomId: string | null;
        };
        parentLocation: {
            isActive: boolean;
            createdAt: Date;
            id: string;
            code: string;
            updatedAt: Date;
            capacityValue: import("@prisma/client/runtime/library").Decimal | null;
            capacityUomId: string | null;
            locationType: import(".prisma/client").$Enums.LocationType;
            warehouseId: string;
            parentLocationId: string | null;
        } | null;
    } & {
        isActive: boolean;
        createdAt: Date;
        id: string;
        code: string;
        updatedAt: Date;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
        warehouseId: string;
        parentLocationId: string | null;
    }>;
    update(id: string, dto: UpdateLocationDto): Promise<{
        isActive: boolean;
        createdAt: Date;
        id: string;
        code: string;
        updatedAt: Date;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
        warehouseId: string;
        parentLocationId: string | null;
    }>;
    findTree(): Promise<LocationTreeNode[]>;
}
