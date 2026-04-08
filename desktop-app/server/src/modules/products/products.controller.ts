import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductFilterDto } from './dto/product-filter.dto';
import { CreateProductClientPortalDto } from './dto/create-product-client-portal.dto';
import { UpdateProductClientPortalDto } from './dto/update-product-client-portal.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { ClientAccountGuard } from '../../common/guards/client-account.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly products: ProductsService) {}

  @Get('client-portal/list')
  @UseGuards(JwtAuthGuard, ClientAccountGuard)
  findManyClientPortal(@CurrentActor() actor: JwtPayload) {
    return this.products.findManyForClientPortal(actor.clientId!);
  }

  @Get('my')
  @UseGuards(JwtAuthGuard, ClientAccountGuard)
  findMyProducts(@CurrentActor() actor: JwtPayload) {
    return this.products.findManyForClientPortal(actor.clientId!);
  }

  @Post('client-portal')
  @UseGuards(JwtAuthGuard, ClientAccountGuard)
  createForClientPortal(
    @CurrentActor() actor: JwtPayload,
    @Body() dto: CreateProductClientPortalDto,
  ) {
    return this.products.createForClientPortal(actor.clientId!, dto);
  }

  @Patch('client-portal/:id')
  @UseGuards(JwtAuthGuard, ClientAccountGuard)
  updateForClientPortal(
    @CurrentActor() actor: JwtPayload,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateProductClientPortalDto,
  ) {
    return this.products.updateForClientPortal(id, actor.clientId!, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, ClientAccountGuard)
  deleteForClientPortal(
    @CurrentActor() actor: JwtPayload,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.products.deleteForClientPortal(id, actor.clientId!);
  }

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.products.create(dto);
  }

  @Get()
  findMany(@Query() filter: ProductFilterDto) {
    return this.products.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.products.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateProductDto,
  ) {
    return this.products.update(id, dto);
  }
}
