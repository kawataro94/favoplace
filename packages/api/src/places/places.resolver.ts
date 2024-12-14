import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { NewPlaceInput } from './dto/new-place.input';
import { PlacesArgs } from './dto/places.args';
import { Place } from './models/place.model';
import { PlacesService } from './places.service';

const pubSub = new PubSub();

@Resolver((of) => Place)
export class PlacesResolver {
  constructor(private readonly placesService: PlacesService) {}

  @Query((returns) => Place)
  async place(@Args('id') id: string): Promise<Place> {
    const place = await this.placesService.findOneById(id);
    if (!place) {
      throw new NotFoundException(id);
    }
    return place;
  }

  @Query((returns) => [Place])
  places(@Args() placesArgs: PlacesArgs): Promise<Place[]> {
    return this.placesService.findAll(placesArgs);
  }

  @Mutation((returns) => Place)
  async addPlace(
    @Args('newPlaceData') newPlaceData: NewPlaceInput,
  ): Promise<Place> {
    const place = await this.placesService.create(newPlaceData);
    pubSub.publish('placeAdded', { placeAdded: place });
    return place;
  }

  @Mutation((returns) => Boolean)
  async removePlace(@Args('id') id: string) {
    return this.placesService.remove(id);
  }

  @Subscription((returns) => Place)
  placeAdded() {
    return pubSub.asyncIterator('placeAdded');
  }
}
