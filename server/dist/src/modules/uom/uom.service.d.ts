import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateUomDto } from './dto/create-uom.dto';
import { UpdateUomDto } from './dto/update-uom.dto';
import { UomFilterDto } from './dto/uom-filter.dto';
export declare class UomService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findMany(filter?: UomFilterDto): Promise<{
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
