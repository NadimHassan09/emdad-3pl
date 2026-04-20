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
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { PermissionsGuard } from '../../common/guards/permissions.guard';
import { RequirePermissions } from '../../common/decorators/require-permissions.decorator';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientFilterDto } from './dto/client-filter.dto';
import { CreateClientRoleDto } from './dto/create-client-role.dto';
import { UpdateClientRoleDto } from './dto/update-client-role.dto';
import { CreateClientAccountDto } from './dto/create-client-account.dto';
import { UpdateClientAccountDto } from './dto/update-client-account.dto';
import { SetClientAccountActiveDto } from './dto/set-client-account-active.dto';
import { OnboardClientDto } from './dto/onboard-client.dto';

@Controller('clients')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ClientsController {
  constructor(private readonly clients: ClientsService) {}

  @Post()
  @RequirePermissions('users:manage')
  create(@Body() dto: CreateClientDto) {
    return this.clients.create(dto);
  }

  @Get()
  @RequirePermissions('users:view')
  findMany(@Query() filter: ClientFilterDto) {
    return this.clients.findMany(filter);
  }

  @Post('onboard')
  @RequirePermissions('users:manage')
  onboard(@Body() dto: OnboardClientDto) {
    return this.clients.onboard(dto);
  }

  @Get('roles/catalog')
  @RequirePermissions('users:view')
  getRoleCatalog() {
    return this.clients.getClientPermissionCatalog();
  }

  @Get('roles')
  @RequirePermissions('users:view')
  findClientRoles() {
    return this.clients.findAllClientRoles();
  }

  @Get('roles/with-permissions')
  @RequirePermissions('users:view')
  findClientRolesWithPermissions() {
    return this.clients.findAllClientRolesWithPermissions();
  }

  @Post('roles')
  @RequirePermissions('users:manage')
  createClientRole(@Body() dto: CreateClientRoleDto) {
    return this.clients.createClientRole(dto);
  }

  @Patch('roles/:roleId')
  @RequirePermissions('users:manage')
  updateClientRole(
    @Param('roleId', ParseUUIDPipe) roleId: string,
    @Body() dto: UpdateClientRoleDto,
  ) {
    return this.clients.updateClientRole(roleId, dto);
  }

  @Post('roles/backfill')
  @RequirePermissions('users:manage')
  backfillClientRoles() {
    return this.clients.backfillClientRolePermissions();
  }

  @Get(':id')
  @RequirePermissions('users:view')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.clients.findOne(id);
  }

  @Get(':id/accounts')
  @RequirePermissions('users:view')
  findAccounts(@Param('id', ParseUUIDPipe) id: string) {
    return this.clients.findAccounts(id);
  }

  @Post(':id/accounts')
  @RequirePermissions('users:manage')
  createAccount(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: CreateClientAccountDto,
  ) {
    return this.clients.createAccount(id, dto);
  }

  @Patch(':id/accounts/:accountId')
  @RequirePermissions('users:manage')
  updateAccount(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('accountId', ParseUUIDPipe) accountId: string,
    @Body() dto: UpdateClientAccountDto,
  ) {
    return this.clients.updateAccount(id, accountId, dto);
  }

  @Patch(':id/accounts/:accountId/active')
  @RequirePermissions('users:manage')
  setAccountActive(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('accountId', ParseUUIDPipe) accountId: string,
    @Body() dto: SetClientAccountActiveDto,
  ) {
    return this.clients.setAccountActive(id, accountId, dto.isActive);
  }

  @Patch(':id')
  @RequirePermissions('users:manage')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateClientDto) {
    return this.clients.update(id, dto);
  }
}
