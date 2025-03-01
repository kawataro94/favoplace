import { Injectable, Inject } from '@nestjs/common';
import { NewPlaceInput } from './dto/new-place.input';
import { PlacesArgs } from './dto/places.args';
import { IPlacesRepository } from './places.repository.interface';
import { placesRepositoryToken } from './constants';

type Place = {
  id: string;
  userId: string;
  name: string;
  description: string;
  visitCount: number;
  visitHistories: { id: string; userId: string; placeId: string; date: Date }[];
  placePhotos: {
    id: string;
    placeId: string;
    pathname: string;
    isFavorite: boolean;
    isThumbnail: boolean;
  }[];
};

@Injectable()
export class PlacesService {
  constructor(
    @Inject(placesRepositoryToken)
    private readonly repository: IPlacesRepository,
  ) {}

  async findOneById({
    id,
    userId,
    isFavoritePhotoOnly,
  }: {
    id: string;
    userId: string;
    isFavoritePhotoOnly?: boolean;
  }): Promise<Place> {
    return this.repository.findOneById({ id, userId, isFavoritePhotoOnly });
  }

  async findAll(placesArgs: PlacesArgs): Promise<Place[]> {
    return await this.repository.findAll(placesArgs);
  }

  async create({
    userId,
    name,
    description,
  }: NewPlaceInput): Promise<Omit<Place, 'visitHistories' | 'placePhotos'>> {
    return await this.repository.create({ userId, name, description });
  }

  async remove({ id, userId }): Promise<boolean> {
    return this.repository.remove({ id, userId });
  }
}
