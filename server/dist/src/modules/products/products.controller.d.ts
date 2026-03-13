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
        clientId: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        isActive: boolean;
        sku: string;
        defaultUomId: string;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    findMany(filter: ProductFilterDto): Promise<({
        defaultUom: {
            id: string;
            code: string;
            name: string;
        };
    } & {
        id: string;
        clientId: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        isActive: boolean;
        sku: string;
        defaultUomId: string;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
    })[]>;
    findOne(id: string): Promise<{
        client: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            name: string;
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
            isActive: boolean;
        };
        defaultUom: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            name: string;
            isActive: boolean;
            dimension: import(".prisma/client").$Enums.UomDimension;
            baseConversion: import("@prisma/client/runtime/library").Decimal;
        };
    } & {
        id: string;
        clientId: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        isActive: boolean;
        sku: string;
        defaultUomId: string;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    update(id: string, dto: UpdateProductDto): Promise<{
        id: string;
        clientId: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        isActive: boolean;
        sku: string;
        defaultUomId: string;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
    }>;
}
