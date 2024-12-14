import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { PlacesResolver } from './places.resolver';
import { PlacesService } from './places.service';

@Module({
  providers: [PlacesResolver, PlacesService, DateScalar],
})
export class PlacesModule {}
