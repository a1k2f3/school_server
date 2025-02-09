import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
// import { Admin2Service } from './admin.service';
import { Admin2Service } from './admin2.service';
// import { Adminfin } from './admin.entity';
import { Adminfinal } from './Admin2.entity';

@Controller('admin2')
export class Admin2Controller {
  constructor(private readonly adminService: Admin2Service) {}

  // ✅ Create a new admin
  @Post()
  async createAdmin(@Body() adminData: Partial<Adminfinal>) {
    return this.adminService.createAdmin(adminData);
  }

  // ✅ Get all admins
  @Get()
  async getAllAdmins() {
    return this.adminService.getAllAdmins();
  }

  // ✅ Get admin by ID
  @Get(':id')
  async getAdminById(@Param('id') id: number) {
    return this.adminService.getAdminById(id);
  }

  // ✅ Update admin details
  @Put(':id')
  async updateAdmin(@Param('id') id: number, @Body() updateData: Partial<Adminfinal>) {
    return this.adminService.updateAdmin(id, updateData);
  }

  // ✅ Delete admin
  @Delete(':id')
  async deleteAdmin(@Param('id') id: number) {
    return this.adminService.deleteAdmin(id);
  }
}
