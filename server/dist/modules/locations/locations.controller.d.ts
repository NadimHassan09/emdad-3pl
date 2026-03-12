import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
export declare class LocationsController {
    private readonly locations;
    constructor(locations: LocationsService);
    findTree(): Promise<import("./locations.service").LocationTreeNode[]>;
}
export declare class WarehouseLocationsController {
    private readonly locations;
    constructor(locations: LocationsService);
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
    findMany(warehouseId: string): Promise<({
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
}
