import { client } from "./graphql-client";

export async function fetchPlace({ placeId }: { placeId: string }): Promise<{
  place: {
    name: string;
    description: string;
    visitCount: number;
    visitHistories: { date: string }[];
  };
}> {
  const variables = { placeId };
  const document = `
    query ($placeId: String!) {
      place(id: $placeId) {
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
