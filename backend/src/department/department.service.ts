import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './department.entity';
import { teacher } from 'src/teacher/teacher.entity';
import { HOD } from 'src/hod/hod.entity';
import { Course } from 'src/course/course.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @InjectRepository(teacher)
    private readonly teacherRepository: Repository<teacher>,
    @InjectRepository(HOD)
    private readonly hodRepository: Repository<HOD>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>
) {}
  async create(departmentData: Partial<Department>): Promise<Department> {
    const department = this.departmentRepository.create(departmentData);
    return await this.departmentRepository.save(department);
  }

  async findAll(): Promise<Department[]> {
    return await this.departmentRepository.find({ relations: ['teacher', 'hod', 'courses'] });
  }

  async findOne(id: number): Promise<Department> {
    const department = await this.departmentRepository.findOne({ where: { id }, relations: ['teacher', 'hod', 'courses'] });
    if (!department) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    return department;
  }

  async update(id: number, updateData: Partial<Department>): Promise<Department> {
    await this.departmentRepository.update(id, updateData);
    return await this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    const result = await this.departmentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
  }
}
