import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CurrentStockFilterDto } from './dto/current-stock-filter.dto';
import { InventoryLedgerFilterDto } from './dto/inventory-ledger-filter.dto';
import { CreateLedgerEntryDto } from './dto/create-ledger-entry.dto';
import { MovementType } from '../../common/enums/movement-type.enum';

/**
 * Inventory Service
 *
 * CRITICAL ARCHITECTURE RULES:
 *
 * 1. inventory_ledger is the SOURCE OF TRUTH for all stock movements.
 *    - It is append-only (UPDATE/DELETE blocked by DB trigger).
 *    - Every stock-changing operation MUST insert into inventory_ledger.
 *
 * 2. current_stock is a DERIVED snapshot table.
 *    - It is automatically updated by DB trigger when inventory_ledger entries are inserted.
 *    - Application code MUST NEVER write directly to current_stock.
 *    - The DB trigger sync_current_stock_on_ledger_insert() handles all current_stock updates.
 *
 * 3. Stock-changing modules (inbound, outbound, adjustments, returns) should use
 *    createLedgerEntry() to safely record stock movements.
 */
@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Query current stock with optional filters.
   * Returns the derived snapshot from current_stock table.
   */
  async findCurrentStock(filter?: CurrentStockFilterDto) {
    const where: any = {};

    if (filter?.clientId) where.clientId = filter.clientId;
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.productId) where.productId = filter.productId;
    if (filter?.batchId !== undefined) {
      where.batchId = filter.batchId || null;
    }
    if (filter?.locationId !== undefined) {
      where.locationId = filter.locationId || null;
    }

    return this.prisma.currentStock.findMany({
      where,
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        product: { select: { id: true, sku: true, name: true } },
        batch: { select: { id: true, batchCode: true } },
        location: { select: { id: true, code: true } },
      },
      orderBy: [
        { clientId: 'asc' },
        { warehouseId: 'asc' },
        { productId: 'asc' },
      ],
    });
  }

  /**
   * Query current stock for a specific product.
   */
  async findCurrentStockByProduct(
    productId: string,
    filter?: CurrentStockFilterDto,
  ) {
    return this.findCurrentStock({
      ...filter,
      productId,
    });
  }

  /**
   * Query inventory ledger entries with optional filters.
   * Returns the append-only ledger entries (source of truth).
   */
  async findLedger(filter?: InventoryLedgerFilterDto) {
    const where: any = {};

    if (filter?.clientId) where.clientId = filter.clientId;
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.productId) where.productId = filter.productId;
    if (filter?.batchId !== undefined) {
      where.batchId = filter.batchId || null;
    }
    if (filter?.locationId !== undefined) {
      where.locationId = filter.locationId || null;
    }
    if (filter?.movementType) {
      where.movementType = filter.movementType;
    }
    if (filter?.referenceType) {
      where.referenceType = filter.referenceType;
    }
    if (filter?.referenceId) {
      where.referenceId = filter.referenceId;
    }
    if (filter?.dateFrom || filter?.dateTo) {
      where.createdAt = {};
      if (filter.dateFrom) {
        where.createdAt.gte = new Date(filter.dateFrom);
      }
      if (filter.dateTo) {
        where.createdAt.lte = new Date(filter.dateTo);
      }
    }

    return this.prisma.inventoryLedger.findMany({
      where,
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        product: { select: { id: true, sku: true, name: true } },
        batch: { select: { id: true, batchCode: true } },
        location: { select: { id: true, code: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Create a ledger entry and automatically update current_stock via DB trigger.
   *
   * This is the SAFE contract for stock-changing operations.
   * Other modules (inbound, outbound, adjustments, returns) should use this method.
   *
   * The method:
   * 1. Queries current_stock to get qtyBefore
   * 2. Calculates qtyAfter = qtyBefore + qtyChange
   * 3. Validates that qtyAfter >= 0 (prevents negative stock)
   * 4. Inserts into inventory_ledger
   * 5. DB trigger automatically updates current_stock
   *
   * @throws BadRequestException if the operation would result in negative stock
   */
  async createLedgerEntry(dto: CreateLedgerEntryDto) {
    // Get current stock for this combination
    // Note: batchId and locationId are nullable, so we query with null handling
    const currentStock = await this.prisma.currentStock.findFirst({
      where: {
        clientId: dto.clientId,
        warehouseId: dto.warehouseId,
        productId: dto.productId,
        batchId: dto.batchId || null,
        locationId: dto.locationId || null,
      },
    });

    // Handle Prisma Decimal type - quantity may be Decimal or number depending on Prisma version
    const qtyBefore = currentStock?.quantity
      ? typeof currentStock.quantity === 'number'
        ? currentStock.quantity
        : (currentStock.quantity as any).toNumber()
      : 0;
    const qtyAfter = qtyBefore + dto.qtyChange;

    // Prevent negative stock
    if (qtyAfter < 0) {
      throw new BadRequestException(
        `Insufficient stock. Current: ${qtyBefore}, Requested change: ${dto.qtyChange}, Result: ${qtyAfter}`,
      );
    }

    // Insert into inventory_ledger (source of truth)
    // The DB trigger will automatically update current_stock
    return this.prisma.inventoryLedger.create({
      data: {
        clientId: dto.clientId,
        warehouseId: dto.warehouseId,
        productId: dto.productId,
        batchId: dto.batchId || null,
        locationId: dto.locationId || null,
        movementType: dto.movementType,
        qtyChange: dto.qtyChange,
        qtyBefore: qtyBefore,
        qtyAfter: qtyAfter,
        referenceType: dto.referenceType || null,
        referenceId: dto.referenceId || null,
      },
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        product: { select: { id: true, sku: true, name: true } },
        batch: { select: { id: true, batchCode: true } },
        location: { select: { id: true, code: true } },
      },
    });
  }
}
