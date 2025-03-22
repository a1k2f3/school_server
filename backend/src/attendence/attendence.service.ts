import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Attendance } from './Attendence.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AttendenceService {

    constructor(
        @InjectRepository(Attendance)
        private readonly AttendenceRepository: Repository<Attendance>,
      ) {}
    
      async create(Attendancedata: Partial<Attendance>) {
        const teacher = this.AttendenceRepository.create(Attendancedata);
        return await this.AttendenceRepository.save(teacher);
      }
    
      async findAllteacher_Attendence(){
        return await this.AttendenceRepository.find({ relations: ['teacher' ] });
      }
      async findAllStudent_Attendence(){
        return await this.AttendenceRepository.find({ relations: ['student' ] });
      }
      async findOne_teacher(id: number){
        return await this.AttendenceRepository.findOne({
          where: { id },
          relations: ['teacher'],
        });
        
      }
      
      async updateteacherAttendence(id: number, updateData: Partial<Attendance>) {
        await this.AttendenceRepository.update(id, updateData);
        return this.findOne_teacher(id);
      }
      async updateStudentAttendence(id: number, updateData: Partial<Attendance>) {
        await this.AttendenceRepository.update(id, updateData);
        return this.findOne_teacher(id);
      }
    
      async findOne_student(id: number){
        return await this.AttendenceRepository.findOne({
          where: { id },
          relations: ['teacher'],
        });}

      async delete(id: number) {
        await this.AttendenceRepository.delete(id);
      }
}
