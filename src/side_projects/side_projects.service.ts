import { Injectable } from '@nestjs/common';
import { CreateSideProjectDto } from './dto/create-side_project.dto';
import { UpdateSideProjectDto } from './dto/update-side_project.dto';

@Injectable()
export class SideProjectsService {
  create(createSideProjectDto: CreateSideProjectDto) {
    return 'This action adds a new sideProject';
  }

  findAll() {
    return `This action returns all sideProjects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sideProject`;
  }

  update(id: number, updateSideProjectDto: UpdateSideProjectDto) {
    return `This action updates a #${id} sideProject`;
  }

  remove(id: number) {
    return `This action removes a #${id} sideProject`;
  }
}
