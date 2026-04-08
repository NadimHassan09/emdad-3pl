import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateVasDto } from './dto/create-vas.dto';
import { UpdateVasDto } from './dto/update-vas.dto';
import { VasFilterDto } from './dto/vas-filter.dto';
import { CreateVasPricingDto } from './dto/create-vas-pricing.dto';
import { UpdateVasPricingDto } from './dto/update-vas-pricing.dto';
import { VasPricingFilterDto } from './dto/vas-pricing-filter.dto';

interface PrismaVas {
  vas: {
    create: (args: { data: Record<string, unknown> }) => Promise<unknown>;
    findMany: (args: { where?: Record<string, unknown>; orderBy?: Record<string, string> }) => Promise<unknown[]>;
    findUnique: (args: { where: { id: string } }) => Promise<unknown>;
    update: (args: { where: { id: string }; data: Record<string, unknown> }) => Promise<unknown>;
  };
  vasPricing: {
    create: (args: { data: Record<string, unknown> }) => Promise<unknown>;
    findMany: (args: { where?: Record<string, unknown>; orderBy?: Record<string, string>; include?: Record<string, unknown> }) => Promise<unknown[]>;
    findUnique: (args: { where: { id: string }; include?: Record<string, unknown> }) => Promise<unknown>;
    update: (args: { where: { id: string }; data: Record<string, unknown> }) => Promise<unknown>;
  };
}

@Injectable()
export class VasService {
  constructor(private readonly prisma: PrismaService) {}

  private db(): PrismaVas {
    return this.prisma as unknown as PrismaVas;
  }

  async createVas(dto: CreateVasDto) {
    return this.db().vas.create({
      data: {
        code: dto.code.trim(),
        name: dto.name.trim(),
        description: dto.description?.trim(),
        isActive: dto.isActive ?? true,
      },
    });
  }

  async findManyVas(filter?: VasFilterDto) {
    const where: Record<string, unknown> = {};
    if (filter?.isActive !== undefined) where.isActive = filter.isActive;
    return this.db().vas.findMany({
      where,
      orderBy: { code: 'asc' },
    });
  }

  async findOneVas(id: string) {
    const vas = await this.db().vas.findUnique({ where: { id } });
    if (!vas) throw new NotFoundException('VAS not found');
    return vas;
  }

  async updateVas(id: string, dto: UpdateVasDto) {
    await this.findOneVas(id);
    return this.db().vas.update({
      where: { id },
      data: {
        ...(dto.code !== undefined && { code: dto.code.trim() }),
        ...(dto.name !== undefined && { name: dto.name.trim() }),
        ...(dto.description !== undefined && { description: dto.description?.trim() }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }

  async createVasPricing(dto: CreateVasPricingDto) {
    return this.db().vasPricing.create({
      data: {
        vasId: dto.vasId,
        billingPlanId: dto.billingPlanId,
        pricingMethod: dto.pricingMethod,
        rateCents: BigInt(dto.rateCents),
        baseUomId: dto.baseUomId,
        minChargeCents: dto.minChargeCents != null ? BigInt(dto.minChargeCents) : undefined,
        billingUnit: dto.billingUnit,
        ruleJson: dto.ruleJson ?? {},
      },
    });
  }

  async findManyVasPricing(filter?: VasPricingFilterDto) {
    const where: Record<string, unknown> = {};
    if (filter?.vasId) where.vasId = filter.vasId;
    if (filter?.billingPlanId) where.billingPlanId = filter.billingPlanId;
    return this.db().vasPricing.findMany({
      where,
      orderBy: { vasId: 'asc' },
      include: { vas: true, billingPlan: true, baseUom: { select: { id: true, code: true, name: true } } },
    });
  }

  async findOneVasPricing(id: string) {
    const row = await this.db().vasPricing.findUnique({
      where: { id },
      include: { vas: true, billingPlan: true, baseUom: true },
    });
    if (!row) throw new NotFoundException('VAS pricing not found');
    return row;
  }

  async updateVasPricing(id: string, dto: UpdateVasPricingDto) {
    await this.findOneVasPricing(id);
    return this.db().vasPricing.update({
      where: { id },
      data: {
        ...(dto.pricingMethod !== undefined && { pricingMethod: dto.pricingMethod }),
        ...(dto.rateCents !== undefined && { rateCents: BigInt(dto.rateCents) }),
        ...(dto.baseUomId !== undefined && { baseUomId: dto.baseUomId }),
        ...(dto.minChargeCents !== undefined && { minChargeCents: BigInt(dto.minChargeCents) }),
        ...(dto.billingUnit !== undefined && { billingUnit: dto.billingUnit }),
        ...(dto.ruleJson !== undefined && { ruleJson: dto.ruleJson }),
      },
    });
  }
}
