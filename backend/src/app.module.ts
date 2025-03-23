import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { AdminModule } from './admin/admin.module';
import { DepartmentModule } from './department/department.module';
import { AttendenceModule } from './attendence/attendence.module';
import { HodModule } from './hod/hod.module';
import { CourseModule } from './course/course.module';
import { AsgimentModule } from './asgiment/asgiment.module';
import { DbModule } from './db/db.module';

// Entities
import { student } from './student/student.entity';
import { teacher } from './teacher/teacher.entity';
import { Admin } from './admin/admin.entity';
import { Course } from './course/course.entity';
import { Department } from './department/department.entity';
import { HOD } from './hod/hod.entity';
import { Attendance } from './attendence/Attendence.entity';
import { Assignment } from './asgiment/asgiment.entity';

// Controllers & Services
import { StudentController } from './student/student.controller';
import { CourseController } from './course/course.controller';
import { StudentService } from './student/student.service';
import { CourseService } from './course/course.service';
import { AttendenceService } from './attendence/attendence.service';

// Load environment variables
import { config } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: false,
      ssl: { rejectUnauthorized: false },
    }),
    StudentModule,
    TeacherModule,
    AdminModule,
    DepartmentModule,
    AttendenceModule,  // ✅ Fixed
    HodModule,
    CourseModule,
    AsgimentModule,  // ✅ Fixed

  ],
  controllers: [StudentController, CourseController],
  providers: [StudentService, CourseService, AttendenceService],
})
export class AppModule {}



