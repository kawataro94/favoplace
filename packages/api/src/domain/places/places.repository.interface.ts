export interface IPlacesRepository {
  findOneById: ({
    id,
    userId,
    isFavoritePhotoOnly,
  }: {
    id: string;
    userId: string;
    isFavoritePhotoOnly: boolean;
  }) => Promise<{
    id: string;
    userId: string;
    name: string;
    description: string;
    visitCount: number;
    visitHistories: {
      id: string;
      userId: string;
      date: Date;
      placeId: string;
    }[];
    placeThumbnails: {
      id: string;
      pathname: string;
      placeId: string;
    }[];
    placePhotos: {
      id: string;
      pathname: string;
      placeId: string;
      isFavorite: boolean;
    }[];
  }>;
  findAll: ({
    userId,
    skip,
    take,
  }: {
    userId: string;
    skip: number;
    take: number;
  }) => Promise<
    {
      id: string;
      userId: string;
      name: string;
      description: string;
      visitCount: number;
      visitHistories: {
        id: string;
        userId: string;
        date: Date;
        placeId: string;
      }[];
      placeThumbnails: {
        id: string;
        pathname: string;
        placeId: string;
      }[];
      placePhotos: {
        id: string;
        pathname: string;
        placeId: string;
        isFavorite: boolean;
      }[];
    }[]
  >;
  create: ({
    userId,
    name,
    description,
  }: {
    userId: string;
    name: string;
    description: string;
  }) => Promise<{
    id: string;
    userId: string;
    name: string;
    description: string;
    visitCount: number;
  }>;
  updateVisitCount: ({ id, userId, visitCount }) => Promise<{
    id: string;
    userId: string;
    name: string;
    description: string;
    visitCount: number;
  }>;
  remove: ({ id, userId }: { id: string; userId: string }) => Promise<boolean>;
}
