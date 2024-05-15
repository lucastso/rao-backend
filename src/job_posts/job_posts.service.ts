import { Injectable } from '@nestjs/common';
import { CreateJobPostDto } from './dto/create-job_post.dto';
import { UpdateJobPostDto } from './dto/update-job_post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JobPostsService {
  constructor(private prisma: PrismaService) {}

  create(createJobpostDto: CreateJobPostDto) {
    return 'This action adds a new jobpost';
  }

  findAll() {
    const data = this.prisma.jobPost.findMany()

    return data;
  }

  findOne(id: number) {
    const data = this.prisma.jobPost.findFirst({
      where: {
        id: id
      }
    })
    
    return data;
  }

  update(id: number, updateJobpostDto: UpdateJobPostDto) {
    return `This action updates a #${id} jobpost`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobpost`;
  }
}
