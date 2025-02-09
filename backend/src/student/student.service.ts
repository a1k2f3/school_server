import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { student } from "./student.entity";
import { Repository } from "typeorm";
import { Department } from "src/department/department.entity";
import { Course } from "src/course/course.entity";

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(student)
        private readonly studentRepository: Repository<student>,
        @InjectRepository(Department)
        private readonly departmentRepository: Repository<Department>,
        @InjectRepository(Course)
        private readonly  courseRepository: Repository<Course>,
      ) {}
    
      async create(studentdata: Partial<student>) {
        // const departmnet=
        const student = this.studentRepository.create(studentdata);
        return await this.studentRepository.save(student);
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
