import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { student } from './student.entity';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() studentData: Partial<student>) {
    return this.studentService.create(studentData);
  }
  @Get()
  async findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.studentService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateData: Partial<student>) {
    return this.studentService.update(id, updateData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.studentService.delete(id);
  }
}
