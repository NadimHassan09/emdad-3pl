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
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    }>;
    findMany(filter: ProductFilterDto): Promise<({
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
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    }>;
}
