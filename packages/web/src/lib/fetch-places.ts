import { client } from "./graphql-client";

export async function fetchPlaces(): Promise<{
  places: {
    id: string;
    name: string;
    visitCount: number;
  }[];
}> {
  const document = `
    {
      places {
        id
        name
        visitCount
      }
    }
  `;

  return await client.request({ document });
}
