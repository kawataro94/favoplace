import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewVisitHistoryInput {
  @Field()
  placeId: string;

  @Field()
  date: string;
}
