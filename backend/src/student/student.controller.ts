import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateCourseDto } from './course.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // Get all students
  @Get()
  async getAllStudents() {
    return this.studentService.findAll();
  }

  // Get a single student by email and password (login)
  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string) {
    return this.studentService.findone(email, password);
  }

  // Create a new student
  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  async createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('phone') phone: number,
    @Body('dob') dob: Date,
    @Body('password') password: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.studentService.createuser(name, email, phone, dob, password, file);
  }

  // Update student details
  @Put('update/:id')
  async updateUser(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('phone') phone: number,
  ) {
    return this.studentService.updatename(id, name, email, phone);
  }

  // Delete a student
  @Delete('delete/:id')
  async deleteUser(@Param('id') id: number) {
    return this.studentService.deleteuser(id);
  }

  // Add a course to a student
  @Post('add-course')
//   @UseGuards(JwtAuthGuard) // Ensures only authenticated users can add a course
  async addCourse(@Body() createCourseDto: CreateCourseDto) {
    return this.studentService.addCourse(createCourseDto);
  }
}
