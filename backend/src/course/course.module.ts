import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { teacher } from 'src/teacher/teacher.entity';
import { Department } from 'src/department/department.entity';
import { student } from 'src/student/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course,teacher,Department,student])],
  exports: [TypeOrmModule], // Export TypeOrmModule so CourseRepository is available
})
export class CourseModule {}
