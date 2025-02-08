import { Injectable } from '@nestjs/common';
import { Prisma } from '@api/lib/prisma';
import { IPlaceThumbnailsRepository } from './place-thumbnails.repository.interface';

@Injectable()
export class PlaceThumbnailsRepository implements IPlaceThumbnailsRepository {
  constructor(private readonly prisma: Prisma) {}

  async create({ placeId, pathname }: { placeId: string; pathname: string }) {
    return await this.prisma.placeThumbnail.create({
      data: {
        placeId,
        pathname,
      },
    });
  }
}
