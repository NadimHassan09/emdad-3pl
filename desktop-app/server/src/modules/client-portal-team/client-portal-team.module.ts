import { Module } from '@nestjs/common';
import { ActorsModule } from '../actors/actors.module';
import { MailModule } from '../mail/mail.module';
import { ClientPortalTeamController } from './client-portal-team.controller';
import { ClientPortalTeamService } from './client-portal-team.service';

@Module({
  imports: [ActorsModule, MailModule],
  controllers: [ClientPortalTeamController],
  providers: [ClientPortalTeamService],
})
export class ClientPortalTeamModule {}
