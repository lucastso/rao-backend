import { Module } from '@nestjs/common';
import { JobPostsService } from './job_posts.service';
import { JobPostsController } from './job_posts.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [JobPostsController],
  providers: [JobPostsService],
  imports: [PrismaModule],
})
export class JobPostsModule {}
