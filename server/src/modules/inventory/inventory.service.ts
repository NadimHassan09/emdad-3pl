import {
  Injectable,
  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
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

  private toNumber(value: unknown): number {
    if (typeof value === 'number') return value;
    if (value && typeof value === 'object' && 'toNumber' in value) {
      return (value as { toNumber: () => number }).toNumber();
    }
    return Number(value) || 0;
  }

  private formatMonthLabel(date: Date): string {
    const month = date.toLocaleString('ar-SA', { month: 'short' });
    return `${month} ${date.getFullYear()}`;
  }

  private formatWeekLabel(date: Date): string {
    return `W${date.getDate()}/${date.getMonth() + 1}`;
  }

  async getDashboard(clientId?: string) {
    try {
      const stockWhere = clientId ? { clientId } : {};
      const ordersWhere = clientId ? { clientId } : {};
      const ledgerWhere = clientId ? { clientId } : {};

      const now = new Date();
      const sixMonthsAgo = new Date(now);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
      sixMonthsAgo.setDate(1);
      sixMonthsAgo.setHours(0, 0, 0, 0);

      const eightWeeksAgo = new Date(now);
      eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 7 * 7);
      eightWeeksAgo.setHours(0, 0, 0, 0);

      // Use sequential queries (instead of Promise.all) to reduce concurrent DB
      // pressure in environments with low max connections.
      const currentStock = await this.prisma.currentStock.findMany({
        where: stockWhere,
        include: {
          product: { select: { id: true, name: true, sku: true } },
        },
      });
      const inboundOrdersCount = await this.prisma.inboundOrder.count({
        where: ordersWhere,
      });
      const outboundOrdersCount = await this.prisma.outboundOrder.count({
        where: ordersWhere,
      });
      const recentLedger = await this.prisma.inventoryLedger.findMany({
        where: ledgerWhere,
        include: {
          product: { select: { sku: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      });
      const chartLedger = await this.prisma.inventoryLedger.findMany({
        where: {
          ...ledgerWhere,
          createdAt: {
            gte: eightWeeksAgo < sixMonthsAgo ? eightWeeksAgo : sixMonthsAgo,
          },
        },
        select: {
          movementType: true,
          qtyChange: true,
          createdAt: true,
          productId: true,
        },
        orderBy: { createdAt: 'asc' },
      });

      const totalStock = currentStock.reduce(
        (sum, row) => sum + this.toNumber(row.quantity),
        0,
      );
      const totalProducts = new Set(currentStock.map((row) => row.productId)).size;

      const movementByMonthMap = new Map<string, { name: string; inbound: number; outbound: number }>();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now);
        d.setMonth(d.getMonth() - i);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
        movementByMonthMap.set(key, {
          name: this.formatMonthLabel(d),
          inbound: 0,
          outbound: 0,
        });
      }

      const weeklyTrendMap = new Map<string, { name: string; value: number }>();
      for (let i = 7; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const key = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        weeklyTrendMap.set(key, {
          name: this.formatWeekLabel(weekStart),
          value: 0,
        });
      }

      for (const entry of chartLedger) {
        const qty = this.toNumber(entry.qtyChange);
        const monthKey = `${entry.createdAt.getFullYear()}-${entry.createdAt.getMonth() + 1}`;
        const monthBucket = movementByMonthMap.get(monthKey);
        if (monthBucket) {
          if (qty >= 0) monthBucket.inbound += qty;
          else monthBucket.outbound += Math.abs(qty);
        }

        const weekStart = new Date(entry.createdAt);
        weekStart.setDate(entry.createdAt.getDate() - entry.createdAt.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekKey = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        const weekBucket = weeklyTrendMap.get(weekKey);
        if (weekBucket) {
          weekBucket.value += Math.abs(qty);
        }
      }

      const productStockMap = new Map<string, { name: string; value: number }>();
      for (const row of currentStock) {
        const productName = row.product?.name || 'منتج غير معروف';
        const current = productStockMap.get(row.productId);
        const quantity = this.toNumber(row.quantity);
        if (!current) {
          productStockMap.set(row.productId, { name: productName, value: quantity });
        } else {
          current.value += quantity;
        }
      }

      const stockDistribution = Array.from(productStockMap.values())
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

      const recentMovements = recentLedger.map((entry) => {
        const qty = this.toNumber(entry.qtyChange);
        return {
          date: entry.createdAt,
          movementType: entry.movementType,
          sku: entry.product?.sku || '',
          qtyChange: qty,
          referenceId: entry.referenceId,
        };
      });

      return {
        stats: {
          totalProducts,
          totalStock,
          incomingOrders: inboundOrdersCount,
          outgoingOrders: outboundOrdersCount,
          recentMovements: recentMovements.length,
        },
        movementByMonth: Array.from(movementByMonthMap.values()),
        stockDistribution,
        weeklyTrend: Array.from(weeklyTrendMap.values()),
        recentMovements,
      };
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error as { code?: string }).code === 'P2037'
      ) {
        throw new ServiceUnavailableException(
          'Database connection pool is saturated. Please retry in a moment.',
        );
      }
      throw error;
    }
  }

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

  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
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

  private toNumber(value: unknown): number {
    if (typeof value === 'number') return value;
    if (value && typeof value === 'object' && 'toNumber' in value) {
      return (value as { toNumber: () => number }).toNumber();
    }
    return Number(value) || 0;
  }

  private formatMonthLabel(date: Date): string {
    const month = date.toLocaleString('ar-SA', { month: 'short' });
    return `${month} ${date.getFullYear()}`;
  }

  private formatWeekLabel(date: Date): string {
    return `W${date.getDate()}/${date.getMonth() + 1}`;
  }

  async getDashboard(clientId?: string) {
    try {
      const stockWhere = clientId ? { clientId } : {};
      const ordersWhere = clientId ? { clientId } : {};
      const ledgerWhere = clientId ? { clientId } : {};

      const now = new Date();
      const sixMonthsAgo = new Date(now);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
      sixMonthsAgo.setDate(1);
      sixMonthsAgo.setHours(0, 0, 0, 0);

      const eightWeeksAgo = new Date(now);
      eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 7 * 7);
      eightWeeksAgo.setHours(0, 0, 0, 0);

      // Use sequential queries (instead of Promise.all) to reduce concurrent DB
      // pressure in environments with low max connections.
      const currentStock = await this.prisma.currentStock.findMany({
        where: stockWhere,
        include: {
          product: { select: { id: true, name: true, sku: true } },
        },
      });
      const inboundOrdersCount = await this.prisma.inboundOrder.count({
        where: ordersWhere,
      });
      const outboundOrdersCount = await this.prisma.outboundOrder.count({
        where: ordersWhere,
      });
      const recentLedger = await this.prisma.inventoryLedger.findMany({
        where: ledgerWhere,
        include: {
          product: { select: { sku: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      });
      const chartLedger = await this.prisma.inventoryLedger.findMany({
        where: {
          ...ledgerWhere,
          createdAt: {
            gte: eightWeeksAgo < sixMonthsAgo ? eightWeeksAgo : sixMonthsAgo,
          },
        },
        select: {
          movementType: true,
          qtyChange: true,
          createdAt: true,
          productId: true,
        },
        orderBy: { createdAt: 'asc' },
      });

      const totalStock = currentStock.reduce(
        (sum, row) => sum + this.toNumber(row.quantity),
        0,
      );
      const totalProducts = new Set(currentStock.map((row) => row.productId)).size;

      const movementByMonthMap = new Map<string, { name: string; inbound: number; outbound: number }>();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now);
        d.setMonth(d.getMonth() - i);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
        movementByMonthMap.set(key, {
          name: this.formatMonthLabel(d),
          inbound: 0,
          outbound: 0,
        });
      }

      const weeklyTrendMap = new Map<string, { name: string; value: number }>();
      for (let i = 7; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const key = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        weeklyTrendMap.set(key, {
          name: this.formatWeekLabel(weekStart),
          value: 0,
        });
      }

      for (const entry of chartLedger) {
        const qty = this.toNumber(entry.qtyChange);
        const monthKey = `${entry.createdAt.getFullYear()}-${entry.createdAt.getMonth() + 1}`;
        const monthBucket = movementByMonthMap.get(monthKey);
        if (monthBucket) {
          if (qty >= 0) monthBucket.inbound += qty;
          else monthBucket.outbound += Math.abs(qty);
        }

        const weekStart = new Date(entry.createdAt);
        weekStart.setDate(entry.createdAt.getDate() - entry.createdAt.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekKey = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        const weekBucket = weeklyTrendMap.get(weekKey);
        if (weekBucket) {
          weekBucket.value += Math.abs(qty);
        }
      }

      const productStockMap = new Map<string, { name: string; value: number }>();
      for (const row of currentStock) {
        const productName = row.product?.name || 'منتج غير معروف';
        const current = productStockMap.get(row.productId);
        const quantity = this.toNumber(row.quantity);
        if (!current) {
          productStockMap.set(row.productId, { name: productName, value: quantity });
        } else {
          current.value += quantity;
        }
      }

      const stockDistribution = Array.from(productStockMap.values())
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

      const recentMovements = recentLedger.map((entry) => {
        const qty = this.toNumber(entry.qtyChange);
        return {
          date: entry.createdAt,
          movementType: entry.movementType,
          sku: entry.product?.sku || '',
          qtyChange: qty,
          referenceId: entry.referenceId,
        };
      });

      return {
        stats: {
          totalProducts,
          totalStock,
          incomingOrders: inboundOrdersCount,
          outgoingOrders: outboundOrdersCount,
          recentMovements: recentMovements.length,
        },
        movementByMonth: Array.from(movementByMonthMap.values()),
        stockDistribution,
        weeklyTrend: Array.from(weeklyTrendMap.values()),
        recentMovements,
      };
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error as { code?: string }).code === 'P2037'
      ) {
        throw new ServiceUnavailableException(
          'Database connection pool is saturated. Please retry in a moment.',
        );
      }
      throw error;
    }
  }

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

  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
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

  private toNumber(value: unknown): number {
    if (typeof value === 'number') return value;
    if (value && typeof value === 'object' && 'toNumber' in value) {
      return (value as { toNumber: () => number }).toNumber();
    }
    return Number(value) || 0;
  }

  private formatMonthLabel(date: Date): string {
    const month = date.toLocaleString('ar-SA', { month: 'short' });
    return `${month} ${date.getFullYear()}`;
  }

  private formatWeekLabel(date: Date): string {
    return `W${date.getDate()}/${date.getMonth() + 1}`;
  }

  async getDashboard(clientId?: string) {
    try {
      const stockWhere = clientId ? { clientId } : {};
      const ordersWhere = clientId ? { clientId } : {};
      const ledgerWhere = clientId ? { clientId } : {};

      const now = new Date();
      const sixMonthsAgo = new Date(now);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
      sixMonthsAgo.setDate(1);
      sixMonthsAgo.setHours(0, 0, 0, 0);

      const eightWeeksAgo = new Date(now);
      eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 7 * 7);
      eightWeeksAgo.setHours(0, 0, 0, 0);

      // Use sequential queries (instead of Promise.all) to reduce concurrent DB
      // pressure in environments with low max connections.
      const currentStock = await this.prisma.currentStock.findMany({
        where: stockWhere,
        include: {
          product: { select: { id: true, name: true, sku: true } },
        },
      });
      const inboundOrdersCount = await this.prisma.inboundOrder.count({
        where: ordersWhere,
      });
      const outboundOrdersCount = await this.prisma.outboundOrder.count({
        where: ordersWhere,
      });
      const recentLedger = await this.prisma.inventoryLedger.findMany({
        where: ledgerWhere,
        include: {
          product: { select: { sku: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      });
      const chartLedger = await this.prisma.inventoryLedger.findMany({
        where: {
          ...ledgerWhere,
          createdAt: {
            gte: eightWeeksAgo < sixMonthsAgo ? eightWeeksAgo : sixMonthsAgo,
          },
        },
        select: {
          movementType: true,
          qtyChange: true,
          createdAt: true,
          productId: true,
        },
        orderBy: { createdAt: 'asc' },
      });

      const totalStock = currentStock.reduce(
        (sum, row) => sum + this.toNumber(row.quantity),
        0,
      );
      const totalProducts = new Set(currentStock.map((row) => row.productId)).size;

      const movementByMonthMap = new Map<string, { name: string; inbound: number; outbound: number }>();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now);
        d.setMonth(d.getMonth() - i);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
        movementByMonthMap.set(key, {
          name: this.formatMonthLabel(d),
          inbound: 0,
          outbound: 0,
        });
      }

      const weeklyTrendMap = new Map<string, { name: string; value: number }>();
      for (let i = 7; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const key = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        weeklyTrendMap.set(key, {
          name: this.formatWeekLabel(weekStart),
          value: 0,
        });
      }

      for (const entry of chartLedger) {
        const qty = this.toNumber(entry.qtyChange);
        const monthKey = `${entry.createdAt.getFullYear()}-${entry.createdAt.getMonth() + 1}`;
        const monthBucket = movementByMonthMap.get(monthKey);
        if (monthBucket) {
          if (qty >= 0) monthBucket.inbound += qty;
          else monthBucket.outbound += Math.abs(qty);
        }

        const weekStart = new Date(entry.createdAt);
        weekStart.setDate(entry.createdAt.getDate() - entry.createdAt.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekKey = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        const weekBucket = weeklyTrendMap.get(weekKey);
        if (weekBucket) {
          weekBucket.value += Math.abs(qty);
        }
      }

      const productStockMap = new Map<string, { name: string; value: number }>();
      for (const row of currentStock) {
        const productName = row.product?.name || 'منتج غير معروف';
        const current = productStockMap.get(row.productId);
        const quantity = this.toNumber(row.quantity);
        if (!current) {
          productStockMap.set(row.productId, { name: productName, value: quantity });
        } else {
          current.value += quantity;
        }
      }

      const stockDistribution = Array.from(productStockMap.values())
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

      const recentMovements = recentLedger.map((entry) => {
        const qty = this.toNumber(entry.qtyChange);
        return {
          date: entry.createdAt,
          movementType: entry.movementType,
          sku: entry.product?.sku || '',
          qtyChange: qty,
          referenceId: entry.referenceId,
        };
      });

      return {
        stats: {
          totalProducts,
          totalStock,
          incomingOrders: inboundOrdersCount,
          outgoingOrders: outboundOrdersCount,
          recentMovements: recentMovements.length,
        },
        movementByMonth: Array.from(movementByMonthMap.values()),
        stockDistribution,
        weeklyTrend: Array.from(weeklyTrendMap.values()),
        recentMovements,
      };
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error as { code?: string }).code === 'P2037'
      ) {
        throw new ServiceUnavailableException(
          'Database connection pool is saturated. Please retry in a moment.',
        );
      }
      throw error;
    }
  }

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

  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
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

  private toNumber(value: unknown): number {
    if (typeof value === 'number') return value;
    if (value && typeof value === 'object' && 'toNumber' in value) {
      return (value as { toNumber: () => number }).toNumber();
    }
    return Number(value) || 0;
  }

  private formatMonthLabel(date: Date): string {
    const month = date.toLocaleString('ar-SA', { month: 'short' });
    return `${month} ${date.getFullYear()}`;
  }

  private formatWeekLabel(date: Date): string {
    return `W${date.getDate()}/${date.getMonth() + 1}`;
  }

  async getDashboard(clientId?: string) {
    try {
      const stockWhere = clientId ? { clientId } : {};
      const ordersWhere = clientId ? { clientId } : {};
      const ledgerWhere = clientId ? { clientId } : {};

      const now = new Date();
      const sixMonthsAgo = new Date(now);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
      sixMonthsAgo.setDate(1);
      sixMonthsAgo.setHours(0, 0, 0, 0);

      const eightWeeksAgo = new Date(now);
      eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 7 * 7);
      eightWeeksAgo.setHours(0, 0, 0, 0);

      // Use sequential queries (instead of Promise.all) to reduce concurrent DB
      // pressure in environments with low max connections.
      const currentStock = await this.prisma.currentStock.findMany({
        where: stockWhere,
        include: {
          product: { select: { id: true, name: true, sku: true } },
        },
      });
      const inboundOrdersCount = await this.prisma.inboundOrder.count({
        where: ordersWhere,
      });
      const outboundOrdersCount = await this.prisma.outboundOrder.count({
        where: ordersWhere,
      });
      const recentLedger = await this.prisma.inventoryLedger.findMany({
        where: ledgerWhere,
        include: {
          product: { select: { sku: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      });
      const chartLedger = await this.prisma.inventoryLedger.findMany({
        where: {
          ...ledgerWhere,
          createdAt: {
            gte: eightWeeksAgo < sixMonthsAgo ? eightWeeksAgo : sixMonthsAgo,
          },
        },
        select: {
          movementType: true,
          qtyChange: true,
          createdAt: true,
          productId: true,
        },
        orderBy: { createdAt: 'asc' },
      });

      const totalStock = currentStock.reduce(
        (sum, row) => sum + this.toNumber(row.quantity),
        0,
      );
      const totalProducts = new Set(currentStock.map((row) => row.productId)).size;

      const movementByMonthMap = new Map<string, { name: string; inbound: number; outbound: number }>();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now);
        d.setMonth(d.getMonth() - i);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
        movementByMonthMap.set(key, {
          name: this.formatMonthLabel(d),
          inbound: 0,
          outbound: 0,
        });
      }

      const weeklyTrendMap = new Map<string, { name: string; value: number }>();
      for (let i = 7; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const key = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        weeklyTrendMap.set(key, {
          name: this.formatWeekLabel(weekStart),
          value: 0,
        });
      }

      for (const entry of chartLedger) {
        const qty = this.toNumber(entry.qtyChange);
        const monthKey = `${entry.createdAt.getFullYear()}-${entry.createdAt.getMonth() + 1}`;
        const monthBucket = movementByMonthMap.get(monthKey);
        if (monthBucket) {
          if (qty >= 0) monthBucket.inbound += qty;
          else monthBucket.outbound += Math.abs(qty);
        }

        const weekStart = new Date(entry.createdAt);
        weekStart.setDate(entry.createdAt.getDate() - entry.createdAt.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekKey = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        const weekBucket = weeklyTrendMap.get(weekKey);
        if (weekBucket) {
          weekBucket.value += Math.abs(qty);
        }
      }

      const productStockMap = new Map<string, { name: string; value: number }>();
      for (const row of currentStock) {
        const productName = row.product?.name || 'منتج غير معروف';
        const current = productStockMap.get(row.productId);
        const quantity = this.toNumber(row.quantity);
        if (!current) {
          productStockMap.set(row.productId, { name: productName, value: quantity });
        } else {
          current.value += quantity;
        }
      }

      const stockDistribution = Array.from(productStockMap.values())
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

      const recentMovements = recentLedger.map((entry) => {
        const qty = this.toNumber(entry.qtyChange);
        return {
          date: entry.createdAt,
          movementType: entry.movementType,
          sku: entry.product?.sku || '',
          qtyChange: qty,
          referenceId: entry.referenceId,
        };
      });

      return {
        stats: {
          totalProducts,
          totalStock,
          incomingOrders: inboundOrdersCount,
          outgoingOrders: outboundOrdersCount,
          recentMovements: recentMovements.length,
        },
        movementByMonth: Array.from(movementByMonthMap.values()),
        stockDistribution,
        weeklyTrend: Array.from(weeklyTrendMap.values()),
        recentMovements,
      };
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error as { code?: string }).code === 'P2037'
      ) {
        throw new ServiceUnavailableException(
          'Database connection pool is saturated. Please retry in a moment.',
        );
      }
      throw error;
    }
  }

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

  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
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

  private toNumber(value: unknown): number {
    if (typeof value === 'number') return value;
    if (value && typeof value === 'object' && 'toNumber' in value) {
      return (value as { toNumber: () => number }).toNumber();
    }
    return Number(value) || 0;
  }

  private formatMonthLabel(date: Date): string {
    const month = date.toLocaleString('ar-SA', { month: 'short' });
    return `${month} ${date.getFullYear()}`;
  }

  private formatWeekLabel(date: Date): string {
    return `W${date.getDate()}/${date.getMonth() + 1}`;
  }

  async getDashboard(clientId?: string) {
    try {
      const stockWhere = clientId ? { clientId } : {};
      const ordersWhere = clientId ? { clientId } : {};
      const ledgerWhere = clientId ? { clientId } : {};

      const now = new Date();
      const sixMonthsAgo = new Date(now);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
      sixMonthsAgo.setDate(1);
      sixMonthsAgo.setHours(0, 0, 0, 0);

      const eightWeeksAgo = new Date(now);
      eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 7 * 7);
      eightWeeksAgo.setHours(0, 0, 0, 0);

      // Use sequential queries (instead of Promise.all) to reduce concurrent DB
      // pressure in environments with low max connections.
      const currentStock = await this.prisma.currentStock.findMany({
        where: stockWhere,
        include: {
          product: { select: { id: true, name: true, sku: true } },
        },
      });
      const inboundOrdersCount = await this.prisma.inboundOrder.count({
        where: ordersWhere,
      });
      const outboundOrdersCount = await this.prisma.outboundOrder.count({
        where: ordersWhere,
      });
      const recentLedger = await this.prisma.inventoryLedger.findMany({
        where: ledgerWhere,
        include: {
          product: { select: { sku: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      });
      const chartLedger = await this.prisma.inventoryLedger.findMany({
        where: {
          ...ledgerWhere,
          createdAt: {
            gte: eightWeeksAgo < sixMonthsAgo ? eightWeeksAgo : sixMonthsAgo,
          },
        },
        select: {
          movementType: true,
          qtyChange: true,
          createdAt: true,
          productId: true,
        },
        orderBy: { createdAt: 'asc' },
      });

      const totalStock = currentStock.reduce(
        (sum, row) => sum + this.toNumber(row.quantity),
        0,
      );
      const totalProducts = new Set(currentStock.map((row) => row.productId)).size;

      const movementByMonthMap = new Map<string, { name: string; inbound: number; outbound: number }>();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now);
        d.setMonth(d.getMonth() - i);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
        movementByMonthMap.set(key, {
          name: this.formatMonthLabel(d),
          inbound: 0,
          outbound: 0,
        });
      }

      const weeklyTrendMap = new Map<string, { name: string; value: number }>();
      for (let i = 7; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const key = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        weeklyTrendMap.set(key, {
          name: this.formatWeekLabel(weekStart),
          value: 0,
        });
      }

      for (const entry of chartLedger) {
        const qty = this.toNumber(entry.qtyChange);
        const monthKey = `${entry.createdAt.getFullYear()}-${entry.createdAt.getMonth() + 1}`;
        const monthBucket = movementByMonthMap.get(monthKey);
        if (monthBucket) {
          if (qty >= 0) monthBucket.inbound += qty;
          else monthBucket.outbound += Math.abs(qty);
        }

        const weekStart = new Date(entry.createdAt);
        weekStart.setDate(entry.createdAt.getDate() - entry.createdAt.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekKey = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        const weekBucket = weeklyTrendMap.get(weekKey);
        if (weekBucket) {
          weekBucket.value += Math.abs(qty);
        }
      }

      const productStockMap = new Map<string, { name: string; value: number }>();
      for (const row of currentStock) {
        const productName = row.product?.name || 'منتج غير معروف';
        const current = productStockMap.get(row.productId);
        const quantity = this.toNumber(row.quantity);
        if (!current) {
          productStockMap.set(row.productId, { name: productName, value: quantity });
        } else {
          current.value += quantity;
        }
      }

      const stockDistribution = Array.from(productStockMap.values())
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

      const recentMovements = recentLedger.map((entry) => {
        const qty = this.toNumber(entry.qtyChange);
        return {
          date: entry.createdAt,
          movementType: entry.movementType,
          sku: entry.product?.sku || '',
          qtyChange: qty,
          referenceId: entry.referenceId,
        };
      });

      return {
        stats: {
          totalProducts,
          totalStock,
          incomingOrders: inboundOrdersCount,
          outgoingOrders: outboundOrdersCount,
          recentMovements: recentMovements.length,
        },
        movementByMonth: Array.from(movementByMonthMap.values()),
        stockDistribution,
        weeklyTrend: Array.from(weeklyTrendMap.values()),
        recentMovements,
      };
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error as { code?: string }).code === 'P2037'
      ) {
        throw new ServiceUnavailableException(
          'Database connection pool is saturated. Please retry in a moment.',
        );
      }
      throw error;
    }
  }

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

  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
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

  private toNumber(value: unknown): number {
    if (typeof value === 'number') return value;
    if (value && typeof value === 'object' && 'toNumber' in value) {
      return (value as { toNumber: () => number }).toNumber();
    }
    return Number(value) || 0;
  }

  private formatMonthLabel(date: Date): string {
    const month = date.toLocaleString('ar-SA', { month: 'short' });
    return `${month} ${date.getFullYear()}`;
  }

  private formatWeekLabel(date: Date): string {
    return `W${date.getDate()}/${date.getMonth() + 1}`;
  }

  async getDashboard(clientId?: string) {
    try {
      const stockWhere = clientId ? { clientId } : {};
      const ordersWhere = clientId ? { clientId } : {};
      const ledgerWhere = clientId ? { clientId } : {};

      const now = new Date();
      const sixMonthsAgo = new Date(now);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
      sixMonthsAgo.setDate(1);
      sixMonthsAgo.setHours(0, 0, 0, 0);

      const eightWeeksAgo = new Date(now);
      eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 7 * 7);
      eightWeeksAgo.setHours(0, 0, 0, 0);

      // Use sequential queries (instead of Promise.all) to reduce concurrent DB
      // pressure in environments with low max connections.
      const currentStock = await this.prisma.currentStock.findMany({
        where: stockWhere,
        include: {
          product: { select: { id: true, name: true, sku: true } },
        },
      });
      const inboundOrdersCount = await this.prisma.inboundOrder.count({
        where: ordersWhere,
      });
      const outboundOrdersCount = await this.prisma.outboundOrder.count({
        where: ordersWhere,
      });
      const recentLedger = await this.prisma.inventoryLedger.findMany({
        where: ledgerWhere,
        include: {
          product: { select: { sku: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      });
      const chartLedger = await this.prisma.inventoryLedger.findMany({
        where: {
          ...ledgerWhere,
          createdAt: {
            gte: eightWeeksAgo < sixMonthsAgo ? eightWeeksAgo : sixMonthsAgo,
          },
        },
        select: {
          movementType: true,
          qtyChange: true,
          createdAt: true,
          productId: true,
        },
        orderBy: { createdAt: 'asc' },
      });

      const totalStock = currentStock.reduce(
        (sum, row) => sum + this.toNumber(row.quantity),
        0,
      );
      const totalProducts = new Set(currentStock.map((row) => row.productId)).size;

      const movementByMonthMap = new Map<string, { name: string; inbound: number; outbound: number }>();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now);
        d.setMonth(d.getMonth() - i);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
        movementByMonthMap.set(key, {
          name: this.formatMonthLabel(d),
          inbound: 0,
          outbound: 0,
        });
      }

      const weeklyTrendMap = new Map<string, { name: string; value: number }>();
      for (let i = 7; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const key = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        weeklyTrendMap.set(key, {
          name: this.formatWeekLabel(weekStart),
          value: 0,
        });
      }

      for (const entry of chartLedger) {
        const qty = this.toNumber(entry.qtyChange);
        const monthKey = `${entry.createdAt.getFullYear()}-${entry.createdAt.getMonth() + 1}`;
        const monthBucket = movementByMonthMap.get(monthKey);
        if (monthBucket) {
          if (qty >= 0) monthBucket.inbound += qty;
          else monthBucket.outbound += Math.abs(qty);
        }

        const weekStart = new Date(entry.createdAt);
        weekStart.setDate(entry.createdAt.getDate() - entry.createdAt.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekKey = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        const weekBucket = weeklyTrendMap.get(weekKey);
        if (weekBucket) {
          weekBucket.value += Math.abs(qty);
        }
      }

      const productStockMap = new Map<string, { name: string; value: number }>();
      for (const row of currentStock) {
        const productName = row.product?.name || 'منتج غير معروف';
        const current = productStockMap.get(row.productId);
        const quantity = this.toNumber(row.quantity);
        if (!current) {
          productStockMap.set(row.productId, { name: productName, value: quantity });
        } else {
          current.value += quantity;
        }
      }

      const stockDistribution = Array.from(productStockMap.values())
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

      const recentMovements = recentLedger.map((entry) => {
        const qty = this.toNumber(entry.qtyChange);
        return {
          date: entry.createdAt,
          movementType: entry.movementType,
          sku: entry.product?.sku || '',
          qtyChange: qty,
          referenceId: entry.referenceId,
        };
      });

      return {
        stats: {
          totalProducts,
          totalStock,
          incomingOrders: inboundOrdersCount,
          outgoingOrders: outboundOrdersCount,
          recentMovements: recentMovements.length,
        },
        movementByMonth: Array.from(movementByMonthMap.values()),
        stockDistribution,
        weeklyTrend: Array.from(weeklyTrendMap.values()),
        recentMovements,
      };
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error as { code?: string }).code === 'P2037'
      ) {
        throw new ServiceUnavailableException(
          'Database connection pool is saturated. Please retry in a moment.',
        );
      }
      throw error;
    }
  }

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

  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
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

  private toNumber(value: unknown): number {
    if (typeof value === 'number') return value;
    if (value && typeof value === 'object' && 'toNumber' in value) {
      return (value as { toNumber: () => number }).toNumber();
    }
    return Number(value) || 0;
  }

  private formatMonthLabel(date: Date): string {
    const month = date.toLocaleString('ar-SA', { month: 'short' });
    return `${month} ${date.getFullYear()}`;
  }

  private formatWeekLabel(date: Date): string {
    return `W${date.getDate()}/${date.getMonth() + 1}`;
  }

  async getDashboard(clientId?: string) {
    try {
      const stockWhere = clientId ? { clientId } : {};
      const ordersWhere = clientId ? { clientId } : {};
      const ledgerWhere = clientId ? { clientId } : {};

      const now = new Date();
      const sixMonthsAgo = new Date(now);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
      sixMonthsAgo.setDate(1);
      sixMonthsAgo.setHours(0, 0, 0, 0);

      const eightWeeksAgo = new Date(now);
      eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 7 * 7);
      eightWeeksAgo.setHours(0, 0, 0, 0);

      // Use sequential queries (instead of Promise.all) to reduce concurrent DB
      // pressure in environments with low max connections.
      const currentStock = await this.prisma.currentStock.findMany({
        where: stockWhere,
        include: {
          product: { select: { id: true, name: true, sku: true } },
        },
      });
      const inboundOrdersCount = await this.prisma.inboundOrder.count({
        where: ordersWhere,
      });
      const outboundOrdersCount = await this.prisma.outboundOrder.count({
        where: ordersWhere,
      });
      const recentLedger = await this.prisma.inventoryLedger.findMany({
        where: ledgerWhere,
        include: {
          product: { select: { sku: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      });
      const chartLedger = await this.prisma.inventoryLedger.findMany({
        where: {
          ...ledgerWhere,
          createdAt: {
            gte: eightWeeksAgo < sixMonthsAgo ? eightWeeksAgo : sixMonthsAgo,
          },
        },
        select: {
          movementType: true,
          qtyChange: true,
          createdAt: true,
          productId: true,
        },
        orderBy: { createdAt: 'asc' },
      });

      const totalStock = currentStock.reduce(
        (sum, row) => sum + this.toNumber(row.quantity),
        0,
      );
      const totalProducts = new Set(currentStock.map((row) => row.productId)).size;

      const movementByMonthMap = new Map<string, { name: string; inbound: number; outbound: number }>();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now);
        d.setMonth(d.getMonth() - i);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
        movementByMonthMap.set(key, {
          name: this.formatMonthLabel(d),
          inbound: 0,
          outbound: 0,
        });
      }

      const weeklyTrendMap = new Map<string, { name: string; value: number }>();
      for (let i = 7; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const key = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        weeklyTrendMap.set(key, {
          name: this.formatWeekLabel(weekStart),
          value: 0,
        });
      }

      for (const entry of chartLedger) {
        const qty = this.toNumber(entry.qtyChange);
        const monthKey = `${entry.createdAt.getFullYear()}-${entry.createdAt.getMonth() + 1}`;
        const monthBucket = movementByMonthMap.get(monthKey);
        if (monthBucket) {
          if (qty >= 0) monthBucket.inbound += qty;
          else monthBucket.outbound += Math.abs(qty);
        }

        const weekStart = new Date(entry.createdAt);
        weekStart.setDate(entry.createdAt.getDate() - entry.createdAt.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekKey = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        const weekBucket = weeklyTrendMap.get(weekKey);
        if (weekBucket) {
          weekBucket.value += Math.abs(qty);
        }
      }

      const productStockMap = new Map<string, { name: string; value: number }>();
      for (const row of currentStock) {
        const productName = row.product?.name || 'منتج غير معروف';
        const current = productStockMap.get(row.productId);
        const quantity = this.toNumber(row.quantity);
        if (!current) {
          productStockMap.set(row.productId, { name: productName, value: quantity });
        } else {
          current.value += quantity;
        }
      }

      const stockDistribution = Array.from(productStockMap.values())
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

      const recentMovements = recentLedger.map((entry) => {
        const qty = this.toNumber(entry.qtyChange);
        return {
          date: entry.createdAt,
          movementType: entry.movementType,
          sku: entry.product?.sku || '',
          qtyChange: qty,
          referenceId: entry.referenceId,
        };
      });

      return {
        stats: {
          totalProducts,
          totalStock,
          incomingOrders: inboundOrdersCount,
          outgoingOrders: outboundOrdersCount,
          recentMovements: recentMovements.length,
        },
        movementByMonth: Array.from(movementByMonthMap.values()),
        stockDistribution,
        weeklyTrend: Array.from(weeklyTrendMap.values()),
        recentMovements,
      };
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error as { code?: string }).code === 'P2037'
      ) {
        throw new ServiceUnavailableException(
          'Database connection pool is saturated. Please retry in a moment.',
        );
      }
      throw error;
    }
  }

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

  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
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

  private toNumber(value: unknown): number {
    if (typeof value === 'number') return value;
    if (value && typeof value === 'object' && 'toNumber' in value) {
      return (value as { toNumber: () => number }).toNumber();
    }
    return Number(value) || 0;
  }

  private formatMonthLabel(date: Date): string {
    const month = date.toLocaleString('ar-SA', { month: 'short' });
    return `${month} ${date.getFullYear()}`;
  }

  private formatWeekLabel(date: Date): string {
    return `W${date.getDate()}/${date.getMonth() + 1}`;
  }

  async getDashboard(clientId?: string) {
    try {
      const stockWhere = clientId ? { clientId } : {};
      const ordersWhere = clientId ? { clientId } : {};
      const ledgerWhere = clientId ? { clientId } : {};

      const now = new Date();
      const sixMonthsAgo = new Date(now);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
      sixMonthsAgo.setDate(1);
      sixMonthsAgo.setHours(0, 0, 0, 0);

      const eightWeeksAgo = new Date(now);
      eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 7 * 7);
      eightWeeksAgo.setHours(0, 0, 0, 0);

      // Use sequential queries (instead of Promise.all) to reduce concurrent DB
      // pressure in environments with low max connections.
      const currentStock = await this.prisma.currentStock.findMany({
        where: stockWhere,
        include: {
          product: { select: { id: true, name: true, sku: true } },
        },
      });
      const inboundOrdersCount = await this.prisma.inboundOrder.count({
        where: ordersWhere,
      });
      const outboundOrdersCount = await this.prisma.outboundOrder.count({
        where: ordersWhere,
      });
      const recentLedger = await this.prisma.inventoryLedger.findMany({
        where: ledgerWhere,
        include: {
          product: { select: { sku: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      });
      const chartLedger = await this.prisma.inventoryLedger.findMany({
        where: {
          ...ledgerWhere,
          createdAt: {
            gte: eightWeeksAgo < sixMonthsAgo ? eightWeeksAgo : sixMonthsAgo,
          },
        },
        select: {
          movementType: true,
          qtyChange: true,
          createdAt: true,
          productId: true,
        },
        orderBy: { createdAt: 'asc' },
      });

      const totalStock = currentStock.reduce(
        (sum, row) => sum + this.toNumber(row.quantity),
        0,
      );
      const totalProducts = new Set(currentStock.map((row) => row.productId)).size;

      const movementByMonthMap = new Map<string, { name: string; inbound: number; outbound: number }>();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now);
        d.setMonth(d.getMonth() - i);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
        movementByMonthMap.set(key, {
          name: this.formatMonthLabel(d),
          inbound: 0,
          outbound: 0,
        });
      }

      const weeklyTrendMap = new Map<string, { name: string; value: number }>();
      for (let i = 7; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const key = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        weeklyTrendMap.set(key, {
          name: this.formatWeekLabel(weekStart),
          value: 0,
        });
      }

      for (const entry of chartLedger) {
        const qty = this.toNumber(entry.qtyChange);
        const monthKey = `${entry.createdAt.getFullYear()}-${entry.createdAt.getMonth() + 1}`;
        const monthBucket = movementByMonthMap.get(monthKey);
        if (monthBucket) {
          if (qty >= 0) monthBucket.inbound += qty;
          else monthBucket.outbound += Math.abs(qty);
        }

        const weekStart = new Date(entry.createdAt);
        weekStart.setDate(entry.createdAt.getDate() - entry.createdAt.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekKey = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        const weekBucket = weeklyTrendMap.get(weekKey);
        if (weekBucket) {
          weekBucket.value += Math.abs(qty);
        }
      }

      const productStockMap = new Map<string, { name: string; value: number }>();
      for (const row of currentStock) {
        const productName = row.product?.name || 'منتج غير معروف';
        const current = productStockMap.get(row.productId);
        const quantity = this.toNumber(row.quantity);
        if (!current) {
          productStockMap.set(row.productId, { name: productName, value: quantity });
        } else {
          current.value += quantity;
        }
      }

      const stockDistribution = Array.from(productStockMap.values())
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

      const recentMovements = recentLedger.map((entry) => {
        const qty = this.toNumber(entry.qtyChange);
        return {
          date: entry.createdAt,
          movementType: entry.movementType,
          sku: entry.product?.sku || '',
          qtyChange: qty,
          referenceId: entry.referenceId,
        };
      });

      return {
        stats: {
          totalProducts,
          totalStock,
          incomingOrders: inboundOrdersCount,
          outgoingOrders: outboundOrdersCount,
          recentMovements: recentMovements.length,
        },
        movementByMonth: Array.from(movementByMonthMap.values()),
        stockDistribution,
        weeklyTrend: Array.from(weeklyTrendMap.values()),
        recentMovements,
      };
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error as { code?: string }).code === 'P2037'
      ) {
        throw new ServiceUnavailableException(
          'Database connection pool is saturated. Please retry in a moment.',
        );
      }
      throw error;
    }
  }

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

  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
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

  private toNumber(value: unknown): number {
    if (typeof value === 'number') return value;
    if (value && typeof value === 'object' && 'toNumber' in value) {
      return (value as { toNumber: () => number }).toNumber();
    }
    return Number(value) || 0;
  }

  private formatMonthLabel(date: Date): string {
    const month = date.toLocaleString('ar-SA', { month: 'short' });
    return `${month} ${date.getFullYear()}`;
  }

  private formatWeekLabel(date: Date): string {
    return `W${date.getDate()}/${date.getMonth() + 1}`;
  }

  async getDashboard(clientId?: string) {
    try {
      const stockWhere = clientId ? { clientId } : {};
      const ordersWhere = clientId ? { clientId } : {};
      const ledgerWhere = clientId ? { clientId } : {};

      const now = new Date();
      const sixMonthsAgo = new Date(now);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
      sixMonthsAgo.setDate(1);
      sixMonthsAgo.setHours(0, 0, 0, 0);

      const eightWeeksAgo = new Date(now);
      eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 7 * 7);
      eightWeeksAgo.setHours(0, 0, 0, 0);

      // Use sequential queries (instead of Promise.all) to reduce concurrent DB
      // pressure in environments with low max connections.
      const currentStock = await this.prisma.currentStock.findMany({
        where: stockWhere,
        include: {
          product: { select: { id: true, name: true, sku: true } },
        },
      });
      const inboundOrdersCount = await this.prisma.inboundOrder.count({
        where: ordersWhere,
      });
      const outboundOrdersCount = await this.prisma.outboundOrder.count({
        where: ordersWhere,
      });
      const recentLedger = await this.prisma.inventoryLedger.findMany({
        where: ledgerWhere,
        include: {
          product: { select: { sku: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      });
      const chartLedger = await this.prisma.inventoryLedger.findMany({
        where: {
          ...ledgerWhere,
          createdAt: {
            gte: eightWeeksAgo < sixMonthsAgo ? eightWeeksAgo : sixMonthsAgo,
          },
        },
        select: {
          movementType: true,
          qtyChange: true,
          createdAt: true,
          productId: true,
        },
        orderBy: { createdAt: 'asc' },
      });

      const totalStock = currentStock.reduce(
        (sum, row) => sum + this.toNumber(row.quantity),
        0,
      );
      const totalProducts = new Set(currentStock.map((row) => row.productId)).size;

      const movementByMonthMap = new Map<string, { name: string; inbound: number; outbound: number }>();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now);
        d.setMonth(d.getMonth() - i);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
        movementByMonthMap.set(key, {
          name: this.formatMonthLabel(d),
          inbound: 0,
          outbound: 0,
        });
      }

      const weeklyTrendMap = new Map<string, { name: string; value: number }>();
      for (let i = 7; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const key = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        weeklyTrendMap.set(key, {
          name: this.formatWeekLabel(weekStart),
          value: 0,
        });
      }

      for (const entry of chartLedger) {
        const qty = this.toNumber(entry.qtyChange);
        const monthKey = `${entry.createdAt.getFullYear()}-${entry.createdAt.getMonth() + 1}`;
        const monthBucket = movementByMonthMap.get(monthKey);
        if (monthBucket) {
          if (qty >= 0) monthBucket.inbound += qty;
          else monthBucket.outbound += Math.abs(qty);
        }

        const weekStart = new Date(entry.createdAt);
        weekStart.setDate(entry.createdAt.getDate() - entry.createdAt.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekKey = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        const weekBucket = weeklyTrendMap.get(weekKey);
        if (weekBucket) {
          weekBucket.value += Math.abs(qty);
        }
      }

      const productStockMap = new Map<string, { name: string; value: number }>();
      for (const row of currentStock) {
        const productName = row.product?.name || 'منتج غير معروف';
        const current = productStockMap.get(row.productId);
        const quantity = this.toNumber(row.quantity);
        if (!current) {
          productStockMap.set(row.productId, { name: productName, value: quantity });
        } else {
          current.value += quantity;
        }
      }

      const stockDistribution = Array.from(productStockMap.values())
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

      const recentMovements = recentLedger.map((entry) => {
        const qty = this.toNumber(entry.qtyChange);
        return {
          date: entry.createdAt,
          movementType: entry.movementType,
          sku: entry.product?.sku || '',
          qtyChange: qty,
          referenceId: entry.referenceId,
        };
      });

      return {
        stats: {
          totalProducts,
          totalStock,
          incomingOrders: inboundOrdersCount,
          outgoingOrders: outboundOrdersCount,
          recentMovements: recentMovements.length,
        },
        movementByMonth: Array.from(movementByMonthMap.values()),
        stockDistribution,
        weeklyTrend: Array.from(weeklyTrendMap.values()),
        recentMovements,
      };
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error as { code?: string }).code === 'P2037'
      ) {
        throw new ServiceUnavailableException(
          'Database connection pool is saturated. Please retry in a moment.',
        );
      }
      throw error;
    }
  }

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

  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
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

  private toNumber(value: unknown): number {
    if (typeof value === 'number') return value;
    if (value && typeof value === 'object' && 'toNumber' in value) {
      return (value as { toNumber: () => number }).toNumber();
    }
    return Number(value) || 0;
  }

  private formatMonthLabel(date: Date): string {
    const month = date.toLocaleString('ar-SA', { month: 'short' });
    return `${month} ${date.getFullYear()}`;
  }

  private formatWeekLabel(date: Date): string {
    return `W${date.getDate()}/${date.getMonth() + 1}`;
  }

  async getDashboard(clientId?: string) {
    try {
      const stockWhere = clientId ? { clientId } : {};
      const ordersWhere = clientId ? { clientId } : {};
      const ledgerWhere = clientId ? { clientId } : {};

      const now = new Date();
      const sixMonthsAgo = new Date(now);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
      sixMonthsAgo.setDate(1);
      sixMonthsAgo.setHours(0, 0, 0, 0);

      const eightWeeksAgo = new Date(now);
      eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 7 * 7);
      eightWeeksAgo.setHours(0, 0, 0, 0);

      // Use sequential queries (instead of Promise.all) to reduce concurrent DB
      // pressure in environments with low max connections.
      const currentStock = await this.prisma.currentStock.findMany({
        where: stockWhere,
        include: {
          product: { select: { id: true, name: true, sku: true } },
        },
      });
      const inboundOrdersCount = await this.prisma.inboundOrder.count({
        where: ordersWhere,
      });
      const outboundOrdersCount = await this.prisma.outboundOrder.count({
        where: ordersWhere,
      });
      const recentLedger = await this.prisma.inventoryLedger.findMany({
        where: ledgerWhere,
        include: {
          product: { select: { sku: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      });
      const chartLedger = await this.prisma.inventoryLedger.findMany({
        where: {
          ...ledgerWhere,
          createdAt: {
            gte: eightWeeksAgo < sixMonthsAgo ? eightWeeksAgo : sixMonthsAgo,
          },
        },
        select: {
          movementType: true,
          qtyChange: true,
          createdAt: true,
          productId: true,
        },
        orderBy: { createdAt: 'asc' },
      });

      const totalStock = currentStock.reduce(
        (sum, row) => sum + this.toNumber(row.quantity),
        0,
      );
      const totalProducts = new Set(currentStock.map((row) => row.productId)).size;

      const movementByMonthMap = new Map<string, { name: string; inbound: number; outbound: number }>();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now);
        d.setMonth(d.getMonth() - i);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
        movementByMonthMap.set(key, {
          name: this.formatMonthLabel(d),
          inbound: 0,
          outbound: 0,
        });
      }

      const weeklyTrendMap = new Map<string, { name: string; value: number }>();
      for (let i = 7; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const key = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        weeklyTrendMap.set(key, {
          name: this.formatWeekLabel(weekStart),
          value: 0,
        });
      }

      for (const entry of chartLedger) {
        const qty = this.toNumber(entry.qtyChange);
        const monthKey = `${entry.createdAt.getFullYear()}-${entry.createdAt.getMonth() + 1}`;
        const monthBucket = movementByMonthMap.get(monthKey);
        if (monthBucket) {
          if (qty >= 0) monthBucket.inbound += qty;
          else monthBucket.outbound += Math.abs(qty);
        }

        const weekStart = new Date(entry.createdAt);
        weekStart.setDate(entry.createdAt.getDate() - entry.createdAt.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekKey = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        const weekBucket = weeklyTrendMap.get(weekKey);
        if (weekBucket) {
          weekBucket.value += Math.abs(qty);
        }
      }

      const productStockMap = new Map<string, { name: string; value: number }>();
      for (const row of currentStock) {
        const productName = row.product?.name || 'منتج غير معروف';
        const current = productStockMap.get(row.productId);
        const quantity = this.toNumber(row.quantity);
        if (!current) {
          productStockMap.set(row.productId, { name: productName, value: quantity });
        } else {
          current.value += quantity;
        }
      }

      const stockDistribution = Array.from(productStockMap.values())
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

      const recentMovements = recentLedger.map((entry) => {
        const qty = this.toNumber(entry.qtyChange);
        return {
          date: entry.createdAt,
          movementType: entry.movementType,
          sku: entry.product?.sku || '',
          qtyChange: qty,
          referenceId: entry.referenceId,
        };
      });

      return {
        stats: {
          totalProducts,
          totalStock,
          incomingOrders: inboundOrdersCount,
          outgoingOrders: outboundOrdersCount,
          recentMovements: recentMovements.length,
        },
        movementByMonth: Array.from(movementByMonthMap.values()),
        stockDistribution,
        weeklyTrend: Array.from(weeklyTrendMap.values()),
        recentMovements,
      };
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error as { code?: string }).code === 'P2037'
      ) {
        throw new ServiceUnavailableException(
          'Database connection pool is saturated. Please retry in a moment.',
        );
      }
      throw error;
    }
  }

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

  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
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

  private toNumber(value: unknown): number {
    if (typeof value === 'number') return value;
    if (value && typeof value === 'object' && 'toNumber' in value) {
      return (value as { toNumber: () => number }).toNumber();
    }
    return Number(value) || 0;
  }

  private formatMonthLabel(date: Date): string {
    const month = date.toLocaleString('ar-SA', { month: 'short' });
    return `${month} ${date.getFullYear()}`;
  }

  private formatWeekLabel(date: Date): string {
    return `W${date.getDate()}/${date.getMonth() + 1}`;
  }

  async getDashboard(clientId?: string) {
    try {
      const stockWhere = clientId ? { clientId } : {};
      const ordersWhere = clientId ? { clientId } : {};
      const ledgerWhere = clientId ? { clientId } : {};

      const now = new Date();
      const sixMonthsAgo = new Date(now);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
      sixMonthsAgo.setDate(1);
      sixMonthsAgo.setHours(0, 0, 0, 0);

      const eightWeeksAgo = new Date(now);
      eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 7 * 7);
      eightWeeksAgo.setHours(0, 0, 0, 0);

      // Use sequential queries (instead of Promise.all) to reduce concurrent DB
      // pressure in environments with low max connections.
      const currentStock = await this.prisma.currentStock.findMany({
        where: stockWhere,
        include: {
          product: { select: { id: true, name: true, sku: true } },
        },
      });
      const inboundOrdersCount = await this.prisma.inboundOrder.count({
        where: ordersWhere,
      });
      const outboundOrdersCount = await this.prisma.outboundOrder.count({
        where: ordersWhere,
      });
      const recentLedger = await this.prisma.inventoryLedger.findMany({
        where: ledgerWhere,
        include: {
          product: { select: { sku: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      });
      const chartLedger = await this.prisma.inventoryLedger.findMany({
        where: {
          ...ledgerWhere,
          createdAt: {
            gte: eightWeeksAgo < sixMonthsAgo ? eightWeeksAgo : sixMonthsAgo,
          },
        },
        select: {
          movementType: true,
          qtyChange: true,
          createdAt: true,
          productId: true,
        },
        orderBy: { createdAt: 'asc' },
      });

      const totalStock = currentStock.reduce(
        (sum, row) => sum + this.toNumber(row.quantity),
        0,
      );
      const totalProducts = new Set(currentStock.map((row) => row.productId)).size;

      const movementByMonthMap = new Map<string, { name: string; inbound: number; outbound: number }>();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now);
        d.setMonth(d.getMonth() - i);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
        movementByMonthMap.set(key, {
          name: this.formatMonthLabel(d),
          inbound: 0,
          outbound: 0,
        });
      }

      const weeklyTrendMap = new Map<string, { name: string; value: number }>();
      for (let i = 7; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const key = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        weeklyTrendMap.set(key, {
          name: this.formatWeekLabel(weekStart),
          value: 0,
        });
      }

      for (const entry of chartLedger) {
        const qty = this.toNumber(entry.qtyChange);
        const monthKey = `${entry.createdAt.getFullYear()}-${entry.createdAt.getMonth() + 1}`;
        const monthBucket = movementByMonthMap.get(monthKey);
        if (monthBucket) {
          if (qty >= 0) monthBucket.inbound += qty;
          else monthBucket.outbound += Math.abs(qty);
        }

        const weekStart = new Date(entry.createdAt);
        weekStart.setDate(entry.createdAt.getDate() - entry.createdAt.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekKey = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        const weekBucket = weeklyTrendMap.get(weekKey);
        if (weekBucket) {
          weekBucket.value += Math.abs(qty);
        }
      }

      const productStockMap = new Map<string, { name: string; value: number }>();
      for (const row of currentStock) {
        const productName = row.product?.name || 'منتج غير معروف';
        const current = productStockMap.get(row.productId);
        const quantity = this.toNumber(row.quantity);
        if (!current) {
          productStockMap.set(row.productId, { name: productName, value: quantity });
        } else {
          current.value += quantity;
        }
      }

      const stockDistribution = Array.from(productStockMap.values())
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

      const recentMovements = recentLedger.map((entry) => {
        const qty = this.toNumber(entry.qtyChange);
        return {
          date: entry.createdAt,
          movementType: entry.movementType,
          sku: entry.product?.sku || '',
          qtyChange: qty,
          referenceId: entry.referenceId,
        };
      });

      return {
        stats: {
          totalProducts,
          totalStock,
          incomingOrders: inboundOrdersCount,
          outgoingOrders: outboundOrdersCount,
          recentMovements: recentMovements.length,
        },
        movementByMonth: Array.from(movementByMonthMap.values()),
        stockDistribution,
        weeklyTrend: Array.from(weeklyTrendMap.values()),
        recentMovements,
      };
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error as { code?: string }).code === 'P2037'
      ) {
        throw new ServiceUnavailableException(
          'Database connection pool is saturated. Please retry in a moment.',
        );
      }
      throw error;
    }
  }

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

  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
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

  private toNumber(value: unknown): number {
    if (typeof value === 'number') return value;
    if (value && typeof value === 'object' && 'toNumber' in value) {
      return (value as { toNumber: () => number }).toNumber();
    }
    return Number(value) || 0;
  }

  private formatMonthLabel(date: Date): string {
    const month = date.toLocaleString('ar-SA', { month: 'short' });
    return `${month} ${date.getFullYear()}`;
  }

  private formatWeekLabel(date: Date): string {
    return `W${date.getDate()}/${date.getMonth() + 1}`;
  }

  async getDashboard(clientId?: string) {
    try {
      const stockWhere = clientId ? { clientId } : {};
      const ordersWhere = clientId ? { clientId } : {};
      const ledgerWhere = clientId ? { clientId } : {};

      const now = new Date();
      const sixMonthsAgo = new Date(now);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
      sixMonthsAgo.setDate(1);
      sixMonthsAgo.setHours(0, 0, 0, 0);

      const eightWeeksAgo = new Date(now);
      eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 7 * 7);
      eightWeeksAgo.setHours(0, 0, 0, 0);

      // Use sequential queries (instead of Promise.all) to reduce concurrent DB
      // pressure in environments with low max connections.
      const currentStock = await this.prisma.currentStock.findMany({
        where: stockWhere,
        include: {
          product: { select: { id: true, name: true, sku: true } },
        },
      });
      const inboundOrdersCount = await this.prisma.inboundOrder.count({
        where: ordersWhere,
      });
      const outboundOrdersCount = await this.prisma.outboundOrder.count({
        where: ordersWhere,
      });
      const recentLedger = await this.prisma.inventoryLedger.findMany({
        where: ledgerWhere,
        include: {
          product: { select: { sku: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      });
      const chartLedger = await this.prisma.inventoryLedger.findMany({
        where: {
          ...ledgerWhere,
          createdAt: {
            gte: eightWeeksAgo < sixMonthsAgo ? eightWeeksAgo : sixMonthsAgo,
          },
        },
        select: {
          movementType: true,
          qtyChange: true,
          createdAt: true,
          productId: true,
        },
        orderBy: { createdAt: 'asc' },
      });

      const totalStock = currentStock.reduce(
        (sum, row) => sum + this.toNumber(row.quantity),
        0,
      );
      const totalProducts = new Set(currentStock.map((row) => row.productId)).size;

      const movementByMonthMap = new Map<string, { name: string; inbound: number; outbound: number }>();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now);
        d.setMonth(d.getMonth() - i);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
        movementByMonthMap.set(key, {
          name: this.formatMonthLabel(d),
          inbound: 0,
          outbound: 0,
        });
      }

      const weeklyTrendMap = new Map<string, { name: string; value: number }>();
      for (let i = 7; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const key = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        weeklyTrendMap.set(key, {
          name: this.formatWeekLabel(weekStart),
          value: 0,
        });
      }

      for (const entry of chartLedger) {
        const qty = this.toNumber(entry.qtyChange);
        const monthKey = `${entry.createdAt.getFullYear()}-${entry.createdAt.getMonth() + 1}`;
        const monthBucket = movementByMonthMap.get(monthKey);
        if (monthBucket) {
          if (qty >= 0) monthBucket.inbound += qty;
          else monthBucket.outbound += Math.abs(qty);
        }

        const weekStart = new Date(entry.createdAt);
        weekStart.setDate(entry.createdAt.getDate() - entry.createdAt.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekKey = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        const weekBucket = weeklyTrendMap.get(weekKey);
        if (weekBucket) {
          weekBucket.value += Math.abs(qty);
        }
      }

      const productStockMap = new Map<string, { name: string; value: number }>();
      for (const row of currentStock) {
        const productName = row.product?.name || 'منتج غير معروف';
        const current = productStockMap.get(row.productId);
        const quantity = this.toNumber(row.quantity);
        if (!current) {
          productStockMap.set(row.productId, { name: productName, value: quantity });
        } else {
          current.value += quantity;
        }
      }

      const stockDistribution = Array.from(productStockMap.values())
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

      const recentMovements = recentLedger.map((entry) => {
        const qty = this.toNumber(entry.qtyChange);
        return {
          date: entry.createdAt,
          movementType: entry.movementType,
          sku: entry.product?.sku || '',
          qtyChange: qty,
          referenceId: entry.referenceId,
        };
      });

      return {
        stats: {
          totalProducts,
          totalStock,
          incomingOrders: inboundOrdersCount,
          outgoingOrders: outboundOrdersCount,
          recentMovements: recentMovements.length,
        },
        movementByMonth: Array.from(movementByMonthMap.values()),
        stockDistribution,
        weeklyTrend: Array.from(weeklyTrendMap.values()),
        recentMovements,
      };
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error as { code?: string }).code === 'P2037'
      ) {
        throw new ServiceUnavailableException(
          'Database connection pool is saturated. Please retry in a moment.',
        );
      }
      throw error;
    }
  }

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

  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
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

  private toNumber(value: unknown): number {
    if (typeof value === 'number') return value;
    if (value && typeof value === 'object' && 'toNumber' in value) {
      return (value as { toNumber: () => number }).toNumber();
    }
    return Number(value) || 0;
  }

  private formatMonthLabel(date: Date): string {
    const month = date.toLocaleString('ar-SA', { month: 'short' });
    return `${month} ${date.getFullYear()}`;
  }

  private formatWeekLabel(date: Date): string {
    return `W${date.getDate()}/${date.getMonth() + 1}`;
  }

  async getDashboard(clientId?: string) {
    try {
      const stockWhere = clientId ? { clientId } : {};
      const ordersWhere = clientId ? { clientId } : {};
      const ledgerWhere = clientId ? { clientId } : {};

      const now = new Date();
      const sixMonthsAgo = new Date(now);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
      sixMonthsAgo.setDate(1);
      sixMonthsAgo.setHours(0, 0, 0, 0);

      const eightWeeksAgo = new Date(now);
      eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 7 * 7);
      eightWeeksAgo.setHours(0, 0, 0, 0);

      // Use sequential queries (instead of Promise.all) to reduce concurrent DB
      // pressure in environments with low max connections.
      const currentStock = await this.prisma.currentStock.findMany({
        where: stockWhere,
        include: {
          product: { select: { id: true, name: true, sku: true } },
        },
      });
      const inboundOrdersCount = await this.prisma.inboundOrder.count({
        where: ordersWhere,
      });
      const outboundOrdersCount = await this.prisma.outboundOrder.count({
        where: ordersWhere,
      });
      const recentLedger = await this.prisma.inventoryLedger.findMany({
        where: ledgerWhere,
        include: {
          product: { select: { sku: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      });
      const chartLedger = await this.prisma.inventoryLedger.findMany({
        where: {
          ...ledgerWhere,
          createdAt: {
            gte: eightWeeksAgo < sixMonthsAgo ? eightWeeksAgo : sixMonthsAgo,
          },
        },
        select: {
          movementType: true,
          qtyChange: true,
          createdAt: true,
          productId: true,
        },
        orderBy: { createdAt: 'asc' },
      });

      const totalStock = currentStock.reduce(
        (sum, row) => sum + this.toNumber(row.quantity),
        0,
      );
      const totalProducts = new Set(currentStock.map((row) => row.productId)).size;

      const movementByMonthMap = new Map<string, { name: string; inbound: number; outbound: number }>();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now);
        d.setMonth(d.getMonth() - i);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
        movementByMonthMap.set(key, {
          name: this.formatMonthLabel(d),
          inbound: 0,
          outbound: 0,
        });
      }

      const weeklyTrendMap = new Map<string, { name: string; value: number }>();
      for (let i = 7; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const key = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        weeklyTrendMap.set(key, {
          name: this.formatWeekLabel(weekStart),
          value: 0,
        });
      }

      for (const entry of chartLedger) {
        const qty = this.toNumber(entry.qtyChange);
        const monthKey = `${entry.createdAt.getFullYear()}-${entry.createdAt.getMonth() + 1}`;
        const monthBucket = movementByMonthMap.get(monthKey);
        if (monthBucket) {
          if (qty >= 0) monthBucket.inbound += qty;
          else monthBucket.outbound += Math.abs(qty);
        }

        const weekStart = new Date(entry.createdAt);
        weekStart.setDate(entry.createdAt.getDate() - entry.createdAt.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekKey = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        const weekBucket = weeklyTrendMap.get(weekKey);
        if (weekBucket) {
          weekBucket.value += Math.abs(qty);
        }
      }

      const productStockMap = new Map<string, { name: string; value: number }>();
      for (const row of currentStock) {
        const productName = row.product?.name || 'منتج غير معروف';
        const current = productStockMap.get(row.productId);
        const quantity = this.toNumber(row.quantity);
        if (!current) {
          productStockMap.set(row.productId, { name: productName, value: quantity });
        } else {
          current.value += quantity;
        }
      }

      const stockDistribution = Array.from(productStockMap.values())
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

      const recentMovements = recentLedger.map((entry) => {
        const qty = this.toNumber(entry.qtyChange);
        return {
          date: entry.createdAt,
          movementType: entry.movementType,
          sku: entry.product?.sku || '',
          qtyChange: qty,
          referenceId: entry.referenceId,
        };
      });

      return {
        stats: {
          totalProducts,
          totalStock,
          incomingOrders: inboundOrdersCount,
          outgoingOrders: outboundOrdersCount,
          recentMovements: recentMovements.length,
        },
        movementByMonth: Array.from(movementByMonthMap.values()),
        stockDistribution,
        weeklyTrend: Array.from(weeklyTrendMap.values()),
        recentMovements,
      };
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error as { code?: string }).code === 'P2037'
      ) {
        throw new ServiceUnavailableException(
          'Database connection pool is saturated. Please retry in a moment.',
        );
      }
      throw error;
    }
  }

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

  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
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

  private toNumber(value: unknown): number {
    if (typeof value === 'number') return value;
    if (value && typeof value === 'object' && 'toNumber' in value) {
      return (value as { toNumber: () => number }).toNumber();
    }
    return Number(value) || 0;
  }

  private formatMonthLabel(date: Date): string {
    const month = date.toLocaleString('ar-SA', { month: 'short' });
    return `${month} ${date.getFullYear()}`;
  }

  private formatWeekLabel(date: Date): string {
    return `W${date.getDate()}/${date.getMonth() + 1}`;
  }

  async getDashboard(clientId?: string) {
    try {
      const stockWhere = clientId ? { clientId } : {};
      const ordersWhere = clientId ? { clientId } : {};
      const ledgerWhere = clientId ? { clientId } : {};

      const now = new Date();
      const sixMonthsAgo = new Date(now);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
      sixMonthsAgo.setDate(1);
      sixMonthsAgo.setHours(0, 0, 0, 0);

      const eightWeeksAgo = new Date(now);
      eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 7 * 7);
      eightWeeksAgo.setHours(0, 0, 0, 0);

      // Use sequential queries (instead of Promise.all) to reduce concurrent DB
      // pressure in environments with low max connections.
      const currentStock = await this.prisma.currentStock.findMany({
        where: stockWhere,
        include: {
          product: { select: { id: true, name: true, sku: true } },
        },
      });
      const inboundOrdersCount = await this.prisma.inboundOrder.count({
        where: ordersWhere,
      });
      const outboundOrdersCount = await this.prisma.outboundOrder.count({
        where: ordersWhere,
      });
      const recentLedger = await this.prisma.inventoryLedger.findMany({
        where: ledgerWhere,
        include: {
          product: { select: { sku: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      });
      const chartLedger = await this.prisma.inventoryLedger.findMany({
        where: {
          ...ledgerWhere,
          createdAt: {
            gte: eightWeeksAgo < sixMonthsAgo ? eightWeeksAgo : sixMonthsAgo,
          },
        },
        select: {
          movementType: true,
          qtyChange: true,
          createdAt: true,
          productId: true,
        },
        orderBy: { createdAt: 'asc' },
      });

      const totalStock = currentStock.reduce(
        (sum, row) => sum + this.toNumber(row.quantity),
        0,
      );
      const totalProducts = new Set(currentStock.map((row) => row.productId)).size;

      const movementByMonthMap = new Map<string, { name: string; inbound: number; outbound: number }>();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now);
        d.setMonth(d.getMonth() - i);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
        movementByMonthMap.set(key, {
          name: this.formatMonthLabel(d),
          inbound: 0,
          outbound: 0,
        });
      }

      const weeklyTrendMap = new Map<string, { name: string; value: number }>();
      for (let i = 7; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const key = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        weeklyTrendMap.set(key, {
          name: this.formatWeekLabel(weekStart),
          value: 0,
        });
      }

      for (const entry of chartLedger) {
        const qty = this.toNumber(entry.qtyChange);
        const monthKey = `${entry.createdAt.getFullYear()}-${entry.createdAt.getMonth() + 1}`;
        const monthBucket = movementByMonthMap.get(monthKey);
        if (monthBucket) {
          if (qty >= 0) monthBucket.inbound += qty;
          else monthBucket.outbound += Math.abs(qty);
        }

        const weekStart = new Date(entry.createdAt);
        weekStart.setDate(entry.createdAt.getDate() - entry.createdAt.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekKey = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        const weekBucket = weeklyTrendMap.get(weekKey);
        if (weekBucket) {
          weekBucket.value += Math.abs(qty);
        }
      }

      const productStockMap = new Map<string, { name: string; value: number }>();
      for (const row of currentStock) {
        const productName = row.product?.name || 'منتج غير معروف';
        const current = productStockMap.get(row.productId);
        const quantity = this.toNumber(row.quantity);
        if (!current) {
          productStockMap.set(row.productId, { name: productName, value: quantity });
        } else {
          current.value += quantity;
        }
      }

      const stockDistribution = Array.from(productStockMap.values())
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

      const recentMovements = recentLedger.map((entry) => {
        const qty = this.toNumber(entry.qtyChange);
        return {
          date: entry.createdAt,
          movementType: entry.movementType,
          sku: entry.product?.sku || '',
          qtyChange: qty,
          referenceId: entry.referenceId,
        };
      });

      return {
        stats: {
          totalProducts,
          totalStock,
          incomingOrders: inboundOrdersCount,
          outgoingOrders: outboundOrdersCount,
          recentMovements: recentMovements.length,
        },
        movementByMonth: Array.from(movementByMonthMap.values()),
        stockDistribution,
        weeklyTrend: Array.from(weeklyTrendMap.values()),
        recentMovements,
      };
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error as { code?: string }).code === 'P2037'
      ) {
        throw new ServiceUnavailableException(
          'Database connection pool is saturated. Please retry in a moment.',
        );
      }
      throw error;
    }
  }

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

  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
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

  private toNumber(value: unknown): number {
    if (typeof value === 'number') return value;
    if (value && typeof value === 'object' && 'toNumber' in value) {
      return (value as { toNumber: () => number }).toNumber();
    }
    return Number(value) || 0;
  }

  private formatMonthLabel(date: Date): string {
    const month = date.toLocaleString('ar-SA', { month: 'short' });
    return `${month} ${date.getFullYear()}`;
  }

  private formatWeekLabel(date: Date): string {
    return `W${date.getDate()}/${date.getMonth() + 1}`;
  }

  async getDashboard(clientId?: string) {
    try {
      const stockWhere = clientId ? { clientId } : {};
      const ordersWhere = clientId ? { clientId } : {};
      const ledgerWhere = clientId ? { clientId } : {};

      const now = new Date();
      const sixMonthsAgo = new Date(now);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
      sixMonthsAgo.setDate(1);
      sixMonthsAgo.setHours(0, 0, 0, 0);

      const eightWeeksAgo = new Date(now);
      eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 7 * 7);
      eightWeeksAgo.setHours(0, 0, 0, 0);

      // Use sequential queries (instead of Promise.all) to reduce concurrent DB
      // pressure in environments with low max connections.
      const currentStock = await this.prisma.currentStock.findMany({
        where: stockWhere,
        include: {
          product: { select: { id: true, name: true, sku: true } },
        },
      });
      const inboundOrdersCount = await this.prisma.inboundOrder.count({
        where: ordersWhere,
      });
      const outboundOrdersCount = await this.prisma.outboundOrder.count({
        where: ordersWhere,
      });
      const recentLedger = await this.prisma.inventoryLedger.findMany({
        where: ledgerWhere,
        include: {
          product: { select: { sku: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      });
      const chartLedger = await this.prisma.inventoryLedger.findMany({
        where: {
          ...ledgerWhere,
          createdAt: {
            gte: eightWeeksAgo < sixMonthsAgo ? eightWeeksAgo : sixMonthsAgo,
          },
        },
        select: {
          movementType: true,
          qtyChange: true,
          createdAt: true,
          productId: true,
        },
        orderBy: { createdAt: 'asc' },
      });

      const totalStock = currentStock.reduce(
        (sum, row) => sum + this.toNumber(row.quantity),
        0,
      );
      const totalProducts = new Set(currentStock.map((row) => row.productId)).size;

      const movementByMonthMap = new Map<string, { name: string; inbound: number; outbound: number }>();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now);
        d.setMonth(d.getMonth() - i);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
        movementByMonthMap.set(key, {
          name: this.formatMonthLabel(d),
          inbound: 0,
          outbound: 0,
        });
      }

      const weeklyTrendMap = new Map<string, { name: string; value: number }>();
      for (let i = 7; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const key = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        weeklyTrendMap.set(key, {
          name: this.formatWeekLabel(weekStart),
          value: 0,
        });
      }

      for (const entry of chartLedger) {
        const qty = this.toNumber(entry.qtyChange);
        const monthKey = `${entry.createdAt.getFullYear()}-${entry.createdAt.getMonth() + 1}`;
        const monthBucket = movementByMonthMap.get(monthKey);
        if (monthBucket) {
          if (qty >= 0) monthBucket.inbound += qty;
          else monthBucket.outbound += Math.abs(qty);
        }

        const weekStart = new Date(entry.createdAt);
        weekStart.setDate(entry.createdAt.getDate() - entry.createdAt.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekKey = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
        const weekBucket = weeklyTrendMap.get(weekKey);
        if (weekBucket) {
          weekBucket.value += Math.abs(qty);
        }
      }

      const productStockMap = new Map<string, { name: string; value: number }>();
      for (const row of currentStock) {
        const productName = row.product?.name || 'منتج غير معروف';
        const current = productStockMap.get(row.productId);
        const quantity = this.toNumber(row.quantity);
        if (!current) {
          productStockMap.set(row.productId, { name: productName, value: quantity });
        } else {
          current.value += quantity;
        }
      }

      const stockDistribution = Array.from(productStockMap.values())
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

      const recentMovements = recentLedger.map((entry) => {
        const qty = this.toNumber(entry.qtyChange);
        return {
          date: entry.createdAt,
          movementType: entry.movementType,
          sku: entry.product?.sku || '',
          qtyChange: qty,
          referenceId: entry.referenceId,
        };
      });

      return {
        stats: {
          totalProducts,
          totalStock,
          incomingOrders: inboundOrdersCount,
          outgoingOrders: outboundOrdersCount,
          recentMovements: recentMovements.length,
        },
        movementByMonth: Array.from(movementByMonthMap.values()),
        stockDistribution,
        weeklyTrend: Array.from(weeklyTrendMap.values()),
        recentMovements,
      };
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error as { code?: string }).code === 'P2037'
      ) {
        throw new ServiceUnavailableException(
          'Database connection pool is saturated. Please retry in a moment.',
        );
      }
      throw error;
    }
  }

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
