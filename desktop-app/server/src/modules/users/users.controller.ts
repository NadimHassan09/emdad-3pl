import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Get('roles')
  findRoles() {
    return this.users.findAllRoles();
  }

  @Get('roles/with-permissions')
  findRolesWithPermissions() {
    return this.users.findAllRolesWithPermissions();
  }

  @Get('roles/:roleId')
  findRoleById(@Param('roleId', ParseUUIDPipe) roleId: string) {
    return this.users.findRoleById(roleId);
  }

  @Post('roles')
  createRole(@Body() dto: CreateRoleDto) {
    return this.users.createRole(dto);
  }

  @Patch('roles/:roleId')
  updateRole(
    @Param('roleId', ParseUUIDPipe) roleId: string,
    @Body() dto: UpdateRoleDto,
  ) {
    return this.users.updateRole(roleId, dto);
  }

  @Get()
  findMany() {
    return this.users.findMany();
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateUserDto,
  ) {
    return this.users.update(id, dto);
  }
}


