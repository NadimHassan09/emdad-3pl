import { Controller, Get, Param, ParseUUIDPipe, Query, UseGuards } from '@nestjs/common';
import { BillingService } from './billing.service';
import { ClientPortalInvoiceQueryDto } from './dto/client-portal-invoice-query.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { ClientAccountGuard } from '../../common/guards/client-account.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('billing/client-portal')
@UseGuards(JwtAuthGuard, ClientAccountGuard)
export class BillingClientPortalController {
  constructor(private readonly billing: BillingService) {}

  @Get('invoices')
  listInvoices(
    @CurrentActor() actor: JwtPayload,
    @Query() query: ClientPortalInvoiceQueryDto,
  ) {
    return this.billing.findManyInvoicesForClientPortal(actor.clientId!, query);
  }

  @Get('invoices/:id')
  getInvoice(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() actor: JwtPayload,
  ) {
    return this.billing.findOneInvoiceForClientPortal(actor.clientId!, id);
  }

  @Get('overview')
  getOverview(@CurrentActor() actor: JwtPayload) {
    return this.billing.getClientPortalBillingOverview(actor.clientId!);
  }
}
