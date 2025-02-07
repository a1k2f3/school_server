import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  exports: [TypeOrmModule], // Export TypeOrmModule so CourseRepository is available
})
export class CourseModule {}
