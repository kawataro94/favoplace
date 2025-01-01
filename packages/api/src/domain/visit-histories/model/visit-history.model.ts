import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'visitHistory' })
export class VisitHistory {
  @Field((type) => ID)
  id: string;

  @Field((type) => ID)
  placeId: string;

  @Field()
  date: string;
}
