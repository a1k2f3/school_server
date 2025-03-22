import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AttendenceService } from './attendence.service';
import { Attendance } from './Attendence.entity';

@Controller('attendence')
export class AttendenceController {
    constructor(private readonly AttendenceService: AttendenceService) {}

    @Post()
    async create(@Body() AttendanceData: Partial<Attendance>) {
      return await this.AttendenceService.create(AttendanceData);
    }
  
    @Get()
    async findAll(): Promise<Attendance[]> {
      return await this.AttendenceService.findAllteacher_Attendence();
    }
  
    @Get('/student')
    async findAllstudent(): Promise<Attendance[]> {
      return await this.AttendenceService.findAllteacher_Attendence();
    }
    @Get('/teacher')
    async findAllteacher(): Promise<Attendance[]> {
      return await this.AttendenceService.findAllteacher_Attendence();
    }
    @Get('/student/:id')
    async findOne(@Param('id') id: number) {
      return await this.AttendenceService.findOne_student(id);
    }
    @Get('/teacher/:id')
    async findOneteacher(@Param('id') id: number) {
      return await this.AttendenceService.findOne_student(id);
    }
    @Put('/std/attendence:id')
    async updatestudentAttendence(@Param('id') id: number, @Body() updateData: Partial<Attendance>) {
      return await this.AttendenceService.updateStudentAttendence(id, updateData);
    }
    @Put('/teacher/attendence:id')
    async update(@Param('id') id: number, @Body() updateData: Partial<Attendance>) {
      return await this.AttendenceService.updateteacherAttendence(id, updateData);
    }
    @Delete(':id')
    async delete(@Param('id') id: number){
      return await this.AttendenceService.delete(id);
    }
}
