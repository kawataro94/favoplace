export interface IPlacesRepository {
  findOneById: (id: string) => Promise<{
    id: string;
    name: string;
    description: string;
    visitCount: number;
    visitHistories: {
      id: string;
      date: string;
      placeId: string;
    }[];
  }>;
  findAll: ({ skip, take }: { skip: number; take: number }) => Promise<
    {
      id: string;
      name: string;
      description: string;
      visitCount: number;
      visitHistories: {
        id: string;
        date: string;
        placeId: string;
      }[];
    }[]
  >;
}
