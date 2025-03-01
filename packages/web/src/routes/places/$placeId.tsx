import { useMutation, useQuery } from "urql";
import { Anchor, Button, Space, Title } from "@mantine/core";
import { useRouter, createFileRoute, Link } from "@tanstack/react-router";
import { FETCH_PLACE } from "@web/lib/fetch-place";
import { removePlace } from "@web/lib/remove-place";
import { useUserContext } from "@web/lib/user-context";
import { UPDATE_PLACE_PHOTO_FAVORITE } from "@web/lib/update-place-photo-favorite";
import { PlaceDetails } from "@web/components/feature/place/place-details";
import { VisitHistoryTable } from "@web/components/feature/visit-history/visit-history-table";
import { PlacePhotoUploader } from "@web/components/feature/place-photo/place-photo-uploader";
import { PlacePhotoGallery } from "@web/components/feature/place-photo/place-photo-gallery";
import { useNotification } from "@web/components/ui/use-notification";

export const Route = createFileRoute("/places/$placeId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { placeId } = Route.useParams();
  const router = useRouter();
  const { notifySuccess, notifyFailure } = useNotification();
  const { userId } = useUserContext();
  const [_, updateFavoritePhoto] = useMutation(UPDATE_PLACE_PHOTO_FAVORITE);
  const [{ data }, reExecuteQuery] = useQuery<{
    place: {
      name: string;
      description: string;
      visitCount: number;
      visitHistories: { date: string }[];
      placePhotos: {
        id: string;
        pathname: string;
        isFavorite: boolean;
        isThumbnail: boolean;
      }[];
    };
  }>({
    query: FETCH_PLACE,
    variables: { placeId, userId, isFavoritePhotoOnly: true },
  });

  async function _removePlace() {
    try {
      await removePlace({ placeId, userId });

      notifySuccess();
      router.navigate({ to: "/places" });
    } catch (e) {
      notifyFailure();
    }
  }

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
      <Title order={1}>{data?.place.name}</Title>
      <Space h="md" />
      <PlaceDetails
        description={data?.place.description ?? ""}
        visitCount={data?.place.visitCount ?? 0}
      />
      <Space h="md" />
      <PlacePhotoUploader userId={userId} placeId={placeId} />
      <Space h="xs" />
      <Anchor
        component={Link}
        to="/places/$placeId/photos"
        params={{ placeId }}
      >
        All Photos
      </Anchor>

      <Space h="xl" />

      <Title order={2}>Favorite Photos</Title>
      <Space h="md" />
      <PlacePhotoGallery
        placePhotos={data?.place.placePhotos ?? []}
        handleFavoritePhotoUpdate={handleFavoritePhotoUpdate}
      />

      <Space h="xl" />

      <Title order={2}>History</Title>
      <Space h="md" />
      <VisitHistoryTable histories={data?.place.visitHistories ?? []} />

      <Space h="xl" />

      <Button color="red" onClick={_removePlace}>
        削除
      </Button>
    </>
  );
}
