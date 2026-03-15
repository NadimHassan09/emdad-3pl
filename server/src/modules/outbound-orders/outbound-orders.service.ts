import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';

function toNumber(value: unknown): number {
  if (typeof value === 'number' && !Number.isNaN(value)) return value;
  if (value != null && typeof value === 'object' && typeof (value as { toNumber?: () => number }).toNumber === 'function')
    return (value as { toNumber: () => number }).toNumber();
  if (value != null && typeof (value as { toString?: () => string }).toString === 'function')
    return parseFloat((value as { toString: () => string }).toString()) || 0;
  return 0;
}

/**
 * Outbound Orders Service
 *
 * Handles outbound order creation and item management.
 *
 * This module focuses on order management structure:
 * - Creating outbound orders
 * - Adding items to orders
 * - Updating order details
 *
 * Shipping execution (reservation, picking, shipping) is handled by other modules.
 * This service provides the foundation for batch/location-aware fulfillment.
 *
 * Service methods are designed to integrate cleanly with:
 * - Stock reservation logic (reserves stock for order items)
 * - Shipping logic (updates qtyShipped and creates ledger entries)
 */
@Injectable()
export class OutboundOrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateOutboundOrderDto, createdByActorId: string) {
    // Validate client and warehouse exist
    await this.prisma.client.findUniqueOrThrow({ where: { id: dto.clientId } });
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: dto.warehouseId },
    });

    return this.prisma.outboundOrder.create({
      data: {
        clientId: dto.clientId,
        warehouseId: dto.warehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage: dto.currentStage?.trim(),
        expectedShipDate: dto.expectedShipDate
          ? new Date(dto.expectedShipDate)
          : null,
        createdByActorId,
      },
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        createdByActor: {
          select: {
            id: true,
            actorType: true,
            user: { select: { id: true, email: true } },
            clientAccount: { select: { id: true, email: true } },
          },
        },
      },
    });
  }

  async findMany(filter?: OutboundOrderFilterDto) {
    try {
      const where: {
        clientId?: string;
        warehouseId?: string;
        status?:
          | 'DRAFT'
          | 'PENDING'
          | 'CONFIRMED'
          | 'IN_PROGRESS'
          | 'RECEIVING'
          | 'SHIPPED'
          | 'COMPLETED'
          | 'CANCELLED';
        orderNumber?: { contains: string; mode?: 'insensitive' };
        expectedShipDate?: { gte?: Date; lte?: Date };
      } = {};

      if (filter?.clientId) where.clientId = filter.clientId;
      if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
      if (filter?.status) where.status = filter.status;
      if (filter?.orderNumber) {
        where.orderNumber = {
          contains: filter.orderNumber,
          mode: 'insensitive',
        };
      }
      if (filter?.expectedShipDateFrom || filter?.expectedShipDateTo) {
        where.expectedShipDate = {};
        if (filter.expectedShipDateFrom)
          where.expectedShipDate.gte = new Date(filter.expectedShipDateFrom);
        if (filter.expectedShipDateTo)
          where.expectedShipDate.lte = new Date(filter.expectedShipDateTo);
      }

      const rows = await this.prisma.outboundOrder.findMany({
        where,
        include: {
          client: { select: { id: true, code: true, name: true } },
          warehouse: { select: { id: true, code: true, name: true } },
          items: {
            include: {
              product: { select: { id: true, sku: true, name: true } },
              uom: { select: { id: true, code: true, name: true } },
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      });
      return rows.map((order) => this.serializeOrder(order));
    } catch (e) {
      console.error('[OutboundOrdersService] findMany failed:', e);
      return [];
    }
  }

  private serializeOrder<
    O extends {
      items?: Array<{ qtyOrdered?: unknown; qtyShipped?: unknown; [k: string]: unknown }>;
    },
  >(order: O): O {
    return {
      ...order,
      items: (order.items || []).map((item) => ({
        ...item,
        qtyOrdered: toNumber(item.qtyOrdered),
        qtyShipped: toNumber(item.qtyShipped),
      })),
    } as O;
  }

  async findOne(id: string) {
    const order = await this.prisma.outboundOrder.findUnique({
      where: { id },
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        createdByActor: {
          select: {
            id: true,
            actorType: true,
            user: { select: { id: true, email: true } },
            clientAccount: { select: { id: true, email: true } },
          },
        },
        items: {
          include: {
            product: { select: { id: true, sku: true, name: true } },
            uom: { select: { id: true, code: true, name: true } },
            batches: {
              include: {
                batch: { select: { id: true, batchCode: true } },
                location: { select: { id: true, code: true } },
              },
            },
          },
        },
      },
    });

    if (!order) throw new NotFoundException('Outbound order not found');
    return this.serializeOrder(order);
  }

  async update(id: string, dto: UpdateOutboundOrderDto) {
    await this.findOne(id);

    const updated = await this.prisma.outboundOrder.update({
      where: { id },
      data: {
        ...(dto.orderNumber !== undefined && {
          orderNumber: dto.orderNumber?.trim(),
        }),
        ...(dto.status !== undefined && { status: dto.status as any }),
        ...(dto.currentStage !== undefined && {
          currentStage: dto.currentStage?.trim(),
        }),
        ...(dto.expectedShipDate !== undefined && {
          expectedShipDate: dto.expectedShipDate
            ? new Date(dto.expectedShipDate)
            : null,
        }),
      },
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        items: {
          include: {
            product: { select: { id: true, sku: true, name: true } },
            uom: { select: { id: true, code: true, name: true } },
          },
        },
      },
    });
    return this.serializeOrder(updated);
  }

  async addItem(orderId: string, dto: AddOutboundOrderItemDto) {
    const order = await this.findOne(orderId);

    // Validate product and UOM exist
    await this.prisma.product.findUniqueOrThrow({
      where: { id: dto.productId },
    });
    await this.prisma.uom.findUniqueOrThrow({ where: { id: dto.uomId } });

    // Validate product belongs to same client
    const product = await this.prisma.product.findUnique({
      where: { id: dto.productId },
    });
    if (product?.clientId !== order.clientId) {
      throw new BadRequestException(
        'Product does not belong to the order client',
      );
    }

    const item = await this.prisma.outboundOrderItem.create({
      data: {
        outboundOrderId: orderId,
        productId: dto.productId,
        qtyOrdered: dto.qtyOrdered,
        uomId: dto.uomId,
      },
      include: {
        product: { select: { id: true, sku: true, name: true } },
        uom: { select: { id: true, code: true, name: true } },
      },
    });
    return {
      ...item,
      qtyOrdered: toNumber(item.qtyOrdered),
      qtyShipped: toNumber(item.qtyShipped),
    };
  }
}
