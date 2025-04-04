import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './department.entity';
import { teacher } from 'src/teacher/teacher.entity';
import { HOD } from 'src/hod/hod.entity';
import { Course } from 'src/course/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department,teacher,HOD,Course])],
  providers: [DepartmentService],
  controllers: [DepartmentController]
})
export class DepartmentModule {}
