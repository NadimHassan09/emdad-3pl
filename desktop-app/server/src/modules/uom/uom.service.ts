import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateUomDto } from './dto/create-uom.dto';
import { UpdateUomDto } from './dto/update-uom.dto';
import { UomFilterDto } from './dto/uom-filter.dto';

@Injectable()
export class UomService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUomDto) {
    return this.prisma.uom.create({
      data: {
        code: dto.code.trim(),
        name: dto.name.trim(),
        dimension: dto.dimension as
          | 'COUNT'
          | 'LENGTH'
          | 'WEIGHT'
          | 'VOLUME'
          | 'TEMPERATURE',
        baseConversion: dto.baseConversion ?? 1,
        isActive: dto.isActive ?? true,
      },
    });
  }

  async findMany(filter?: UomFilterDto) {
    try {
      const where: {
        isActive?: boolean;
        dimension?: 'COUNT' | 'LENGTH' | 'WEIGHT' | 'VOLUME' | 'TEMPERATURE';
      } = {};
      if (filter?.isActive !== undefined) where.isActive = filter.isActive;
      if (filter?.dimension !== undefined) where.dimension = filter.dimension;
      return await this.prisma.uom.findMany({
        where,
        orderBy: { code: 'asc' },
      });
    } catch (e) {
      console.error('[UomService] findMany failed:', e);
      return [];
    }
  }

  async findOne(id: string) {
    const uom = await this.prisma.uom.findUnique({ where: { id } });
    if (!uom) throw new NotFoundException('UOM not found');
    return uom;
  }

  async remove(id: string) {
    await this.findOne(id);
    const usedByProduct = await this.prisma.product.findFirst({
      where: { defaultUomId: id },
      select: { id: true },
    });
    if (usedByProduct) {
      throw new ConflictException(
        'Cannot delete UOM: it is referenced by one or more products.',
      );
    }
    await this.prisma.uom.delete({ where: { id } });
    return { success: true };
  }

  async update(id: string, dto: UpdateUomDto) {
    await this.findOne(id);
    return this.prisma.uom.update({
      where: { id },
      data: {
        ...(dto.code !== undefined && { code: dto.code.trim() }),
        ...(dto.name !== undefined && { name: dto.name.trim() }),
        ...(dto.dimension !== undefined && {
          dimension: dto.dimension as
            | 'COUNT'
            | 'LENGTH'
            | 'WEIGHT'
            | 'VOLUME'
            | 'TEMPERATURE',
        }),
        ...(dto.baseConversion !== undefined && {
          baseConversion: dto.baseConversion,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}
