import { client } from "./graphql-request";

export async function fetchPlaces({ userId }: { userId: string }): Promise<{
  places: {
    id: string;
    name: string;
    visitCount: number;
    placeThumbnails: { pathname: string }[];
  }[];
}> {
  const variables = { userId };
  const document = `
    query ($userId: String!) {
      places(userId: $userId) {
        id
        name
        visitCount
        placeThumbnails {
          pathname
        }
      }
    }
  `;

  return await client.request({ document, variables });
}
