import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Admin } from './admin.entity';
import { Adminfinal } from './Admin2.entity';
@Injectable()
export class Admin2Service {
  constructor(
    @InjectRepository(Adminfinal)
    private readonly adminRepository: Repository<Adminfinal>
  ) {}
  async createAdmin(adminData: Partial<Adminfinal>) {
    const admin = this.adminRepository.create(adminData);
    return this.adminRepository.save(admin);
  }
  async getAllAdmins() {
    return this.adminRepository.find();
  }
  async getAdminById(id: number) {
    const admin = await this.adminRepository.findOne({ where: { id } });
    if (!admin) throw new NotFoundException('Admin not found');
    return admin;
  }
  async updateAdmin(id: number, updateData: Partial<Adminfinal>) {
    const admin = await this.getAdminById(id);
    Object.assign(admin, updateData);
    return this.adminRepository.save(admin);
  }

  // ✅ Delete admin
  async deleteAdmin(id: number) {
    const admin = await this.getAdminById(id);
    await this.adminRepository.remove(admin);
    return { message: 'Admin deleted successfully' };
  }
}
