import { Module } from '@nestjs/common';
import { Admin2Service } from './admin2.service';
import { Admin2Controller } from './admin2.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adminfinal } from './Admin2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Adminfinal])],
  providers: [Admin2Service],
  controllers: [Admin2Controller]
})
export class Admin2Module {}
