import { Injectable } from '@nestjs/common';
import { Place, VisitHistory } from '@prisma/client';
import { Prisma } from '@api/lib/prisma';
import { PlacesArgs } from './dto/places.args';
import { IPlacesRepository } from './places.repository.interface';

@Injectable()
export class PlacesRepository implements IPlacesRepository {
  constructor(private readonly prisma: Prisma) {}

  async findOneById(
    id: string,
  ): Promise<Place & { visitHistories: VisitHistory[] }> {
    return this.prisma.place.findUnique({
      where: { id },
      include: { visitHistories: true },
    });
  }

  async findAll(
    placesArgs: PlacesArgs,
  ): Promise<(Place & { visitHistories: VisitHistory[] })[]> {
    return await this.prisma.place.findMany({
      include: { visitHistories: true },
    });
  }

  async create({ name, description }: { name: string; description: string }) {
    return await this.prisma.place.create({
      data: {
        name,
        description,
        visitCount: 0,
      },
    });
  }
}
