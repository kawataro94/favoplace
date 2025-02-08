import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'placeThumbnail' })
export class PlaceThumbnail {
  @Field((type) => ID)
  id: string;

  @Field((type) => ID)
  placeId: string;

  @Field()
  pathname: string;
}
