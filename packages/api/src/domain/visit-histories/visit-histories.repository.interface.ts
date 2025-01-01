export interface IVisitHistoriesRepository {
  count: ({ placeId }: { placeId }) => Promise<number>;
  create: ({
    placeId,
    date,
  }: {
    placeId: string;
    date: string;
  }) => Promise<{ id: string; date: string; placeId: string }>;
}
