import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { teacher } from './teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(teacher)
    private readonly teacherRepository: Repository<teacher>,
  ) {}

  async create(teacherData: Partial<teacher>) {
    const teacher = this.teacherRepository.create(teacherData);
    return await this.teacherRepository.save(teacher);
  }

  async findAll(){
    return await this.teacherRepository.find({ relations: ['department', 'courses'] });
  }

  async findOne(id: number){
    return await this.teacherRepository.findOne({
      where: { id },
      relations: ['department', 'courses'],
    });
  }

  async update(id: number, updateData: Partial<teacher>) {
    await this.teacherRepository.update(id, updateData);
    return this.findOne(id);
  }

  async delete(id: number) {
    await this.teacherRepository.delete(id);
  }
}
