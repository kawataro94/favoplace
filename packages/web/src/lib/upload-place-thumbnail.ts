import { gql } from "urql";

export const UPLOAD_PLACE_THUMBNAIL = gql`
  mutation ($placeId: String!, $userId: String!, $file: Upload!) {
    uploadPlaceThumbnail(id: $placeId, userId: $userId, file: $file)
  }
`;
