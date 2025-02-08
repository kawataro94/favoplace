import { Module } from '@nestjs/common';
import { Prisma } from '@api/lib/prisma';
import { PlacePhotosResolver } from './place-photos.resolver';
import { PlacePhotosService } from './place-photos.service';
import { placePhotosRepositoryToken } from './constants';
import { PlacePhotosRepository } from './place-photos.repository.prisma';

@Module({
  providers: [
    PlacePhotosResolver,
    PlacePhotosService,
    {
      provide: placePhotosRepositoryToken,
      useClass: PlacePhotosRepository,
    },
    Prisma,
  ],
})
export class PlacePhotosModule {}
