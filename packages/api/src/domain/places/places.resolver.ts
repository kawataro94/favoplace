import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload-minimal';
import { PubSub } from 'graphql-subscriptions';
import { NewPlaceInput } from './dto/new-place.input';
import { PlacesArgs } from './dto/places.args';
import { PlacesService } from './places.service';
import { Place } from './model/place.model';

const pubSub = new PubSub();

@Resolver((of) => Place)
export class PlacesResolver {
  constructor(private readonly placesService: PlacesService) {}

  @Query((returns) => Place)
  async place(
    @Args('id') id: string,
    @Args('userId') userId: string,
  ): Promise<Place> {
    const place = await this.placesService.findOneById({ id, userId });
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
  ): Promise<Omit<Place, 'visitHistories'>> {
    const place = await this.placesService.create(newPlaceData);
    pubSub.publish('placeAdded', { placeAdded: place });
    return place;
  }

  @Mutation((returns) => Boolean)
  async removePlace(
    @Args('id') id: string,
    @Args('userId') userId: string,
  ): Promise<boolean> {
    return this.placesService.remove({ id, userId });
  }

  @Mutation((returns) => Boolean)
  async uploadPlaceThumbnail(
    @Args('id') id: string,
    @Args('userId') userId: string,
    @Args({ name: 'file', type: () => GraphQLUpload })
    file: FileUpload,
  ): Promise<boolean> {
    const { filename, mimetype, createReadStream } = file;
    return this.placesService.uploadThumbnail({
      id,
      userId,
      file: {
        filename,
        mimetype,
        createReadStream,
      },
    });
  }

  @Mutation((returns) => Boolean)
  async uploadPlacePhoto(
    @Args('id') id: string,
    @Args('userId') userId: string,
    @Args({ name: 'file', type: () => GraphQLUpload })
    file: FileUpload,
  ): Promise<boolean> {
    const { filename, mimetype, createReadStream } = file;
    return this.placesService.uploadPhoto({
      id,
      userId,
      file: {
        filename,
        mimetype,
        createReadStream,
      },
    });
  }

  @Subscription((returns) => Place)
  placeAdded() {
    return pubSub.asyncIterator('placeAdded');
  }
}
