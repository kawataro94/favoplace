import { Injectable } from '@nestjs/common';
import { Prisma } from '@api/lib/prisma';
import { IPlacePhotosRepository } from './place-photos.repository.interface';

@Injectable()
export class PlacePhotosRepository implements IPlacePhotosRepository {
  constructor(private readonly prisma: Prisma) {}

  async create({ placeId, pathname }: { placeId: string; pathname: string }) {
    return await this.prisma.placePhoto.create({
      data: {
        placeId,
        pathname,
      },
    });
  }
}
