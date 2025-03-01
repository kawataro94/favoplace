import { Injectable } from '@nestjs/common';
import { Prisma } from '@api/lib/prisma';
import { IPlacePhotosRepository } from './place-photos.repository.interface';

@Injectable()
export class PlacePhotosRepository implements IPlacePhotosRepository {
  constructor(private readonly prisma: Prisma) {}

  async updateIsFavorite({
    placePhotoId,
    isFavorite,
  }: {
    placePhotoId: string;
    isFavorite: boolean;
  }) {
    return await this.prisma.placePhoto.update({
      where: { id: placePhotoId },
      data: {
        isFavorite,
      },
    });
  }

  async updateIsThumbnail({
    placePhotoId,
    isThumbnail,
  }: {
    placePhotoId: string;
    isThumbnail: boolean;
  }) {
    await this.prisma.placePhoto.updateMany({
      where: { isThumbnail: true },
      data: { isThumbnail: false },
    });

    return await this.prisma.placePhoto.update({
      where: { id: placePhotoId },
      data: {
        isThumbnail,
      },
    });
  }

  async create({ placeId, pathname }: { placeId: string; pathname: string }) {
    return await this.prisma.placePhoto.create({
      data: {
        placeId,
        pathname,
        isFavorite: false,
        isThumbnail: false,
      },
    });
  }
}
