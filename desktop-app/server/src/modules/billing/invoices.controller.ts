import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { BillingService } from './billing.service';
import { GenerateInvoiceDto } from './dto/generate-invoice.dto';
import { InvoiceFilterDto } from './dto/invoice-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('billing/invoices')
@UseGuards(JwtAuthGuard)
export class InvoicesController {
  constructor(private readonly billing: BillingService) {}

  @Post('generate')
  generate(@Body() dto: GenerateInvoiceDto) {
    return this.billing.generateInvoice(dto);
  }

  @Get()
  findMany(@Query() filter: InvoiceFilterDto) {
    return this.billing.findManyInvoices(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.billing.findOneInvoice(id);
  }
}
