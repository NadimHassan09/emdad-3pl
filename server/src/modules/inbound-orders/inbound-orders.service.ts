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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // To satisfy current DB non-null constraint, use the provided value or
    // fallback to the first available warehouse as a temporary placeholder.
    let resolvedWarehouseId = dto.warehouseId;
    if (!resolvedWarehouseId) {
      const fallbackWarehouse = await this.prisma.warehouse.findFirst({
        select: { id: true },
        orderBy: { createdAt: 'asc' },
      });
      if (!fallbackWarehouse) {
        throw new BadRequestException(
          'No warehouse configured yet. Admin must create a warehouse first.',
        );
      }
      resolvedWarehouseId = fallbackWarehouse.id;
    }
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: resolvedWarehouseId },
    });

    return this.prisma.inboundOrder.create({
      data: {
        clientId: resolvedClientId,
        warehouseId: resolvedWarehouseId,
        orderNumber: dto.orderNumber?.trim(),
        currentStage:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? 'PENDING_ADMIN_REVIEW'
            : dto.currentStage?.trim(),
        status:
          payload.actorType === ActorType.CLIENT_ACCOUNT
            ? ('PENDING' as any)
            : undefined,
        expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
        createdByActorId: payload.actorId,
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

  async findMany(filter?: InboundOrderFilterDto, payload?: JwtPayload) {
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
    } = {};

    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.status) where.status = filter.status;
    if (filter?.orderNumber) {
      where.orderNumber = {
        contains: filter.orderNumber,
        mode: 'insensitive',
      };
    }

    return this.prisma.inboundOrder.findMany({
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
  }

  async findOne(id: string, payload?: JwtPayload) {
    const where: { id: string; clientId?: string } = { id };
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      where.clientId = payload.clientId;
    }
    const order = await this.prisma.inboundOrder.findFirst({
      where,
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
    return order;
  }

  async update(id: string, dto: UpdateInboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.inboundOrder.update({
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
        ...(dto.warehouseId !== undefined && {
          warehouseId: dto.warehouseId,
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

    return this.prisma.inboundOrderItem.create({
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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateInboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    