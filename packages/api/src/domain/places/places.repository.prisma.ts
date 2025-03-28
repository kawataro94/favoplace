import { Injectable } from '@nestjs/common';
import { Place, VisitHistory, PlacePhoto } from '@prisma/client';
import { Prisma } from '@api/lib/prisma';
import { PlacesArgs } from './dto/places.args';
import { IPlacesRepository } from './places.repository.interface';

@Injectable()
export class PlacesRepository implements IPlacesRepository {
  constructor(private readonly prisma: Prisma) {}

  async findOneById({
    id,
    userId,
    isFavoritePhotoOnly,
  }: {
    id: string;
    userId: string;
    isFavoritePhotoOnly?: boolean;
  }): Promise<
    Place & {
      visitHistories: VisitHistory[];
      placePhotos: PlacePhoto[];
    }
  > {
    return this.prisma.place.findUnique({
      where: { id, userId },
      include: {
        visitHistories: true,
        placePhotos: {
          where: {
            isFavorite: isFavoritePhotoOnly || undefined,
          },
          orderBy: [{ id: 'desc' }],
        },
      },
    });
  }

  async findAll(placesArgs: PlacesArgs): Promise<
    (Place & {
      visitHistories: VisitHistory[];
      placePhotos: PlacePhoto[];
    })[]
  > {
    return await this.prisma.place.findMany({
      where: { userId: placesArgs.userId },
      orderBy: [{ visitCount: 'desc' }],
      include: {
        visitHistories: true,
        placePhotos: {
          where: { isThumbnail: placesArgs.isThumbnailPhotoOnly || undefined },
        },
      },
    });
  }

  async create({
    userId,
    name,
    description,
  }: {
    userId: string;
    name: string;
    description: string;
  }) {
    return await this.prisma.place.create({
      data: {
        userId,
        name,
        description,
        visitCount: 0,
      },
    });
  }

  async updateVisitCount({
    id,
    userId,
    visitCount,
  }: {
    id: string;
    userId: string;
    visitCount: number;
  }) {
    return await this.prisma.place.update({
      where: { id, userId },
      data: { visitCount },
    });
  }

  async remove({
    id,
    userId,
  }: {
    id: string;
    userId: string;
  }): Promise<boolean> {
    await this.prisma.place.delete({ where: { id, userId } });
    return true;
  }
}
