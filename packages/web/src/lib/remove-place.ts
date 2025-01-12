import { client } from "./graphql-client";

export async function removePlace({
  placeId,
  userId,
}: {
  placeId: string;
  userId: string;
}): Promise<true> {
  const variables = { placeId, userId };
  const document = `
    mutation ($placeId: String!, $userId: String!) {
      removePlace(id: $placeId, userId: $userId)
    }
  `;

  const res = await client.request<{ removePlace: true }>({
    document,
    variables,
  });

  return res.removePlace;
}
