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
  create: ({
    name,
    description,
  }: {
    name: string;
    description: string;
  }) => Promise<{
    id: string;
    name: string;
    description: string;
    visitCount: number;
  }>;
  updateVisitCount: ({ id, visitCount }) => Promise<{
    id: string;
    name: string;
    description: string;
    visitCount: number;
  }>;
  remove: (id: string) => Promise<boolean>;
}
