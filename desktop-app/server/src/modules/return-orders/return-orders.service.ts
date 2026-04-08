import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateReturnOrderDto } from './dto/create-return-order.dto';
import { ReturnOrderFilterDto } from './dto/return-order-filter.dto';
import { ReturnDisposition } from '../../common/enums/return-disposition.enum';
import { InventoryService } from '../inventory/inventory.service';
import { MovementType } from '../../common/enums/movement-type.enum';

/**
 * Return Orders Service
 *
 * Handles return orders for goods returned after outbound shipment.
 *
 * Return disposition types:
 * - RESTOCK: Returned goods are restocked (creates RETURN ledger entry)
 * - DAMAGED: Goods are damaged (no stock increase)
 * - QUARANTINE: Goods placed in quarantine (no stock increase)
 * - DISPOSAL: Goods disposed (no stock increase)
 *
 * CRITICAL: This service uses InventoryService.createLedgerEntry() for RESTOCK disposition.
 * It NEVER writes directly to current_stock. Stock changes happen via inventory_ledger.
 *
 * The service is designed to be extendable for future handling of:
 * - DAMAGED: May require damage assessment workflow
 * - QUARANTINE: May require quality control workflow
 * - DISPOSAL: May require disposal documentation workflow
 */
@Injectable()
export class ReturnOrdersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly inventoryService: InventoryService,
  ) {}

  /**
   * Create a return order.
   */
  async create(dto: CreateReturnOrderDto) {
    // Validate outbound order exists
    const outboundOrder = await this.prisma.outboundOrder.findUniqueOrThrow({
      where: { id: dto.outboundOrderId },
      include: {
        client: true,
        warehouse: true,
      },
    });

    // Validate product exists
    await this.prisma.product.findUniqueOrThrow({
      where: { id: dto.productId },
    });

    // Validate batch exists if provided
    if (dto.batchId) {
      await this.prisma.batch.findUniqueOrThrow({
        where: { id: dto.batchId },
      });
    }

    const warehouseId = outboundOrder.warehouseId;
    if (!warehouseId) {
      throw new BadRequestException(
        'Outbound order must have a warehouse assigned before creating a return order',
      );
    }

    // Create return order
    return this.prisma.returnOrder.create({
      data: {
        clientId: outboundOrder.clientId,
        warehouseId,
        outboundOrderId: dto.outboundOrderId,
        returnNumber: dto.returnNumber.trim(),
        productId: dto.productId,
        batchId: dto.batchId || null,
        qty: dto.qty,
        disposition: (dto.disposition || ReturnDisposition.RESTOCK) as any,
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
        product: { select: { id: true, sku: true, name: true } },
        batch: { select: { id: true, batchCode: true } },
      },
    });
  }

  /**
   * Find return orders with optional filters.
   */
  async findMany(filter?: ReturnOrderFilterDto) {
    const where: {
      clientId?: string;
      warehouseId?: string;
      outboundOrderId?: string;
      productId?: string;
      batchId?: string | null;
      disposition?: any;
    } = {};

    if (filter?.clientId) where.clientId = filter.clientId;
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.outboundOrderId) where.outboundOrderId = filter.outboundOrderId;
    if (filter?.productId) where.productId = filter.productId;
    if (filter?.batchId !== undefined) {
      where.batchId = filter.batchId || null;
    }
    if (filter?.disposition) where.disposition = filter.disposition;

    return this.prisma.returnOrder.findMany({
      where,
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
        product: { select: { id: true, sku: true, name: true } },
        batch: { select: { id: true, batchCode: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Find return order by ID.
   */
  async findOne(id: string) {
    const returnOrder = await this.prisma.returnOrder.findUnique({
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
        product: { select: { id: true, sku: true, name: true } },
        batch: { select: { id: true, batchCode: true } },
      },
    });

    if (!returnOrder) {
      throw new NotFoundException('Return order not found');
    }

    return returnOrder;
  }

  /**
   * Process a return order.
   * If disposition is RESTOCK, creates RETURN ledger entry.
   * Other dispositions (DAMAGED, QUARANTINE, DISPOSAL) are logged but don't affect stock.
   */
  async process(id: string) {
    const returnOrder = await this.findOne(id);

    // Only RESTOCK disposition creates ledger entry
    if (returnOrder.disposition === ReturnDisposition.RESTOCK) {
      // Create RETURN ledger entry (positive qtyChange for restock)
      await this.inventoryService.createLedgerEntry({
        clientId: returnOrder.clientId,
        warehouseId: returnOrder.warehouseId,
        productId: returnOrder.productId,
        batchId: returnOrder.batchId || undefined,
        locationId: undefined, // Return orders don't specify location in schema
        movementType: MovementType.RETURN,
        qtyChange: returnOrder.qty.toNumber(),
        referenceType: 'RETURN_ORDER',
        referenceId: id,
      });
    }

    // For other dispositions (DAMAGED, QUARANTINE, DISPOSAL):
    // - No ledger entry is created (stock is not increased)
    // - Future extensions can add workflow logic here:
    //   - DAMAGED: May require damage assessment, write-off workflow
    //   - QUARANTINE: May require QC inspection workflow
    //   - DISPOSAL: May require disposal documentation workflow

    return returnOrder;
  }
}

