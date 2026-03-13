import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { BatchFilterDto } from './dto/batch-filter.dto';
export declare class BatchesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateBatchDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        batchCode: string;
        expiryDate: Date | null;
        manufacturingDate: Date | null;
        receivedDate: Date | null;
        lotNumber: string | null;
        supplierBatchCode: string | null;
        batchStatus: import(".prisma/client").$Enums.BatchStatus;
        productId: string;
    }>;
    findMany(filter?: BatchFilterDto): Promise<({
        product: {
            id: string;
            name: string;
            sku: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        batchCode: string;
        expiryDate: Date | null;
        manufacturingDate: Date | null;
        receivedDate: Date | null;
        lotNumber: string | null;
        supplierBatchCode: string | null;
        batchStatus: import(".prisma/client").$Enums.BatchStatus;
        productId: string;
    })[]>;
    findOne(id: string): Promise<{
        product: {
            id: string;
            name: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            sku: string;
            minThreshold: import("@prisma/client/runtime/library").Decimal | null;
            defaultUomId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        batchCode: string;
        expiryDate: Date | null;
        manufacturingDate: Date | null;
        receivedDate: Date | null;
        lotNumber: string | null;
        supplierBatchCode: string | null;
        batchStatus: import(".prisma/client").$Enums.BatchStatus;
        productId: string;
    }>;
    update(id: string, dto: UpdateBatchDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        batchCode: string;
        expiryDate: Date | null;
        manufacturingDate: Date | null;
        receivedDate: Date | null;
        lotNumber: string | null;
        supplierBatchCode: string | null;
        batchStatus: import(".prisma/client").$Enums.BatchStatus;
        productId: string;
    }>;
}
