import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { NewVisitHistoryInput } from './dto/new-visit-history.input';
import { VisitHistoriesService } from './visit-histories.service';
import { VisitHistory } from './model/visit-history.model';

@Resolver((of) => VisitHistory)
export class VisitHistoriesResolver {
  constructor(private readonly visitHistoriesService: VisitHistoriesService) {}

  @Mutation((returns) => VisitHistory)
  async addVisitHistory(
    @Args('newVisitHistoryData') newVisitHistoryData: NewVisitHistoryInput,
  ): Promise<VisitHistory> {
    return await this.visitHistoriesService.create(newVisitHistoryData);
  }
}
