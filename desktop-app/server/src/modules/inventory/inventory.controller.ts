import {
  Controller,
  Get,
  Query,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CurrentStockFilterDto } from './dto/current-stock-filter.dto';
import { ClientPortalStockQueryDto } from './dto/client-portal-stock-query.dto';
import { InventoryLedgerFilterDto } from './dto/inventory-ledger-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { ClientAccountGuard } from '../../common/guards/client-account.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  /**
   * GET /inventory/client-portal/dashboard
   * Dashboard scoped to the authenticated client only (JWT clientId).
   * Use this from the client portal; internal staff should use GET /inventory/dashboard.
   */
  @Get('client-portal/dashboard')
  @UseGuards(JwtAuthGuard, ClientAccountGuard)
  getClientPortalDashboard(@CurrentActor() actor: JwtPayload) {
    return this.inventoryService.getDashboard(actor.clientId!);
  }

  /**
   * GET /inventory/client-portal/current-stock
   * Stock for the authenticated client only (optional date / warehouse filters).
   */
  @Get('client-portal/current-stock')
  @UseGuards(JwtAuthGuard, ClientAccountGuard)
  getClientPortalCurrentStock(
    @CurrentActor() actor: JwtPayload,
    @Query() query: ClientPortalStockQueryDto,
  ) {
    return this.inventoryService.findCurrentStockForClientPortal(
      actor.clientId!,
      query,
    );
  }

  /**
   * GET /inventory/dashboard
   * Aggregated dashboard; when actor is internal (no clientId), returns all tenants.
   */
  @Get('dashboard')
  @UseGuards(JwtAuthGuard)
  getDashboard(@CurrentActor() actor: JwtPayload) {
    return this.inventoryService.getDashboard(actor.clientId);
  }

  /**
   * GET /inventory/current-stock
   * Query current stock with optional filters.
   */
  @Get('current-stock')
  findCurrentStock(@Query() filter: CurrentStockFilterDto) {
    return this.inventoryService.findCurrentStock(filter);
  }

  /**
   * GET /inventory/current-stock/by-product/:productId
   * Query current stock for a specific product.
   */
  @Get('current-stock/by-product/:productId')
  findCurrentStockByProduct(
    @Param('productId', ParseUUIDPipe) productId: string,
    @Query() filter: CurrentStockFilterDto,
  ) {
    return this.inventoryService.findCurrentStockByProduct(productId, filter);
  }

  /**
   * GET /inventory/client-portal/ledger
   * Ledger entries scoped to the authenticated client only.
   */
  @Get('client-portal/ledger')
  @UseGuards(JwtAuthGuard, ClientAccountGuard)
  getClientPortalLedger(
    @CurrentActor() actor: JwtPayload,
    @Query() filter: InventoryLedgerFilterDto,
  ) {
    return this.inventoryService.findLedgerForClientPortal(actor.clientId!, filter);
  }

  /**
   * GET /inventory/ledger
   * Query inventory ledger entries with optional filters.
   */
  @Get('ledger')
  findLedger(@Query() filter: InventoryLedgerFilterDto) {
    return this.inventoryService.findLedger(filter);
  }
}
