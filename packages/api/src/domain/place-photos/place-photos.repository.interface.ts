export interface IPlacePhotosRepository {
  update: ({
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
  }>;
}
