import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewPlacePhotoInput {
  @Field()
  userId: string;

  @Field()
  placeId: string;
}
