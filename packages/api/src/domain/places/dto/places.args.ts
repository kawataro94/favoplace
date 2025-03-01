import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@ArgsType()
export class PlacesArgs {
  @Field()
  userId: string;

  @Field({ nullable: true })
  isThumbnailPhotoOnly: boolean;
}
