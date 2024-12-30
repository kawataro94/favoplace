import { Injectable, Inject } from '@nestjs/common';
import { Place, VisitHistory } from '@prisma/client';
import { NewPlaceInput } from './dto/new-place.input';
import { PlacesArgs } from './dto/places.args';
import { IPlacesRepository } from './places.repository.interface';
import { repositoryToken } from './constants';

@Injectable()
export class PlacesService {
  constructor(
    @Inject(repositoryToken) private readonly repository: IPlacesRepository,
  ) {}

  async create(data: NewPlaceInput): Promise<Place> {
    return {} as any;
  }

  async findOneById(
    id: string,
  ): Promise<Place & { visitHistories: VisitHistory[] }> {
    return this.repository.findOneById(id);
  }

  async findAll(
    placesArgs: PlacesArgs,
  ): Promise<(Place & { visitHistories: VisitHistory[] })[]> {
    return await this.repository.findAll(placesArgs);
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
