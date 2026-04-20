import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
export declare class LocationsController {
    private readonly locations;
    constructor(locations: LocationsService);
    findTree(): Promise<import("./locations.service").LocationTreeNode[]>;
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
}
export declare class WarehouseLocationsController {
    private readonly locations;
    constructor(locations: LocationsService);
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
        warehouseId: string;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
        locationType: import(".prisma/client").$Enums.LocationType;
        parentLocationId: string | null;
    })[]>;
    update(warehouseId: string, id: string, dto: UpdateLocationDto): Promise<{
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
    remove(warehouseId: string, id: string): Promise<{
        success: boolean;
    }>;
}
