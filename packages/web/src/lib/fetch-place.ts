import { gql } from "urql";

export const FETCH_PLACE = gql`
  query ($placeId: String!, $userId: String!, $isFavoritePhotoOnly: Boolean) {
    place(
      id: $placeId
      userId: $userId
      isFavoritePhotoOnly: $isFavoritePhotoOnly
    ) {
      name
      description
      visitCount
      visitHistories {
        date
      }
      placePhotos {
        id
        pathname
        isFavorite
        isThumbnail
      }
    }
  }
`;
