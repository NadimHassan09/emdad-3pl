import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { WarehouseFilterDto } from './dto/warehouse-filter.dto';
export declare class WarehousesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateWarehouseDto): Promise<{
        code: string;
        name: string;
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
    }>;
    findMany(filter?: WarehouseFilterDto): Promise<({
        capacityUom: {
            code: string;
            name: string;
            id: string;
        } | null;
    } & {
        code: string;
        name: string;
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
    })[]>;
    findOne(id: string): Promise<{
        capacityUom: {
            code: string;
            name: string;
            isActive: boolean;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            dimension: import(".prisma/client").$Enums.UomDimension;
            baseConversion: import("@prisma/client/runtime/library").Decimal;
        } | null;
    } & {
        code: string;
        name: string;
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
    }>;
    update(id: string, dto: UpdateWarehouseDto): Promise<{
        code: string;
        name: string;
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        capacityValue: import("@prisma/client/runtime/library").Decimal | null;
        capacityUomId: string | null;
    }>;
}
