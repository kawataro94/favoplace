export interface IPlacePhotosRepository {
  create: ({
    placeId,
    pathname,
  }: {
    placeId: string;
    pathname: string;
  }) => Promise<{ id: string; placeId: string; pathname: string }>;
}
