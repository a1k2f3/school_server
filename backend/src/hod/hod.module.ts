import { Module } from '@nestjs/common';
import { HodService } from './hod.service';
import { HodController } from './hod.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HOD } from './hod.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HOD])],
  
  providers: [HodService],
  controllers: [HodController]
})
export class HodModule {}
