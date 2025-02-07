import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { student } from './student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([student])],
  
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule {}
