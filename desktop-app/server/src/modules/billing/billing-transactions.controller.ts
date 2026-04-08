import {
  Controller,
  Get,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BillingService } from './billing.service';
import { BillingTransactionFilterDto } from './dto/billing-transaction-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('billing/transactions')
@UseGuards(JwtAuthGuard)
export class BillingTransactionsController {
  constructor(private readonly billing: BillingService) {}

  @Get()
  findMany(@Query() filter: BillingTransactionFilterDto) {
    return this.billing.findManyTransactions(filter);
  }
}
