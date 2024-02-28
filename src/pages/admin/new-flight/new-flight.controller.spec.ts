import { Test, TestingModule } from '@nestjs/testing';
import { NewFlightController } from './new-flight.controller';

describe('NewFlightController', () => {
  let controller: NewFlightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewFlightController],
    }).compile();

    controller = module.get<NewFlightController>(NewFlightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
