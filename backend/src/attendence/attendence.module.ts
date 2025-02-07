import { Module } from '@nestjs/common';
import { AttendenceService } from './attendence.service';
import { AttendenceController } from './attendence.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendance } from './Attendence.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attendance])],
  
  providers: [AttendenceService],
  controllers: [AttendenceController]
})
export class AttendenceModule {}
