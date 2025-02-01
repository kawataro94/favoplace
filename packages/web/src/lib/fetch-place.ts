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
  };
}> {
  const variables = { placeId, userId };
  const document = `
    query ($placeId: String!, $userId: String!) {
      place(id: $placeId, userId: $userId) {
        name
        description
        visitCount
        visitHistories {
          date
        }
      }
    }
  `;

  return await client.request({ document, variables });
}
