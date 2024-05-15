import { Module } from '@nestjs/common';
import { EmploymentsService } from './employments.service';
import { EmploymentsController } from './employments.controller';

@Module({
  controllers: [EmploymentsController],
  providers: [EmploymentsService],
})
export class EmploymentsModule {}
