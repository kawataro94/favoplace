import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'place' })
export class Place {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  visitCount: number;

  @Field(() => [VisitHistory])
  visitHistories: VisitHistory[];
}

@ObjectType({ description: 'visitHistory' })
class VisitHistory {
  @Field()
  date: Date;
}
