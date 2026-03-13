import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
export declare class LocationsController {
    private readonly locations;
    constructor(locations: LocationsService);
    findTree(): Promise<import("./locations.service").LocationTreeNode[]>;
    findOne(id: string): Promise<{
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
        parentLocation: {
            id: string;
            code: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            capacityValue: import("@prisma/client/runtime/library").Decimal | null;
            capacityUomId: string | null;
            locationType: import(".prisma/client").$Enums.LocationType;
            warehouseId: string;
            parentLocationId: string | null;
        } | null;
    } & {
        id: string;
        code: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
        warehouseId: string;
        parentLocationId: string | null;
    }>;
    update(id: string, dto: UpdateLocationDto): Promise<{
        id: string;
        code: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
        warehouseId: string;
        parentLocationId: string | null;
    }>;
}
export declare class WarehouseLocationsController {
    private readonly locations;
    constructor(locations: LocationsService);
    create(warehouseId: string, dto: CreateLocationDto): Promise<{
        id: string;
        code: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
        warehouseId: string;
        parentLocationId: string | null;
    }>;
    findMany(warehouseId: string): Promise<({
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
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
        warehouseId: string;
        parentLocationId: string | null;
    })[]>;
}
