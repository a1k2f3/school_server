import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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

@Module({
  imports: [StudentModule, TeacherModule, AdminModule, DepartmentModule, AttendenceModule, HodModule],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService, CourseService, AttendenceService],
})
export class AppModule {}
