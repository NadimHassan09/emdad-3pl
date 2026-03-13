import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { AdjustmentStatus } from '../../common/enums/adjustment-status.enum';
import { InventoryService } from '../inventory/inventory.service';
import { MovementType } from '../../common/enums/movement-type.enum';
import { ApprovalsService } from '../approvals/approvals.service';
import { ApprovalReferenceType } from '../../common/enums/approval-reference-type.enum';

/**
 * Adjustments Service
 *
 * Handles manual stock corrections (adjustments).
 *
 * Adjustment lifecycle:
 * - PENDING: Created, awaiting approval
 * - APPROVED: Approved by approver, ready to apply
 * - REJECTED: Rejected by approver
 * - APPLIED: Applied to inventory (ledger entry created)
 *
 * CRITICAL: This service uses InventoryService.createLedgerEntry() to apply adjustments.
 * It NEVER writes directly to current_stock. Stock changes happen via inventory_ledger.
 *
 * Approval integration:
 * - Creates approval request when adjustment is created (if approval required)
 * - Checks approval status before applying
 * - Integrates cleanly with ApprovalsService without reimplementing approval logic
 */
@Injectable()
export class AdjustmentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly inventoryService: InventoryService,
    private readonly approvalsService: ApprovalsService,
  ) {}

  /**
   * Create an adjustment.
   * Creates an approval request if approval is required.
   */
  async create(dto: CreateAdjustmentDto, createdByActorId: string) {
    // Validate client and warehouse exist
    await this.prisma.client.findUniqueOrThrow({ where: { id: dto.clientId } });
    await this.prisma.warehouse.findUniqueOrThrow({
      where: { id: dto.warehouseId },
    });

    // Validate product exists if provided
    if (dto.productId) {
      await this.prisma.product.findUniqueOrThrow({
        where: { id: dto.productId },
      });
    }

    // Create adjustment
    const adjustment = await this.prisma.adjustment.create({
      data: {
        clientId: dto.clientId,
        warehouseId: dto.warehouseId,
        productId: dto.productId || null,
        batchId: dto.batchId || null,
        locationId: dto.locationId || null,
        qtyChange: dto.qtyChange,
        reason: dto.reason?.trim() || null,
        status: 'PENDING' as any,
        createdByActorId,
      },
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        product: { select: { id: true, sku: true, name: true } },
        batch: { select: { id: true, batchCode: true } },
        location: { select: { id: true, code: true } },
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

    // Create approval request (if approval workflow is required)
    // Note: This integrates with the approvals module without reimplementing it
    try {
      await this.approvalsService.createRequest({
        referenceType: ApprovalReferenceType.ADJUSTMENT,
        referenceId: adjustment.id,
        requestedByActorId: createdByActorId,
        requestNotes: dto.reason || `Stock adjustment: ${dto.qtyChange > 0 ? '+' : ''}${dto.qtyChange}`,
      });
    } catch (error) {
      // If approval creation fails, log but don't fail the adjustment creation
      // The adjustment can still be manually approved later
      console.warn('Failed to create approval request for adjustment:', error);
    }

    return adjustment;
  }

  /**
   * Find adjustments with optional filters.
   */
  async findMany(filter?: AdjustmentFilterDto) {
    const where: {
      clientId?: string;
      warehouseId?: string;
      productId?: string | null;
      batchId?: string | null;
      locationId?: string | null;
      status?: any;
    } = {};

    if (filter?.clientId) where.clientId = filter.clientId;
    if (filter?.warehouseId) where.warehouseId = filter.warehouseId;
    if (filter?.productId !== undefined) {
      where.productId = filter.productId || null;
    }
    if (filter?.batchId !== undefined) {
      where.batchId = filter.batchId || null;
    }
    if (filter?.locationId !== undefined) {
      where.locationId = filter.locationId || null;
    }
    if (filter?.status) where.status = filter.status;

    return this.prisma.adjustment.findMany({
      where,
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        product: { select: { id: true, sku: true, name: true } },
        batch: { select: { id: true, batchCode: true } },
        location: { select: { id: true, code: true } },
        createdByActor: {
          select: {
            id: true,
            actorType: true,
            user: { select: { id: true, email: true } },
            clientAccount: { select: { id: true, email: true } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Find adjustment by ID.
   */
  async findOne(id: string) {
    const adjustment = await this.prisma.adjustment.findUnique({
      where: { id },
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        product: { select: { id: true, sku: true, name: true } },
        batch: { select: { id: true, batchCode: true } },
        location: { select: { id: true, code: true } },
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

    if (!adjustment) {
      throw new NotFoundException('Adjustment not found');
    }

    return adjustment;
  }

  /**
   * Apply an approved adjustment.
   * Creates inventory_ledger entry with movementType = ADJUSTMENT.
   * Updates adjustment status to APPLIED.
   */
  async apply(id: string) {
    const adjustment = await this.findOne(id);

    if (adjustment.status === 'APPLIED') {
      throw new BadRequestException('Adjustment is already applied');
    }

    if (adjustment.status === 'REJECTED') {
      throw new BadRequestException('Cannot apply a rejected adjustment');
    }

    if (adjustment.status === 'PENDING') {
      throw new BadRequestException(
        'Adjustment must be approved before applying',
      );
    }

    // Check if approval exists and is approved
    // This integrates with the approvals module without reimplementing it
    const approvals = await (this.prisma as any).approval.findMany({
      where: {
        referenceType: ApprovalReferenceType.ADJUSTMENT,
        referenceId: id,
      },
      orderBy: { createdAt: 'desc' },
    });

    const latestApproval = approvals?.[0];
    if (
      latestApproval &&
      latestApproval.status !== 'APPROVED' &&
      adjustment.status !== 'APPROVED'
    ) {
      throw new BadRequestException(
        'Adjustment must be approved before applying',
      );
    }

    // Apply adjustment by creating ledger entry
    // Note: productId is required for ledger entries, so we validate it exists
    if (!adjustment.productId) {
      throw new BadRequestException(
        'Cannot apply adjustment without a productId',
      );
    }

    await this.inventoryService.createLedgerEntry({
      clientId: adjustment.clientId,
      warehouseId: adjustment.warehouseId,
      productId: adjustment.productId,
      batchId: adjustment.batchId || undefined,
      locationId: adjustment.locationId || undefined,
      movementType: MovementType.ADJUSTMENT,
      qtyChange: adjustment.qtyChange.toNumber(),
      referenceType: 'ADJUSTMENT',
      referenceId: id,
    });

    // Update adjustment status to APPLIED
    return this.prisma.adjustment.update({
      where: { id },
      data: {
        status: 'APPLIED' as any,
      },
      include: {
        client: { select: { id: true, code: true, name: true } },
        warehouse: { select: { id: true, code: true, name: true } },
        product: { select: { id: true, sku: true, name: true } },
        batch: { select: { id: true, batchCode: true } },
        location: { select: { id: true, code: true } },
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
}

