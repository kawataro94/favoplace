import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload-minimal';
import { PlaceThumbnailService } from './place-thumbnails.service';
import { PlaceThumbnail } from './model/place-thumbnail.model';

@Resolver((of) => PlaceThumbnail)
export class PlaceThumbnailResolver {
  constructor(private readonly placeThumbnailService: PlaceThumbnailService) {}

  @Mutation((returns) => Boolean)
  async uploadPlaceThumbnail(
    @Args('id') id: string,
    @Args('userId') userId: string,
    @Args({ name: 'file', type: () => GraphQLUpload })
    file: FileUpload,
  ): Promise<boolean> {
    const { filename, mimetype, createReadStream } = file;
    return this.placeThumbnailService.upload({
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
