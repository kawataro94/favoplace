import { Field, ID, ObjectType } from '@nestjs/graphql';
import { VisitHistory } from '@api/domain/visit-histories/model/visit-history.model';
import { PlaceThumbnail } from '@api/domain/place-thumbnails/model/place-thumbnail.model';
import { PlacePhoto } from '@api/domain/place-photos/model/place-photo.model';

@ObjectType({ description: 'place' })
export class Place {
  @Field((type) => ID)
  id: string;

  @Field((type) => ID)
  userId: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  visitCount: number;

  @Field(() => [VisitHistory])
  visitHistories: VisitHistory[];

  @Field(() => [PlaceThumbnail])
  placeThumbnails: PlaceThumbnail[];

  @Field(() => [PlacePhoto])
  placePhotos: PlacePhoto[];
}
