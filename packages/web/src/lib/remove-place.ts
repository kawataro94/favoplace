import { client } from "./graphql-client";

export async function removePlace({
  placeId,
}: {
  placeId: string;
}): Promise<true> {
  const variables = { placeId };
  const document = `
    mutation ($placeId: String!) {
      removePlace(id: $placeId)
    }
  `;

  const res = await client.request<{ removePlace: true }>({
    document,
    variables,
  });

  return res.removePlace;
}
