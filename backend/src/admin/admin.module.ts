import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin.entity';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])], // ✅ Register Admin entity
  providers: [AdminService],
  controllers: [AdminController],
  exports: [TypeOrmModule], // Export for use in other modules
})
export class AdminModule {}
