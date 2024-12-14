import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewPlaceInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  description?: string;
}
