import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';
import { DateScalar } from './common/scalars/date.scalar';
import { PlacePhotosModule } from './domain/place-photos/place-photos.module';
import { PlacesModule } from './domain/places/places.module';
import { VisitHistoriesModule } from './domain/visit-histories/visit-histories.module';

@Module({
  imports: [
    PlacePhotosModule,
    PlacesModule,
    VisitHistoriesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
  ],
  providers: [DateScalar],
})
export class AppModule {}
