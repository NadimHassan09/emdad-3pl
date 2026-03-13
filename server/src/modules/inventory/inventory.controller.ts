import { Controller, Get, Query, Param, ParseUUIDPipe } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CurrentStockFilterDto } from './dto/current-stock-filter.dto';
import { InventoryLedgerFilterDto } from './dto/inventory-ledger-filter.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

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
   * GET /inventory/ledger
   * Query inventory ledger entries with optional filters.
   */
  @Get('ledger')
  findLedger(@Query() filter: InventoryLedgerFilterDto) {
    return this.inventoryService.findLedger(filter);
  }
}
