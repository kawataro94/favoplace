import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload-minimal';
import { PlacePhotosService } from './place-photos.service';
import { PlacePhoto } from './model/place-photo.model';

@Resolver((of) => PlacePhoto)
export class PlacePhotosResolver {
  constructor(private readonly placePhotosService: PlacePhotosService) {}

  @Mutation((returns) => Boolean)
  async uploadPlacePhoto(
    @Args('id') id: string,
    @Args('userId') userId: string,
    @Args({ name: 'file', type: () => GraphQLUpload })
    file: FileUpload,
  ): Promise<boolean> {
    const { filename, mimetype, createReadStream } = file;
    return this.placePhotosService.upload({
      id,
      userId,
      file: {
        filename,
        mimetype,
        createReadStream,
      },
    });
  }
}
