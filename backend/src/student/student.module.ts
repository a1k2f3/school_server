import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { student } from './student.entity';
import { StudentService } from './student.service';

@Module({
  // imports: [TypeOrmModule.forFeature([student])],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule {}
