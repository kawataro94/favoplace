import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload-minimal';
import { PlacePhotosService } from './place-photos.service';
import { PlacePhoto } from './model/place-photo.model';

@Resolver((of) => PlacePhoto)
export class PlacePhotosResolver {
  constructor(private readonly placePhotosService: PlacePhotosService) {}

  @Mutation((returns) => PlacePhoto)
  async updatePlacePhotoFavorite(
    @Args('placePhotoId') placePhotoId: string,
    @Args('isFavorite') isFavorite: boolean,
  ): Promise<PlacePhoto> {
    return this.placePhotosService.updateFavorite({
      placePhotoId,
      isFavorite,
    });
  }

  @Mutation((returns) => PlacePhoto)
  async uploadPlacePhoto(
    @Args('userId') userId: string,
    @Args('placeId') placeId: string,
    @Args({ name: 'file', type: () => GraphQLUpload })
    file: FileUpload,
  ): Promise<PlacePhoto> {
    const { filename, mimetype, createReadStream } = file;
    return this.placePhotosService.create({
      userId,
      placeId,
      file: {
        filename,
        mimetype,
        createReadStream,
      },
    });
  }
}
