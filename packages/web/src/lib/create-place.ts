import { client } from "./graphql-client";

export async function createPlace({
  placeName,
  description,
}: {
  placeName: string;
  description: string;
}): Promise<{
  id: string;
}> {
  const variables = { placeName, description };
  const document = `
    mutation ($placeName: String!, $description: String!) {
      addPlace(
        newPlaceData: {
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
