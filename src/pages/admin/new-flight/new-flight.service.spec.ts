import { Test, TestingModule } from '@nestjs/testing';
import { NewFlightService } from './new-flight.service';

describe('NewFlightService', () => {
  let service: NewFlightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewFlightService],
    }).compile();

    service = module.get<NewFlightService>(NewFlightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
