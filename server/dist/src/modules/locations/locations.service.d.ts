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
    private generateCode;
    create(warehouseId: string, dto: CreateLocationDto): Promise<{
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        parentLocation: {
            id: string;
            code: string;
        } | null;
    } & {
        id: string;
        code: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
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
        id: string;
        code: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
        parentLocationId: string | null;
    })[]>;
    findFlat(warehouseId?: string): Promise<{
        id: string;
        code: string;
        barcode: string;
        locationType: import(".prisma/client").$Enums.LocationType;
        parentLocationId: string | null;
        parentCode: string | null;
        warehouseId: string;
        warehouseName: string;
        warehouseCode: string;
        isActive: boolean;
        capacityValue: number | null;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        warehouse: {
            id: string;
            code: string;
            name: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            capacityValue: import("@prisma/client/runtime/library").Decimal | null;
            capacityUomId: string | null;
        };
        capacityUom: {
            id: string;
            code: string;
            name: string;
            dimension: import(".prisma/client").$Enums.UomDimension;
            baseConversion: import("@prisma/client/runtime/library").Decimal;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        parentLocation: {
            id: string;
            code: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            warehouseId: string;
            capacityValue: import("@prisma/client/runtime/library").Decimal | null;
            capacityUomId: string | null;
            locationType: import(".prisma/client").$Enums.LocationType;
            parentLocationId: string | null;
        } | null;
    } & {
        id: string;
        code: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
        parentLocationId: string | null;
    }>;
    update(id: string, warehouseId: string, dto: UpdateLocationDto): Promise<{
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        parentLocation: {
            id: string;
            code: string;
        } | null;
    } & {
        id: string;
        code: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
        parentLocationId: string | null;
    }>;
    remove(id: string, warehouseId: string): Promise<{
        success: boolean;
    }>;
    findTree(): Promise<LocationTreeNode[]>;
}
