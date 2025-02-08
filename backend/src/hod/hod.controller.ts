import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { HodService } from './hod.service';
import { HOD } from './hod.entity';

@Controller('hod')
export class HodController {
    constructor(private readonly HodService: HodService) {}

    @Post()
    async create(@Body() departmentData: Partial<HOD>){
      return await this.HodService.create(departmentData);
    }
  
    @Get()
    async findAll() {
      return await this.HodService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      return await this.HodService.findOne(id);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: number,
      @Body() updateData: Partial<HOD>,
    ) {
      return await this.HodService.update(id, updateData);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
      return await this.HodService.delete(id);
    }
}
