import { ReadStream } from 'node:fs';
import { Injectable, Inject } from '@nestjs/common';
import { NewPlaceInput } from './dto/new-place.input';
import { PlacesArgs } from './dto/places.args';
import { IPlacesRepository } from './places.repository.interface';
import { uploadThumbnail } from './places.repository.r2';
import { placesRepositoryToken } from './constants';

type Place = {
  id: string;
  userId: string;
  name: string;
  description: string;
  visitCount: number;
  visitHistories: { id: string; userId: string; placeId: string; date: Date }[];
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
  }: {
    id: string;
    userId: string;
  }): Promise<Place> {
    return this.repository.findOneById({ id, userId });
  }

  async findAll(placesArgs: PlacesArgs): Promise<Place[]> {
    return await this.repository.findAll(placesArgs);
  }

  async create({
    userId,
    name,
    description,
  }: NewPlaceInput): Promise<Omit<Place, 'visitHistories'>> {
    return await this.repository.create({ userId, name, description });
  }

  async remove({ id, userId }): Promise<boolean> {
    return this.repository.remove({ id, userId });
  }

  async uploadThumbnail({
    id,
    userId,
    file,
  }: {
    id: string;
    userId: string;
    file: {
      filename: string;
      mimetype: string;
      createReadStream: () => ReadStream;
    };
  }): Promise<boolean> {
    return uploadThumbnail({ id, userId, file });
  }
}
