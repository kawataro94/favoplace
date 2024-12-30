import { Field, InputType } from '@nestjs/graphql';
import { Length, MaxLength } from 'class-validator';

@InputType()
export class NewPlaceInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field({ nullable: true })
  @Length(0, 255)
  description: string = '';
}
