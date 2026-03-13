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
        isActive: boolean;
        clientId: string;
        createdAt: Date;
        id: string;
        name: string;
        updatedAt: Date;
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
        isActive: boolean;
        clientId: string;
        createdAt: Date;
        id: string;
        name: string;
        updatedAt: Date;
        sku: string;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    })[]>;
    findOne(id: string): Promise<{
        client: {
            isActive: boolean;
            createdAt: Date;
            currency: string;
            status: import(".prisma/client").$Enums.ClientStatus;
            id: string;
            code: string;
            name: string;
            updatedAt: Date;
            contactEmail: string | null;
            contactPhone: string | null;
            addressLine1: string | null;
            city: string | null;
            stateRegion: string | null;
            postalCode: string | null;
            countryCode: string | null;
            balanceCents: bigint;
        };
        defaultUom: {
            isActive: boolean;
            createdAt: Date;
            id: string;
            code: string;
            name: string;
            dimension: import(".prisma/client").$Enums.UomDimension;
            baseConversion: import("@prisma/client/runtime/library").Decimal;
            updatedAt: Date;
        };
    } & {
        isActive: boolean;
        clientId: string;
        createdAt: Date;
        id: string;
        name: string;
        updatedAt: Date;
        sku: string;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    }>;
    update(id: string, dto: UpdateProductDto): Promise<{
        isActive: boolean;
        clientId: string;
        createdAt: Date;
        id: string;
        name: string;
        updatedAt: Date;
        sku: string;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    }>;
}
