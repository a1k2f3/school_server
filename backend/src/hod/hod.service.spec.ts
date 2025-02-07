import { Test, TestingModule } from '@nestjs/testing';
import { HodService } from './hod.service';

describe('HodService', () => {
  let service: HodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HodService],
    }).compile();

    service = module.get<HodService>(HodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
