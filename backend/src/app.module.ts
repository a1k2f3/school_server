import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_HOST, // ✅ Add this if using separate values
      port: 5432, // ✅ Ensure the port is correct
      username: process.env.DATABASE_USER, // ✅ Fixed variable name
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        family: 4, 
      },
      logging: ['error', 'schema'],
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    ,
    StudentModule,
    TeacherModule,
    AdminModule,
    DepartmentModule,
    AttendenceModule,
    HodModule,
    CourseModule,
    AsgimentModule,
    DbModule,
  ],
  controllers: [StudentController, CourseController],
  providers: [StudentService, CourseService, AttendenceService],
})
export class AppModule {}
