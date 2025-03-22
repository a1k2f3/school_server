import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { student } from "./student.entity";
import { Repository } from "typeorm";
import { Department } from "src/department/department.entity";
import { Course } from "src/course/course.entity";
import { Assignment } from "src/asgiment/asgiment.entity";

@Injectable()
export class StudentService {
  
    constructor(
        @InjectRepository(student)
        private readonly studentRepository: Repository<student>,
        @InjectRepository(Department)
        private readonly departmentRepository: Repository<Department>,
        @InjectRepository(Course)
        private readonly  courseRepository: Repository<Course>,
        @InjectRepository(Assignment ) private  readonly assignmentRepo: Repository<Assignment>,
      ) {}   
      async create(studentdata: Partial<student>) {    
        const student = this.studentRepository.create(studentdata);
        return await this.studentRepository.save(student);
      }
      async assignAssignmentToStudent(studentId: number, assignmentId: number) {
        const student = await this.studentRepository.findOne({ where: { id: studentId }, relations: ['asgiments'] });
        const assignment = await this.assignmentRepo.findOne({ where: { id: assignmentId } });
        if (!student || !assignment) throw new NotFoundException('Student or Assignment not found');
        student.asgiments.push(assignment);
        return this.studentRepository.save(student);
      }
      async createAssignment(asgimnetdata:Partial<Assignment>){
        const assignment = this.assignmentRepo.create(asgimnetdata);
        return this.assignmentRepo.save(assignment);
      } 
      async findAll(){
        return await this.studentRepository.find({ relations: ['department', 'courses'] });
      }   
      async findOne(id: number){
        return await this.studentRepository.findOne({
          where: { id },
          relations: ['department', 'courses'],
        });
      }   
      async update(id: number, updateData: Partial<student>) {
        await this.studentRepository.update(id, updateData);
        return this.findOne(id);
      }    
      async delete(id: number) {
        await this.studentRepository.delete(id);
      }
}
