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
    placePhotos: {
      id: string;
      pathname: string;
      placeId: string;
      isFavorite: boolean;
      isThumbnail: boolean;
    }[];
  }>;
  findAll: ({
    userId,
    isThumbnailPhotoOnly,
  }: {
    userId: string;
    isThumbnailPhotoOnly?: boolean;
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
      placePhotos: {
        id: string;
        pathname: string;
        placeId: string;
        isFavorite: boolean;
        isThumbnail: boolean;
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
