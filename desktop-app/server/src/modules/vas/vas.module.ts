import { Module } from '@nestjs/common';
import { VasService } from './vas.service';
import { VasController } from './vas.controller';
import { VasPricingController } from './vas-pricing.controller';

@Module({
  controllers: [VasPricingController, VasController],
  providers: [VasService],
  exports: [VasService],
})
export class VasModule {}
