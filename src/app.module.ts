import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { EmploymentsModule } from './employments/employments.module';
import { SideProjectsModule } from './side_projects/side_projects.module';
import { EducationsModule } from './educations/educations.module';
import { JobPostsModule } from './job_posts/job_posts.module';

@Module({
  imports: [PrismaModule, UsersModule, EmploymentsModule, SideProjectsModule, EducationsModule, JobPostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
