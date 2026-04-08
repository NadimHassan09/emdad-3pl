import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { BatchFilterDto } from './dto/batch-filter.dto';

@Injectable()
export class BatchesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateBatchDto) {
    await this.prisma.product.findUniqueOrThrow({
      where: { id: dto.productId },
    });
    return this.prisma.batch.create({
      data: {
        productId: dto.productId,
        batchCode: dto.batchCode.trim(),
        expiryDate: dto.expiryDate ? new Date(dto.expiryDate) : undefined,
        manufacturingDate: dto.manufacturingDate
          ? new Date(dto.manufacturingDate)
          : undefined,
        receivedDate: dto.receivedDate ? new Date(dto.receivedDate) : undefined,
        lotNumber: dto.lotNumber?.trim(),
        supplierBatchCode: dto.supplierBatchCode?.trim(),
        batchStatus:
          (dto.batchStatus as
            | 'AVAILABLE'
            | 'HOLD'
            | 'QUARANTINE'
            | 'EXPIRED'
            | 'CONSUMED') ?? 'AVAILABLE',
      },
    });
  }

  async findMany(filter?: BatchFilterDto) {
    const where: {
      productId?: string;
      batchStatus?:
        | 'AVAILABLE'
        | 'HOLD'
        | 'QUARANTINE'
        | 'EXPIRED'
        | 'CONSUMED';
    } = {};
    if (filter?.productId) where.productId = filter.productId;
    if (filter?.batchStatus) where.batchStatus = filter.batchStatus;
    return this.prisma.batch.findMany({
      where,
      include: { product: { select: { id: true, sku: true, name: true } } },
      orderBy: [{ productId: 'asc' }, { batchCode: 'asc' }],
    });
  }

  async findOne(id: string) {
    const batch = await this.prisma.batch.findUnique({
      where: { id },
      include: { product: true },
    });
    if (!batch) throw new NotFoundException('Batch not found');
    return batch;
  }

  async update(id: string, dto: UpdateBatchDto) {
    await this.findOne(id);
    return this.prisma.batch.update({
      where: { id },
      data: {
        ...(dto.batchCode !== undefined && { batchCode: dto.batchCode.trim() }),
        ...(dto.expiryDate !== undefined && {
          expiryDate: dto.expiryDate ? new Date(dto.expiryDate) : null,
        }),
        ...(dto.manufacturingDate !== undefined && {
          manufacturingDate: dto.manufacturingDate
            ? new Date(dto.manufacturingDate)
            : null,
        }),
        ...(dto.receivedDate !== undefined && {
          receivedDate: dto.receivedDate ? new Date(dto.receivedDate) : null,
        }),
        ...(dto.lotNumber !== undefined && {
          lotNumber: dto.lotNumber?.trim(),
        }),
        ...(dto.supplierBatchCode !== undefined && {
          supplierBatchCode: dto.supplierBatchCode?.trim(),
        }),
        ...(dto.batchStatus !== undefined && {
          batchStatus: dto.batchStatus as
            | 'AVAILABLE'
            | 'HOLD'
            | 'QUARANTINE'
            | 'EXPIRED'
            | 'CONSUMED',
        }),
      },
    });
  }
}
