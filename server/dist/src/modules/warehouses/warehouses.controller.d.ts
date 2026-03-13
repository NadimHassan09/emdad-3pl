import { WarehousesService } from './warehouses.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { WarehouseFilterDto } from './dto/warehouse-filter.dto';
export declare class WarehousesController {
    private readonly warehouses;
    constructor(warehouses: WarehousesService);
    create(dto: CreateWarehouseDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        name: string;
        isActive: boolean;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
    }>;
    findMany(filter: WarehouseFilterDto): Promise<({
        capacityUom: {
            id: string;
            code: string;
            name: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        name: string;
        isActive: boolean;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
    })[]>;
    findOne(id: string): Promise<{
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        name: string;
        isActive: boolean;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
    }>;
    update(id: string, dto: UpdateWarehouseDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        name: string;
        isActive: boolean;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
    }>;
}
