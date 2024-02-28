import { Test, TestingModule } from '@nestjs/testing';
import { AllFlightsService } from './all-flights.service';

describe('AllFlightsService', () => {
  let service: AllFlightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllFlightsService],
    }).compile();

    service = module.get<AllFlightsService>(AllFlightsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
