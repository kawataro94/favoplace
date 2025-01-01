import { Injectable, Inject } from '@nestjs/common';
import { IPlacesRepository } from '@api/domain/places/places.repository.interface';
import { placesRepositoryToken } from '@api/domain/places/constants';
import { NewVisitHistoryInput } from './dto/new-visit-history.input';
import { IVisitHistoriesRepository } from './visit-histories.repository.interface';
import { visitHistoriesRepositoryToken } from './constants';

type VisitHistory = {
  id: string;
  date: string;
  placeId: string;
};

@Injectable()
export class VisitHistoriesService {
  constructor(
    @Inject(visitHistoriesRepositoryToken)
    private readonly visitHistoriesRepository: IVisitHistoriesRepository,
    @Inject(placesRepositoryToken)
    private readonly placesRepository: IPlacesRepository,
  ) {}

  async create({ placeId, date }: NewVisitHistoryInput): Promise<VisitHistory> {
    const visitHistory = await this.visitHistoriesRepository.create({
      placeId,
      date,
    });

    const visitCount = await this.visitHistoriesRepository.count({ placeId });
    await this.placesRepository.updateVisitCount({ id: placeId, visitCount });

    return visitHistory;
  }
}
