import { client } from "./graphql-request";

export async function fetchPlaceWithAllPhotos({
  placeId,
  userId,
}: {
  placeId: string;
  userId: string;
}): Promise<{
  place: {
    name: string;
    placePhotos: {
      pathname: string;
    }[];
  };
}> {
  const variables = { placeId, userId };
  const document = `
    query ($placeId: String!, $userId: String!) {
      place(id: $placeId, userId: $userId) {
        name
        placePhotos {
          pathname
        }
      }
    }
  `;

  return await client.request({ document, variables });
}
