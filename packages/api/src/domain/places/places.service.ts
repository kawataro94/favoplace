import { Injectable, Inject } from '@nestjs/common';
import { NewPlaceInput } from './dto/new-place.input';
import { PlacesArgs } from './dto/places.args';
import { IPlacesRepository } from './places.repository.interface';
import { repositoryToken } from './constants';

type Place = {
  id: string;
  name: string;
  description: string;
  visitCount: number;
  visitHistories: { date: string }[];
};

@Injectable()
export class PlacesService {
  constructor(
    @Inject(repositoryToken) private readonly repository: IPlacesRepository,
  ) {}

  async findOneById(id: string): Promise<Place> {
    return this.repository.findOneById(id);
  }

  async findAll(placesArgs: PlacesArgs): Promise<Place[]> {
    return await this.repository.findAll(placesArgs);
  }

  async create({
    name,
    description,
  }: NewPlaceInput): Promise<Omit<Place, 'visitHistories'>> {
    return await this.repository.create({ name, description });
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
