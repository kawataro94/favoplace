import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewVisitHistoryInput {
  @Field()
  userId: string;

  @Field()
  placeId: string;

  @Field()
  date: Date;
}
