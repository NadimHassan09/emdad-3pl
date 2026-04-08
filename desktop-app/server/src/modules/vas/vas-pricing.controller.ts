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
import { VasService } from './vas.service';
import { CreateVasPricingDto } from './dto/create-vas-pricing.dto';
import { UpdateVasPricingDto } from './dto/update-vas-pricing.dto';
import { VasPricingFilterDto } from './dto/vas-pricing-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('vas/pricing')
@UseGuards(JwtAuthGuard)
export class VasPricingController {
  constructor(private readonly vas: VasService) {}

  @Post()
  create(@Body() dto: CreateVasPricingDto) {
    return this.vas.createVasPricing(dto);
  }

  @Get()
  findMany(@Query() filter: VasPricingFilterDto) {
    return this.vas.findManyVasPricing(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.vas.findOneVasPricing(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateVasPricingDto,
  ) {
    return this.vas.updateVasPricing(id, dto);
  }
}
