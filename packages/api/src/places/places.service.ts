import { Injectable } from '@nestjs/common';
import { Place, VisitHistory } from '@prisma/client';
import { NewPlaceInput } from './dto/new-place.input';
import { PlacesArgs } from './dto/places.args';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlacesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: NewPlaceInput): Promise<Place> {
    return {} as any;
  }

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

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
