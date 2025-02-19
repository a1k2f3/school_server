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
// import { Admin } from './a';
import { Admin } from './admin/admin.entity';
import { Course } from './course/course.entity';
import { Department } from './department/department.entity';
import { CourseController } from './course/course.controller';
import { HOD } from './hod/hod.entity';
import { CourseModule } from './course/course.module';
import { Attendance } from './attendence/Attendence.entity';

@Module({
  
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'school',
      entities: [student,teacher,Admin,Course,Department,HOD,Attendance],
      synchronize: false,
      migrations: ['src/migrations/*.ts'],
      migrationsRun: true, // ✅
    }),StudentModule, TeacherModule, AdminModule, DepartmentModule, AttendenceModule, HodModule, CourseModule],
  controllers: [StudentController, CourseController],
  providers: [ StudentService, CourseService, AttendenceService],
})
export class AppModule {}
