import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductFilterDto } from './dto/product-filter.dto';
export declare class ProductsController {
    private readonly products;
    constructor(products: ProductsService);
    create(dto: CreateProductDto): Promise<{
        defaultUom: {
            id: string;
            name: string;
            code: string;
        };
    } & {
        id: string;
        sku: string;
        name: string;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        defaultUomId: string;
    }>;
    findMany(filter: ProductFilterDto): Promise<({
        client: {
            id: string;
            name: string;
        };
        defaultUom: {
            id: string;
            name: string;
            code: string;
        };
    } & {
        id: string;
        sku: string;
        name: string;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        defaultUomId: string;
    })[]>;
    findOne(id: string): Promise<{
        client: {
            id: string;
            name: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            code: string;
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
            name: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            dimension: import(".prisma/client").$Enums.UomDimension;
            baseConversion: import("@prisma/client/runtime/library").Decimal;
        };
    } & {
        id: string;
        sku: string;
        name: string;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        defaultUomId: string;
    }>;
    update(id: string, dto: UpdateProductDto): Promise<{
        id: string;
        sku: string;
        name: string;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        defaultUomId: string;
    }>;
}
