import {
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { ClientAccountGuard } from '../../common/guards/client-account.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ClientPortalNotificationsService } from './client-portal-notifications.service';
import { ClientPortalNotificationQueryDto } from './dto/client-portal-notification-query.dto';
import { UnreadNotificationsQueryDto } from './dto/unread-query.dto';

@Controller('client-portal/notifications')
@UseGuards(JwtAuthGuard, ClientAccountGuard)
export class ClientPortalNotificationsController {
  constructor(private readonly notifications: ClientPortalNotificationsService) {}

  @Get()
  list(
    @CurrentActor() actor: JwtPayload,
    @Query() query: ClientPortalNotificationQueryDto,
  ) {
    return this.notifications.listForActor(actor, query);
  }

  @Get('unread')
  findUnread(
    @CurrentActor() actor: JwtPayload,
    @Query() query: UnreadNotificationsQueryDto,
  ) {
    return this.notifications.findUnreadForActor(actor, query.limit ?? 5);
  }

  @Patch('mark-all-read')
  markAllRead(@CurrentActor() actor: JwtPayload) {
    return this.notifications.markAllReadForActor(actor);
  }

  @Patch(':id/read')
  markRead(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() actor: JwtPayload,
  ) {
    return this.notifications.markRead(actor, id);
  }

  @Delete(':id')
  delete(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() actor: JwtPayload,
  ) {
    return this.notifications.deleteForActor(actor, id);
  }
}
