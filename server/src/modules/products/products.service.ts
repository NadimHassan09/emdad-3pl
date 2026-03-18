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

  async createForClientPortal(clientId: string, dto: CreateProductClientPortalDto) {
    await this.prisma.client.findUniqueOrThrow({ where: { id: clientId } });
    await this.prisma.uom.findUniqueOrThrow({
      where: { id: dto.defaultUomId },
    });
    return this.prisma.product.create({
      data: {
        clientId,
        sku: dto.sku.trim(),
        name: dto.name.trim(),
        description: dto.description?.trim() ?? null,
        price: dto.price != null ? dto.price : null,
        defaultUomId: dto.defaultUomId,
        minThreshold: 0,
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
        ...(dto.price !== undefined && { price: dto.price }),
        ...(dto.defaultUomId !== undefined && {
          defaultUomId: dto.defaultUomId,
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
