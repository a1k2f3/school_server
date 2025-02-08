import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Department } from './department.entity';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  async create(@Body() departmentData: Partial<Department>): Promise<Department> {
    return await this.departmentService.create(departmentData);
  }

  @Get()
  async findAll(): Promise<Department[]> {
    return await this.departmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Department> {
    return await this.departmentService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateData: Partial<Department>,
  ): Promise<Department> {
    return await this.departmentService.update(id, updateData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.departmentService.delete(id);
  }
}
