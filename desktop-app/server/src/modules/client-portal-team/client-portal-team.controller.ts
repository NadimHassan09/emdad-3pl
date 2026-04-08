import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { ClientAccountGuard } from '../../common/guards/client-account.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ClientPortalTeamService } from './client-portal-team.service';
import { ClientPortalTeamQueryDto } from './dto/client-portal-team-query.dto';
import { InviteTeamAccountDto } from './dto/invite-team-account.dto';
import { UpdateTeamAccountDto } from './dto/update-team-account.dto';
import { SetTeamAccountActiveDto } from './dto/set-team-account-active.dto';

@Controller('client-portal/team')
@UseGuards(JwtAuthGuard, ClientAccountGuard)
export class ClientPortalTeamController {
  constructor(private readonly team: ClientPortalTeamService) {}

  @Get('roles')
  listRoles() {
    return this.team.listRoles();
  }

  @Get('accounts')
  listAccounts(
    @CurrentActor() actor: JwtPayload,
    @Query() query: ClientPortalTeamQueryDto,
  ) {
    return this.team.listAccounts(actor.clientId!, query);
  }

  @Post('accounts')
  invite(
    @CurrentActor() actor: JwtPayload,
    @Body() dto: InviteTeamAccountDto,
  ) {
    return this.team.invite(actor, actor.clientId!, dto);
  }

  @Patch('accounts/:id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() actor: JwtPayload,
    @Body() dto: UpdateTeamAccountDto,
  ) {
    return this.team.update(actor, actor.clientId!, id, dto);
  }

  @Patch('accounts/:id/active')
  setActive(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() actor: JwtPayload,
    @Body() dto: SetTeamAccountActiveDto,
  ) {
    return this.team.setActive(actor, actor.clientId!, id, dto.isActive);
  }
}
