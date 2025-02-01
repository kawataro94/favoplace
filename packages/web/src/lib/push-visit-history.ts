import { client } from "./graphql-request";

export async function pushVisitHistory({
  userId,
  placeId,
  date,
}: {
  userId: string;
  placeId: string;
  date: string;
}) {
  const variables = { userId, placeId, date };
  const document = `
      mutation ($userId: String!, $placeId: String!, $date: Date!) {
        addVisitHistory (
          newVisitHistoryData: {
            userId: $userId
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
