import { Module } from '@nestjs/common';
import { Prisma } from '@api/lib/prisma';
import { PlaceThumbnailResolver } from './place-thumbnails.resolver';
import { PlaceThumbnailService } from './place-thumbnails.service';
import { PlaceThumbnailsRepository } from './place-thumbnails.repository.prisma';
import { placeThumbnailsRepositoryToken } from './constants';

@Module({
  providers: [
    PlaceThumbnailResolver,
    PlaceThumbnailService,
    {
      provide: placeThumbnailsRepositoryToken,
      useClass: PlaceThumbnailsRepository,
    },
    Prisma,
  ],
})
export class PlaceThumbnailsModule {}
