import { gql } from "urql";

export const UPLOAD_PLACE_PHOTO = gql`
  mutation ($userId: String!, $placeId: String!, $file: Upload!) {
    uploadPlacePhoto(userId: $userId, placeId: $placeId, file: $file) {
      id
    }
  }
`;
