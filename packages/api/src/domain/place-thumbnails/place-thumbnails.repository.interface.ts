export interface IPlaceThumbnailsRepository {
  create: ({
    placeId,
    pathname,
  }: {
    placeId: string;
    pathname: string;
  }) => Promise<{ id: string; placeId: string; pathname: string }>;
}
