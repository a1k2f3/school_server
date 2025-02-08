import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { student } from './student.entity';
@Injectable()
export class StudentService {
//   constructor(
//     @InjectRepository(student)
//     private readonly studentRepository: Repository<student>,
//   ) {}

//   async create(studentData: Partial<student>){
//     const student = this.studentRepository.create(studentData);
//     return await this.studentRepository.save(student);
//   }

//   async findAll() {
//     return await this.studentRepository.find({ relations: ['courses'] });
//   }

//   async findOne(id: number) {
//     return await this.studentRepository.findOne({
//       where: { id },
//       relations: ['courses'],
//     });
//   }

//   async update(id: number, updateData: Partial<student>) {
//     await this.studentRepository.update(id, updateData);
//     return this.findOne(id);
//   }

//   async delete(id: number) {
//     await this.studentRepository.delete(id);
//   }
}
