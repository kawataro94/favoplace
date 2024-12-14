import { gql, request } from "graphql-request";

export async function fetchPlaces(): Promise<{
  places: {
    id: string;
    name: string;
    visitCount: number;
  }[];
}> {
  const res = gql`
    {
      places {
        id
        name
        visitCount
      }
    }
  `;
  return await request("http://localhost:3000/graphql", res);
}
