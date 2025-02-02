import { gql } from "urql";

export const UPLOAD_PLACE_PHOTO = gql`
  mutation ($placeId: String!, $userId: String!, $file: Upload!) {
    uploadPlacePhoto(id: $placeId, userId: $userId, file: $file)
  }
`;
