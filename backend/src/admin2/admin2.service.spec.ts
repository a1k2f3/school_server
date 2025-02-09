import { Test, TestingModule } from '@nestjs/testing';
import { Admin2Service } from './admin2.service';

describe('Admin2Service', () => {
  let service: Admin2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Admin2Service],
    }).compile();

    service = module.get<Admin2Service>(Admin2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
