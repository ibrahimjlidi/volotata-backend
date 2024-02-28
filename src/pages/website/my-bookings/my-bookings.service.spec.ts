import { Test, TestingModule } from '@nestjs/testing';
import { MyBookingsService } from './my-bookings.service';

describe('MyBookingsService', () => {
  let service: MyBookingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyBookingsService],
    }).compile();

    service = module.get<MyBookingsService>(MyBookingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
