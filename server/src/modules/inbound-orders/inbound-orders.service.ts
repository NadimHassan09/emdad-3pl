import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { InventoryService } from '../inventory/inventory.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { MovementType } from '../../common/enums/movement-type.enum';

/** Convert Prisma Decimal to number for JSON serialization. */
function toNumber(value: unknown): number {
  if (typeof value === 'number' && !Number.isNaN(value)) return value;
  if (value != null && typeof value === 'object' && typeof (value as { toNumber?: () => number }).toNumber === 'function')
    return (value as { toNumber: () => number }).toNumber();
  if (value != null && typeof (value as { toString?: () => string }).toString === 'function')
    return parseFloat((value as { toString: () => string }).toString()) || 0;
  return 0;
}

/**
 * Inbound Orders Service
 *
 * Handles inbound order creation, item management, and receiving operations.
 *
 * Receiving flow:
 * 1. Validate order item exists and is receivable
 * 2. For each batch/location combination:
 *    - Create batch if needed (if batchCode provided)
 *    - Create inboundOrderItemBatch record
 *    - Insert RECEIPT ledger entry via InventoryService
 * 3. Update item qtyReceived
 * 4. Update order status if all items received
 *
 * Never writes to current_stock directly - all stock changes go through inventory_ledger.
 */
