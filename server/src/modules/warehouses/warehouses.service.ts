import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { WarehouseFilterDto } from './dto/warehouse-filter.dto';

@Injectable()
export class WarehousesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateWarehouseDto) {
    return this.prisma.warehouse.create({
      data: {
        code: dto.code.trim(),
        name: dto.name.trim(),
        capacityValue: dto.capacityValue,
        capacityUomId: dto.capacityUomId ?? undefined,
        isActive: dto.isActive ?? true,
      },
    });
  }

  async findMany(filter?: WarehouseFilterDto) {
    const where: { isActive?: boolean } = {};
    if (filter?.isActive !== undefined) where.isActive = filter.isActive;
    return this.prisma.warehouse.findMany({
      where,
      include: {
        capacityUom: { select: { id: true, code: true, name: true } },
      },
      orderBy: { code: 'asc' },
    });
  }

  async findOne(id: string) {
    const warehouse = await this.prisma.warehouse.findUnique({
      where: { id },
      include: { capacityUom: true },
    });
    if (!warehouse) throw new NotFoundException('Warehouse not found');
    return warehouse;
  }

  async update(id: string, dto: UpdateWarehouseDto) {
    await this.findOne(id);
    return this.prisma.warehouse.update({
      where: { id },
      data: {
        ...(dto.code !== undefined && { code: dto.code.trim() }),
        ...(dto.name !== undefined && { name: dto.name.trim() }),
        ...(dto.capacityValue !== undefined && {
          capacityValue: dto.capacityValue,
        }),
        ...(dto.capacityUomId !== undefined && {
          capacityUomId: dto.capacityUomId,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}
