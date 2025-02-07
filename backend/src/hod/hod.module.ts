import { Module } from '@nestjs/common';
import { HodService } from './hod.service';
import { HodController } from './hod.controller';

@Module({
  providers: [HodService],
  controllers: [HodController]
})
export class HodModule {}
