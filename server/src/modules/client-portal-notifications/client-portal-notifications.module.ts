import { Module } from '@nestjs/common';
import { ClientPortalNotificationsController } from './client-portal-notifications.controller';
import { ClientPortalNotificationsService } from './client-portal-notifications.service';

@Module({
  controllers: [ClientPortalNotificationsController],
  providers: [ClientPortalNotificationsService],
})
export class ClientPortalNotificationsModule {}
