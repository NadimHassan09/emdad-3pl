import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { ReservationStatus } from '../../common/enums/reservation-status.enum';
import { AllocationStatus } from '../../common/enums/allocation-status.enum';

/**
 * Stock Reservations Service
 *
 * Handles stock reservation and allocation for outbound orders.
 *
 * Reservation flow:
 * - DRAFT: Reservation created, allocations added
 * - CONFIRMED: Reservation confirmed, stock is reserved
 * - RELEASED: Reservation released, stock available again
 * - CANCELLED: Reservation cancelled
 *
 * Allocation lifecycle:
 * - RESERVED: Stock reserved for order item
 * - PARTIALLY_PICKED: Some quantity picked
 * - PICKED: All reserved quantity picked
 * - PARTIALLY_SHIPPED: Some quantity shipped
 * - SHIPPED: All quantity shipped
 * - CANCELLED: Allocation cancelled
 *
 * Quantity rules (enforced by DB constraints):
 * - reservedQty >= 0
 * - pickedQty >= 0
 * - shippedQty >= 0
 * - pickedQty <= reservedQty
 * - shippedQty <= pickedQty
 *
 * CRITICAL: This service reads from current_stock for availability checks.
 * It NEVER writes directly to current_stock. Stock changes happen via
 * inventory_ledger entries (handled by other modules during picking/shipping).
 */
