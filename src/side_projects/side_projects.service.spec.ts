import { Test, TestingModule } from '@nestjs/testing';
import { SideProjectsService } from './side_projects.service';

describe('SideProjectsService', () => {
  let service: SideProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SideProjectsService],
    }).compile();

    service = module.get<SideProjectsService>(SideProjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
