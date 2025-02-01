import { client } from "./graphql-request";

export async function createPlace(
  {
    placeName,
    description,
  }: {
    placeName: string;
    description: string;
  },
  userId: string
): Promise<{
  id: string;
}> {
  const variables = { placeName, description, userId };
  const document = `
    mutation ($userId: String!, $placeName: String!, $description: String!) {
      addPlace(
        newPlaceData: {
          userId: $userId
          name: $placeName
          description: $description
        }
      ) {
        id
      }
    }
  `;

  const res = await client.request<{
    addPlace: {
      id: string;
    };
  }>({ document, variables });

  return res?.addPlace;
}
