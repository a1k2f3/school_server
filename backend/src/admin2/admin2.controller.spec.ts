import { Test, TestingModule } from '@nestjs/testing';
import { Admin2Controller } from './admin2.controller';

describe('Admin2Controller', () => {
  let controller: Admin2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Admin2Controller],
    }).compile();

    controller = module.get<Admin2Controller>(Admin2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
