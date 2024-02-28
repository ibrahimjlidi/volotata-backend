import { Module } from '@nestjs/common';
import { AirportController } from './airport/airport.controller';
import { AllFlightsController } from './all-flights/all-flights.controller';
import { BookingsController } from './bookings/bookings.controller';
import { CityController } from './city/city.controller';
import { LayoutController } from './layout/layout.controller';
import { LoginController } from './login/login.controller';
import { NewFlightController } from './new-flight/new-flight.controller';
import { AirportService } from './airport/airport.service';
import { AllFlightsService } from './all-flights/all-flights.service';
import { BookingsService } from './bookings/bookings.service';
import { CityService } from './city/city.service';
import { LayoutService } from './layout/layout.service';
import { LoginService } from './login/login.service';
import { NewFlightService } from './new-flight/new-flight.service';
import { City } from './city/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([City]),],
  controllers: [AirportController, AllFlightsController, BookingsController, CityController, LayoutController, LoginController, NewFlightController],
  providers: [AirportService, AllFlightsService, BookingsService, CityService, LayoutService, LoginService, NewFlightService]
})
export class AdminModule {}
