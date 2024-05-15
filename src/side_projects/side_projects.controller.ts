import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SideProjectsService } from './side_projects.service';
import { CreateSideProjectDto } from './dto/create-side_project.dto';
import { UpdateSideProjectDto } from './dto/update-side_project.dto';

@Controller('side-projects')
export class SideProjectsController {
  constructor(private readonly sideProjectsService: SideProjectsService) {}

  @Post()
  create(@Body() createSideProjectDto: CreateSideProjectDto) {
    return this.sideProjectsService.create(createSideProjectDto);
  }

  @Get()
  findAll() {
    return this.sideProjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sideProjectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSideProjectDto: UpdateSideProjectDto) {
    return this.sideProjectsService.update(+id, updateSideProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sideProjectsService.remove(+id);
  }
}
