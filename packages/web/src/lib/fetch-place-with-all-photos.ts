import { gql } from "urql";

export const FETCH_PLACE_WITH_ALL_PHOTOS = gql`
  query ($placeId: String!, $userId: String!) {
    place(id: $placeId, userId: $userId) {
      name
      placePhotos {
        id
        pathname
        isFavorite
        isThumbnail
      }
    }
  }
`;
