import { Module } from '@nestjs/common';
import { PlaceThumbnailResolver } from './place-thumbnails.resolver';
import { PlaceThumbnailService } from './place-thumbnails.service';

@Module({
  providers: [PlaceThumbnailResolver, PlaceThumbnailService],
})
export class PlaceThumbnailsModule {}
