import { client } from "./graphql-request";

export async function fetchPlace({
  placeId,
  userId,
}: {
  placeId: string;
  userId: string;
}): Promise<{
  place: {
    name: string;
    description: string;
    visitCount: number;
    visitHistories: { date: string }[];
    placePhotos: { pathname: string }[];
  };
}> {
  const variables = { placeId, userId, isFavoritePhotoOnly: true };
  const document = `
    query ($placeId: String!, $userId: String!, $isFavoritePhotoOnly: Boolean!) {
      place(id: $placeId, userId: $userId, isFavoritePhotoOnly: $isFavoritePhotoOnly) {
        name
        description
        visitCount
        visitHistories {
          date
        }
        placePhotos {
          pathname
        }
      }
    }
  `;

  return await client.request({ document, variables });
}
