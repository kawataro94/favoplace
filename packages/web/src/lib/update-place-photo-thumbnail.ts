import { gql } from "urql";

export const UPDATE_PLACE_PHOTO_THUMBNAIL = gql`
  mutation ($placePhotoId: String!, $isThumbnail: Boolean!) {
    updatePlacePhotoThumbnail(
      placePhotoId: $placePhotoId
      isThumbnail: $isThumbnail
    ) {
      id
    }
  }
`;
