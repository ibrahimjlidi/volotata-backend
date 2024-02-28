import { Module } from '@nestjs/common';
import { BookFlightController } from './book-flight/book-flight.controller';
import { MyBookingsController } from './my-bookings/my-bookings.controller';
import { SearchController } from './search/search.controller';
import { BookFlightService } from './book-flight/book-flight.service';
import { MyBookingsService } from './my-bookings/my-bookings.service';
import { SearchService } from './search/search.service';

@Module({
  controllers: [BookFlightController, MyBookingsController, SearchController],
  providers: [BookFlightService, MyBookingsService, SearchService]
})
export class WebsiteModule {}
