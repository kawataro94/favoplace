import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'placePhoto' })
export class PlacePhoto {
  @Field((type) => ID)
  id: string;

  @Field((type) => ID)
  placeId: string;

  @Field()
  pathname: string;
}
