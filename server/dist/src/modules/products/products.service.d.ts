import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductFilterDto } from './dto/product-filter.dto';
import { CreateProductClientPortalDto } from './dto/create-product-client-portal.dto';
import { UpdateProductClientPortalDto } from './dto/update-product-client-portal.dto';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateProductDto): Promise<{
        defaultUom: {
            id: string;
            code: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        sku: string;
        description: string | null;
        price: import("@prisma/client/runtime/library").Decimal | null;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    }>;
    findMany(filter?: ProductFilterDto): Promise<({
        client: {
            id: string;
            name: string;
        };
        defaultUom: {
            id: string;
            code: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        sku: string;
        description: string | null;
        price: import("@prisma/client/runtime/library").Decimal | null;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    })[]>;
    findManyForClientPortal(clientId: string): Promise<({
        client: {
            id: string;
            name: string;
        };
        defaultUom: {
            id: string;
            code: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        sku: string;
        description: string | null;
        price: import("@prisma/client/runtime/library").Decimal | null;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    })[]>;
    findOne(id: string): Promise<{
        client: {
            id: string;
            code: string;
            name: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            contactEmail: string | null;
            contactPhone: string | null;
            addressLine1: string | null;
            city: string | null;
            stateRegion: string | null;
            postalCode: string | null;
            countryCode: string | null;
            balanceCents: bigint;
            currency: string;
            status: import(".prisma/client").$Enums.ClientStatus;
        };
        defaultUom: {
            id: string;
            code: string;
            name: string;
            dimension: import(".prisma/client").$Enums.UomDimension;
            baseConversion: import("@prisma/client/runtime/library").Decimal;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        sku: string;
        description: string | null;
        price: import("@prisma/client/runtime/library").Decimal | null;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    }>;
    update(id: string, dto: UpdateProductDto): Promise<{
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        sku: string;
        description: string | null;
        price: import("@prisma/client/runtime/library").Decimal | null;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    }>;
    createForClientPortal(clientId: string, dto: CreateProductClientPortalDto): Promise<{
        defaultUom: {
            id: string;
            code: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        sku: string;
        description: string | null;
        price: import("@prisma/client/runtime/library").Decimal | null;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    }>;
    updateForClientPortal(id: string, clientId: string, dto: UpdateProductClientPortalDto): Promise<{
        defaultUom: {
            id: string;
            code: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        sku: string;
        description: string | null;
        price: import("@prisma/client/runtime/library").Decimal | null;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    }>;
    deleteForClientPortal(id: string, clientId: string): Promise<{
        success: boolean;
    }>;
}
