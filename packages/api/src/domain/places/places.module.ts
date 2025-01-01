import { Module } from '@nestjs/common';
import { Prisma } from '@api/lib/prisma';
import { PlacesResolver } from './places.resolver';
import { PlacesService } from './places.service';
import { PlacesRepository } from './places.repository.prisma';
import { placesRepositoryToken } from './constants';

@Module({
  providers: [
    PlacesResolver,
    PlacesService,
    {
      provide: placesRepositoryToken,
      useClass: PlacesRepository,
    },
    Prisma,
  ],
})
export class PlacesModule {}
