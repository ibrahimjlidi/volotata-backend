// src/admin/city/city.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  async findAll(): Promise<City[]> {
    return this.cityRepository.find();
  }

//   async findOne(id: number): Promise<City> {
//     return this.cityRepository.findOne(id);
//   }

  async create(city: City): Promise<City> {
    return this.cityRepository.save(city);
  }

//   async update(id: number, city: City): Promise<City> {
//     await this.cityRepository.update(id, city);
//     return this.findOne(id);
//   }

  async remove(id: number): Promise<void> {
    await this.cityRepository.delete(id);
  }
}
