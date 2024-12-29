import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { PlacesResolver } from './places.resolver';
import { PlacesService } from './places.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [PlacesResolver, PlacesService, PrismaService, DateScalar],
})
export class PlacesModule {}
