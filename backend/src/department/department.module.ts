import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './department.entity';
import { teacher } from 'src/teacher/teacher.entity';
import { HOD } from 'src/hod/hod.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department,teacher,HOD])],
  
  providers: [DepartmentService],
  controllers: [DepartmentController]
})
export class DepartmentModule {}
