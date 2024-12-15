import { gql, request } from "graphql-request";

export async function fetchPlace({ placeId }: { placeId: string }): Promise<{
  place: {
    name: string;
    description: string;
    visitCount: number;
    visitHistories: { date: string }[];
  };
}> {
  const res = gql`
    {
      place(id: "${placeId}") {
        name
        description
        visitCount
        visitHistories {
          date
        }
      }
    }
  `;

  return await request("http://localhost:3000/graphql", res);
}
