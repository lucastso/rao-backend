import { PartialType } from '@nestjs/mapped-types';
import { CreateSideProjectDto } from './create-side_project.dto';

export class UpdateSideProjectDto extends PartialType(CreateSideProjectDto) {}
