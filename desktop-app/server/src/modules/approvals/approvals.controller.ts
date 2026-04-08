import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { ApprovalsService } from './approvals.service';
import { ApprovalFilterDto } from './dto/approval-filter.dto';
import { ApprovalDecisionDto } from './dto/approval-decision.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('approvals')
@UseGuards(JwtAuthGuard)
export class ApprovalsController {
  constructor(private readonly approvals: ApprovalsService) {}

  @Get()
  findMany(@Query() filter: ApprovalFilterDto) {
    return this.approvals.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.approvals.findOne(id);
  }

  @Post(':id/approve')
  approve(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: ApprovalDecisionDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.approvals.approve(id, payload.actorId, dto);
  }

  @Post(':id/reject')
  reject(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: ApprovalDecisionDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.approvals.reject(id, payload.actorId, dto);
  }
}
