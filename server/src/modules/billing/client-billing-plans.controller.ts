import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { BillingService } from './billing.service';
import { CreateClientBillingPlanDto } from './dto/create-client-billing-plan.dto';
import { UpdateClientBillingPlanDto } from './dto/update-client-billing-plan.dto';
import { ClientBillingPlanFilterDto } from './dto/client-billing-plan-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('billing/client-plans')
@UseGuards(JwtAuthGuard)
export class ClientBillingPlansController {
  constructor(private readonly billing: BillingService) {}

  @Post()
  create(@Body() dto: CreateClientBillingPlanDto) {
    return this.billing.createClientPlan(dto);
  }

  @Get()
  findMany(@Query() filter: ClientBillingPlanFilterDto) {
    return this.billing.findManyClientPlans(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.billing.findOneClientPlan(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateClientBillingPlanDto,
  ) {
    return this.billing.updateClientPlan(id, dto);
  }
}
