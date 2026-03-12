import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateUomDto } from './dto/create-uom.dto';
import { UpdateUomDto } from './dto/update-uom.dto';
import { UomFilterDto } from './dto/uom-filter.dto';
export declare class UomService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUomDto): Promise<{
        code: string;
        name: string;
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        dimension: import(".prisma/client").$Enums.UomDimension;
        baseConversion: import("@prisma/client/runtime/library").Decimal;
    }>;
    findMany(filter?: UomFilterDto): Promise<{
        code: string;
        name: string;
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        dimension: import(".prisma/client").$Enums.UomDimension;
        baseConversion: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    findOne(id: string): Promise<{
        code: string;
        name: string;
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        dimension: import(".prisma/client").$Enums.UomDimension;
        baseConversion: import("@prisma/client/runtime/library").Decimal;
    }>;
    update(id: string, dto: UpdateUomDto): Promise<{
        code: string;
        name: string;
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        dimension: import(".prisma/client").$Enums.UomDimension;
        baseConversion: import("@prisma/client/runtime/library").Decimal;
    }>;
}
