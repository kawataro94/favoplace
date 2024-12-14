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
}
