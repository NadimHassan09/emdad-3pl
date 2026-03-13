import { UomService } from './uom.service';
import { CreateUomDto } from './dto/create-uom.dto';
import { UpdateUomDto } from './dto/update-uom.dto';
import { UomFilterDto } from './dto/uom-filter.dto';
export declare class UomController {
    private readonly uom;
    constructor(uom: UomService);
    create(dto: CreateUomDto): Promise<{
        id: string;
        code: string;
        name: string;
        dimension: import(".prisma/client").$Enums.UomDimension;
        baseConversion: import("@prisma/client/runtime/library").Decimal;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findMany(filter: UomFilterDto): Promise<{
        id: string;
        code: string;
        name: string;
        dimension: import(".prisma/client").$Enums.UomDimension;
        baseConversion: import("@prisma/client/runtime/library").Decimal;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        code: string;
        name: string;
        dimension: import(".prisma/client").$Enums.UomDimension;
        baseConversion: import("@prisma/client/runtime/library").Decimal;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateUomDto): Promise<{
        id: string;
        code: string;
        name: string;
        dimension: import(".prisma/client").$Enums.UomDimension;
        baseConversion: import("@prisma/client/runtime/library").Decimal;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
