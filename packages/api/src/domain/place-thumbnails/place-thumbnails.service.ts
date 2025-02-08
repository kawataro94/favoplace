import { ReadStream } from 'node:fs';
import { Inject, Injectable } from '@nestjs/common';
import { upload } from './place-thumbnails.repository.r2';
import { placeThumbnailsRepositoryToken } from './constants';
import { IPlaceThumbnailsRepository } from './place-thumbnails.repository.interface';

@Injectable()
export class PlaceThumbnailService {
  constructor(
    @Inject(placeThumbnailsRepositoryToken)
    private readonly repository: IPlaceThumbnailsRepository,
  ) {}

  async create({
    userId,
    placeId,
    file,
  }: {
    userId: string;
    placeId: string;
    file: {
      filename: string;
      mimetype: string;
      createReadStream: () => ReadStream;
    };
  }): Promise<{
    id: string;
    placeId: string;
    pathname: string;
  }> {
    const { pathname } = await upload({ placeId, userId, file });
    return this.repository.create({ placeId: placeId, pathname });
  }
}
