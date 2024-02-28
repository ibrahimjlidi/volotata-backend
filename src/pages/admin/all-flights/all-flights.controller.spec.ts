import { Test, TestingModule } from '@nestjs/testing';
import { AllFlightsController } from './all-flights.controller';

describe('AllFlightsController', () => {
  let controller: AllFlightsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllFlightsController],
    }).compile();

    controller = module.get<AllFlightsController>(AllFlightsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
