export interface IVisitHistoriesRepository {
  count: ({ placeId }: { placeId }) => Promise<number>;
  create: ({
    placeId,
    date,
  }: {
    placeId: string;
    date: Date;
  }) => Promise<{ id: string; date: Date; placeId: string }>;
}
