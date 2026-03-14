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
    findMany(warehouseId: string): Promise<({
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
}