@Injectable()
export class InboundOrdersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly inventoryService: InventoryService,
  ) {}

  async create(dto: CreateInboundOrderDto, createdByActorId: string) {
    // Validate client and warehouse exist
    await this.prisma.client.findUniqueOrThrow({ where: { id: dto.clientId } });
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: dto.warehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: dto.clientId,
        warehouseId: dto.warehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage: dto.currentStage?.trim(),
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
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

  async findMany(filter?: InboundOrderFilterDto) {
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
        expectedDate?: { gte?: Date; lte?: Date };
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
      if (filter?.expectedDateFrom || filter?.expectedDateTo) {
        where.expectedDate = {};
        if (filter.expectedDateFrom)
          where.expectedDate.gte = new Date(filter.expectedDateFrom);
        if (filter.expectedDateTo)
          where.expectedDate.lte = new Date(filter.expectedDateTo);
      }

      const rows = await this.prisma.inboundOrder.findMany({
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
      return rows.map((order) => ({
        ...order,
        items: (order.items || []).map((item: { qtyOrdered?: unknown; qtyReceived?: unknown; [k: string]: unknown }) => ({
          ...item,
          qtyOrdered: toNumber(item.qtyOrdered),
          qtyReceived: toNumber(item.qtyReceived),
        })),
      }));
    } catch (e) {
      console.error('[InboundOrdersService] findMany failed:', e);
      return [];
    }
  }

  async findOne(id: string) {
    const order = await this.prisma.inboundOrder.findUnique({
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

    if (!order) throw new NotFoundException('Inbound order not found');
    return this.serializeOrder(order);
  }

  private serializeOrder<
    O extends {
      items?: Array<{
        qtyOrdered?: unknown;
        qtyReceived?: unknown;
        batches?: Array<{ qtyReceived?: unknown } & Record<string, unknown>>;
        [k: string]: unknown;
      }>;
    },
  >(order: O): O {
    return {
      ...order,
      items: (order.items || []).map((item) => ({
        ...item,
        qtyOrdered: toNumber(item.qtyOrdered),
        qtyReceived: toNumber(item.qtyReceived),
        batches: (item.batches || []).map((b) => ({
          ...b,
          qtyReceived: toNumber(b.qtyReceived),
        })),
      })),
    } as O;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    const updated = await this.prisma.inboundOrder.update({
      where: { id },
      data: {
        ...(dto.orderNumber !== undefined && {
          orderNumber: dto.orderNumber?.trim(),
        }),
        ...(dto.status !== undefined && { status: dto.status as any }),
        ...(dto.currentStage !== undefined && {
          currentStage: dto.currentStage?.trim(),
        }),
        ...(dto.expectedDate !== undefined && {
          expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
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

  async addItem(orderId: string, dto: AddInboundOrderItemDto) {
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

    const item = await this.prisma.inboundOrderItem.create({
      data: {
        inboundOrderId: orderId,
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
      qtyReceived: toNumber(item.qtyReceived),
    };
  }

  async receive(orderId: string, dto: ReceiveInboundOrderDto) {
    const order = await this.findOne(orderId);

    // Find the item
    const item = await this.prisma.inboundOrderItem.findUnique({
      where: { id: dto.itemId },
      include: {
        product: true,
        batches: true,
      },
    });

    if (!item) {
      throw new NotFoundException('Inbound order item not found');
    }

    if (item.inboundOrderId !== orderId) {
      throw new BadRequestException(
        'Item does not belong to this inbound order',
      );
    }

    // Calculate total qty being received
    const totalQtyReceived = dto.batches.reduce(
      (sum, batch) => sum + batch.qtyReceived,
      0,
    );

    // Calculate remaining qty to receive
    const qtyRemaining =
      (typeof item.qtyOrdered === 'number'
        ? item.qtyOrdered
        : (item.qtyOrdered as any).toNumber()) -
      (typeof item.qtyReceived === 'number'
        ? item.qtyReceived
        : (item.qtyReceived as any).toNumber());

    if (totalQtyReceived > qtyRemaining) {
      throw new BadRequestException(
        `Cannot receive ${totalQtyReceived}. Remaining: ${qtyRemaining}`,
      );
    }

    // Process each batch/location combination
    const createdBatches: Array<{ batchId: string; locationId?: string }> = [];

    for (const batchDto of dto.batches) {
      let batchId = batchDto.batchId;

      // Create batch if batchCode provided
      if (!batchId && batchDto.batchCode) {
        const newBatch = await this.prisma.batch.create({
          data: {
            productId: item.productId,
            batchCode: batchDto.batchCode.trim(),
            lotNumber: batchDto.lotNumber?.trim(),
            supplierBatchCode: batchDto.supplierBatchCode?.trim(),
            expiryDate: batchDto.expiryDate
              ? new Date(batchDto.expiryDate)
              : null,
            manufacturingDate: batchDto.manufacturingDate
              ? new Date(batchDto.manufacturingDate)
              : null,
            receivedDate: batchDto.receivedDate
              ? new Date(batchDto.receivedDate)
              : new Date(),
            batchStatus: 'AVAILABLE',
          },
        });
        batchId = newBatch.id;
      }

      if (!batchId) {
        throw new BadRequestException(
          'Either batchId or batchCode must be provided',
        );
      }

      // Validate batch belongs to product
      const batch = await this.prisma.batch.findUnique({
        where: { id: batchId },
      });
      if (batch?.productId !== item.productId) {
        throw new BadRequestException(
          'Batch does not belong to the order item product',
        );
      }

      // Validate location belongs to warehouse
      if (batchDto.locationId) {
        const location = await this.prisma.location.findUnique({
          where: { id: batchDto.locationId },
        });
        if (location?.warehouseId !== order.warehouseId) {
          throw new BadRequestException(
            'Location does not belong to the order warehouse',
          );
        }
      }

      // Create inboundOrderItemBatch record
      await this.prisma.inboundOrderItemBatch.create({
        data: {
          inboundOrderItemId: dto.itemId,
          batchId,
          locationId: batchDto.locationId || null,
          qtyReceived: batchDto.qtyReceived,
        },
      });

      // Insert RECEIPT ledger entry via InventoryService
      await this.inventoryService.createLedgerEntry({
        clientId: order.clientId,
        warehouseId: order.warehouseId,
        productId: item.productId,
        batchId: batchId,
        locationId: batchDto.locationId,
        movementType: MovementType.RECEIPT,
        qtyChange: batchDto.qtyReceived,
        referenceType: 'INBOUND_ORDER',
        referenceId: orderId,
      });

      createdBatches.push({
        batchId,
        locationId: batchDto.locationId,
      });
    }

    // Update item qtyReceived
    const newQtyReceived =
      (typeof item.qtyReceived === 'number'
        ? item.qtyReceived
        : (item.qtyReceived as any).toNumber()) + totalQtyReceived;

    await this.prisma.inboundOrderItem.update({
      where: { id: dto.itemId },
      data: { qtyReceived: newQtyReceived },
    });

    // Check if all items are fully received and update order status
    const allItems = await this.prisma.inboundOrderItem.findMany({
      where: { inboundOrderId: orderId },
    });

    const allReceived = allItems.every((i) => {
      const ordered =
        typeof i.qtyOrdered === 'number'
          ? i.qtyOrdered
          : (i.qtyOrdered as any).toNumber();
      const received =
        typeof i.qtyReceived === 'number'
          ? i.qtyReceived
          : (i.qtyReceived as any).toNumber();
      return received >= ordered;
    });

    if (allReceived && order.status !== 'COMPLETED') {
      await this.prisma.inboundOrder.update({
        where: { id: orderId },
        data: { status: 'COMPLETED' as any },
      });
    } else if (order.status === 'DRAFT' || order.status === 'PENDING') {
      await this.prisma.inboundOrder.update({
        where: { id: orderId },
        data: { status: 'RECEIVING' as any },
      });
    }

    return this.findOne(orderId);
  }
}
