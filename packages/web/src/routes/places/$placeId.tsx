import { useEffect, useState } from "react";
import { Anchor, Button, Space, Title } from "@mantine/core";
import { useRouter, createFileRoute, Link } from "@tanstack/react-router";
import { fetchPlace } from "@web/lib/fetch-place";
import { removePlace } from "@web/lib/remove-place";
import { useUserContext } from "@web/lib/user-context";
import { PlaceDetails } from "@web/components/feature/place/place-details";
import { VisitHistoryTable } from "@web/components/feature/visit-history/visit-history-table";
import { PlaceThumbnailUploader } from "@web/components/feature/place-thumbnail/place-thumbnail-uploader";
import { PlacePhotoUploader } from "@web/components/feature/place-photo/place-photo-uploader";
import { useNotification } from "@web/components/ui/use-notification";

export const Route = createFileRoute("/places/$placeId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { placeId } = Route.useParams();
  const router = useRouter();
  const { notifySuccess, notifyFailure } = useNotification();
  const { userId } = useUserContext();

  const [{ name, description, visitCount, visitHistories }, setPlace] =
    useState<{
      name: string;
      description: string;
      visitCount: number;
      visitHistories: { date: string }[];
    }>({
      name: "",
      description: "",
      visitCount: 0,
      visitHistories: [],
    });

  useEffect(() => {
    if (!userId) return;

    (async function () {
      const { place: _place } = await fetchPlace({ placeId, userId });
      setPlace(_place);
    })();
  }, [userId]);

  async function _removePlace() {
    try {
      await removePlace({ placeId, userId });

      notifySuccess();
      router.navigate({ to: "/places" });
    } catch (e) {
      notifyFailure();
    }
  }

  return (
    <>
      <Title order={1}>{name}</Title>
      <Space h="md" />
      <PlaceDetails description={description} visitCount={visitCount} />
      <Space h="md" />
      <PlaceThumbnailUploader userId={userId} placeId={placeId} />
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

      <Title order={2}>History</Title>
      <Space h="md" />
      <VisitHistoryTable histories={visitHistories} />
      <Space h="xl" />
      <Button color="red" onClick={_removePlace}>
        削除
      </Button>
    </>
  );
}
