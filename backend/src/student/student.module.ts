import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { student } from './student.entity';
import { Department } from 'src/department/department.entity';
import { Course } from 'src/course/course.entity';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Assignment } from 'src/asgiment/asgiment.entity';
@Module({
  imports: [TypeOrmModule.forFeature([student, Department, Course,Assignment])], // ✅ Ensure all entities are here
  providers: [StudentService],
  controllers: [StudentController],
  exports: [StudentService],
})
export class StudentModule {}
