import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { teacher } from './teacher.entity';
@Module({
  imports: [TypeOrmModule.forFeature([teacher])],
  providers: [TeacherService],
  controllers: [TeacherController]
})
export class TeacherModule {}
