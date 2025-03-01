import { client } from "./graphql-request";

export async function fetchPlaces({
  userId,
  isThumbnailPhotoOnly,
}: {
  userId: string;
  isThumbnailPhotoOnly?: boolean;
}): Promise<{
  places: {
    id: string;
    name: string;
    visitCount: number;
    placePhotos: { pathname: string }[];
  }[];
}> {
  const variables = { userId, isThumbnailPhotoOnly };
  const document = `
    query ($userId: String!, $isThumbnailPhotoOnly: Boolean) {
      places(userId: $userId, isThumbnailPhotoOnly: $isThumbnailPhotoOnly) {
        id
        name
        visitCount
        placePhotos {
          pathname
        }
      }
    }
  `;

  return await client.request({ document, variables });
}
