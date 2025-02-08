import { Injectable, NotFoundException } from '@nestjs/common';
import { HOD } from './hod.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from 'src/department/department.entity';

@Injectable()
export class HodService {
    constructor(
      
        @InjectRepository(Department)
        private readonly departmentRepository: Repository<Department>,
        @InjectRepository(HOD)
        private readonly hodRepository: Repository<HOD>
      
    ) {}
    
      async create(hodData: Partial<HOD>) {
        const hod = this.hodRepository.create(hodData);
        return await this.hodRepository.save(hod);
      }
    
      async findAll() {
        return await this.hodRepository.find({ relations: ['department'] });
      }
    
      async findOne(id: number) {
        const hod = await this.hodRepository.findOne({ where: { id }, relations: ['department'] });
        if (!hod) {
          throw new NotFoundException(`Department with ID ${id} not found`);
        }
        return hod;
      }
    
      async update(id: number, updateData: Partial<HOD>){
        await this.hodRepository.update(id, updateData);
        return await this.findOne(id);
      }
    
      async delete(id: number){
        const result = await this.hodRepository.delete(id);
        if (result.affected === 0) {
          throw new NotFoundException(`Department with ID ${id} not found`);
        }
      }
    
}
