import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload-minimal';
import { PlaceThumbnailService } from './place-thumbnails.service';
import { PlaceThumbnail } from './model/place-thumbnail.model';

@Resolver((of) => PlaceThumbnail)
export class PlaceThumbnailResolver {
  constructor(private readonly placeThumbnailService: PlaceThumbnailService) {}

  @Mutation((returns) => PlaceThumbnail)
  async uploadPlaceThumbnail(
    @Args('userId') userId: string,
    @Args('placeId') placeId: string,
    @Args({ name: 'file', type: () => GraphQLUpload })
    file: FileUpload,
  ): Promise<PlaceThumbnail> {
    const { filename, mimetype, createReadStream } = file;
    return this.placeThumbnailService.create({
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
