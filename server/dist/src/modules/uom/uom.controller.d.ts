import { UomService } from './uom.service';
import { CreateUomDto } from './dto/create-uom.dto';
import { UpdateUomDto } from './dto/update-uom.dto';
import { UomFilterDto } from './dto/uom-filter.dto';
export declare class UomController {
    private readonly uom;
    constructor(uom: UomService);
    create(dto: CreateUomDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        name: string;
        isActive: boolean;
        dimension: import(".prisma/client").$Enums.UomDimension;
        baseConversion: import("@prisma/client/runtime/library").Decimal;
    }>;
    findMany(filter: UomFilterDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        name: string;
        isActive: boolean;
        dimension: import(".prisma/client").$Enums.UomDimension;
        baseConversion: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        name: string;
        isActive: boolean;
        dimension: import(".prisma/client").$Enums.UomDimension;
        baseConversion: import("@prisma/client/runtime/library").Decimal;
    }>;
    update(id: string, dto: UpdateUomDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        name: string;
        isActive: boolean;
        dimension: import(".prisma/client").$Enums.UomDimension;
        baseConversion: import("@prisma/client/runtime/library").Decimal;
    }>;
}
