import { Test, TestingModule } from '@nestjs/testing';
import { JobPostsController } from './job_posts.controller';
import { JobPostsService } from './job_posts.service';

describe('JobPostsController', () => {
  let controller: JobPostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobPostsController],
      providers: [JobPostsService],
    }).compile();

    controller = module.get<JobPostsController>(JobPostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
