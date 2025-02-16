import { useEffect, useState } from "react";
import { useMutation, useQuery } from "urql";
import { Anchor, Space, Title } from "@mantine/core";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PlacePhotoGallery } from "@web/components/feature/place-photo/place-photo-gallery";
import { FETCH_PLACE_WITH_ALL_PHOTOS } from "@web/lib/fetch-place-with-all-photos";
import { useUserContext } from "@web/lib/user-context";
import { UPDATE_PLACE_PHOTO_FAVORITE } from "@web/lib/update-place-photo-favorite";
import { useNotification } from "@web/components/ui/use-notification";

export const Route = createFileRoute("/places_/$placeId/photos")({
  component: RouteComponent,
});

function RouteComponent() {
  const { placeId } = Route.useParams();
  const { userId } = useUserContext();
  const [_, updateFavoritePhoto] = useMutation(UPDATE_PLACE_PHOTO_FAVORITE);
  const { notifyFailure } = useNotification();
  const [{ data }, reExecuteQuery] = useQuery<{
    place: {
      name: string;
      placePhotos: {
        id: string;
        pathname: string;
        isFavorite: boolean;
      }[];
    };
  }>({
    query: FETCH_PLACE_WITH_ALL_PHOTOS,
    variables: { placeId, userId },
  });

  async function handleFavoritePhotoUpdate(
    placePhotoId: string,
    isFavorite: boolean
  ) {
    try {
      await updateFavoritePhoto({ placePhotoId, isFavorite });
    } catch (e) {
      notifyFailure();
    } finally {
      reExecuteQuery();
    }
  }

  return (
    <>
      <Title order={1}>{data?.place.name ?? ""}</Title>
      <Space h="md" />
      <PlacePhotoGallery
        placePhotos={data?.place.placePhotos ?? []}
        handleFavoritePhotoUpdate={handleFavoritePhotoUpdate}
      />
      <Space h="sm" />
      <Anchor component={Link} to="/places/$placeId" params={{ placeId }}>
        Back
      </Anchor>
    </>
  );
}
