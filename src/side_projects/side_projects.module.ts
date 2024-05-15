import { Module } from '@nestjs/common';
import { SideProjectsService } from './side_projects.service';
import { SideProjectsController } from './side_projects.controller';

@Module({
  controllers: [SideProjectsController],
  providers: [SideProjectsService],
})
export class SideProjectsModule {}