@Injectable()
export class StockReservationsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a reservation for an outbound order.
   * Validates stock availability and creates allocations.
   */
  async createReservation(
    outboundOrderId: string,
    dto: CreateReservationDto,
  ) {
    // Validate outbound order exists
    const order = await this.prisma.outboundOrder.findUniqueOrThrow({
      where: { id: outboundOrderId },
      include: {
        items: true,
        client: true,
        warehouse: true,
      },
    });

    // Validate all order items exist
    const orderItemIds = new Set(order.items.map((item) => item.id));
    for (const allocation of dto.allocations) {
      if (!orderItemIds.has(allocation.outboundOrderItemId)) {
        throw new BadRequestException(
          `Order item ${allocation.outboundOrderItemId} does not belong to order ${outboundOrderId}`,
        );
      }
    }

    // Validate stock availability for each allocation
    await this.validateStockAvailability(
      order.clientId,
      order.warehouseId,
      dto.allocations,
    );

    // Create reservation with allocations
    return this.prisma.stockReservation.create({
      data: {
        clientId: order.clientId,
        warehouseId: order.warehouseId,
        outboundOrderId: order.id,
        status: 'DRAFT' as any,
        allocations: {
          create: dto.allocations.map((alloc) => ({
            outboundOrderItemId: alloc.outboundOrderItemId,
            clientId: order.clientId,
            warehouseId: order.warehouseId,
            productId: alloc.productId,
            batchId: alloc.batchId,
            locationId: alloc.locationId,
            reservedQty: alloc.reservedQty,
            pickedQty: 0,
            shippedQty: 0,
            status: 'RESERVED' as any,
          })),
        },
      },
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        outboundOrder: {
          select: {
            id: true,
            orderNumber: true,
            status: true,
          },
        },
        allocations: {
          include: {
            outboundOrderItem: {
              select: {
                id: true,
                qtyOrdered: true,
                product: { select: { id: true, sku: true, name: true } },
              },
            },
            product: { select: { id: true, sku: true, name: true } },
            batch: { select: { id: true, batchCode: true } },
            location: { select: { id: true, code: true } },
          },
        },
      },
    });
  }

  /**
   * Get reservation by ID with full details.
   */
  async findOne(id: string) {
    const reservation = await this.prisma.stockReservation.findUnique({
      where: { id },
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        outboundOrder: {
          select: {
            id: true,
            orderNumber: true,
            status: true,
          },
        },
        allocations: {
          include: {
            outboundOrderItem: {
              select: {
                id: true,
                qtyOrdered: true,
                product: { select: { id: true, sku: true, name: true } },
              },
            },
            product: { select: { id: true, sku: true, name: true } },
            batch: { select: { id: true, batchCode: true } },
            location: { select: { id: true, code: true } },
          },
        },
      },
    });

    if (!reservation) {
      throw new NotFoundException('Stock reservation not found');
    }

    return reservation;
  }

  /**
   * Confirm a reservation (DRAFT -> CONFIRMED).
   * Stock is now reserved and cannot be used by other orders.
   */
  async confirm(id: string) {
    const reservation = await this.findOne(id);

    if (reservation.status === 'CONFIRMED') {
      throw new BadRequestException('Reservation is already confirmed');
    }

    if (reservation.status === 'RELEASED') {
      throw new BadRequestException('Cannot confirm a released reservation');
    }

    if (reservation.status === 'CANCELLED') {
      throw new BadRequestException('Cannot confirm a cancelled reservation');
    }

    // Re-validate stock availability (stock may have changed since creation)
    const allocations = await this.prisma.outboundAllocation.findMany({
      where: { stockReservationId: id },
    });

    await this.validateStockAvailability(
      reservation.clientId,
      reservation.warehouseId,
      allocations.map((alloc) => ({
        outboundOrderItemId: alloc.outboundOrderItemId,
        productId: alloc.productId,
        batchId: alloc.batchId || undefined,
        locationId: alloc.locationId || undefined,
        reservedQty: alloc.reservedQty.toNumber(),
      })),
    );

    return this.prisma.stockReservation.update({
      where: { id },
      data: {
        status: 'CONFIRMED' as any,
      },
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        outboundOrder: {
          select: {
            id: true,
            orderNumber: true,
            status: true,
          },
        },
        allocations: {
          include: {
            outboundOrderItem: {
              select: {
                id: true,
                qtyOrdered: true,
                product: { select: { id: true, sku: true, name: true } },
              },
            },
            product: { select: { id: true, sku: true, name: true } },
            batch: { select: { id: true, batchCode: true } },
            location: { select: { id: true, code: true } },
          },
        },
      },
    });
  }

  /**
   * Release a reservation (CONFIRMED -> RELEASED).
   * Stock becomes available again for other orders.
   */
  async release(id: string) {
    const reservation = await this.findOne(id);

    if (reservation.status === 'RELEASED') {
      throw new BadRequestException('Reservation is already released');
    }

    if (reservation.status === 'CANCELLED') {
      throw new BadRequestException('Cannot release a cancelled reservation');
    }

    // Check if any allocations have been picked or shipped
    const allocations = await this.prisma.outboundAllocation.findMany({
      where: { stockReservationId: id },
    });

    const hasPickedOrShipped = allocations.some(
      (alloc) =>
        alloc.pickedQty.toNumber() > 0 || alloc.shippedQty.toNumber() > 0,
    );

    if (hasPickedOrShipped) {
      throw new BadRequestException(
        'Cannot release reservation with picked or shipped allocations',
      );
    }

    return this.prisma.stockReservation.update({
      where: { id },
      data: {
        status: 'RELEASED' as any,
      },
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        outboundOrder: {
          select: {
            id: true,
            orderNumber: true,
            status: true,
          },
        },
        allocations: {
          include: {
            outboundOrderItem: {
              select: {
                id: true,
                qtyOrdered: true,
                product: { select: { id: true, sku: true, name: true } },
              },
            },
            product: { select: { id: true, sku: true, name: true } },
            batch: { select: { id: true, batchCode: true } },
            location: { select: { id: true, code: true } },
          },
        },
      },
    });
  }

  /**
   * Validate stock availability for allocations.
   * Reads from current_stock (never writes to it).
   */
  private async validateStockAvailability(
    clientId: string,
    warehouseId: string,
    allocations: Array<{
      productId: string;
      batchId?: string;
      locationId?: string;
      reservedQty: number;
    }>,
  ) {
    // Group allocations by product/batch/location combination
    const stockMap = new Map<string, number>();

    for (const alloc of allocations) {
      const key = `${alloc.productId}:${alloc.batchId || 'null'}:${alloc.locationId || 'null'}`;
      const current = stockMap.get(key) || 0;
      stockMap.set(key, current + alloc.reservedQty);
    }

    // Check availability for each unique combination
    for (const [key, totalReserved] of stockMap.entries()) {
      const [productId, batchIdStr, locationIdStr] = key.split(':');
      const batchId = batchIdStr === 'null' ? null : batchIdStr;
      const locationId = locationIdStr === 'null' ? null : locationIdStr;

      const where: any = {
        clientId,
        warehouseId,
        productId,
      };

      if (batchId !== null) {
        where.batchId = batchId;
      } else {
        where.batchId = null;
      }

      if (locationId !== null) {
        where.locationId = locationId;
      } else {
        where.locationId = null;
      }

      const stock = await this.prisma.currentStock.findFirst({
        where,
      });

      const availableQty = stock ? stock.quantity.toNumber() : 0;

      if (availableQty < totalReserved) {
        throw new BadRequestException(
          `Insufficient stock for product ${productId}. Available: ${availableQty}, Required: ${totalReserved}`,
        );
      }
    }
  }
}

