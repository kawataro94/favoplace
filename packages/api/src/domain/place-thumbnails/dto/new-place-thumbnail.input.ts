import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewPlaceThumbnailInput {
  @Field()
  placeId: string;

  @Field()
  pathname: string;
}
