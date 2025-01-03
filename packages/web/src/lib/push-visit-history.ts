import { client } from "./graphql-client";

export async function pushVisitHistory({
  placeId,
  date,
}: {
  placeId: string;
  date: string;
}) {
  const variables = { placeId, date };
  const document = `
      mutation ($placeId: String!, $date: Date!) {
        addVisitHistory (
          newVisitHistoryData: {
            placeId: $placeId
            date: $date
          }
        ) {
          id
        }
      }
    `;

  await client.request({ document, variables });
}
