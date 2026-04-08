import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';

@Module({
  providers: [ActorsService],
  exports: [ActorsService],
})
export class ActorsModule {}
