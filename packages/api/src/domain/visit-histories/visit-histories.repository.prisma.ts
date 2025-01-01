import { Injectable } from '@nestjs/common';
import { VisitHistory } from '@prisma/client';
import { Prisma } from '@api/lib/prisma';
import { IVisitHistoriesRepository } from './visit-histories.repository.interface';

@Injectable()
export class VisitHistoriesRepository implements IVisitHistoriesRepository {
  constructor(private readonly prisma: Prisma) {}

  async count({ placeId }: { placeId: string }): Promise<number> {
    return await this.prisma.visitHistory.count({
      where: { placeId },
    });
  }

  async create({
    placeId,
    date,
  }: {
    placeId: string;
    date: string;
  }): Promise<VisitHistory> {
    return await this.prisma.visitHistory.create({
      data: {
        placeId,
        date,
      },
    });
  }
}
