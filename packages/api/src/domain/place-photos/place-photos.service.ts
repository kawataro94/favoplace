import { ReadStream } from 'node:fs';
import { Inject, Injectable } from '@nestjs/common';
import { upload } from './place-photos.repository.r2';
import { placePhotosRepositoryToken } from './constants';
import { IPlacePhotosRepository } from './place-photos.repository.interface';
import { NewPlacePhotoInput } from './dto/new-place-photo.input';

@Injectable()
export class PlacePhotosService {
  constructor(
    @Inject(placePhotosRepositoryToken)
    private readonly repository: IPlacePhotosRepository,
  ) {}

  async updateFavorite({
    placePhotoId,
    isFavorite,
  }: {
    placePhotoId: string;
    isFavorite: boolean;
  }): Promise<{
    id: string;
    placeId: string;
    pathname: string;
    isFavorite: boolean;
  }> {
    return this.repository.update({ placePhotoId, isFavorite });
  }

  async create({
    userId,
    placeId,
    file,
  }: NewPlacePhotoInput & {
    file: {
      filename: string;
      mimetype: string;
      createReadStream: () => ReadStream;
    };
  }): Promise<{
    id: string;
    placeId: string;
    pathname: string;
    isFavorite: boolean;
  }> {
    const { pathname } = await upload({ placeId, userId, file });
    return this.repository.create({ placeId, pathname });
  }
}
