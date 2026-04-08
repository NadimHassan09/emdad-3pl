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
import { CreateBillingPlanDto } from './dto/create-billing-plan.dto';
import { UpdateBillingPlanDto } from './dto/update-billing-plan.dto';
import { BillingPlanFilterDto } from './dto/billing-plan-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('billing/plans')
@UseGuards(JwtAuthGuard)
export class BillingPlansController {
  constructor(private readonly billing: BillingService) {}

  @Post()
  create(@Body() dto: CreateBillingPlanDto) {
    return this.billing.createPlan(dto);
  }

  @Get()
  findMany(@Query() filter: BillingPlanFilterDto) {
    return this.billing.findManyPlans(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.billing.findOnePlan(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateBillingPlanDto,
  ) {
    return this.billing.updatePlan(id, dto);
  }
}
