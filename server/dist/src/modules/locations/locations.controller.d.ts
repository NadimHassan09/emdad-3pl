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
}
