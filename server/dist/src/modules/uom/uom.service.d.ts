import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateUomDto } from './dto/create-uom.dto';
import { UpdateUomDto } from './dto/update-uom.dto';
import { UomFilterDto } from './dto/uom-filter.dto';
export declare class UomService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUomDto): Promise<{
        isActive: boolean;
        createdAt: Date;
        id: string;
        code: string;
        name: string;
        dimension: import(".prisma/client").$Enums.UomDimension;
        baseConversion: import("@prisma/client/runtime/library").Decimal;
        updatedAt: Date;
    }>;
    findMany(filter?: UomFilterDto): Promise<{
        isActive: boolean;
        createdAt: Date;
        id: string;
        code: string;
        name: string;
        dimension: import(".prisma/client").$Enums.UomDimension;
        baseConversion: import("@prisma/client/runtime/library").Decimal;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        isActive: boolean;
        createdAt: Date;
        id: string;
        code: string;
        name: string;
        dimension: import(".prisma/client").$Enums.UomDimension;
        baseConversion: import("@prisma/client/runtime/library").Decimal;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateUomDto): Promise<{
        isActive: boolean;
        createdAt: Date;
        id: string;
        code: string;
        name: string;
        dimension: import(".prisma/client").$Enums.UomDimension;
        baseConversion: import("@prisma/client/runtime/library").Decimal;
        updatedAt: Date;
    }>;
}
