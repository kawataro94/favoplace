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
    userId,
    placeId,
    date,
  }: {
    userId: string;
    placeId: string;
    date: Date;
  }): Promise<VisitHistory> {
    return await this.prisma.visitHistory.create({
      data: {
        userId,
        placeId,
        date,
      },
    });
  }
}
