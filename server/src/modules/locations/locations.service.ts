import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
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

/** Short abbreviation used when auto-generating location codes. */
const TYPE_ABBREV: Record<string, string> = {
  ZONE: 'ZN',
  AISLE: 'AS',
  RACK: 'RK',
  BIN: 'BN',
  STAGING: 'ST',
};

@Injectable()
export class LocationsService {
  constructor(private readonly prisma: PrismaService) {}

  /** Generate a unique location code within the warehouse. */
  private async generateCode(
    warehouseId: string,
    warehouseCode: string,
    locationType: string,
  ): Promise<string> {
    const prefix = `${warehouseCode.replace(/[^A-Za-z0-9]/g, '').slice(0, 6)}-${TYPE_ABBREV[locationType] ?? locationType.slice(0, 2).toUpperCase()}`;
    const maxAttempts = 10;
    for (let i = 0; i < maxAttempts; i++) {
      const suffix = Math.random().toString(36).slice(2, 7).toUpperCase();
      const candidate = `${prefix}-${suffix}`;
      const existing = await this.prisma.location.findFirst({
        where: { warehouseId, code: candidate },
        select: { id: true },
      });
      if (!existing) return candidate;
    }
    return `${prefix}-${Date.now().toString(36).toUpperCase()}`;
  }

  async create(warehouseId: string, dto: CreateLocationDto) {
    const warehouse = await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: warehouseId },
      select: { id: true, code: true },
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
    const code =
      dto.code?.trim() ||
      (await this.generateCode(warehouseId, warehouse.code, dto.locationType));

    return this.prisma.location.create({
      data: {
        warehouseId,
        code,
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
      include: {
        warehouse: { select: { id: true, code: true, name: true } },
        parentLocation: { select: { id: true, code: true } },
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

  /** Flat list of all locations (any warehouse) with warehouse + parent info. */
  async findFlat(warehouseId?: string) {
    const where = warehouseId ? { warehouseId } : {};
    const rows = await this.prisma.location.findMany({
      where,
      include: {
        warehouse: { select: { id: true, code: true, name: true } },
        parentLocation: { select: { id: true, code: true } },
      },
      orderBy: [{ warehouseId: 'asc' }, { code: 'asc' }],
    });
    return rows.map((r) => ({
      id: r.id,
      code: r.code,
      barcode: r.code, // code acts as the scannable barcode
      locationType: r.locationType,
      parentLocationId: r.parentLocationId,
      parentCode: r.parentLocation?.code ?? null,
      warehouseId: r.warehouseId,
      warehouseName: r.warehouse.name,
      warehouseCode: r.warehouse.code,
      isActive: r.isActive,
      capacityValue: r.capacityValue ? Number(r.capacityValue) : null,
      createdAt: r.createdAt,
    }));
  }

  async findOne(id: string) {
    const location = await this.prisma.location.findUnique({
      where: { id },
      include: { warehouse: true, parentLocation: true, capacityUom: true },
    });
    if (!location) throw new NotFoundException('Location not found');
    return location;
  }

  async update(id: string, warehouseId: string, dto: UpdateLocationDto) {
    const location = await this.findOne(id);
    if (location.warehouseId !== warehouseId) {
      throw new NotFoundException('Location not found in this warehouse');
    }
    if (dto.parentLocationId !== undefined && dto.parentLocationId !== null) {
      if (dto.parentLocationId === id) {
        throw new ConflictException('A location cannot be its own parent');
      }
      const parent = await this.prisma.location.findFirst({
        where: { id: dto.parentLocationId, warehouseId },
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
          parentLocationId: dto.parentLocationId ?? null,
        }),
        ...(dto.capacityValue !== undefined && {
          capacityValue: dto.capacityValue,
        }),
        ...(dto.capacityUomId !== undefined && {
          capacityUomId: dto.capacityUomId,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
      include: {
        warehouse: { select: { id: true, code: true, name: true } },
        parentLocation: { select: { id: true, code: true } },
      },
    });
  }

  async remove(id: string, warehouseId: string) {
    const location = await this.findOne(id);
    if (location.warehouseId !== warehouseId) {
      throw new NotFoundException('Location not found in this warehouse');
    }
    const hasChildren = await this.prisma.location.findFirst({
      where: { parentLocationId: id },
      select: { id: true },
    });
    if (hasChildren) {
      throw new ConflictException(
        'Cannot delete a location that has child locations. Remove children first.',
      );
    }
    const hasStock = await this.prisma.currentStock.findFirst({
      where: { locationId: id, quantity: { gt: 0 } },
      select: { id: true },
    });
    if (hasStock) {
      throw new ConflictException(
        'Cannot delete a location that has stock. Move or adjust stock first.',
      );
    }
    await this.prisma.location.delete({ where: { id } });
    return { success: true };
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
