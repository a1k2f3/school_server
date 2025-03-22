import { Module } from '@nestjs/common';
import { AsgimentService } from './asgiment.service';
import { AsgimentController } from './asgiment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assignment } from './asgiment.entity';
import { student } from 'src/student/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Assignment,student])],
  providers: [AsgimentService],
  controllers: [AsgimentController]
  ,exports: [AsgimentService, TypeOrmModule],
})
export class AsgimentModule {}
