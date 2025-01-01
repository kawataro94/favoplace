import { Module } from '@nestjs/common';
import { Prisma } from '@api/lib/prisma';
import { PlacesRepository } from '@api/domain/places/places.repository.prisma';
import { placesRepositoryToken } from '@api/domain/places/constants';
import { VisitHistoriesResolver } from './visit-histories.resolver';
import { VisitHistoriesService } from './visit-histories.service';
import { VisitHistoriesRepository } from './visit-histories.repository.prisma';
import { visitHistoriesRepositoryToken } from './constants';

@Module({
  providers: [
    VisitHistoriesResolver,
    VisitHistoriesService,
    {
      provide: visitHistoriesRepositoryToken,
      useClass: VisitHistoriesRepository,
    },
    {
      provide: placesRepositoryToken,
      useClass: PlacesRepository,
    },
    Prisma,
  ],
})
export class VisitHistoriesModule {}
