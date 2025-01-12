import { useEffect, useState } from "react";
import { Button, Space, Title } from "@mantine/core";
import { useRouter, createFileRoute } from "@tanstack/react-router";
import { fetchPlace } from "@web/lib/fetch-place";
import { removePlace } from "@web/lib/remove-place";
import { useUserContext } from "@web/lib/user-context";
import { PlaceDetails } from "@web/components/feature/place/place-details";
import { VisitHistoryTable } from "@web/components/feature/visit-history/visit-history-table";
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
      <Space h="sm" />
      <PlaceDetails description={description} visitCount={visitCount} />

      <Space h="xl" />

      <Title order={2}>History</Title>
      <Space h="sm" />
      <VisitHistoryTable histories={visitHistories} />

      <Space h="xl" />

      <Button color="red" onClick={_removePlace}>
        削除
      </Button>
    </>
  );
}
