import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

export interface LocationTreeNode {
  id: string;
  code: string;
  locationType: string;
  parentLocationId: string | null;
  warehouseId: string;
  children: LocationTreeNode[];
}

@Injectable()
export class LocationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(warehouseId: string, dto: CreateLocationDto) {
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: warehouseId },
    });
    if (dto.parentLocationId) {
      const parent = await this.prisma.location.findFirst({
        where: { id: dto.parentLocationId, warehouseId },
      });
      if (!parent)
        throw new NotFoundException(
          'Parent location not found in this warehouse',
        );
    }
    return this.prisma.location.create({
      data: {
        warehouseId,
        code: dto.code.trim(),
        locationType: dto.locationType as
          | 'ZONE'
          | 'AISLE'
          | 'RACK'
          | 'BIN'
          | 'STAGING',
        parentLocationId: dto.parentLocationId ?? undefined,
        capacityValue: dto.capacityValue,
        capacityUomId: dto.capacityUomId ?? undefined,
        isActive: dto.isActive ?? true,
      },
    });
  }

  async findManyByWarehouse(warehouseId: string) {
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: warehouseId },
    });
    return this.prisma.location.findMany({
      where: { warehouseId },
      include: {
        parentLocation: { select: { id: true, code: true } },
        capacityUom: { select: { id: true, code: true, name: true } },
      },
      orderBy: [{ code: 'asc' }],
    });
  }

  async findOne(id: string) {
    const location = await this.prisma.location.findUnique({
      where: { id },
      include: { warehouse: true, parentLocation: true, capacityUom: true },
    });
    if (!location) throw new NotFoundException('Location not found');
    return location;
  }

  async update(id: string, dto: UpdateLocationDto) {
    const location = await this.findOne(id);
    if (dto.parentLocationId !== undefined && dto.parentLocationId !== null) {
      const parent = await this.prisma.location.findFirst({
        where: { id: dto.parentLocationId, warehouseId: location.warehouseId },
      });
      if (!parent)
        throw new NotFoundException(
          'Parent location not found in this warehouse',
        );
    }
    return this.prisma.location.update({
      where: { id },
      data: {
        ...(dto.code !== undefined && { code: dto.code.trim() }),
        ...(dto.locationType !== undefined && {
          locationType: dto.locationType as
            | 'ZONE'
            | 'AISLE'
            | 'RACK'
            | 'BIN'
            | 'STAGING',
        }),
        ...(dto.parentLocationId !== undefined && {
          parentLocationId: dto.parentLocationId,
        }),
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

  /** Returns locations as a tree: roots (no parent) with nested children per warehouse. */
  async findTree(): Promise<LocationTreeNode[]> {
    const list = await this.prisma.location.findMany({
      where: { isActive: true },
      orderBy: { code: 'asc' },
    });
    const byId = new Map<string, LocationTreeNode>();
    list.forEach((loc) =>
      byId.set(loc.id, {
        id: loc.id,
        code: loc.code,
        locationType: loc.locationType,
        parentLocationId: loc.parentLocationId,
        warehouseId: loc.warehouseId,
        children: [],
      }),
    );
    const roots: LocationTreeNode[] = [];
    byId.forEach((node) => {
      if (node.parentLocationId) {
        const parent = byId.get(node.parentLocationId);
        if (parent) parent.children.push(node);
        else roots.push(node);
      } else roots.push(node);
    });
    return roots;
  }
}
