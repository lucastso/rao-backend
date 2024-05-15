import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmploymentsService } from './employments.service';
import { CreateEmploymentDto } from './dto/create-employment.dto';
import { UpdateEmploymentDto } from './dto/update-employment.dto';

@Controller('employments')
export class EmploymentsController {
  constructor(private readonly employmentsService: EmploymentsService) {}

  @Post()
  create(@Body() createEmploymentDto: CreateEmploymentDto) {
    return this.employmentsService.create(createEmploymentDto);
  }

  @Get()
  findAll() {
    return this.employmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmploymentDto: UpdateEmploymentDto) {
    return this.employmentsService.update(+id, updateEmploymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employmentsService.remove(+id);
  }
}
