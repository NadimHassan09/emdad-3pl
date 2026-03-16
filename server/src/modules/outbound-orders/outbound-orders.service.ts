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
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateOutboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // Use provided value or fallback warehouse to satisfy current DB constraints.
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

    return this.prisma.outboundOrder.create({
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
        expectedShipDate: dto.expectedShipDate
          ? new Date(dto.expectedShipDate)
          : null,
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

  async findMany(filter?: OutboundOrderFilterDto, payload?: JwtPayload) {
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

    return this.prisma.outboundOrder.findMany({
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
    const order = await this.prisma.outboundOrder.findFirst({
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

    if (!order) throw new NotFoundException('Outbound order not found');
    return order;
  }

  async update(id: string, dto: UpdateOutboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.outboundOrder.update({
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

    // Validate stock availability: prevent creating outbound demand higher than current stock.
    // We validate against total stock for this client+product across all warehouses/locations.
    const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
      this.prisma.currentStock.aggregate({
        where: {
          clientId: order.clientId,
          productId: dto.productId,
        },
        _sum: {
          quantity: true,
        },
      }),
      this.prisma.outboundOrderItem.aggregate({
        where: {
          outboundOrderId: orderId,
          productId: dto.productId,
        },
        _sum: {
          qtyOrdered: true,
        },
      }),
    ]);

    const availableQtyRaw = currentStockAgg._sum.quantity;
    const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
    const availableQty =
      typeof availableQtyRaw === 'number'
        ? availableQtyRaw
        : availableQtyRaw
          ? (availableQtyRaw as any).toNumber()
          : 0;
    const existingQty =
      typeof existingQtyRaw === 'number'
        ? existingQtyRaw
        : existingQtyRaw
          ? (existingQtyRaw as any).toNumber()
          : 0;
    const requestedTotal = existingQty + dto.qtyOrdered;

    if (requestedTotal > availableQty) {
      throw new BadRequestException(
        `Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`,
      );
    }

    return this.prisma.outboundOrderItem.create({
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
  }
}

  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateOutboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // Use provided value or fallback warehouse to satisfy current DB constraints.
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

    return this.prisma.outboundOrder.create({
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
        expectedShipDate: dto.expectedShipDate
          ? new Date(dto.expectedShipDate)
          : null,
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

  async findMany(filter?: OutboundOrderFilterDto, payload?: JwtPayload) {
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

    return this.prisma.outboundOrder.findMany({
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
    const order = await this.prisma.outboundOrder.findFirst({
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

    if (!order) throw new NotFoundException('Outbound order not found');
    return order;
  }

  async update(id: string, dto: UpdateOutboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.outboundOrder.update({
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

    // Validate stock availability: prevent creating outbound demand higher than current stock.
    // We validate against total stock for this client+product across all warehouses/locations.
    const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
      this.prisma.currentStock.aggregate({
        where: {
          clientId: order.clientId,
          productId: dto.productId,
        },
        _sum: {
          quantity: true,
        },
      }),
      this.prisma.outboundOrderItem.aggregate({
        where: {
          outboundOrderId: orderId,
          productId: dto.productId,
        },
        _sum: {
          qtyOrdered: true,
        },
      }),
    ]);

    const availableQtyRaw = currentStockAgg._sum.quantity;
    const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
    const availableQty =
      typeof availableQtyRaw === 'number'
        ? availableQtyRaw
        : availableQtyRaw
          ? (availableQtyRaw as any).toNumber()
          : 0;
    const existingQty =
      typeof existingQtyRaw === 'number'
        ? existingQtyRaw
        : existingQtyRaw
          ? (existingQtyRaw as any).toNumber()
          : 0;
    const requestedTotal = existingQty + dto.qtyOrdered;

    if (requestedTotal > availableQty) {
      throw new BadRequestException(
        `Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`,
      );
    }

    return this.prisma.outboundOrderItem.create({
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
  }
}

  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateOutboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // Use provided value or fallback warehouse to satisfy current DB constraints.
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

    return this.prisma.outboundOrder.create({
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
        expectedShipDate: dto.expectedShipDate
          ? new Date(dto.expectedShipDate)
          : null,
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

  async findMany(filter?: OutboundOrderFilterDto, payload?: JwtPayload) {
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

    return this.prisma.outboundOrder.findMany({
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
    const order = await this.prisma.outboundOrder.findFirst({
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

    if (!order) throw new NotFoundException('Outbound order not found');
    return order;
  }

  async update(id: string, dto: UpdateOutboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.outboundOrder.update({
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

    // Validate stock availability: prevent creating outbound demand higher than current stock.
    // We validate against total stock for this client+product across all warehouses/locations.
    const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
      this.prisma.currentStock.aggregate({
        where: {
          clientId: order.clientId,
          productId: dto.productId,
        },
        _sum: {
          quantity: true,
        },
      }),
      this.prisma.outboundOrderItem.aggregate({
        where: {
          outboundOrderId: orderId,
          productId: dto.productId,
        },
        _sum: {
          qtyOrdered: true,
        },
      }),
    ]);

    const availableQtyRaw = currentStockAgg._sum.quantity;
    const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
    const availableQty =
      typeof availableQtyRaw === 'number'
        ? availableQtyRaw
        : availableQtyRaw
          ? (availableQtyRaw as any).toNumber()
          : 0;
    const existingQty =
      typeof existingQtyRaw === 'number'
        ? existingQtyRaw
        : existingQtyRaw
          ? (existingQtyRaw as any).toNumber()
          : 0;
    const requestedTotal = existingQty + dto.qtyOrdered;

    if (requestedTotal > availableQty) {
      throw new BadRequestException(
        `Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`,
      );
    }

    return this.prisma.outboundOrderItem.create({
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
  }
}

  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateOutboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // Use provided value or fallback warehouse to satisfy current DB constraints.
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

    return this.prisma.outboundOrder.create({
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
        expectedShipDate: dto.expectedShipDate
          ? new Date(dto.expectedShipDate)
          : null,
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

  async findMany(filter?: OutboundOrderFilterDto, payload?: JwtPayload) {
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

    return this.prisma.outboundOrder.findMany({
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
    const order = await this.prisma.outboundOrder.findFirst({
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

    if (!order) throw new NotFoundException('Outbound order not found');
    return order;
  }

  async update(id: string, dto: UpdateOutboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.outboundOrder.update({
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

    // Validate stock availability: prevent creating outbound demand higher than current stock.
    // We validate against total stock for this client+product across all warehouses/locations.
    const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
      this.prisma.currentStock.aggregate({
        where: {
          clientId: order.clientId,
          productId: dto.productId,
        },
        _sum: {
          quantity: true,
        },
      }),
      this.prisma.outboundOrderItem.aggregate({
        where: {
          outboundOrderId: orderId,
          productId: dto.productId,
        },
        _sum: {
          qtyOrdered: true,
        },
      }),
    ]);

    const availableQtyRaw = currentStockAgg._sum.quantity;
    const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
    const availableQty =
      typeof availableQtyRaw === 'number'
        ? availableQtyRaw
        : availableQtyRaw
          ? (availableQtyRaw as any).toNumber()
          : 0;
    const existingQty =
      typeof existingQtyRaw === 'number'
        ? existingQtyRaw
        : existingQtyRaw
          ? (existingQtyRaw as any).toNumber()
          : 0;
    const requestedTotal = existingQty + dto.qtyOrdered;

    if (requestedTotal > availableQty) {
      throw new BadRequestException(
        `Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`,
      );
    }

    return this.prisma.outboundOrderItem.create({
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
  }
}

  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateOutboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // Use provided value or fallback warehouse to satisfy current DB constraints.
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

    return this.prisma.outboundOrder.create({
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
        expectedShipDate: dto.expectedShipDate
          ? new Date(dto.expectedShipDate)
          : null,
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

  async findMany(filter?: OutboundOrderFilterDto, payload?: JwtPayload) {
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

    return this.prisma.outboundOrder.findMany({
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
    const order = await this.prisma.outboundOrder.findFirst({
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

    if (!order) throw new NotFoundException('Outbound order not found');
    return order;
  }

  async update(id: string, dto: UpdateOutboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.outboundOrder.update({
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

    // Validate stock availability: prevent creating outbound demand higher than current stock.
    // We validate against total stock for this client+product across all warehouses/locations.
    const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
      this.prisma.currentStock.aggregate({
        where: {
          clientId: order.clientId,
          productId: dto.productId,
        },
        _sum: {
          quantity: true,
        },
      }),
      this.prisma.outboundOrderItem.aggregate({
        where: {
          outboundOrderId: orderId,
          productId: dto.productId,
        },
        _sum: {
          qtyOrdered: true,
        },
      }),
    ]);

    const availableQtyRaw = currentStockAgg._sum.quantity;
    const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
    const availableQty =
      typeof availableQtyRaw === 'number'
        ? availableQtyRaw
        : availableQtyRaw
          ? (availableQtyRaw as any).toNumber()
          : 0;
    const existingQty =
      typeof existingQtyRaw === 'number'
        ? existingQtyRaw
        : existingQtyRaw
          ? (existingQtyRaw as any).toNumber()
          : 0;
    const requestedTotal = existingQty + dto.qtyOrdered;

    if (requestedTotal > availableQty) {
      throw new BadRequestException(
        `Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`,
      );
    }

    return this.prisma.outboundOrderItem.create({
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
  }
}

  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateOutboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // Use provided value or fallback warehouse to satisfy current DB constraints.
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

    return this.prisma.outboundOrder.create({
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
        expectedShipDate: dto.expectedShipDate
          ? new Date(dto.expectedShipDate)
          : null,
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

  async findMany(filter?: OutboundOrderFilterDto, payload?: JwtPayload) {
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

    return this.prisma.outboundOrder.findMany({
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
    const order = await this.prisma.outboundOrder.findFirst({
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

    if (!order) throw new NotFoundException('Outbound order not found');
    return order;
  }

  async update(id: string, dto: UpdateOutboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.outboundOrder.update({
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

    // Validate stock availability: prevent creating outbound demand higher than current stock.
    // We validate against total stock for this client+product across all warehouses/locations.
    const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
      this.prisma.currentStock.aggregate({
        where: {
          clientId: order.clientId,
          productId: dto.productId,
        },
        _sum: {
          quantity: true,
        },
      }),
      this.prisma.outboundOrderItem.aggregate({
        where: {
          outboundOrderId: orderId,
          productId: dto.productId,
        },
        _sum: {
          qtyOrdered: true,
        },
      }),
    ]);

    const availableQtyRaw = currentStockAgg._sum.quantity;
    const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
    const availableQty =
      typeof availableQtyRaw === 'number'
        ? availableQtyRaw
        : availableQtyRaw
          ? (availableQtyRaw as any).toNumber()
          : 0;
    const existingQty =
      typeof existingQtyRaw === 'number'
        ? existingQtyRaw
        : existingQtyRaw
          ? (existingQtyRaw as any).toNumber()
          : 0;
    const requestedTotal = existingQty + dto.qtyOrdered;

    if (requestedTotal > availableQty) {
      throw new BadRequestException(
        `Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`,
      );
    }

    return this.prisma.outboundOrderItem.create({
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
  }
}

  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateOutboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // Use provided value or fallback warehouse to satisfy current DB constraints.
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

    return this.prisma.outboundOrder.create({
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
        expectedShipDate: dto.expectedShipDate
          ? new Date(dto.expectedShipDate)
          : null,
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

  async findMany(filter?: OutboundOrderFilterDto, payload?: JwtPayload) {
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

    return this.prisma.outboundOrder.findMany({
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
    const order = await this.prisma.outboundOrder.findFirst({
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

    if (!order) throw new NotFoundException('Outbound order not found');
    return order;
  }

  async update(id: string, dto: UpdateOutboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.outboundOrder.update({
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

    // Validate stock availability: prevent creating outbound demand higher than current stock.
    // We validate against total stock for this client+product across all warehouses/locations.
    const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
      this.prisma.currentStock.aggregate({
        where: {
          clientId: order.clientId,
          productId: dto.productId,
        },
        _sum: {
          quantity: true,
        },
      }),
      this.prisma.outboundOrderItem.aggregate({
        where: {
          outboundOrderId: orderId,
          productId: dto.productId,
        },
        _sum: {
          qtyOrdered: true,
        },
      }),
    ]);

    const availableQtyRaw = currentStockAgg._sum.quantity;
    const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
    const availableQty =
      typeof availableQtyRaw === 'number'
        ? availableQtyRaw
        : availableQtyRaw
          ? (availableQtyRaw as any).toNumber()
          : 0;
    const existingQty =
      typeof existingQtyRaw === 'number'
        ? existingQtyRaw
        : existingQtyRaw
          ? (existingQtyRaw as any).toNumber()
          : 0;
    const requestedTotal = existingQty + dto.qtyOrdered;

    if (requestedTotal > availableQty) {
      throw new BadRequestException(
        `Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`,
      );
    }

    return this.prisma.outboundOrderItem.create({
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
  }
}

  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateOutboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // Use provided value or fallback warehouse to satisfy current DB constraints.
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

    return this.prisma.outboundOrder.create({
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
        expectedShipDate: dto.expectedShipDate
          ? new Date(dto.expectedShipDate)
          : null,
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

  async findMany(filter?: OutboundOrderFilterDto, payload?: JwtPayload) {
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

    return this.prisma.outboundOrder.findMany({
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
    const order = await this.prisma.outboundOrder.findFirst({
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

    if (!order) throw new NotFoundException('Outbound order not found');
    return order;
  }

  async update(id: string, dto: UpdateOutboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.outboundOrder.update({
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

    // Validate stock availability: prevent creating outbound demand higher than current stock.
    // We validate against total stock for this client+product across all warehouses/locations.
    const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
      this.prisma.currentStock.aggregate({
        where: {
          clientId: order.clientId,
          productId: dto.productId,
        },
        _sum: {
          quantity: true,
        },
      }),
      this.prisma.outboundOrderItem.aggregate({
        where: {
          outboundOrderId: orderId,
          productId: dto.productId,
        },
        _sum: {
          qtyOrdered: true,
        },
      }),
    ]);

    const availableQtyRaw = currentStockAgg._sum.quantity;
    const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
    const availableQty =
      typeof availableQtyRaw === 'number'
        ? availableQtyRaw
        : availableQtyRaw
          ? (availableQtyRaw as any).toNumber()
          : 0;
    const existingQty =
      typeof existingQtyRaw === 'number'
        ? existingQtyRaw
        : existingQtyRaw
          ? (existingQtyRaw as any).toNumber()
          : 0;
    const requestedTotal = existingQty + dto.qtyOrdered;

    if (requestedTotal > availableQty) {
      throw new BadRequestException(
        `Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`,
      );
    }

    return this.prisma.outboundOrderItem.create({
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
  }
}

  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateOutboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // Use provided value or fallback warehouse to satisfy current DB constraints.
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

    return this.prisma.outboundOrder.create({
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
        expectedShipDate: dto.expectedShipDate
          ? new Date(dto.expectedShipDate)
          : null,
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

  async findMany(filter?: OutboundOrderFilterDto, payload?: JwtPayload) {
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

    return this.prisma.outboundOrder.findMany({
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
    const order = await this.prisma.outboundOrder.findFirst({
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

    if (!order) throw new NotFoundException('Outbound order not found');
    return order;
  }

  async update(id: string, dto: UpdateOutboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.outboundOrder.update({
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

    // Validate stock availability: prevent creating outbound demand higher than current stock.
    // We validate against total stock for this client+product across all warehouses/locations.
    const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
      this.prisma.currentStock.aggregate({
        where: {
          clientId: order.clientId,
          productId: dto.productId,
        },
        _sum: {
          quantity: true,
        },
      }),
      this.prisma.outboundOrderItem.aggregate({
        where: {
          outboundOrderId: orderId,
          productId: dto.productId,
        },
        _sum: {
          qtyOrdered: true,
        },
      }),
    ]);

    const availableQtyRaw = currentStockAgg._sum.quantity;
    const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
    const availableQty =
      typeof availableQtyRaw === 'number'
        ? availableQtyRaw
        : availableQtyRaw
          ? (availableQtyRaw as any).toNumber()
          : 0;
    const existingQty =
      typeof existingQtyRaw === 'number'
        ? existingQtyRaw
        : existingQtyRaw
          ? (existingQtyRaw as any).toNumber()
          : 0;
    const requestedTotal = existingQty + dto.qtyOrdered;

    if (requestedTotal > availableQty) {
      throw new BadRequestException(
        `Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`,
      );
    }

    return this.prisma.outboundOrderItem.create({
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
  }
}

  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateOutboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // Use provided value or fallback warehouse to satisfy current DB constraints.
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

    return this.prisma.outboundOrder.create({
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
        expectedShipDate: dto.expectedShipDate
          ? new Date(dto.expectedShipDate)
          : null,
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

  async findMany(filter?: OutboundOrderFilterDto, payload?: JwtPayload) {
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

    return this.prisma.outboundOrder.findMany({
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
    const order = await this.prisma.outboundOrder.findFirst({
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

    if (!order) throw new NotFoundException('Outbound order not found');
    return order;
  }

  async update(id: string, dto: UpdateOutboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.outboundOrder.update({
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

    // Validate stock availability: prevent creating outbound demand higher than current stock.
    // We validate against total stock for this client+product across all warehouses/locations.
    const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
      this.prisma.currentStock.aggregate({
        where: {
          clientId: order.clientId,
          productId: dto.productId,
        },
        _sum: {
          quantity: true,
        },
      }),
      this.prisma.outboundOrderItem.aggregate({
        where: {
          outboundOrderId: orderId,
          productId: dto.productId,
        },
        _sum: {
          qtyOrdered: true,
        },
      }),
    ]);

    const availableQtyRaw = currentStockAgg._sum.quantity;
    const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
    const availableQty =
      typeof availableQtyRaw === 'number'
        ? availableQtyRaw
        : availableQtyRaw
          ? (availableQtyRaw as any).toNumber()
          : 0;
    const existingQty =
      typeof existingQtyRaw === 'number'
        ? existingQtyRaw
        : existingQtyRaw
          ? (existingQtyRaw as any).toNumber()
          : 0;
    const requestedTotal = existingQty + dto.qtyOrdered;

    if (requestedTotal > availableQty) {
      throw new BadRequestException(
        `Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`,
      );
    }

    return this.prisma.outboundOrderItem.create({
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
  }
}

  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateOutboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // Use provided value or fallback warehouse to satisfy current DB constraints.
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

    return this.prisma.outboundOrder.create({
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
        expectedShipDate: dto.expectedShipDate
          ? new Date(dto.expectedShipDate)
          : null,
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

  async findMany(filter?: OutboundOrderFilterDto, payload?: JwtPayload) {
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

    return this.prisma.outboundOrder.findMany({
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
    const order = await this.prisma.outboundOrder.findFirst({
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

    if (!order) throw new NotFoundException('Outbound order not found');
    return order;
  }

  async update(id: string, dto: UpdateOutboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.outboundOrder.update({
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

    // Validate stock availability: prevent creating outbound demand higher than current stock.
    // We validate against total stock for this client+product across all warehouses/locations.
    const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
      this.prisma.currentStock.aggregate({
        where: {
          clientId: order.clientId,
          productId: dto.productId,
        },
        _sum: {
          quantity: true,
        },
      }),
      this.prisma.outboundOrderItem.aggregate({
        where: {
          outboundOrderId: orderId,
          productId: dto.productId,
        },
        _sum: {
          qtyOrdered: true,
        },
      }),
    ]);

    const availableQtyRaw = currentStockAgg._sum.quantity;
    const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
    const availableQty =
      typeof availableQtyRaw === 'number'
        ? availableQtyRaw
        : availableQtyRaw
          ? (availableQtyRaw as any).toNumber()
          : 0;
    const existingQty =
      typeof existingQtyRaw === 'number'
        ? existingQtyRaw
        : existingQtyRaw
          ? (existingQtyRaw as any).toNumber()
          : 0;
    const requestedTotal = existingQty + dto.qtyOrdered;

    if (requestedTotal > availableQty) {
      throw new BadRequestException(
        `Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`,
      );
    }

    return this.prisma.outboundOrderItem.create({
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
  }
}

  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateOutboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // Use provided value or fallback warehouse to satisfy current DB constraints.
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

    return this.prisma.outboundOrder.create({
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
        expectedShipDate: dto.expectedShipDate
          ? new Date(dto.expectedShipDate)
          : null,
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

  async findMany(filter?: OutboundOrderFilterDto, payload?: JwtPayload) {
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

    return this.prisma.outboundOrder.findMany({
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
    const order = await this.prisma.outboundOrder.findFirst({
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

    if (!order) throw new NotFoundException('Outbound order not found');
    return order;
  }

  async update(id: string, dto: UpdateOutboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.outboundOrder.update({
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

    // Validate stock availability: prevent creating outbound demand higher than current stock.
    // We validate against total stock for this client+product across all warehouses/locations.
    const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
      this.prisma.currentStock.aggregate({
        where: {
          clientId: order.clientId,
          productId: dto.productId,
        },
        _sum: {
          quantity: true,
        },
      }),
      this.prisma.outboundOrderItem.aggregate({
        where: {
          outboundOrderId: orderId,
          productId: dto.productId,
        },
        _sum: {
          qtyOrdered: true,
        },
      }),
    ]);

    const availableQtyRaw = currentStockAgg._sum.quantity;
    const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
    const availableQty =
      typeof availableQtyRaw === 'number'
        ? availableQtyRaw
        : availableQtyRaw
          ? (availableQtyRaw as any).toNumber()
          : 0;
    const existingQty =
      typeof existingQtyRaw === 'number'
        ? existingQtyRaw
        : existingQtyRaw
          ? (existingQtyRaw as any).toNumber()
          : 0;
    const requestedTotal = existingQty + dto.qtyOrdered;

    if (requestedTotal > availableQty) {
      throw new BadRequestException(
        `Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`,
      );
    }

    return this.prisma.outboundOrderItem.create({
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
  }
}

  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateOutboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // Use provided value or fallback warehouse to satisfy current DB constraints.
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

    return this.prisma.outboundOrder.create({
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
        expectedShipDate: dto.expectedShipDate
          ? new Date(dto.expectedShipDate)
          : null,
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

  async findMany(filter?: OutboundOrderFilterDto, payload?: JwtPayload) {
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

    return this.prisma.outboundOrder.findMany({
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
    const order = await this.prisma.outboundOrder.findFirst({
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

    if (!order) throw new NotFoundException('Outbound order not found');
    return order;
  }

  async update(id: string, dto: UpdateOutboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.outboundOrder.update({
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

    // Validate stock availability: prevent creating outbound demand higher than current stock.
    // We validate against total stock for this client+product across all warehouses/locations.
    const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
      this.prisma.currentStock.aggregate({
        where: {
          clientId: order.clientId,
          productId: dto.productId,
        },
        _sum: {
          quantity: true,
        },
      }),
      this.prisma.outboundOrderItem.aggregate({
        where: {
          outboundOrderId: orderId,
          productId: dto.productId,
        },
        _sum: {
          qtyOrdered: true,
        },
      }),
    ]);

    const availableQtyRaw = currentStockAgg._sum.quantity;
    const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
    const availableQty =
      typeof availableQtyRaw === 'number'
        ? availableQtyRaw
        : availableQtyRaw
          ? (availableQtyRaw as any).toNumber()
          : 0;
    const existingQty =
      typeof existingQtyRaw === 'number'
        ? existingQtyRaw
        : existingQtyRaw
          ? (existingQtyRaw as any).toNumber()
          : 0;
    const requestedTotal = existingQty + dto.qtyOrdered;

    if (requestedTotal > availableQty) {
      throw new BadRequestException(
        `Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`,
      );
    }

    return this.prisma.outboundOrderItem.create({
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
  }
}

  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateOutboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // Use provided value or fallback warehouse to satisfy current DB constraints.
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

    return this.prisma.outboundOrder.create({
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
        expectedShipDate: dto.expectedShipDate
          ? new Date(dto.expectedShipDate)
          : null,
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

  async findMany(filter?: OutboundOrderFilterDto, payload?: JwtPayload) {
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

    return this.prisma.outboundOrder.findMany({
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
    const order = await this.prisma.outboundOrder.findFirst({
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

    if (!order) throw new NotFoundException('Outbound order not found');
    return order;
  }

  async update(id: string, dto: UpdateOutboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.outboundOrder.update({
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

    // Validate stock availability: prevent creating outbound demand higher than current stock.
    // We validate against total stock for this client+product across all warehouses/locations.
    const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
      this.prisma.currentStock.aggregate({
        where: {
          clientId: order.clientId,
          productId: dto.productId,
        },
        _sum: {
          quantity: true,
        },
      }),
      this.prisma.outboundOrderItem.aggregate({
        where: {
          outboundOrderId: orderId,
          productId: dto.productId,
        },
        _sum: {
          qtyOrdered: true,
        },
      }),
    ]);

    const availableQtyRaw = currentStockAgg._sum.quantity;
    const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
    const availableQty =
      typeof availableQtyRaw === 'number'
        ? availableQtyRaw
        : availableQtyRaw
          ? (availableQtyRaw as any).toNumber()
          : 0;
    const existingQty =
      typeof existingQtyRaw === 'number'
        ? existingQtyRaw
        : existingQtyRaw
          ? (existingQtyRaw as any).toNumber()
          : 0;
    const requestedTotal = existingQty + dto.qtyOrdered;

    if (requestedTotal > availableQty) {
      throw new BadRequestException(
        `Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`,
      );
    }

    return this.prisma.outboundOrderItem.create({
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
  }
}

  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

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

  async create(dto: CreateOutboundOrderDto, payload: JwtPayload) {
    const resolvedClientId =
      payload.actorType === ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
    if (!resolvedClientId) {
      throw new BadRequestException('clientId is required');
    }
    await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });

    // Warehouse is hidden from client portal and assigned by admin later.
    // Use provided value or fallback warehouse to satisfy current DB constraints.
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

    return this.prisma.outboundOrder.create({
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
        expectedShipDate: dto.expectedShipDate
          ? new Date(dto.expectedShipDate)
          : null,
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

  async findMany(filter?: OutboundOrderFilterDto, payload?: JwtPayload) {
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

    return this.prisma.outboundOrder.findMany({
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
    const order = await this.prisma.outboundOrder.findFirst({
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

    if (!order) throw new NotFoundException('Outbound order not found');
    return order;
  }

  async update(id: string, dto: UpdateOutboundOrderDto) {
    await this.findOne(id);

    if (dto.warehouseId) {
      await this.prisma.warehouse.findUniqueOrThrow({
        where: { id: dto.warehouseId },
      });
    }

    return this.prisma.outboundOrder.update({
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

    // Validate stock availability: prevent creating outbound demand higher than current stock.
    // We validate against total stock for this client+product across all warehouses/locations.
    const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
      this.prisma.currentStock.aggregate({
        where: {
          clientId: order.clientId,
          productId: dto.productId,
        },
        _sum: {
          quantity: true,
        },
      }),
      this.prisma.outboundOrderItem.aggregate({
        where: {
          outboundOrderId: orderId,
          productId: dto.productId,
        },
        _sum: {
          qtyOrdered: true,
        },
      }),
    ]);

    const availableQtyRaw = currentStockAgg._sum.quantity;
    const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
    const availableQty =
      typeof availableQtyRaw === 'number'
        ? availableQtyRaw
        : availableQtyRaw
          ? (availableQtyRaw as any).toNumber()
          : 0;
    const existingQty =
      typeof existingQtyRaw === 'number'
        ? existingQtyRaw
        : existingQtyRaw
          ? (existingQtyRaw as any).toNumber()
          : 0;
    const requestedTotal = existingQty + dto.qtyOrdered;

    if (requestedTotal > availableQty) {
      throw new BadRequestException(
        `Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`,
      );
    }

    return this.prisma.outboundOrderItem.create({
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
  }
}
