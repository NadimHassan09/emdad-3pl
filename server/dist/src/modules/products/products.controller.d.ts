import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductFilterDto } from './dto/product-filter.dto';
import { CreateProductClientPortalDto } from './dto/create-product-client-portal.dto';
import { UpdateProductClientPortalDto } from './dto/update-product-client-portal.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
export declare class ProductsController {
    private readonly products;
    constructor(products: ProductsService);
    findManyClientPortal(actor: JwtPayload): Promise<({
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
        category: string | null;
        brand: string | null;
        price: import("@prisma/client/runtime/library").Decimal | null;
        declaredValue: import("@prisma/client/runtime/library").Decimal | null;
        weight: import("@prisma/client/runtime/library").Decimal | null;
        lengthCm: import("@prisma/client/runtime/library").Decimal | null;
        widthCm: import("@prisma/client/runtime/library").Decimal | null;
        heightCm: import("@prisma/client/runtime/library").Decimal | null;
        unitsPerCarton: number | null;
        barcode: string | null;
        isSerialized: boolean;
        isBatchTracked: boolean;
        requiresExpiryDate: boolean;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        reorderPoint: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    })[]>;
    findMyProducts(actor: JwtPayload): Promise<({
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
        category: string | null;
        brand: string | null;
        price: import("@prisma/client/runtime/library").Decimal | null;
        declaredValue: import("@prisma/client/runtime/library").Decimal | null;
        weight: import("@prisma/client/runtime/library").Decimal | null;
        lengthCm: import("@prisma/client/runtime/library").Decimal | null;
        widthCm: import("@prisma/client/runtime/library").Decimal | null;
        heightCm: import("@prisma/client/runtime/library").Decimal | null;
        unitsPerCarton: number | null;
        barcode: string | null;
        isSerialized: boolean;
        isBatchTracked: boolean;
        requiresExpiryDate: boolean;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        reorderPoint: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    })[]>;
    createForClientPortal(actor: JwtPayload, dto: CreateProductClientPortalDto): Promise<{
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
        category: string | null;
        brand: string | null;
        price: import("@prisma/client/runtime/library").Decimal | null;
        declaredValue: import("@prisma/client/runtime/library").Decimal | null;
        weight: import("@prisma/client/runtime/library").Decimal | null;
        lengthCm: import("@prisma/client/runtime/library").Decimal | null;
        widthCm: import("@prisma/client/runtime/library").Decimal | null;
        heightCm: import("@prisma/client/runtime/library").Decimal | null;
        unitsPerCarton: number | null;
        barcode: string | null;
        isSerialized: boolean;
        isBatchTracked: boolean;
        requiresExpiryDate: boolean;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        reorderPoint: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    }>;
    updateForClientPortal(actor: JwtPayload, id: string, dto: UpdateProductClientPortalDto): Promise<{
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
        category: string | null;
        brand: string | null;
        price: import("@prisma/client/runtime/library").Decimal | null;
        declaredValue: import("@prisma/client/runtime/library").Decimal | null;
        weight: import("@prisma/client/runtime/library").Decimal | null;
        lengthCm: import("@prisma/client/runtime/library").Decimal | null;
        widthCm: import("@prisma/client/runtime/library").Decimal | null;
        heightCm: import("@prisma/client/runtime/library").Decimal | null;
        unitsPerCarton: number | null;
        barcode: string | null;
        isSerialized: boolean;
        isBatchTracked: boolean;
        requiresExpiryDate: boolean;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        reorderPoint: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    }>;
    deleteForClientPortal(actor: JwtPayload, id: string): Promise<{
        success: boolean;
    }>;
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
        category: string | null;
        brand: string | null;
        price: import("@prisma/client/runtime/library").Decimal | null;
        declaredValue: import("@prisma/client/runtime/library").Decimal | null;
        weight: import("@prisma/client/runtime/library").Decimal | null;
        lengthCm: import("@prisma/client/runtime/library").Decimal | null;
        widthCm: import("@prisma/client/runtime/library").Decimal | null;
        heightCm: import("@prisma/client/runtime/library").Decimal | null;
        unitsPerCarton: number | null;
        barcode: string | null;
        isSerialized: boolean;
        isBatchTracked: boolean;
        requiresExpiryDate: boolean;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        reorderPoint: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    }>;
    findMany(filter: ProductFilterDto): Promise<({
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
        category: string | null;
        brand: string | null;
        price: import("@prisma/client/runtime/library").Decimal | null;
        declaredValue: import("@prisma/client/runtime/library").Decimal | null;
        weight: import("@prisma/client/runtime/library").Decimal | null;
        lengthCm: import("@prisma/client/runtime/library").Decimal | null;
        widthCm: import("@prisma/client/runtime/library").Decimal | null;
        heightCm: import("@prisma/client/runtime/library").Decimal | null;
        unitsPerCarton: number | null;
        barcode: string | null;
        isSerialized: boolean;
        isBatchTracked: boolean;
        requiresExpiryDate: boolean;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        reorderPoint: import("@prisma/client/runtime/library").Decimal | null;
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
        category: string | null;
        brand: string | null;
        price: import("@prisma/client/runtime/library").Decimal | null;
        declaredValue: import("@prisma/client/runtime/library").Decimal | null;
        weight: import("@prisma/client/runtime/library").Decimal | null;
        lengthCm: import("@prisma/client/runtime/library").Decimal | null;
        widthCm: import("@prisma/client/runtime/library").Decimal | null;
        heightCm: import("@prisma/client/runtime/library").Decimal | null;
        unitsPerCarton: number | null;
        barcode: string | null;
        isSerialized: boolean;
        isBatchTracked: boolean;
        requiresExpiryDate: boolean;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        reorderPoint: import("@prisma/client/runtime/library").Decimal | null;
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
        category: string | null;
        brand: string | null;
        price: import("@prisma/client/runtime/library").Decimal | null;
        declaredValue: import("@prisma/client/runtime/library").Decimal | null;
        weight: import("@prisma/client/runtime/library").Decimal | null;
        lengthCm: import("@prisma/client/runtime/library").Decimal | null;
        widthCm: import("@prisma/client/runtime/library").Decimal | null;
        heightCm: import("@prisma/client/runtime/library").Decimal | null;
        unitsPerCarton: number | null;
        barcode: string | null;
        isSerialized: boolean;
        isBatchTracked: boolean;
        requiresExpiryDate: boolean;
        minThreshold: import("@prisma/client/runtime/library").Decimal | null;
        reorderPoint: import("@prisma/client/runtime/library").Decimal | null;
        defaultUomId: string;
    }>;
}
