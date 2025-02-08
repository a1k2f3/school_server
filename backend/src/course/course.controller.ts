import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}


  @Post()
  async createCourse(@Body() courseData: any) {
    return this.courseService.createCourse(courseData);
  }

 
  @Get()
  async getAllCourses() {
    return this.courseService.getAllCourses();
  }


  @Get(':id')
  async getCourseById(@Param('id') id: number) {
    return this.courseService.getCourseById(id);
  }

  @Put(':id')
  async updateCourse(@Param('id') id: number, @Body() updateData: any) {
    return this.courseService.updateCourse(id, updateData);
  }

  
  @Delete(':id')
  async deleteCourse(@Param('id') id: number) {
    return this.courseService.deleteCourse(id);
  }
}
