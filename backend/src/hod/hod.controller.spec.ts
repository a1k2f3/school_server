import { Test, TestingModule } from '@nestjs/testing';
import { HodController } from './hod.controller';

describe('HodController', () => {
  let controller: HodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HodController],
    }).compile();

    controller = module.get<HodController>(HodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
