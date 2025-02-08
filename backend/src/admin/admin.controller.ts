import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './admin.entity';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // ✅ Create a new admin
  @Post()
  async createAdmin(@Body() adminData: Partial<Admin>) {
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
  async updateAdmin(@Param('id') id: number, @Body() updateData: Partial<Admin>) {
    return this.adminService.updateAdmin(id, updateData);
  }

  // ✅ Delete admin
  @Delete(':id')
  async deleteAdmin(@Param('id') id: number) {
    return this.adminService.deleteAdmin(id);
  }
}
