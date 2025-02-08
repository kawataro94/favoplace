import { gql } from "urql";

export const UPLOAD_PLACE_THUMBNAIL = gql`
  mutation ($userId: String!, $placeId: String!, $file: Upload!) {
    uploadPlaceThumbnail(userId: $userId, placeId: $placeId, file: $file) {
      id
    }
  }
`;
