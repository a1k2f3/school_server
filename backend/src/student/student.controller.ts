import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { student} from './student.entity';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService,    
  ) {}
  @Post()
  async create(@Body() studentData) {
    return this.studentService.create(studentData);
  }
  @Post('/assignment')
  async createAssignment(@Body() assignmentData ) {
    return this.studentService.createAssignment(assignmentData);
  }
  @Post('/:studentId/assign/:assignmentId')
  async assignAssignment(
    @Param('studentId') studentId: string,
    @Param('assignmentId') assignmentId: string,
  ) {
    return this.studentService.assignAssignmentToStudent(Number(studentId), Number(assignmentId));
  }
  @Get()
  async findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.studentService.findOne(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateData) {
    return this.studentService.update(Number(id), updateData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.studentService.delete(Number(id));
  }
}
