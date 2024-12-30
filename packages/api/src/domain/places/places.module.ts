import { Module } from '@nestjs/common';
import { DateScalar } from '@api/common/scalars/date.scalar';
import { Prisma } from '@api/lib/prisma';
import { PlacesResolver } from './places.resolver';
import { PlacesService } from './places.service';
import { PlacesRepository } from './places.repository.prisma';
import { repositoryToken } from './constants';

@Module({
  providers: [
    PlacesResolver,
    PlacesService,
    {
      provide: repositoryToken,
      useClass: PlacesRepository,
    },
    Prisma,
    DateScalar,
  ],
})
export class PlacesModule {}
