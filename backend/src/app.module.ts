import { Module } from '@nestjs/common';

import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { HodModule } from './hod/hod.module';
import { AttendenceModule } from './attendence/attendence.module';
import { AttendenceService } from './attendence/attendence.service';
import { CourseService } from './course/course.service';
import { DepartmentModule } from './department/department.module';
import { AdminModule } from './admin/admin.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { student } from './student/student.entity';
import { teacher } from './teacher/teacher.entity';
import { Admin } from 'typeorm';
import { Course } from './course/course.entity';
import { Department } from './department/department.entity';
@Module({
  
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'school',
      entities: [student,teacher,Admin,Course,Department],
      synchronize: true,
    }),StudentModule, TeacherModule, AdminModule, DepartmentModule, AttendenceModule, HodModule],
  controllers: [StudentController],
  providers: [ StudentService, CourseService, AttendenceService],
})
export class AppModule {}
