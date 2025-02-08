import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { teacher } from './teacher.entity';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  async create(@Body() teacherData: Partial<teacher>) {
    return await this.teacherService.create(teacherData);
  }

  @Get()
  async findAll(): Promise<teacher[]> {
    return await this.teacherService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.teacherService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateData: Partial<teacher>) {
    return await this.teacherService.update(id, updateData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number){
    return await this.teacherService.delete(id);
  }
}
