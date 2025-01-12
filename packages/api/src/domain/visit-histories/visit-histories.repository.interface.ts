export interface IVisitHistoriesRepository {
  count: ({ placeId }: { placeId }) => Promise<number>;
  create: ({
    userId,
    placeId,
    date,
  }: {
    userId: string;
    placeId: string;
    date: Date;
  }) => Promise<{ id: string; userId: string; date: Date; placeId: string }>;
}
