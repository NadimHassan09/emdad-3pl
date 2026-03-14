import { WarehousesService } from './warehouses.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { WarehouseFilterDto } from './dto/warehouse-filter.dto';
export declare class WarehousesController {
    private readonly warehouses;
    constructor(warehouses: WarehousesService);
    create(dto: CreateWarehouseDto): Promise<{
        id: string;
        code: string;
        name: string;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        capacityUomId: string | null;
    }>;
    findMany(filter: WarehouseFilterDto): Promise<{
        id: string;
        code: string;
        name: string;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
        capacityUomId: string | null;
    }[]>;
    findOne(id: string): Promise<{
        capacityUom: {
            id: string;
            code: string;
            name: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            dimension: import(".prisma/client").$Enums.UomDimension;
            baseConversion: import("@prisma/client/runtime/library").Decimal;
        } | null;
    } & {
        id: string;
        code: string;
        name: string;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        capacityUomId: string | null;
    }>;
    update(id: string, dto: UpdateWarehouseDto): Promise<{
        id: string;
        code: string;
        name: string;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        capacityUomId: string | null;
    }>;
}
