import { Test, TestingModule } from '@nestjs/testing';
import { SideProjectsController } from './side_projects.controller';
import { SideProjectsService } from './side_projects.service';

describe('SideProjectsController', () => {
  let controller: SideProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SideProjectsController],
      providers: [SideProjectsService],
    }).compile();

    controller = module.get<SideProjectsController>(SideProjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
