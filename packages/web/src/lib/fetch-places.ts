import { client } from "./graphql-client";

export async function fetchPlaces({ userId }: { userId: string }): Promise<{
  places: {
    id: string;
    name: string;
    visitCount: number;
  }[];
}> {
  const variables = { userId };
  const document = `
    query ($userId: String!) {
      places(userId: $userId) {
        id
        name
        visitCount
      }
    }
  `;

  return await client.request({ document, variables });
}
