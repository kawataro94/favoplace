export interface IPlacePhotosRepository {
  updateIsFavorite: ({
    placePhotoId,
    isFavorite,
  }: {
    placePhotoId: string;
    isFavorite: boolean;
  }) => Promise<{
    id: string;
    placeId: string;
    pathname: string;
    isFavorite: boolean;
    isThumbnail: boolean;
  }>;
  updateIsThumbnail: ({
    placePhotoId,
    isThumbnail,
  }: {
    placePhotoId: string;
    isThumbnail: boolean;
  }) => Promise<{
    id: string;
    placeId: string;
    pathname: string;
    isFavorite: boolean;
    isThumbnail: boolean;
  }>;
  create: ({
    placeId,
    pathname,
  }: {
    placeId: string;
    pathname: string;
  }) => Promise<{
    id: string;
    placeId: string;
    pathname: string;
    isFavorite: boolean;
    isThumbnail: boolean;
  }>;
}
