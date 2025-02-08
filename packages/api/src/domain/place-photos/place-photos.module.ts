import { Module } from '@nestjs/common';
import { PlacePhotosResolver } from './place-photos.resolver';
import { PlacePhotosService } from './place-photos.service';

@Module({
  providers: [PlacePhotosResolver, PlacePhotosService],
})
export class PlacePhotosModule {}
