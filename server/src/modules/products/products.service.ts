import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductFilterDto } from './dto/product-filter.dto';
import { CreateProductClientPortalDto } from './dto/create-product-client-portal.dto';
import { UpdateProductClientPortalDto } from './dto/update-product-client-portal.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProductDto) {
    await this.prisma.client.findUniqueOrThrow({ where: { id: dto.clientId } });
    await this.prisma.uom.findUniqueOrThrow({
      where: { id: dto.defaultUomId },
    });
    return this.prisma.product.create({
      data: {
        clientId: dto.clientId,
        sku: dto.sku.trim(),
        name: dto.name.trim(),
        defaultUomId: dto.defaultUomId,
        minThreshold: dto.minThreshold ?? 0,
        isActive: dto.isActive ?? true,
      },
      include: { defaultUom: { select: { id: true, code: true, name: true } } },
    });
  }

  async findMany(filter?: ProductFilterDto) {
    try {
      const where: { clientId?: string; isActive?: boolean } = {};
      if (filter?.clientId) where.clientId = filter.clientId;
      if (filter?.isActive !== undefined) where.isActive = filter.isActive;
      return await this.prisma.product.findMany({
        where,
        include: {
          client: { select: { id: true, name: true } },
          defaultUom: { select: { id: true, code: true, name: true } },
        },
        orderBy: { sku: 'asc' },
      });
    } catch (e) {
      console.error('[ProductsService] findMany failed:', e);
      return [];
    }
  }

  findManyForClientPortal(clientId: string) {
    return this.findMany({ clientId, isActive: true });
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { client: true, defaultUom: true },
    });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async update(id: string, dto: UpdateProductDto) {
    await this.findOne(id);
    if (dto.defaultUomId)
      await this.prisma.uom.findUniqueOrThrow({
        where: { id: dto.defaultUomId },
      });
    return this.prisma.product.update({
      where: { id },
      data: {
        ...(dto.sku !== undefined && { sku: dto.sku.trim() }),
        ...(dto.name !== undefined && { name: dto.name.trim() }),
        ...(dto.defaultUomId !== undefined && {
          defaultUomId: dto.defaultUomId,
        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }

  private generateUniqueSku(clientCode: string, clientId: string): string {
    const safeCode = clientCode.replace(/[^A-Za-z0-9_-]/g, '').slice(0, 20) || 'CL';
    const random = Math.random().toString(36).slice(2, 10);
    return `${safeCode}-${random}`;
  }

  async createForClientPortal(clientId: string, dto: CreateProductClientPortalDto) {
    const client = await this.prisma.client.findUniqueOrThrow({
      where: { id: clientId },
      select: { code: true },
    });
    await this.prisma.uom.findUniqueOrThrow({
      where: { id: dto.defaultUomId },
    });
    let sku: string;
    let attempts = 0;
    const maxAttempts = 5;
    do {
      sku = this.generateUniqueSku(client.code, clientId);
      const existing = await this.prisma.product.findFirst({
        where: { clientId, sku },
      });
      if (!existing) break;
      attempts++;
    } while (attempts < maxAttempts);
    if (attempts >= maxAttempts) {
      sku = `${client.code}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    }
    return this.prisma.product.create({
      data: {
        clientId,
        sku,
        name: dto.name.trim(),
        description: dto.description?.trim() ?? null,
        category: dto.category?.trim() || null,
        brand: dto.brand?.trim() || null,
        price: dto.price != null ? dto.price : null,
        declaredValue: dto.declaredValue != null ? dto.declaredValue : null,
        defaultUomId: dto.defaultUomId,
        weight: dto.weight ?? 0,
        lengthCm: dto.length ?? 0,
        widthCm: dto.width ?? 0,
        heightCm: dto.height ?? 0,
        unitsPerCarton: dto.unitsPerCarton ?? 1,
        barcode: dto.barcode?.trim() || null,
        isSerialized: dto.isSerialized ?? false,
        isBatchTracked: dto.isBatchTracked ?? false,
        requiresExpiryDate: dto.requiresExpiryDate ?? false,
        minThreshold: dto.minThreshold ?? 0,
        reorderPoint: dto.reorderPoint ?? null,
        isActive: true,
      },
      include: { defaultUom: { select: { id: true, code: true, name: true } } },
    });
  }

  async updateForClientPortal(
    id: string,
    clientId: string,
    dto: UpdateProductClientPortalDto,
  ) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');
    if (product.clientId !== clientId) {
      throw new ForbiddenException('You do not have access to this product');
    }
    if (dto.defaultUomId) {
      await this.prisma.uom.findUniqueOrThrow({
        where: { id: dto.defaultUomId },
      });
    }
    return this.prisma.product.update({
      where: { id },
      data: {
        ...(dto.sku !== undefined && { sku: dto.sku.trim() }),
        ...(dto.name !== undefined && { name: dto.name.trim() }),
        ...(dto.description !== undefined && {
          description: dto.description?.trim() ?? null,
        }),
        ...(dto.category !== undefined && {
          category: dto.category?.trim() || null,
        }),
        ...(dto.brand !== undefined && { brand: dto.brand?.trim() || null }),
        ...(dto.price !== undefined && { price: dto.price }),
        ...(dto.declaredValue !== undefined && {
          declaredValue: dto.declaredValue,
        }),
        ...(dto.defaultUomId !== undefined && {
          defaultUomId: dto.defaultUomId,
        }),
        ...(dto.weight !== undefined && { weight: dto.weight }),
        ...(dto.length !== undefined && { lengthCm: dto.length }),
        ...(dto.width !== undefined && { widthCm: dto.width }),
        ...(dto.height !== undefined && { heightCm: dto.height }),
        ...(dto.unitsPerCarton !== undefined && {
          unitsPerCarton: dto.unitsPerCarton,
        }),
        ...(dto.barcode !== undefined && {
          barcode: dto.barcode?.trim() || null,
        }),
        ...(dto.isSerialized !== undefined && {
          isSerialized: dto.isSerialized,
        }),
        ...(dto.isBatchTracked !== undefined && {
          isBatchTracked: dto.isBatchTracked,
        }),
        ...(dto.requiresExpiryDate !== undefined && {
          requiresExpiryDate: dto.requiresExpiryDate,
        }),
        ...(dto.minThreshold !== undefined && { minThreshold: dto.minThreshold }),
        ...(dto.reorderPoint !== undefined && {
          reorderPoint: dto.reorderPoint,
        }),
      },
      include: { defaultUom: { select: { id: true, code: true, name: true } } },
    });
  }

  async deleteForClientPortal(id: string, clientId: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');
    if (product.clientId !== clientId) {
      throw new ForbiddenException('You do not have access to this product');
    }
    await this.prisma.product.delete({ where: { id } });
    return { success: true };
  }
}
