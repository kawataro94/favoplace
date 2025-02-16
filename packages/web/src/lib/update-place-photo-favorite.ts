import { gql } from "urql";

export const UPDATE_PLACE_PHOTO_FAVORITE = gql`
  mutation ($placePhotoId: String!, $isFavorite: Boolean!) {
    updatePlacePhotoFavorite(
      placePhotoId: $placePhotoId
      isFavorite: $isFavorite
    ) {
      id
    }
  }
`;
