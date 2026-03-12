import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductFilterDto } from './dto/product-filter.dto';
export declare class ProductsController {
    private readonly products;
    constructor(products: ProductsService);
    create(dto: CreateProductDto): Promise<{
        defaultUom: {
            code: string;
            name: string;
            id: string;
        };
    } & {
        name: string;
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        sku: string;
        defaultUomId: string;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    findMany(filter: ProductFilterDto): Promise<({
        defaultUom: {
            code: string;
            name: string;
            id: string;
        };
    } & {
        name: string;
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        sku: string;
        defaultUomId: string;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
    })[]>;
    findOne(id: string): Promise<{
        client: {
            code: string;
            name: string;
            contactEmail: string | null;
            contactPhone: string | null;
            addressLine1: string | null;
            city: string | null;
            stateRegion: string | null;
            postalCode: string | null;
            countryCode: string | null;
            status: import(".prisma/client").$Enums.ClientStatus;
            isActive: boolean;
            currency: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            balanceCents: bigint;
        };
        defaultUom: {
            code: string;
            name: string;
            isActive: boolean;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            dimension: import(".prisma/client").$Enums.UomDimension;
            baseConversion: import("@prisma/client/runtime/library").Decimal;
        };
    } & {
        name: string;
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        sku: string;
        defaultUomId: string;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    update(id: string, dto: UpdateProductDto): Promise<{
        name: string;
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        sku: string;
        defaultUomId: string;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
    }>;
}
