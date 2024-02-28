import { Test, TestingModule } from '@nestjs/testing';
import { MyBookingsController } from './my-bookings.controller';

describe('MyBookingsController', () => {
  let controller: MyBookingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyBookingsController],
    }).compile();

    controller = module.get<MyBookingsController>(MyBookingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
