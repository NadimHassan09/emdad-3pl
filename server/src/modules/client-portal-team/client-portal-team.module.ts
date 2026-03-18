import { Module } from '@nestjs/common';
import { ActorsModule } from '../actors/actors.module';
import { ClientPortalTeamController } from './client-portal-team.controller';
import { ClientPortalTeamService } from './client-portal-team.service';

@Module({
  imports: [ActorsModule],
  controllers: [ClientPortalTeamController],
  providers: [ClientPortalTeamService],
})
export class ClientPortalTeamModule {}
